import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="w-[40px]">
            <img src={Logo} alt="" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
