// import React, { useState } from "react";
// import DropdownMenu from "./DropdownMenu";

// export default function Header() {
//   const [showDropdown, setShowDropdown] = useState(false);

//   return (

//     <div className="relative h-[60%] text-white">
//       {/* 🔹 Background image */}
//       <div
//         className="absolute bg-cover bg-center rounded-full w-[600px] h-[600px] left-1/2 -translate-x-1/2 bottom-[10%] overflow-hidden z-0"
//         style={{
//           backgroundImage:
//             "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8ed3T15lxU0SjCFriMRRmieIgDnBZDdT5w&s')",
//         }}
//       >
//         {/* 🔷 Blue overlay with opacity */}
//         <div className="absolute inset-0 bg-blue-700 opacity-30 z-10"></div>

//       </div>
//       {/* 🟠 Orangish curved border with gap */}
//       <div className="absolute w-[600px] h-[600px] border-b-4 border-orange-500 rounded-full left-1/2 -translate-x-1/2 bottom-[7.5%] z-10 pointer-events-none"></div>

//       {/* 🌟 Content on top */}
//       <div className="p-4 relative z-20">
//         <div className="flex justify-between items-center">
//           <button onClick={() => setShowDropdown(!showDropdown)} className="text-sm">
//             👤 Bishal Kundu ⌄
//           </button>
//           <div className="text-2xl font-bold">Ⓜ️</div>
//         </div>

//         <input
//           type="text"
//           placeholder="Where do you want to go?"
//           className="w-full mt-4 p-2 rounded-full text-black"
//         />

//         <h1 className="mt-6 text-2xl font-extrabold leading-snug">
//           YOUR NEXT JOURNEY<br />STARTS HERE
//         </h1>
//         <p className="mt-3 text-lg">
//           Explore <span className="text-green-400 font-bold">India</span>{" "}
//           <span className="text-white">30% OFF</span>
//         </p>

//         <button className="mt-4 bg-black text-white px-4 py-2 rounded-full">
//           Explore Now
//         </button>

//         {showDropdown && <DropdownMenu />}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import dropdownicon from "../Assets/dropdownicon.png";
import searchicon from "../Assets/searchicon.png";
import profileicon from "../Assets/profileicon.png";


export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative h-[400px] text-white overflow-hidden">
      {/* 🔹 Background image using <img> inside a circular container */}
      <div className="absolute w-[600px] h-[600px] rounded-full overflow-hidden left-1/2 -translate-x-1/2 bottom-[10%] z-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8ed3T15lxU0SjCFriMRRmieIgDnBZDdT5w&s"
          alt="header background"
          className="w-full h-full object-contain object-[90%_100%]"
          draggable={false}
        />
        {/* 🔷 Blue overlay */}
        <div className="absolute inset-0 bg-blue-700 opacity-30 z-10" />
      </div>

      {/* 🟠 Orange curved border */}
      <div className="absolute w-[600px] h-[600px] border-b-4 border-orange-500 rounded-full left-1/2 -translate-x-1/2 bottom-[7.5%] z-10 pointer-events-none" />

      {/* ✅ Explore Now button centered on the curved bottom */}
      <div className="absolute left-1/2 bottom-[6%] -translate-x-1/2 z-30">
        <button className="bg-black text-orange-300 px-4 py-1 rounded-full text-sm">
          Explore Now
        </button>
      </div>

      

    </div>
  );
}

