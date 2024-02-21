"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Facebook_icon,
  HamBurger_icon,
  Instagram_icon,
  Linkedin_icon,
} from "../svg_icons/SvgIcons";

export default function Navbar() {
  // Navbar toogle state
  const [toggle, setToogle] = useState<boolean>(false);

  // Toggles the vissiblility of navigation elements on mobile divices
  function toggleNavElementExpansion() {
    setToogle(!toggle);
  }

  return (
    <nav className="fixed w-full mt-3 flex items-center justify-center z-50">
      <div className="flex items-center justify-center w-[93vw] lg:w-[97vw] shadow-xl bg-[#ffffff1f] rounded-2xl backdrop-blur-lg">
        <section
          className={`flex flex-col md:flex-row w-full justify-between max-w-7xl rounded-2xl overflow-hidden transition-max-height duration-300 
          ${toggle ? "max-h-72" : "max-h-[3.9rem]"}`}
        >
          <section className="flex items-center justify-between translate-y-1 md:translate-y-0">
            <Link href="/">
              <Image
                src="/Truly-kerala-logo.png"
                alt="logo"
                width={125}
                height={125}
                priority
                className="w-16 md:w-20 p-1 md:p-2 ml-3 md:ml-5"
              />
            </Link>

            <button
              onClick={toggleNavElementExpansion}
              className="p-1 mr-3 md:mr-0 rounded-md transition-colors duration-200 md:hidden active:bg-slate-200"
            >
              <HamBurger_icon />
            </button>
          </section>

          <ul
            className={` relative font-barlow text-xl flex flex-col md:flex-row items-center justify-center transition-opacity duration-300
            ${
              toggle ? "opacity-100 md:opacity-100" : "opacity-0 md:opacity-100"
            }`}
          >
            <li className="p-3 md:p-0 hover:text-gray-500 transition-colors duration-200">
              <Link href="/" className="p-2 mr-6 ">
                HOME
              </Link>
            </li>
            <li className="p-3 md:p-0 hover:text-gray-500 transition-colors duration-200">
              <Link href="#about" className="p-2 mr-6">
                ABOUT US
              </Link>
            </li>
            <li className="p-3 md:p-0 hover:text-gray-500 transition-colors duration-200">
              <Link href="#shop" className="p-5 md:p-2 mr-6">
                SHOP
              </Link>
            </li>
            <li className="p-3 md:p-0 hover:text-gray-500 transition-colors duration-200">
              <Link href="#contact" className="p-5 md:p-2 mr-6">
                CONTACT US
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
}
