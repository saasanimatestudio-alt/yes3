'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Target, Megaphone, TrendingUp, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const features = [
  {
    icon: Zap,
    title: 'High Impact Hooks',
    description: "We grab attention in the first 3 seconds. Our intros are designed to stop the scroll and keep viewers watching.",
  },
  {
    icon: Target,
    title: 'Platform Optimized',
    description: "Every cut is tailored for its platform—whether that is LinkedIn, Instagram, YouTube, or display networks. We optimize aspect ratios, captions, and CTAs.",
  },
  {
    icon: Megaphone,
    title: 'Conversion Focused',
    description: "These aren't just brand awareness pieces. Every promo video has a clear CTA and is engineered to drive clicks, signups, and demos.",
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Iteration',
    description: 'We analyze performance metrics to refine future cuts, ensuring your ad spend yields the highest possible ROI.',
  },
];

export default function PromoVideosPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Promo & Ad Videos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            High-converting video ads designed to stop the scroll, engage your audience, and drive measurable results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-900/50 transition-colors">
                <feature.icon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Promo Video Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-400">1</div>
              <h3 className="text-xl font-semibold mb-2">Strategy & Script</h3>
              <p className="text-gray-400">We define your audience, hook, and offer to ensure maximum relevance.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-400">2</div>
              <h3 className="text-xl font-semibold mb-2">Production & Edit</h3>
              <p className="text-gray-400">Fast-paced editing, motion graphics, and sound design optimized for retention.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-400">3</div>
              <h3 className="text-xl font-semibold mb-2">Launch & Optimize</h3>
              <p className="text-gray-400">We deliver multiple variations for A/B testing to find the winning creative.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-500/20 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Ads?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get promo videos that lower your CPA and increase your ROAS.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Start Your Campaign
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
