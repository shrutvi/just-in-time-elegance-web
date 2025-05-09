import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import WatchDetailModal, { WatchDetailType } from './WatchDetailModal';

const collections: WatchDetailType[] = [
  {
    id: 1,
    name: "Eternal Classic",
    desc: "Timeless elegance for the discerning collector",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
    price: "$12,500",
    features: [
      "Swiss-made automatic movement",
      "18K gold case with sapphire crystal",
      "50m water resistance",
      "Genuine leather strap",
      "5-year warranty"
    ],
    detailImage: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
    additionalImages: [
      "https://images.unsplash.com/photo-1587836374828-4dbafa2048db?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1533139143976-30918502365b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780"
    ]
  },
  {
    id: 2,
    name: "Midnight Azure",
    desc: "Bold sophistication meets precision engineering",
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
    price: "$9,800",
    features: [
      "In-house chronograph movement",
      "Blue sunburst dial with luminous indices",
      "Stainless steel case with ceramic bezel",
      "100m water resistance",
      "Integrated steel bracelet"
    ],
    detailImage: "https://images.unsplash.com/photo-1539874754764-5a96559165b8?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
    additionalImages: [
      "https://images.unsplash.com/photo-1528968622076-28aacc8bfaac?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1611353384046-a816a8aba534?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780"
    ]
  },
  {
    id: 3,
    name: "Heritage Gold",
    desc: "A celebration of tradition and luxury",
    image: "https://images.unsplash.com/photo-1548171915-96341acf4111?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
    price: "$18,200",
    features: [
      "Hand-wound mechanical movement",
      "Rose gold case with exhibition caseback",
      "Hand-crafted guilloche dial",
      "Genuine alligator leather strap",
      "Limited edition of 500 pieces"
    ],
    detailImage: "https://images.unsplash.com/photo-1533139143976-30918502365b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
    additionalImages: [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1509048191080-d2677e3a2f37?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1594576722512-582d08093d71?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780"
    ]
  },
  {
    id: 4,
    name: "Modern Pinnacle",
    desc: "Where innovation meets extraordinary design",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa2048db?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
    price: "$15,750",
    features: [
      "High-frequency automatic movement",
      "Titanium and carbon fiber construction",
      "Scratch-resistant sapphire crystal",
      "200m water resistance",
      "Interchangeable strap system"
    ],
    detailImage: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
    additionalImages: [
      "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780",
      "https://images.unsplash.com/photo-1523268755815-fe7c372a0138?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1780"
    ]
  },
];

const CollectionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedWatch, setSelectedWatch] = useState<WatchDetailType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (watch: WatchDetailType) => {
    setSelectedWatch(watch);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="collections" className="luxury-section bg-watch-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">Our Collections</h2>
        <p className="section-subtitle text-center">
          Discover timepieces that blend artistry with innovative engineering, creating watches that stand the test of time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {collections.map((collection) => (
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
                <button 
                  className="watch-button self-start bg-transparent"
                  onClick={() => handleOpenModal(collection)}
                >
                  Explore Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WatchDetailModal 
        watch={selectedWatch} 
        open={modalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default CollectionsSection;
