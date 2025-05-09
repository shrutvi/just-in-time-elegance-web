
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export type WatchDetailType = {
  id: number;
  name: string;
  desc: string;
  image: string;
  price?: string;
  features?: string[];
  detailImage?: string;
}

interface WatchDetailModalProps {
  watch: WatchDetailType | null;
  open: boolean;
  onClose: () => void;
}

const WatchDetailModal = ({ watch, open, onClose }: WatchDetailModalProps) => {
  if (!watch) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl md:text-3xl">{watch.name}</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">{watch.desc}</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
          <div className="aspect-square overflow-hidden rounded">
            <img 
              src={watch.detailImage || watch.image} 
              alt={watch.name} 
              className="w-full h-full object-cover object-center" 
            />
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
