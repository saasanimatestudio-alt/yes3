'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
const CALENDLY_URL = 'https://calendly.com/saasanimatestudio/30min';

interface CalendlyEmbedProps {
  height?: number;
}

export function CalendlyEmbed({ height = 700 }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    function initWidget() {
      if (cancelled || !containerRef.current || !window.Calendly) return;
      // Clear any previous instance (e.g. on fast route re-entry) before init.
      containerRef.current.innerHTML = '';
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: containerRef.current,
      });
    }

    if (window.Calendly) {
      initWidget();
      return;
    }

    const existingScript = document.querySelector(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`
    ) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener('load', initWidget);
      return () => existingScript.removeEventListener('load', initWidget);
    }

    const script = document.createElement('script');
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.addEventListener('load', initWidget);
    document.body.appendChild(script);

    return () => {
      cancelled = true;
      script.removeEventListener('load', initWidget);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ minWidth: '320px', height: `${height}px` }}
    />
  );
}
