import React from "react";

export default function DropdownMenu() {
  return (
    <div className="absolute top-14 left-4 bg-white text-black rounded shadow-lg p-3 z-20">
      <p className="py-1 hover:bg-gray-100 rounded px-2">My Bookings</p>
      <p className="py-1 hover:bg-gray-100 rounded px-2">Profile</p>
      <p className="py-1 hover:bg-gray-100 rounded px-2">Logout</p>
    </div>
  );
}
