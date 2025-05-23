"use client";

import { BookerEmbed } from "@calcom/atoms";
import { useEffect } from "react";
import { X } from "lucide-react";

type CalBookerProps = {
  username: string;
  eventSlug: string;
  onClose?: () => void;
};

const CalBooker = ({ username, eventSlug, onClose }: CalBookerProps) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header with close button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Book Your Free Discovery Call
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        {/* Cal.com embed container */}
        <div className="overflow-auto max-h-[calc(90vh-80px)]">
          <BookerEmbed
            username={username}
            eventSlug={eventSlug}
            view="MONTH_VIEW"
            customClassNames={{
              bookerContainer: "border-0 rounded-0",
            }}
            onCreateBookingSuccess={() => {
              console.log("Booking created successfully");
              // Optionally close modal after successful booking
              if (onClose) {
                setTimeout(() => onClose(), 2000);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalBooker;