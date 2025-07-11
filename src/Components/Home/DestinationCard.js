import React from "react";

export default function DestinationCard({ name, rating, discount, imageUrl, subtitle }) {
  return (
    // Add enough padding to include overflowed rating badge
    <div className="relative w-[150px] flex-shrink-0 h-[100px] pb-4"> 
      {/* Inner Card */}
      <div className="relative h-[90px] rounded-3xl overflow-hidden  text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Discount */}
        {discount && (
          <div className="absolute top-1 left-0 bg-black text-white font-bold text-[6px] px-2 py-[0px] rounded-r-full z-10">
            FLAT 30% OFF
          </div>
        )}

        {/* Text Content */}
        <div className="absolute bottom-2 right-2 text-right">
          {subtitle && <p className="text-xs leading-none">{subtitle}</p>}
          <h3 className="font-extrabold text-lg leading-none">{name}</h3>
        </div>
      </div>

      {/* Rating Badge positioned absolutely */}
      <div className="absolute bottom-2 left-0 bg-[#0A2647] border-[3px] border-white text-white px-1 py-[1px] rounded-full z-20 flex items-center gap-1">
        <span className="text-[9px] font-semibold">{rating}</span>
        <span className="text-[8px]">★</span>
      </div>
    </div>
  );
}
