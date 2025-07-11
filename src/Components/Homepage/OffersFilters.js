import React from "react";

const filters = ["Great Offers", "Rating 4.2+", "Solo Travel", "Adventure", "Art & Culture"];

export default function OffersFilters() {
  return (
    <div className="flex overflow-x-auto px-2 gap-1 text-sm whitespace-nowrap">
      {filters.map((filter) => (
        <span
          key={filter}
          className="flex items-center justify-center cursor-pointer border-2 border-grey-200 rounded px-3 py-0 text-black font-semibold hover:bg-gray-200 transition-colors duration-200"
        >
          {filter}
        </span>

      ))}
    </div>

  );
}

