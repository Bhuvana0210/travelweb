// // import React from "react";

// // const categories = ["All", "Mountain", "Beach", "Jungle", "River","All", "Mountain", "Beach", "Jungle", "River"];

// // export default function CategoryTabs() {
// //   return (
// //     <div className="flex justify-around mt-2 px-2 overflow-x-auto">
// //       {categories.map((cat) => (
// //         <div key={cat} className="flex flex-col items-center text-sm min-w-[64px]">
// //           <div className="w-14 h-14 bg-gray-300 rounded-full mb-1"></div>
// //           <p>{cat}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }


// import React from "react";

// const categories = [
//   "All", "Mountain", "Beach", "Jungle", "River",
//   "Forest", "Desert", "Lake", "City", "Canyon"
// ];

// export default function CategoryTabs() {
//   return (
//     <div className="overflow-x-auto">
//       <div className="flex w-max px-2 space-x-4">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-sm min-w-[64px] flex-shrink-0"
//           >
//             <div className="w-14 h-14 bg-gray-300 rounded-full mb-1"></div>
//             <p>{cat}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";

const categories = [
  { name: "All", icon: "https://img.icons8.com/ios-filled/50/worldwide-location.png" },
  { name: "Mountain", icon: "https://img.icons8.com/ios-filled/50/mountain.png" },
  { name: "Beach", icon: "https://img.icons8.com/ios-filled/50/beach.png" },
  { name: "Jungle", icon: "https://img.icons8.com/ios-filled/50/deciduous-tree.png" },
  { name: "River", icon: "https://img.icons8.com/ios-filled/50/water.png" },
  { name: "Desert", icon: "https://img.icons8.com/ios-filled/50/cactus.png" },
  { name: "Lake", icon: "https://img.icons8.com/ios-filled/50/lake.png" },
  { name: "City", icon: "https://img.icons8.com/ios-filled/50/city.png" },
  { name: "Canyon", icon: "https://img.icons8.com/ios-filled/50/grand-canyon.png" }, 
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
            {/* Circle with icon */}
            <div className="w-14 h-14 bg-gray-300 rounded-full mb-1 flex items-center justify-center overflow-hidden">
              <img
                src={cat.icon}
                alt={cat.name}
                className="w-8 h-8 object-contain"
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
