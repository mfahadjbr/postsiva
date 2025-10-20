'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const pricingPlans = [
    {
      name: "Free",
      description: "Everything you need to supercharge your productivity.",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      period: "/month",
      features: [
        "20 design generations/month",
        "Low-res downloads",
        "Basic style presets",
        "Limited customization options"
      ],
      popular: false,
      buttonText: "Subscribe",
      buttonStyle: "bg-gray-800 text-white hover:bg-gray-700"
    },
    {
      name: "Pro",
      description: "Unlock a new level of your personal productivity.",
      monthlyPrice: "$17",
      yearlyPrice: "$14",
      period: "/month",
      discount: "-20%",
      features: [
        "Everything in Free",
        "Enigma AI",
        "Unlimited design generations",
        "Custom Themes",
        "High-resolution exports",
        "Custom Extensions",
        "Developer Tools"
      ],
      popular: true,
      buttonText: "Subscribe",
      buttonStyle: "bg-gradient-orange text-white hover:shadow-lg hover:shadow-orange-500/25"
    },
    {
      name: "Team",
      description: "Everything you need to supercharge your productivity.",
      monthlyPrice: "$37",
      yearlyPrice: "$30",
      period: "/month",
      discount: "-20%",
      features: [
        "Everything in Free",
        "Unlimited Shared Commands",
        "Unlimited Shared Quicklinks",
        "Priority support"
      ],
      popular: false,
      buttonText: "Subscribe",
      buttonStyle: "bg-gray-800 text-white hover:bg-gray-700"
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
            <Link href="/contact" className="text-white hover:text-orange-400 transition-colors">Contact us</Link>
            <Link href="/about" className="text-white hover:text-orange-400 transition-colors">About us</Link>
            <Link href="/pricing" className="text-orange-400 border-b-2 border-orange-400 pb-1">Pricing</Link>
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
              <Link href="/contact" className="block text-white hover:text-orange-400 transition-colors">Contact us</Link>
              <Link href="/about" className="block text-white hover:text-orange-400 transition-colors">About us</Link>
              <Link href="/pricing" className="block text-orange-400">Pricing</Link>
              
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
              Choose the Plan That's Right for You
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Giving you access to essential features and over 1,000 creative tools. Upgrade to the Pro Plan to unlock powerful AI capabilities, cloud syncing, and a whole new level of creative freedom.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex bg-gray-800 rounded-lg p-1 border border-orange-500"
            >
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  billingPeriod === 'monthly'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  billingPeriod === 'yearly'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Yearly
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Pricing Cards */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-6 py-20"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-orange-500 shadow-lg shadow-orange-500/25' 
                      : 'border-gray-800 hover:border-orange-500/50'
                  }`}
                >
                  {/* Discount Badge */}
                  {plan.discount && (
                    <div className="absolute -top-3 right-6">
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {plan.discount}
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      plan.name === 'Free' ? 'text-orange-400' : 'text-white'
                    }`}>
                      {plan.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">
                        {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-300 text-sm">
                          <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${plan.buttonStyle}`}>
                    {plan.buttonText}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-6 py-20"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our pricing and plans.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "Can I change my plan anytime?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
                },
                {
                  question: "What happens if I cancel my subscription?",
                  answer: "You'll continue to have access to your plan features until the end of your current billing period. After that, you'll be moved to the Free plan."
                },
                {
                  question: "Do you offer refunds?",
                  answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund."
                },
                {
                  question: "Can I get a custom plan for my organization?",
                  answer: "Yes, we offer custom enterprise plans for large organizations. Contact our sales team to discuss your specific needs."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

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
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses already using Postiva to automate their social media presence and grow their audience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/auth/signup" 
                    className="inline-flex items-center bg-gradient-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 pulse-glow"
                  >
                    Start Free Trial
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Contact Sales
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
                <li><Link href="/pricing" className="text-white hover:text-orange-400 transition-colors">Pricing</Link></li>
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
