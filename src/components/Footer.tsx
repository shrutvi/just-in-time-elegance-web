
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-watch-dark text-white/70 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-white text-xl mb-4">Aquarius</h3>
            <p className="mb-4 text-sm">
              Creating exceptional timepieces since 1952. Our commitment to quality and innovation continues to set the standard in luxury watchmaking.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair text-white mb-4">Collections</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-watch-gold transition">Eternal Classic</a></li>
              <li><a href="#" className="hover:text-watch-gold transition">Midnight Azure</a></li>
              <li><a href="#" className="hover:text-watch-gold transition">Heritage Gold</a></li>
              <li><a href="#" className="hover:text-watch-gold transition">Modern Pinnacle</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-watch-gold transition">About Us</a></li>
              <li><a href="#craftsmanship" className="hover:text-watch-gold transition">Craftsmanship</a></li>
              <li><a href="#" className="hover:text-watch-gold transition">Sustainability</a></li>
              <li><a href="#" className="hover:text-watch-gold transition">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-white mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-watch-gold transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-watch-gold transition">Warranty</a></li>
              <li><a href="#" className="hover:text-watch-gold transition">Care & Service</a></li>
              <li><a href="#" className="hover:text-watch-gold transition">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Aquarius. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0 flex space-x-8">
            <a href="#" className="hover:text-watch-gold transition">Privacy Policy</a>
            <a href="#" className="hover:text-watch-gold transition">Terms of Service</a>
            <a href="#" className="hover:text-watch-gold transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
