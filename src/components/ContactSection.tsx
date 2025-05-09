
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing",
        description: "You've been added to our newsletter",
      });
      setEmail('');
    }
  };
  
  return (
    <section id="contact" className="luxury-section bg-watch-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h2 className="section-title text-white mb-6">Visit Our Boutiques</h2>
            <p className="text-white/80 mb-8">
              Experience the exceptional craftsmanship of Just In Time watches in person at our exclusive boutiques worldwide.
            </p>
            
            <div className="space-y-8 mb-8">
              <div>
                <h3 className="font-playfair text-watch-gold text-xl mb-2">Geneva</h3>
                <p className="text-white/70">15 Rue du Rhône, 1204 Geneva, Switzerland</p>
                <p className="text-white/70">+41 22 123 4567</p>
              </div>
              
              <div>
                <h3 className="font-playfair text-watch-gold text-xl mb-2">New York</h3>
                <p className="text-white/70">745 Fifth Avenue, New York, NY 10151, USA</p>
                <p className="text-white/70">+1 212 123 4567</p>
              </div>
              
              <div>
                <h3 className="font-playfair text-watch-gold text-xl mb-2">Tokyo</h3>
                <p className="text-white/70">4-1 Ginza, Chuo City, Tokyo 104-0061, Japan</p>
                <p className="text-white/70">+81 3 1234 5678</p>
              </div>
            </div>
            
            <a href="#" className="watch-button">Find A Boutique</a>
          </div>
          
          <div>
            <h2 className="section-title text-white mb-6">Stay Updated</h2>
            <p className="text-white/80 mb-8">
              Subscribe to our newsletter to receive updates on new collections, exclusive events, and the art of fine watchmaking.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="text-white/80 block mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-white/10 border border-white/20 text-white p-3 outline-none focus:border-watch-gold transition"
                  required
                />
              </div>
              
              <div className="flex items-start space-x-3 mb-6">
                <input 
                  type="checkbox" 
                  id="consent" 
                  className="mt-1 bg-transparent border border-white/30"
                  required
                />
                <label htmlFor="consent" className="text-white/70 text-sm">
                  I agree to receive newsletters and communications from Just In Time. Read our <a href="#" className="text-watch-gold hover:underline">Privacy Policy</a>.
                </label>
              </div>
              
              <button type="submit" className="watch-button-filled">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
