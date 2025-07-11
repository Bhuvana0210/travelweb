import React from "react";
import DestinationCard from "./DestinationCard";

export default function DestinationSection({ title, destinations }) {
  return (
    <div className="px-2 my-4 bg-white">
      <h2 className="text-base text-grey-200 mb-2">{title}</h2>
      <div className="flex overflow-x-auto gap-2 ">

        {destinations.map((dest, index) => (
          <DestinationCard
            key={index}
            name={dest.name}
            rating={dest.rating}
            discount={dest.discount}
            imageUrl={dest.imageUrl}
            subtitle={dest.subtitle}

          />
        ))}
      </div>
    </div>
  );
}


