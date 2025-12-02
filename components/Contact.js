'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
    
    // Prepare the email data
    const { name, email, message } = formData;
    const subject = `Portfolio Contact: Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    // Create the mailto link
    const mailtoLink = `mailto:eaortega04@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the default email client
    window.location.href = mailtoLink;

    // Show success message
    setIsSubmitting(false);
    setSubmitMessage('Your email client has been opened. Please send the email from there.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Clear the success message after 5 seconds
    setTimeout(() => {
      setSubmitMessage('');
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-bg-color dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-text-color dark:text-white relative">
          Get In Touch
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </h2>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-text-color dark:text-white">Get in touch with me</h3>
            <p className="text-lg mb-8 text-light-text dark:text-gray-300">Reach out for collaborations, opportunities, or just to say hello!</p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card-bg dark:bg-gray-800 flex items-center justify-center text-primary dark:text-accent">
                  <i className="fas fa-envelope"></i>
                </div>
                <span className="text-text-color dark:text-white">eaortega04@proton.me</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card-bg dark:bg-gray-800 flex items-center justify-center text-primary dark:text-accent">
                  <i className="fas fa-phone"></i>
                </div>
                <span className="text-text-color dark:text-white">09618382725</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card-bg dark:bg-gray-800 flex items-center justify-center text-primary dark:text-accent">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span className="text-text-color dark:text-white">Mandaue City, Cebu, Philippines</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/Elijah-gwapo" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card-bg dark:bg-gray-800 flex items-center justify-center text-primary dark:text-accent hover:bg-primary hover:text-white transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.facebook.com/kyuu420" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card-bg dark:bg-gray-800 flex items-center justify-center text-primary dark:text-accent hover:bg-primary hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.linkedin.com/in/elijah-ortega-8a3347386/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-card-bg dark:bg-gray-800 flex items-center justify-center text-primary dark:text-accent hover:bg-primary hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-text-color dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-text-color dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-text-color dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary w-full bg-primary hover:bg-secondary text-white py-3 px-6 rounded-lg transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitMessage && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
        
        </div>
    </section>
  );
}