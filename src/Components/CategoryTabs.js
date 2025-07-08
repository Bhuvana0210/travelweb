import React from "react";

const categories = ["All", "Mountain", "Beach", "Jungle", "River"];

export default function CategoryTabs() {
  return (
    <div className="flex justify-around mt-4 px-2 overflow-x-auto">
      {categories.map((cat) => (
        <div key={cat} className="flex flex-col items-center text-sm min-w-[64px]">
          <div className="w-12 h-12 bg-gray-300 rounded-full mb-1"></div>
          <p>{cat}</p>
        </div>
      ))}
    </div>
  );
}
