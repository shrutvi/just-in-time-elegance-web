
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type WatchDetailType = {
  id: number;
  name: string;
  desc: string;
  image: string;
  price?: string;
  features?: string[];
  detailImage?: string;
  additionalImages?: string[]; // Array of additional watch images
}

interface WatchDetailModalProps {
  watch: WatchDetailType | null;
  open: boolean;
  onClose: () => void;
}

const WatchDetailModal = ({ watch, open, onClose }: WatchDetailModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!watch) return null;
  
  // Combine all available images into one array
  const allImages = [
    watch.detailImage || watch.image,
    ...(watch.additionalImages || [])
  ];
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl md:text-3xl">{watch.name}</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">{watch.desc}</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
          <div className="relative">
            <AspectRatio ratio={1/1} className="overflow-hidden rounded">
              <img 
                src={allImages[currentImageIndex]} 
                alt={`${watch.name} - image ${currentImageIndex + 1}`} 
                className="w-full h-full object-cover object-center transition-all duration-300" 
              />
            </AspectRatio>
            
            {allImages.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
            
            {allImages.length > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentImageIndex === index ? "bg-watch-gold" : "bg-white/50"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
          
          <div className="flex flex-col justify-between">
            {watch.price && <p className="text-xl font-playfair text-watch-gold mb-4">{watch.price}</p>}
            
            <div>
              <h4 className="text-lg font-playfair mb-2">Features</h4>
              <ul className="space-y-2">
                {watch.features ? (
                  watch.features.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-watch-gold mr-2">•</span>
                      {feature}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-muted-foreground">Luxury craftsmanship with exceptional attention to detail</li>
                )}
              </ul>
            </div>
            
            <div className="mt-6">
              <a href="#" className="watch-button-filled block text-center">
                Inquire About This Watch
              </a>
            </div>
          </div>
        </div>
        
        <DialogFooter className="sm:justify-start">
          <Button variant="outline" onClick={onClose}>
            Back to Collections
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WatchDetailModal;
