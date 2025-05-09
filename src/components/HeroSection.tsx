
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-watch-dark">
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="bg-[url('https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1974')] 
            bg-cover bg-center h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-watch-dark via-watch-dark/60 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <div className={cn(
          "transition-all duration-1000 translate-y-10 opacity-0",
          loaded && "translate-y-0 opacity-100"
        )}>
          <h1 className="text-white font-playfair text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
            Precision. Elegance. <br className="hidden sm:block" />
            <span className="text-watch-gold">Always Just In Time.</span>
          </h1>
          
          <p className="text-white/80 font-montserrat text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Craftsmanship that transcends generations, timepieces that define excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#collections" className="watch-button-filled">
              Discover Collections
            </a>
            <a href="#craftsmanship" className="watch-button">
              Our Craftsmanship
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
