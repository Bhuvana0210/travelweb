
// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { CgProfile } from "react-icons/cg";
// import { FaSearch } from "react-icons/fa";
// import travelLoader from "../../Assets/loader_travel.gif";
// import axios from "axios";

// export default function Header() {
//   const navigate = useNavigate();

//   const [content, setContent] = useState(null);
//   const [loading, setLoading] = useState(true); // for loading state
//   const [error, setError] = useState(null); // for error state

//   useEffect(() => {
//     const fetchContent = async () => {
//       try {

//         const res = await axios.get('https://travelweb-admin-backend.onrender.com/api/home-content');
//         // console.log(res.data);
//         setContent(res.data);
//         setError(null); // clear error on success
//       } catch (err) {
//         setError('Failed to fetch home content.');
//         console.error(err);
//       } finally {
//         setLoading(false); // stop loading in both success and error cases
//       }
//     };

//     fetchContent();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <img src={travelLoader} alt="Loading..." className="w-74 h-74" />
//       </div>
//     );
//   }

//   if (error) return <p className="text-red-600">{error}</p>;
//   if (!content) return null; // or a loader


//   //logic to break heading
//   const headingWords = content.headingText.trim().split(' ');
//   const secondLine = headingWords.splice(-2).join(' ');
//   const firstLine = headingWords.join(' ');

//   return (

//   );
// }





// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { CgProfile } from "react-icons/cg";
// import { FaSearch } from "react-icons/fa";
// import travelLoader from "../../Assets/loader_travel.gif";
// import useFetch from "../../Components/Hooks/useFetch"; // ✅ custom hook

// export default function Header() {
//   const navigate = useNavigate();

//   const {
//     data: content,
//     loading,
//     error,
//   } = useFetch("https://travelweb-admin-backend.onrender.com/api/home-content");

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <img src={travelLoader} alt="Loading..." className="w-74 h-74" />
//       </div>
//     );
//   }

//   if (error) return <p className="text-red-600">{error}</p>;
//   if (!content) return null;

//   // Break heading into 2 lines
//   const headingWords = content.headingText.trim().split(" ");
//   const secondLine = headingWords.splice(-2).join(" ");
//   const firstLine = headingWords.join(" ");

//   return (
//     <div className="relative h-[400px] text-white overflow-hidden">
//       {/* 🔹 Background image using <img> inside a circular container */}
//       <div className="absolute w-[600px] h-[600px] rounded-full overflow-hidden left-1/2 -translate-x-1/2 bottom-[30%] z-0">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8ed3T15lxU0SjCFriMRRmieIgDnBZDdT5w&s"
//           alt="header background"
//           className="w-full h-full object-contain object-[90%_120%]"
//           draggable={false}
//         />
//         {/* 🔷 Blue overlay */}
//         <div
//           className="absolute inset-0 z-10"
//           style={{ backgroundColor: '#001c3b', opacity: 0.67 }}
//         />
//       </div>

//       {/* 🟠 Orange curved border */}
//       <div className="absolute w-[600px] h-[600px] border-b-4 border-orange-500 rounded-full left-1/2 -translate-x-1/2 bottom-[27.5%] z-10 pointer-events-none" />

//       {/* ✅ Explore Now button centered on the curved bottom */}
//       <div className="absolute left-1/2 bottom-[26%] -translate-x-1/2 z-30">
//         <button className="bg-black text-orange-300 px-4 py-1 rounded-full text-sm">
//           Explore Now
//         </button>
//       </div>


//       {/* 🌟 Content on top */}
//       <div className="p-2 relative z-20">
//         <div className="flex justify-between items-center">
//           <div className="flex justify-between items-center gap-1">


//             <button
//               onClick={() => navigate("/profile")}
//               className="text-sm flex items-center gap-1"
//             >
//               <CgProfile className="w-5 h-5" />
//               Bishal Kundu
//               <RiArrowDropDownLine className="w-6 h-6 -ml-2 mt-[2px]" />
//             </button>

//           </div>



//           <div className="text-2xl font-bold">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU8rl-2kPfME825NKYamp97R4sF88wUMUpLoRcxrsa0I0mehICfbm283t-SK5fNkSZveM&usqp=CAU"
//               alt="comapny-logo"
//               className="w-5 h-5 rounded-full"
//               draggable={false}
//             />

//           </div>
//         </div>

//         <div className="relative w-full mt-2 pr-11">

//           {/* 🔍 Search Icon inside input */}
//           <FaSearch className="absolute left-2 top-4 transform -translate-y-1/2 w-4 h-4 text-black" />

