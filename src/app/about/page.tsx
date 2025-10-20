'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "👩‍💼",
      bio: "Visionary leader with 10+ years in AI and social media technology."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "👨‍💻",
      bio: "Tech innovator specializing in machine learning and automation."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "👩‍🎨",
      bio: "Creative director passionate about user experience and visual design."
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "👨‍🔬",
      bio: "Full-stack developer with expertise in scalable web applications."
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Director",
      image: "👩‍💼",
      bio: "Growth expert focused on digital marketing and brand strategy."
    },
    {
      name: "Alex Martinez",
      role: "Customer Success",
      image: "👨‍💼",
      bio: "Dedicated to ensuring client satisfaction and platform adoption."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Postiva was founded with a vision to revolutionize social media automation."
    },
    {
      year: "2021",
      title: "First 1000 Users",
      description: "Reached our first milestone of 1000 active users across all platforms."
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Launched our advanced AI-powered content generation features."
    },
    {
      year: "2023",
      title: "Enterprise Launch",
      description: "Introduced enterprise solutions for large organizations."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded our services to support businesses worldwide."
    }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in social media automation."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships."
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product to service."
    },
    {
      icon: "💡",
      title: "Transparency",
      description: "We maintain open communication and transparency with our clients and team."
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Star-like particles */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, white, transparent),
            radial-gradient(2px 2px at 40px 70px, white, transparent),
            radial-gradient(1px 1px at 90px 40px, white, transparent),
            radial-gradient(1px 1px at 130px 80px, white, transparent),
            radial-gradient(2px 2px at 160px 30px, white, transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px'
        }}></div>
        
        {/* Glowing abstract lines */}
        <div className="absolute top-0 right-0 w-96 h-full opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-40 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
          <div className="absolute top-60 right-60 w-48 h-48 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="absolute top-0 left-0 w-96 h-full opacity-15">
          <div className="absolute top-32 left-20 w-48 h-48 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute top-52 left-40 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
          <div className="absolute top-72 left-60 w-40 h-40 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-orange rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-white text-2xl font-bold">Postiva</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-white hover:text-orange-400 transition-colors">Services</Link>
            <Link href="/pricing" className="text-white hover:text-orange-400 transition-colors">Pricing</Link>
            <Link href="/contact" className="text-white hover:text-orange-400 transition-colors">Contact us</Link>
            <Link href="/about" className="text-orange-400 border-b-2 border-orange-400 pb-1">About us</Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Link 
              href="/auth/signin" 
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Login
            </Link>
            <Link 
              href="/auth/signup" 
              className="bg-gradient-orange text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 pulse-glow"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-6 py-4 space-y-4">
              <Link href="/services" className="block text-white hover:text-orange-400 transition-colors">Services</Link>
              <Link href="/pricing" className="block text-white hover:text-orange-400 transition-colors">Pricing</Link>
              <Link href="/contact" className="block text-white hover:text-orange-400 transition-colors">Contact us</Link>
              <Link href="/about" className="block text-orange-400">About us</Link>
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <Link 
                  href="/auth/signin" 
                  className="block text-white hover:text-orange-400 transition-colors font-medium"
                >
                  Login
                </Link>
                <Link 
                  href="/auth/signup" 
                  className="block bg-gradient-orange text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-6 py-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              About <span className="text-orange-400">Postiva</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              We're a team of passionate innovators dedicated to revolutionizing how businesses manage their social media presence through AI-powered automation.
            </motion.p>
          </div>
        </motion.section>

        {/* Story Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Postiva was born from a simple observation: businesses were spending countless hours managing their social media presence, often struggling to maintain consistency and engagement across multiple platforms.
                  </p>
                  <p>
                    Our founders, having experienced these challenges firsthand, envisioned a solution that would leverage the power of artificial intelligence to automate and optimize social media management.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of businesses worldwide, helping them grow their online presence while saving time and resources through intelligent automation.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
              >
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-orange-400 mb-2">50K+</div>
                    <div className="text-gray-300 text-sm">Active Users</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-orange-400 mb-2">2M+</div>
                    <div className="text-gray-300 text-sm">Posts Automated</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-orange-400 mb-2">99.9%</div>
                    <div className="text-gray-300 text-sm">Uptime</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                    <div className="text-gray-300 text-sm">Support</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do at Postiva.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 text-center"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The talented individuals behind Postiva's success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 text-center"
                >
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-orange-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Key milestones in Postiva's growth and development.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-500"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-start space-x-8"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-black"></div>
                    
                    <div className="ml-16 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300">
                      <div className="text-orange-400 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-6 py-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Join Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Be part of the future of social media automation. Start your journey with Postiva today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/auth/signup" 
                    className="inline-flex items-center bg-gradient-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 pulse-glow"
                  >
                    Get Started
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About Us */}
            <div>
              <h3 className="text-orange-400 font-bold text-lg mb-4">About Us</h3>
              <p className="text-white text-sm leading-relaxed">
                We're a team of designers, engineers, and innovators building AI tools that empower anyone 
                to turn imagination into stunning visuals—faster, smarter, and effortlessly.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-orange-400 font-bold text-lg mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white hover:text-orange-400 transition-colors">About</Link></li>
                <li><Link href="/services" className="text-white hover:text-orange-400 transition-colors">Services</Link></li>
                <li><Link href="#team" className="text-white hover:text-orange-400 transition-colors">Team</Link></li>
                <li><Link href="#prices" className="text-white hover:text-orange-400 transition-colors">Prices</Link></li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-orange-400 font-bold text-lg mb-4">Help</h3>
              <ul className="space-y-2">
                <li><Link href="#support" className="text-white hover:text-orange-400 transition-colors">Customer Support</Link></li>
                <li><Link href="#terms" className="text-white hover:text-orange-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link href="#privacy" className="text-white hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/contact" className="text-white hover:text-orange-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-orange-400 font-bold text-lg mb-4">Connect With Us</h3>
              <div className="space-y-2 text-white text-sm">
                <p>27 Division St, New York, NY 10002, USA</p>
                <p>+123 324 2653</p>
                <p>username@mail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">© 2024 All Right Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* Social Media Icons */}
              {[
                { name: 'facebook', icon: '📘' },
                { name: 'instagram', icon: '📷' },
                { name: 'twitter', icon: '🐦' },
                { name: 'google', icon: '🔍' }
              ].map((social) => (
                <div key={social.name} className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 cursor-pointer">
                  <span className="text-sm">{social.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
