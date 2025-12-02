'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'py-5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">
          <Link href="/">Elijah</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-text-color dark:text-white hover:text-primary transition-colors">Home</Link>
              <Link href="#about" className="text-text-color dark:text-white hover:text-primary transition-colors">About</Link>
              <Link href="#skills" className="text-text-color dark:text-white hover:text-primary transition-colors">Skills</Link>
              <Link href="#education" className="text-text-color dark:text-white hover:text-primary transition-colors">Education</Link>
              <Link href="#projects" className="text-text-color dark:text-white hover:text-primary transition-colors">Projects</Link>
              <Link href="#contact" className="text-text-color dark:text-white hover:text-primary transition-colors">Contact</Link>
            </div>

        <div className="hidden md:flex items-center space-x-4">
          {/* Dark mode toggle button removed */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-text-color dark:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <span className={`block w-6 h-0.5 bg-text-color dark:bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-text-color dark:bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-text-color dark:bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <Link href="#home" className="py-2 text-text-color dark:text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="#about" className="py-2 text-text-color dark:text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#skills" className="py-2 text-text-color dark:text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</Link>
            <Link href="#education" className="py-2 text-text-color dark:text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Education</Link>
            <Link href="#projects" className="py-2 text-text-color dark:text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link href="#contact" className="py-2 text-text-color dark:text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}