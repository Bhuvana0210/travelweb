import React from "react";

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-orange-500 flex justify-around text-white text-sm py-3 z-10">
      <button className="flex items-center gap-1">📅 Book Now</button>
      <button className="flex items-center gap-1">⚙️ Get Offers</button>
    </div>
  );
}
