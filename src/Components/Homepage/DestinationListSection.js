import React from "react";
import DestinationList from "./DestinationList";

export default function DestinationListSection({ title, destinations }) {
  return (
    <div className="px-2 my-4 bg-white">
      {/* Section Title */}
      <h2 className="text-base text-grey-200 mb-2">{title}</h2>

      {/* Horizontal Scrollable Cards */}
      <div className="flex overflow-x-auto gap-2">
        {destinations.map((dest, index) => (
          <DestinationList
            key={index}
            name={dest.name}
            discount={dest.discount}
            rating={dest.rating}
            imageUrl={dest.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
