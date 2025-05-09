
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="luxury-section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="section-title mb-6">Our Heritage</h2>
            <p className="mb-6 text-lg font-light">
              Founded in 1952 by master horologist Victor Lemond, Just In Time has evolved from a small workshop in Geneva to one of the world's most respected watchmakers.
            </p>
            <p className="mb-6">
              We combine time-honored techniques with innovative approaches, staying true to our founding principles of excellence, precision, and uncompromising quality.
            </p>
            <p className="mb-8">
              Each Just In Time watch represents our commitment to creating not merely instruments of timekeeping, but heirlooms that tell stories across generations.
            </p>
            <a href="#" className="watch-button-filled">Our Full Story</a>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1606753930828-fdcc943a273e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1964"
                  alt="Historical workshop" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780"
                  alt="Watch mechanism" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="md:mt-12 space-y-6">
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780"
                  alt="Modern workshop" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1888"
                  alt="Watch detail" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
