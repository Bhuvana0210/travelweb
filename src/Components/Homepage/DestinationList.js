// import React from "react";
// import DestinationCard from "./DestinationCard";

// export default function DestinationList({ title, destinations }) {
//   const isHorizontal = title === "Destinations For You";
//   return (
//     <div className="px-4 mt-4">
//       <h2 className="text-xl font-semibold mb-2">{title}</h2>
//       {isHorizontal ? (
//         <div className="flex overflow-x-auto gap-3 pb-3">
//           {destinations.map((d, idx) => (
//             <DestinationCard key={idx} {...d} />
//           ))}
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 gap-3 mb-20">
//           {destinations.map((d, idx) => (
//             <DestinationCard key={idx} {...d} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// import React from "react";

// export default function DestinationList({ name, rating, imageUrl }) {
//   return (
//     <div className="w-[150px] flex-shrink-0">
//       {/* Image Card */}
//       <div className="relative h-[90px] rounded-3xl overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${imageUrl})` }}
//         />
//         {/* Dark gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

//        {/* Rating Badge positioned absolutely */}
//       <div className="absolute -bottom-0 left-0 bg-[#0A2647] border-[3px] border-white text-white px-1 py-[1px] rounded-full z-20 flex items-center gap-1">
//         <span className="text-[9px] font-semibold">{rating}</span>
//         <span className="text-[8px]">★</span>
//       </div>
//       </div>

//       {/* Title (below the card) */}
//       <p className="mt-2 text-sm font-semibold text-black text-center">{name}</p>
//     </div>
//   );
// }



import React from "react";

export default function DestinationList({ name, rating, discount, imageUrl, subtitle }) {
  return (
    // Add enough padding to include overflowed rating badge
    <div className="relative w-[150px] flex-shrink-0"> 
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
      </div>

      {/* Rating Badge positioned absolutely */}
      <div className="absolute bottom-[25px] left-0 bg-[#0A2647] border-[3px] border-white text-white px-1 py-[1px] rounded-full z-20 flex items-center gap-1">
        <span className="text-[9px] font-semibold">{rating}</span>
        <span className="text-[8px]">★</span>
      </div>
      {/* Title (below the card) */}
      <p className="mt-2 text-sm font-semibold text-black text-center">{name}</p>
    </div>
  );
}
