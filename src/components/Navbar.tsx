
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full transition-all duration-300 z-50 py-4 px-6 md:px-12",
        isScrolled ? "bg-watch-dark/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold text-white">JUST IN TIME</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#collections" className="text-white hover:text-watch-gold transition font-montserrat tracking-wide text-sm">
            COLLECTIONS
          </a>
          <a href="#craftsmanship" className="text-white hover:text-watch-gold transition font-montserrat tracking-wide text-sm">
            CRAFTSMANSHIP
          </a>
          <a href="#about" className="text-white hover:text-watch-gold transition font-montserrat tracking-wide text-sm">
            ABOUT US
          </a>
          <a href="#contact" className="text-white hover:text-watch-gold transition font-montserrat tracking-wide text-sm">
            CONTACT
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-watch-dark/95 backdrop-blur-md py-4">
          <div className="flex flex-col space-y-4 px-6">
            <a 
              href="#collections" 
              className="text-white hover:text-watch-gold transition font-montserrat tracking-wide text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              COLLECTIONS
            </a>
            <a 
              href="#craftsmanship" 
              className="text-white hover:text-watch-gold transition font-montserrat tracking-wide text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              CRAFTSMANSHIP
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-watch-gold transition font-montserrat tracking-wide text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT US
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-watch-gold transition font-montserrat tracking-wide text-sm py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
