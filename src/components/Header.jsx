import React from "react";
import Logo from "../assets/Communi_Teez favicon.jpeg";

const Header = () => {
  return (
    <div className="bg-teal-500">
      <div className="w-full py-6 flex items-center justify-between  container mx-auto text-center md:text-left ">
        <div className="text-xl  md:text-2xl font-semibold w-full flex items-center px-3 md:px-0 gap-3">
          <img src={Logo} alt="" className="w-12" />
          <span>Communi_Teez Design</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
