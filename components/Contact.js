'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/eaortega04@proton.me", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact: Message from ${formData.name}`
        })
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error("Form submission failed:", result);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg-color">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4">
          <span className="w-12 h-0.5 bg-secondary"></span>
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Let's Connect</h3>
            <p className="text-lg mb-8 text-slate-400">Reach out for collaborations, opportunities, or just to say hello!</p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded bg-card-bg flex items-center justify-center text-primary group-hover:text-white transition-colors">
                  <i className="fas fa-envelope"></i>
                </div>
                <span className="text-slate-300">eaortega04@proton.me</span>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded bg-card-bg flex items-center justify-center text-primary group-hover:text-white transition-colors">
                  <i className="fas fa-phone"></i>
                </div>
                <span className="text-slate-300">09618382725</span>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded bg-card-bg flex items-center justify-center text-primary group-hover:text-white transition-colors">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span className="text-slate-300">Mandaue City, Cebu, Philippines</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/Elijah-gwapo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-card-bg flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.facebook.com/kyuu420" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-card-bg flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/in/elijah-ortega-8a3347386/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-card-bg flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div className="bg-card-bg/50 p-8 rounded-2xl border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-bg-color border border-slate-700 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-bg-color border border-slate-700 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-bg-color border border-slate-700 text-white focus:outline-none focus:border-primary transition-colors"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-center text-sm">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-center text-sm">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}