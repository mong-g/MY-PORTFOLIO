'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-bg-color/80 backdrop-blur-md shadow-sm border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold text-white tracking-wide">
          <Link href="/">ELIJAH<span className="text-primary">.</span></Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#home" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Home</Link>
          <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">About</Link>
          <Link href="#skills" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Skills</Link>
          <Link href="#education" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Education</Link>
          <Link href="#projects" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Projects</Link>
          <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card-bg absolute top-full left-0 w-full border-b border-white/5 shadow-xl">
          <div className="flex flex-col py-4 px-6 space-y-4">
            <Link href="#home" className="text-gray-300 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="#about" className="text-gray-300 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#skills" className="text-gray-300 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</Link>
            <Link href="#education" className="text-gray-300 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Education</Link>
            <Link href="#projects" className="text-gray-300 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link href="#contact" className="text-gray-300 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}