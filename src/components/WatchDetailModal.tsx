
import React, { useState, useEffect } from 'react';
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
import { ChevronLeft, ChevronRight, Image } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

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
  
  // Reset the current image index when a new watch is selected
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [watch?.id]);
  
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
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl md:text-3xl">{watch.name}</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">{watch.desc}</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
          <div className="space-y-4">
            <div className="relative">
              <AspectRatio ratio={1/1} className="overflow-hidden rounded-md bg-muted">
                <img 
                  src={allImages[currentImageIndex]} 
                  alt={`${watch.name} - image ${currentImageIndex + 1}`} 
                  className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105" 
                />
              </AspectRatio>
              
              {allImages.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnail Gallery */}
            {allImages.length > 1 && (
              <div className="flex overflow-x-auto gap-2 pb-2 hide-scrollbar">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                      currentImageIndex === index 
                        ? "border-watch-gold" 
                        : "border-transparent hover:border-watch-gold/50"
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${watch.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover object-center" 
                    />
                  </button>
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
        
        {/* Image Gallery Preview */}
        <div className="mt-4 border-t pt-4">
          <h4 className="font-playfair text-lg mb-3">Gallery</h4>
          <Carousel className="w-full">
            <CarouselContent>
              {allImages.map((img, index) => (
                <CarouselItem key={index} className="basis-1/3 md:basis-1/4">
                  <div className="p-1">
                    <button 
                      onClick={() => setCurrentImageIndex(index)}
                      className="w-full h-24 rounded-md overflow-hidden"
                    >
                      <img 
                        src={img} 
                        alt={`${watch.name} gallery ${index + 1}`} 
                        className="w-full h-full object-cover transition-all hover:scale-110"
                      />
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-black/50 text-white hover:bg-black/70 border-none" />
            <CarouselNext className="right-0 bg-black/50 text-white hover:bg-black/70 border-none" />
          </Carousel>
        </div>
        
        <DialogFooter className="sm:justify-start mt-4">
          <Button variant="outline" onClick={onClose}>
            Back to Collections
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WatchDetailModal;
