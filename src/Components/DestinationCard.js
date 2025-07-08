import React from "react";

export default function DestinationCard({ name, rating, discount }) {
  return (
    <div className="relative min-w-[160px] bg-white shadow-md rounded-lg overflow-hidden">
      {discount && (
        <div className="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1 z-10">
          FLAT 30% OFF
        </div>
      )}
      <div className="h-24 bg-gray-300"></div>
      <div className="p-2">
        <h3 className="font-bold text-sm">{name}</h3>
        <p className="text-xs text-gray-600">⭐ {rating}</p>
      </div>
    </div>
  );
}
