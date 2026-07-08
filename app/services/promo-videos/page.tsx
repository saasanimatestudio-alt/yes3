"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play, Target, Megaphone, TrendingUp } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const features = [
  {
    icon: Target,
    title: "Platform Optimized",
    description: "Every cut is tailored for its platform—whether that is LinkedIn, Instagram, YouTube, or display networks. We optimize aspect ratios, captions, and CTAs.",
  },
  {
    icon: Megaphone,
    title: "Conversion Focused",
    description: "These aren't just brand awareness pieces. Every promo video has a clear CTA and is engineered to drive clicks, signups, and demos.",
  },
  {
    icon: TrendingUp,
    title: "Data Driven",
    description: "We analyze performance metrics to refine hooks, pacing, and messaging, ensuring your ROAS improves over time.",
  },
];

const useCases = [
  "Product Launches",
  "Feature Announcements",
  "Flash Sales & Promotions",
  "Webinar Registrations",
  "App Downloads",
  "Lead Generation Campaigns",
];

export default function PromoVideosPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Promo Videos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            High-impact, conversion-focused videos designed to stop the scroll and drive immediate action.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition flex items-center gap-2">
              Start Your Project <ArrowRight size={20} />
            </Link>
            <Link href="/work" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">
              View Our Work
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Built for Performance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-green-500/50 transition duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-zinc-900 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Perfect For</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {useCases.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-black/50 p-4 rounded-xl border border-zinc-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Video That Converts?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            From concept to final cut, we create promo videos that deliver results.
          </p>
          <Link href="/contact" className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-200 transition inline-flex items-center gap-2">
            Get a Quote <ArrowRight size={24} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
