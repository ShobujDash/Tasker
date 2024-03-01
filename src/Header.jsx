import React from "react";
import Brand from "./assets/Logo.png";

function Header() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6 ">
        <a href="/">
          <img className="h-[45px]" src={Brand} alt="logo" color="red" width={"100px"} height={"100px"}/>
        </a>
      </div>
    </nav>
  );
}

export default Header;
