
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaArrowLeft } from 'react-icons/fa'; 

// export default function ProfilePage() {
//     const navigate = useNavigate();

//     return (
//         <div className="min-h-screen bg-gray-50 text-gray-800 px-4 pt-6 pb-10">
//             {/* Header with Back Button */}
//             <div className="flex items-center space-x-4 mb-6">
//                 <button onClick={() => navigate(-1)} className="text-gray-600 hover:text-black">
//                     <FaArrowLeft />
//                 </button>
//                 <h1 className="text-xl font-semibold">My Travel Profile</h1>
//             </div>

//             {/* Profile Info */}
//             <div className="bg-white rounded-xl shadow p-4 mb-4">
//                 <h2 className="text-lg font-medium">Welcome, Explorer!</h2>
//                 <p className="text-sm text-gray-500">View or manage your travel preferences</p>
//             </div>

//             {/* Sections like in Zomato */}
//             <div className="space-y-4">
//                 <div className="bg-white rounded-xl shadow p-4">
//                     <h3 className="text-md font-semibold mb-2">Your Bookings</h3>
//                     <p className="text-sm text-gray-600">View your upcoming trips and past bookings</p>
//                 </div>

//                 <div className="bg-white rounded-xl shadow p-4">
//                     <h3 className="text-md font-semibold mb-2">Saved Destinations</h3>
//                     <p className="text-sm text-gray-600">Places you marked to visit later</p>
//                 </div>

//                 <div className="bg-white rounded-xl shadow p-4">
//                     <h3 className="text-md font-semibold mb-2">Travel Preferences</h3>
//                     <p className="text-sm text-gray-600">Your preferred travel modes, food, and stay types</p>
//                 </div>

//                 <div className="bg-white rounded-xl shadow p-4">
//                     <h3 className="text-md font-semibold mb-2">Account Settings</h3>
//                     <p className="text-sm text-gray-600">Manage your profile, contact details, and logout</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f9f9fb] px-4 py-4">
      {/* 🔙 Back and Title */}
      <div className="flex items-center gap-4 mb-5">
        <button onClick={() => navigate(-1)} className="text-gray-700">
          <FaArrowLeft />
        </button>
        <h1 className="text-xl font-semibold">My Travel Profile</h1>
      </div>

      {/* 🔵 Profile Header */}
      <div className="bg-white rounded-2xl p-4 shadow mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
              B
            </div>
            <div>
              <p className="font-semibold text-lg">Bishal Kundu</p>
              {/* <p className="text-sm text-pink-500">View activity ▸</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* 📋 List Items */}
      <div className="space-y-3">
        {/* Home */}
        <div className="bg-white rounded-2xl p-4 shadow flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <span>🏠</span>
            <p className="text-m font-medium">Home</p>
          </div>
        </div>

        {/* Trips */}
        <div className="bg-white rounded-2xl p-4 shadow flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <span>✈️</span>
            <p className="text-m font-medium">Trips</p>
          </div>
        </div>

        {/* Account settings */}
        <div className="bg-white rounded-2xl p-4 shadow flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <span>⚙️</span>
            <p className="text-m font-medium">Account Settings</p>
          </div>
        </div>

        {/* Log out */}
        <div className="bg-white rounded-2xl p-4 shadow flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <span>🔓</span>
            <p className="text-m font-medium">Log out</p>
          </div>
        </div>

        {/* About Us */}
        <div className="bg-white rounded-2xl p-4 shadow flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <span>👥</span>
            <p className="text-m font-medium">About us</p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="bg-white rounded-2xl p-4 shadow flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <span>📞</span>
            <p className="text-m font-medium">Contact us</p>
          </div>
        </div>


        {/* Sections like in Zomato */}
            <div className="space-y-4">
                <div className="bg-white rounded-xl shadow p-4">
                    <h3 className="text-md font-semibold mb-2">Home</h3>
                </div>

                <div className="bg-white rounded-xl shadow p-4">
                    <h3 className="text-md font-semibold mb-2">Trips</h3>
                </div>

                <div className="bg-white rounded-xl shadow p-4">
                    <h3 className="text-md font-semibold mb-2">Account Settings</h3>
                </div>
                
                <div className="bg-white rounded-xl shadow p-4">
                    <h3 className="text-md font-semibold mb-2">Log out</h3>
                </div>

                <div className="bg-white rounded-xl shadow p-4">
                    <h3 className="text-md font-semibold mb-2">About us</h3>
                </div>

                <div className="bg-white rounded-xl shadow p-4">
                    <h3 className="text-md font-semibold mb-2">Contact us</h3>
                </div>
                
            </div>


      </div>
    </div>
  );
}
