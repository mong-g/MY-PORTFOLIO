'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Set default theme to light
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  return (
    <div className="min-h-screen bg-bg-color text-text-color transition-colors duration-300">
      {/* IT-themed floating elements */}
      <div className="code-element">{`{ }`}</div>
      <div className="code-element">{`<>`}</div>
      <div className="code-element">var</div>
      <div className="code-element">function()</div>
      <div className="code-element">[]</div>
      <div className="code-element">if else</div>
      <div className="code-element">for</div>
      <div className="code-element">return</div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}