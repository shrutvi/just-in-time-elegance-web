
import React from 'react';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 1,
    title: "Premium Materials",
    description: "Only the finest materials meet our standards, from 18K gold to the highest-grade stainless steel and sapphire crystal."
  },
  {
    id: 2,
    title: "Swiss Engineering",
    description: "Precision movements crafted with unparalleled expertise, ensuring accuracy that stands the test of time."
  },
  {
    id: 3,
    title: "Hand Assembled",
    description: "Each timepiece is meticulously assembled by master watchmakers with decades of experience."
  },
  {
    id: 4,
    title: "Rigorous Testing",
    description: "Every watch undergoes over 500 hours of testing before it earns the right to bear our name."
  }
];

const CraftsmanshipSection = () => {
  return (
    <section id="craftsmanship" className="luxury-section bg-watch-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title text-white mb-6">The Art of Craftsmanship</h2>
            <p className="text-white/80 mb-8">
              For over seven decades, Just In Time has been synonymous with exceptional quality and innovative design.
              Our timepieces are crafted with unwavering precision and an obsessive attention to detail.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {features.map(feature => (
                <div key={feature.id} className="animate-fade-in">
                  <h3 className="font-playfair text-lg text-watch-gold mb-2">{feature.title}</h3>
                  <p className="text-white/70 font-montserrat text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <a href="#" className="watch-button">Discover Our Process</a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[3/4] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1556597130-ef7aa0f8638d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1887" 
                alt="Watch Craftsmanship" 
                className="w-full h-full object-cover object-center rounded-sm"
              />
            </div>
            <div className="absolute top-8 -right-8 bottom-8 left-8 border-2 border-watch-gold -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
