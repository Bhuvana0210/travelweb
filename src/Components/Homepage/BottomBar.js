import React from "react";
import { FaCalendarAlt, FaCog } from "react-icons/fa";

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-orange-500 text-white text-sm z-20">
      <div className="flex justify-between items-center text-center">
        {/* Book Now */}
        <button className="flex-1 flex items-center justify-end pr-5 gap-1 py-3">
          <FaCalendarAlt className="text-white text-lg" />
          <span className="ml-[2px] text-base font-bold ">Book Now</span>
        </button>

        {/* Divider */}
        <div className="h-8 w-[1px] bg-white"></div>

        {/* Get Offers */}
        <button className="flex-1 flex items-center justify-start pl-5 gap-1 py-3">
          <FaCog className="text-white text-lg" />
          <span className="ml-[2px] text-base font-bold ">Get Offers</span>
        </button>
      </div>
    </div>
  );
}
