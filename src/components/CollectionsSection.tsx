
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const collections = [
  {
    id: 1,
    name: "Eternal Classic",
    desc: "Timeless elegance for the discerning collector",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780"
  },
  {
    id: 2,
    name: "Midnight Azure",
    desc: "Bold sophistication meets precision engineering",
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780"
  },
  {
    id: 3,
    name: "Heritage Gold",
    desc: "A celebration of tradition and luxury",
    image: "https://images.unsplash.com/photo-1548171915-96341acf4111?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780"
  },
  {
    id: 4,
    name: "Modern Pinnacle",
    desc: "Where innovation meets extraordinary design",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa2048db?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780"
  },
];

const CollectionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="collections" className="luxury-section bg-watch-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Our Collections</h2>
        <p className="section-subtitle text-center">
          Discover timepieces that blend artistry with innovative engineering, creating watches that stand the test of time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {collections.map((collection, index) => (
            <div 
              key={collection.id}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-watch-dark/90 via-watch-dark/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-playfair text-2xl md:text-3xl mb-2">{collection.name}</h3>
                <p className="text-white/80 font-montserrat mb-4">{collection.desc}</p>
                <button className="watch-button self-start bg-transparent">
                  Explore Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
