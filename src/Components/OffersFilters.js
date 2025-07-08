import React from "react";

const filters = ["Great Offers", "Rating 4.2+", "Solo Travel", "Adventure", "Art & Culture"];

export default function OffersFilters() {
  return (
    <div className="flex overflow-x-auto px-4 mt-2 gap-2 text-sm whitespace-nowrap">
      {filters.map((filter) => (
        <span key={filter} className="bg-gray-200 rounded-full px-3 py-1 text-black">
          {filter}
        </span>
      ))}
    </div>
  );
}
