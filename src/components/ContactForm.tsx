'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white text-2xl font-bold mb-2">Message Sent!</h3>
        <p className="text-slate-400">We&apos;ll get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-colors";
  const selectClass = `${inputClass} appearance-none [&>option]:bg-slate-800 [&>option]:text-white`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input name="name" required placeholder="Full Name" className={inputClass} />
        <input name="email" type="email" required placeholder="Email" className={inputClass} />
      </div>
      <input name="company" placeholder="Company Name" className={inputClass} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <select name="projectType" className={selectClass} defaultValue="">
          <option value="" disabled>Project Type</option>
          <option>Web App</option>
          <option>Mobile App</option>
          <option>SaaS Platform</option>
          <option>API / Backend</option>
          <option>UI/UX Design</option>
          <option>Other</option>
        </select>
        <select name="budget" className={selectClass} defaultValue="">
          <option value="" disabled>Budget Range</option>
          <option>{'<'}$5K</option>
          <option>$5K - $15K</option>
          <option>$15K - $50K</option>
          <option>$50K+</option>
          <option>Not Sure</option>
        </select>
        <select name="timeline" className={selectClass} defaultValue="">
          <option value="" disabled>Timeline</option>
          <option>ASAP</option>
          <option>1-3 months</option>
          <option>3-6 months</option>
          <option>6+ months</option>
          <option>Just Exploring</option>
        </select>
      </div>
      <textarea name="message" rows={5} required placeholder="Tell us about your project..." className={inputClass} />
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25"
      >
        Send Message
      </button>
    </form>
  );
}
