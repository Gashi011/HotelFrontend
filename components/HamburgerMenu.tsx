import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav>
      <div>
        <span className="text-3xl cursor-pointer mx-2 lg:hidden block" onClick={toggleMenu}>
          <IoMenuSharp />
        </span>
      </div>

      <ul className={`lg:flex lg:items-center ${menuOpen ? "opacity-100 top-[80px]" : "opacity-0 top-[500px]"} lg:z-auto mt-10 lg:static absolute bg-white w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 transition-all ease-in duration-500`}>
        <li className="mx-4 my-6 lg:my-0">
          <a href="/about" className="text-xl hover:text-cyan-500 duration-500">About us</a>
        </li>
        <li className="mx-4 my-6 lg:my-0">
          <a href="/products" className="text-xl hover:text-cyan-500 duration-500">Proizvodi</a>
        </li>
        <li className="mx-4 my-6 lg:my-0">
          <a href="/projects" className="text-xl hover:text-cyan-500 duration-500">Rooms</a>
        </li>
        <li className="mx-4 my-6 lg:my-0">
          <a href="/news" className="text-xl hover:text-cyan-500 duration-500">Conferentions</a>
        </li>
        <li className="mx-4 my-6 lg:my-0">
          <a href="/contact" className="text-xl hover:text-cyan-500 duration-500">Contact</a>
        </li>
        <li className="mx-4 my-6 lg:my-0">
          <a href="/contact" className="text-xl hover:text-cyan-500 duration-500">Reservations</a>
        </li>

        <h2 className=""></h2>
      </ul>
    </nav>
  );
};

export default Navbar;
