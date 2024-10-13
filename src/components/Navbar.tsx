import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/announcement.png" alt="" width={20} height={20} />
        </div>
        <div className="flex flex-col">
          <span>John</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
