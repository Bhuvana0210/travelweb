
import React from "react";

// const categories = [
//   { name: "All", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
//   { name: "Mountain", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
//   { name: "Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
//   { name: "Jungle", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9" },
//   { name: "River", image: "https://images.unsplash.com/photo-1506956191976-cdfc76c5b190" },
//   { name: "Desert", image: "https://images.unsplash.com/photo-1600407120186-1f85d3e314e2" },
//   { name: "Lake", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
//   { name: "City", image: "https://images.unsplash.com/photo-1493612276216-ee3925520721" },
//   { name: "Canyon", image: "https://images.unsplash.com/photo-1508264165352-258859e62245" }
// ];
const categories = [
  {
    name: "All",
    image: "https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?semt=ais_hybrid&w=740", 
  },
  {
    name: "Mountain",
    image: "https://www.konkan.me/wp-content/uploads/2024/08/1-10-Best-Trekking-Places-in-India.jpg", 
  },
  {
    name: "Beach",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7djIoRsn-pbj8-nqt6Yh4HymfhR1FCAVXgw&s", 
  },
  {
    name: "Jungle",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKRu0iUuLQAfmSuujm-36mBvuNl7gR9M2kQ&s", 
  },
  {
    name: "River",
    image: "https://lakequeenhouseboats.com/wp-content/uploads/2024/11/6-Bed-Room-Ultra-Luxury-Houseboat-scaled-1.webp",
  },
  {
    name: "Desert",
    image: "https://static.toiimg.com/photo/112994116.cms",
  },
  {
    name: "Lake",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs6Pm1yUOia9qn5OrLJ0UTclaI6C2U4_H5SQ&s",
  },
  {
    name: "City",
    image: "https://www.shutterstock.com/image-photo/phuket-walking-street-night-market-600nw-2185859817.jpg",
  },
  {
    name: "Canyon",
    image: "https://images.squarespace-cdn.com/content/v1/55917aace4b0b3c425072388/1517425025863-0V3AMPQVFL0T2K8KJBAR/Antelope+Canyon+Tour+from+Las+Vegas+1.jpg?format=1500w",
  }
];




export default function CategoryTabs() {
  return (
    <div className="overflow-x-auto">
      <div className="relative flex w-max px-2 space-x-4 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gray-300">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-sm min-w-[64px] flex-shrink-0 group pb-2"
          >
            {/* Circle with image */}
            <div className="w-14 h-14 bg-gray-300 rounded-full mb-1 flex items-center justify-center overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Label */}
            <p>{cat.name}</p>

            {/* Hover line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center"></div>
          </div>
        ))}
      </div>
    </div>

  );
}
