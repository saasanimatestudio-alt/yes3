"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play, Target, Users, TrendingUp } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const services = [
  {
    title: "Brand Story Film",
    description: "A cinematic narrative that captures your brand's origin, mission, and vision. Perfect for homepage headers and investor pitches.",
  },
  {
    title: "Culture & Values Film",
    description: "Showcase what it is like to work at your company. Perfect for recruitment, investor relations, and brand building.",
  },
  {
    title: "Brand Manifesto",
    description: "A bold statement of your company's beliefs and mission. Inspire your audience and attract like-minded customers.",
  },
  {
    title: "Event & Conference Films",
    description: "High-energy recaps of your keynotes, product launches, or company gatherings that amplify your reach.",
  },
];

const benefits = [
  {
    icon: Users,
    title: "Emotional Connection",
    description: "Move beyond features. We craft stories that resonate emotionally, building trust and loyalty with your audience.",
  },
  {
    icon: Target,
    title: "Brand Authority",
    description: "Position yourself as a leader in your space with high-end production value that commands attention and respect.",
  },
  {
    icon: TrendingUp,
    title: "Versatile Assets",
    description: "Get one master asset that can be cut into dozens of smaller clips for social media, ads, and internal comms.",
  },
];

export default function BrandVideosPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Brand Videos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Cinematic storytelling that defines who you are, what you stand for, and why the world should care.
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

        {/* Services Grid */}
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Brand Video Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500/50 transition duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                  <Play className="text-blue-400" size={24} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-zinc-900 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Invest in Brand Video?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-purple-400" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's create a brand video that captivates your audience and elevates your business.
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
