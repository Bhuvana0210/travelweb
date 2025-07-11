import React from "react";
import DestinationCard from "./DestinationCard";

export default function DestinationList({ title, destinations }) {
  const isHorizontal = title === "Destinations For You";
  return (
    <div className="px-4 mt-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {isHorizontal ? (
        <div className="flex overflow-x-auto gap-3 pb-3">
          {destinations.map((d, idx) => (
            <DestinationCard key={idx} {...d} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 mb-20">
          {destinations.map((d, idx) => (
            <DestinationCard key={idx} {...d} />
          ))}
        </div>
      )}
    </div>
  );
}