//           {/* 🔲 Input field with centered placeholder */}
//           <input
//             type="text"
//             placeholder="Where do you want to go?"
//             className="w-full pl-7 mt-1 pr-3 h-6 text-sm rounded-full text-black placeholder:text-black"
//           />

//         </div>


//         <h1 className="pl-5 w-23 mt-5 text-xl font-extrabold leading-snug font-cabiry">

//           {/* YOUR NEXT JOURNEY */}
//           {firstLine}
//         </h1>
//         <h1 className="pl-5 w-23 -mt-2 text-xl font-extrabold leading-snug font-cabiry">
//           {/* STARTS HERE */}
//           {secondLine}
//         </h1>
//         <div className="pl-5 mt-2 text-lg">
//           <span className="font-poppins font-bold text-xl">Explore</span>{" "}
//           <span className="font-gwathlyn italic">The</span>

//           <div className="font-swis721 text-2xl -mt-1 font-bold">
//             <span className="text-orange-500">IN</span>
//             <span className="text-white">D</span>
//             <span className="text-green-500">IA</span>
//           </div>

//           <div className="leading-none">
//             <div className="text-white -mt-2 text-3xl italic font-poppins font-bold">{content.offerText}%</div>
//             <div className="pl-8 -mt-3 text-white text-lg font-poppinsmedium">OFF</div>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }



// Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";

export default function Header({ content }) {
  const navigate = useNavigate();

  if (!content?.headingText) return null;

  const headingWords = content.headingText.trim().split(" ");
  const secondLine = headingWords.splice(-2).join(" ");
  const firstLine = headingWords.join(" ");
  
  return (
    <div className="relative min-h-[400px] text-white overflow-hidden">
      {/* 🔹 Background Image */}
      <div className="absolute w-[600px] h-[600px] rounded-full overflow-hidden left-1/2 -translate-x-1/2 bottom-[30%] z-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8ed3T15lxU0SjCFriMRRmieIgDnBZDdT5w&s"
          alt="header background"
          className="w-full h-full object-contain object-[90%_120%]"
          draggable={false}
        />
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: "#001c3b", opacity: 0.67 }}
        />
      </div>

      {/* 🟠 Orange curved border */}
      <div className="absolute w-[600px] h-[600px] border-b-4 border-orange-500 rounded-full left-1/2 -translate-x-1/2 bottom-[27.5%] z-10 pointer-events-none" />

      {/* Explore Now Button */}
      <div className="absolute left-1/2 bottom-[26%] -translate-x-1/2 z-30">
        <button className="bg-black text-orange-300 px-4 py-1 rounded-full text-sm">
          Explore Now
        </button>
      </div>

      {/* Top Content */}
      <div className="p-2 relative z-20">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <button
              onClick={() => navigate("/profile")}
              className="text-sm flex items-center gap-1"
            >
              <CgProfile className="w-5 h-5" />
              Bishal Kundu
              <RiArrowDropDownLine className="w-6 h-6 -ml-2 mt-[2px]" />
            </button>
          </div>

          <div className="text-2xl font-bold">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU8rl-2kPfME825NKYamp97R4sF88wUMUpLoRcxrsa0I0mehICfbm283t-SK5fNkSZveM&usqp=CAU"
              alt="company-logo"
              className="w-5 h-5 rounded-full"
              draggable={false}
            />
          </div>
        </div>

        {/* 🔍 Search */}
        <div className="relative w-full mt-2 pr-11">
          <FaSearch className="absolute left-2 top-4 transform -translate-y-1/2 w-4 h-4 text-black" />
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="w-full pl-7 mt-1 pr-3 h-6 text-sm rounded-full text-black placeholder:text-black"
          />
        </div>

        {/* Headings */}
        <h1 className="pl-5 w-23 mt-5 text-xl font-extrabold leading-snug font-cabiry">
          {firstLine}
        </h1>
        <h1 className="pl-5 w-23 -mt-2 text-xl font-extrabold leading-snug font-cabiry">
          {secondLine}
        </h1>

        {/* Offer Section */}
        <div className="pl-5 mt-2 text-lg">
          <span className="font-poppins font-bold text-xl">Explore</span>{" "}
          <span className="font-gwathlyn italic">The</span>

          <div className="font-swis721 text-2xl -mt-1 font-bold">
            <span className="text-orange-500">IN</span>
            <span className="text-white">D</span>
            <span className="text-green-500">IA</span>
          </div>

          <div className="leading-none">
            <div className="text-white -mt-2 text-3xl italic font-poppins font-bold">
              {content.offerText}%
            </div>
            <div className="pl-8 -mt-3 text-white text-lg font-poppinsmedium">
              OFF
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
