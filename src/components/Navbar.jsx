import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-5 bg-[#0F0F0F] text-white border-white border-b">
      <p className="text-2xl font-semibold">
        The <span className="bg-white text-black">Product</span> Platform
      </p>
      <div className="right flex gap-10 text-xl text-gray-400">
        <p>Learn </p>
        <p>Practice</p>

      </div>
    </nav>
  );
};

export default Navbar;
