import { Resend } from 'resend';
import { NextResponse } from 'next/server';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const company = typeof body.company === 'string' ? body.company.trim() : '';
  const website = typeof body.website === 'string' ? body.website.trim() : '';
  const service = typeof body.service === 'string' ? body.service.trim() : '';
  const budget = typeof body.budget === 'string' ? body.budget.trim() : '';
  const timeline = typeof body.timeline === 'string' ? body.timeline.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || !email || !service || !budget || !message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  if (name.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: 'Input too long' }, { status: 400 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company);
  const safeService = escapeHtml(service);
  const safeBudget = escapeHtml(budget);
  const safeTimeline = escapeHtml(timeline || 'Not specified');
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
  // Validate website is a real URL before including it
  let safeWebsite = '';
  try {
    if (website) {
      const url = new URL(website.startsWith('http') ? website : `https://${website}`);
      if (url.protocol === 'https:' || url.protocol === 'http:') {
        safeWebsite = escapeHtml(url.href);
      }
    }
  } catch {
    // invalid URL, skip it
  }

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'SaaS Animate <onboarding@resend.dev>',
      to: ['hello@saasanimate.com'],
      replyTo: `${safeName} <${safeEmail}>`,
      subject: `New enquiry from ${safeName} — ${safeService}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;width:100%">

        <!-- Header -->
        <tr>
          <td style="background:#0a0a0a;padding:28px 32px">
            <p style="margin:0;font-size:18px;font-weight:600;color:#ffffff;letter-spacing:-0.01em">
              SaaS<span style="color:#6a6a6a">·</span>Animate
            </p>
            <p style="margin:8px 0 0;font-size:13px;color:#b8ff3e;letter-spacing:0.1em;text-transform:uppercase">New Project Enquiry</p>
          </td>
        </tr>

        <!-- Contact details -->
        <tr>
          <td style="padding:28px 32px 0">
            <p style="margin:0 0 20px;font-size:22px;font-weight:600;color:#0a0a0a;letter-spacing:-0.01em">
              ${safeName} wants to work with you
            </p>

            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;margin-bottom:20px">
              <tr style="background:#fafafa">
                <td style="padding:12px 16px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#888;font-weight:600;width:120px">Name</td>
                <td style="padding:12px 16px;font-size:14px;color:#0a0a0a">${safeName}</td>
              </tr>
              <tr style="border-top:1px solid #e5e5e5">
                <td style="padding:12px 16px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#888;font-weight:600">Email</td>
                <td style="padding:12px 16px;font-size:14px"><a href="mailto:${safeEmail}" style="color:#0a0a0a;text-decoration:none;font-weight:500">${safeEmail}</a></td>
              </tr>
              ${safeCompany ? `<tr style="border-top:1px solid #e5e5e5"><td style="padding:12px 16px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#888;font-weight:600">Company</td><td style="padding:12px 16px;font-size:14px;color:#0a0a0a">${safeCompany}</td></tr>` : ''}
              ${safeWebsite ? `<tr style="border-top:1px solid #e5e5e5"><td style="padding:12px 16px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#888;font-weight:600">Website</td><td style="padding:12px 16px;font-size:14px"><a href="${safeWebsite}" style="color:#0a0a0a" target="_blank">${safeWebsite}</a></td></tr>` : ''}
            </table>
          </td>
        </tr>

        <!-- Project details -->
        <tr>
          <td style="padding:0 32px">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;margin-bottom:20px">
              <tr style="background:#fafafa">
                <td style="padding:12px 16px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#888;font-weight:600;width:120px">Service</td>
                <td style="padding:12px 16px;font-size:14px;color:#0a0a0a">${safeService}</td>
              </tr>
              <tr style="border-top:1px solid #e5e5e5">
                <td style="padding:12px 16px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#888;font-weight:600">Budget</td>
                <td style="padding:12px 16px">
                  <span style="display:inline-block;background:#0a0a0a;color:#b8ff3e;font-size:12px;font-weight:600;padding:4px 10px;border-radius:999px">${safeBudget}</span>
                </td>
              </tr>
              <tr style="border-top:1px solid #e5e5e5">
                <td style="padding:12px 16px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#888;font-weight:600">Timeline</td>
                <td style="padding:12px 16px;font-size:14px;color:#0a0a0a">${safeTimeline}</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:0 32px">
            <div style="border:1px solid #e5e5e5;border-radius:8px;padding:20px;margin-bottom:28px">
              <p style="margin:0 0 10px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#888;font-weight:600">Message</p>
              <p style="margin:0;font-size:14px;line-height:1.7;color:#333">${safeMessage}</p>
            </div>
          </td>
        </tr>

        <!-- Reply CTA -->
        <tr>
          <td style="padding:0 32px 32px;text-align:center">
            <a href="mailto:${safeEmail}" style="display:inline-block;background:#b8ff3e;color:#0a0a0a;font-size:14px;font-weight:600;padding:14px 28px;border-radius:999px;text-decoration:none">
              Reply to ${safeName} →
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9f9f9;border-top:1px solid #e5e5e5;padding:16px 32px;text-align:center">
            <p style="margin:0;font-size:12px;color:#999">Sent from saasanimate.com contact form</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
