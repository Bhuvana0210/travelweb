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
import dropdownicon from "../Assets/Icons/dropdownicon.png";
import searchicon from "../Assets/Icons/searchicon.png";
import profileicon from "../Assets/Icons/profileicon.png";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative h-[400px] text-white overflow-hidden">
      {/* 🔹 Background image using <img> inside a circular container */}
      <div className="absolute w-[600px] h-[600px] rounded-full overflow-hidden left-1/2 -translate-x-1/2 bottom-[30%] z-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8ed3T15lxU0SjCFriMRRmieIgDnBZDdT5w&s"
          alt="header background"
          className="w-full h-full object-contain object-[90%_120%]"
          draggable={false}
        />
        {/* 🔷 Blue overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: '#001c3b', opacity: 0.67 }}
        />
      </div>

      {/* 🟠 Orange curved border */}
      <div className="absolute w-[600px] h-[600px] border-b-4 border-orange-500 rounded-full left-1/2 -translate-x-1/2 bottom-[27.5%] z-10 pointer-events-none" />

      {/* ✅ Explore Now button centered on the curved bottom */}
      <div className="absolute left-1/2 bottom-[26%] -translate-x-1/2 z-30">
        <button className="bg-black text-orange-300 px-4 py-1 rounded-full text-sm">
          Explore Now
        </button>
      </div>


      {/* 🌟 Content on top */}
      <div className="p-2 relative z-20">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center gap-1">
            <img src={profileicon} alt="Profile Icon" className="w-6 h-6" />
            Bishal Kundu
            <button onClick={() => setShowDropdown(!showDropdown)} className="text-sm">
              <img src={dropdownicon} alt="Drop-down" className="w-4 h-4 mt-0.5" />
            </button>
          </div>

          <div className="text-2xl font-bold">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU8rl-2kPfME825NKYamp97R4sF88wUMUpLoRcxrsa0I0mehICfbm283t-SK5fNkSZveM&usqp=CAU"
              alt="comapny-logo"
              className="w-5 h-5"
              draggable={false}
            />

          </div>
        </div>

        <div className="relative w-full mt-2 pr-11">
          {/* 🔍 Search Icon inside input */}
          <img
            src={searchicon}
            alt="Search Icon"
            className="absolute left-2 top-4 transform -translate-y-1/2 w-4 h-4"
          />

          {/* 🔲 Input field with centered placeholder */}
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="w-full pl-7 mt-1 pr-3 h-6 text-sm rounded-full text-black placeholder:text-black"
          />
        </div>

        <h1 className="pl-5 w-23 mt-5 text-xl font-extrabold leading-snug font-cabiry">
          YOUR NEXT JOURNEY
        </h1>
        <h1 className="pl-5 w-23 -mt-2 text-xl font-extrabold leading-snug font-cabiry">
        STARTS HERE
        </h1>

        <p className="pl-5 mt-2 text-lg ">
         <span className="font-bold text-xl">Explore</span> 
         {" "} 
         <span className="italic">The</span>
          <div className="font-bold text-2xl -mt-2">
            <span className="text-orange-500">IN</span>
            <span className="text-white">D</span>
            <span className="text-green-500">IA</span>
          </div>
          <div className="leading-none">
            <div className="text-white -mt-2 text-3xl italic font-bold">30%</div>
            <div className="pl-8 -mt-3 text-white text-lg">OFF</div>
          </div>
        </p>

        {showDropdown && <DropdownMenu />}
      </div>
    </div>
  );
}

