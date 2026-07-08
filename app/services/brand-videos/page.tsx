'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Monitor, Smartphone, Globe, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'Company Overview',
    description: "A comprehensive video that tells your company's story, mission, and vision. Perfect for homepage introductions and investor pitches.",
    icon: Globe,
  },
  {
    title: 'Culture & Values Film',
    description: "Showcase what it is like to work at your company. Perfect for recruitment, investor relations, and brand building.",
    icon: Users,
  },
  {
    title: 'Brand Manifesto',
    description: "A bold statement of your company's beliefs and mission. Inspire your audience and attract like-minded customers.",
    icon: Play,
  },
  {
    title: 'Event & Conference Films',
    description: 'Capture the energy and key moments of your corporate events, product launches, or annual conferences.',
    icon: Monitor,
  },
];

export default function BrandVideosPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Brand Videos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Craft compelling narratives that define your identity, connect with your audience, and elevate your brand presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-900/50 transition-colors">
                <service.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Tell Your Brand Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create a brand video that captures the essence of your company and resonates with your audience.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
