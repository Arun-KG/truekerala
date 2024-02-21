"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Facebook_icon,
  HamBurger_icon,
  Instagram_icon,
  Linkedin_icon,
} from "../svg_icons/SvgIcons";

export default function Navbar() {
  // Navbar toogle state
  const [toggle, setToogle] = useState<boolean>(true);

  // Toggles the vissiblility of navigation elements on mobile divices
  function toggleNavElementExpansion() {
    setToogle(!toggle);
  }

  return (
    <nav className="fixed w-full flex items-center justify-center z-50 backdrop-blur-xl shadow-xl">
      <section className="flex flex-col md:flex-row  justify-between w-full max-w-6xl overflow-hidden">
        <section className="flex items-center justify-between mx-5">
          <Image
            src="/Truly-kerala-logo.png"
            alt="logo"
            width={100}
            height={100}
            priority
            className="w-16 md:w-fit"
          />
          <button
            onClick={toggleNavElementExpansion}
            className="p-1 rounded-md transition-colors duration-200 md:hidden active:bg-slate-200"
          >
            <HamBurger_icon />
          </button>
        </section>

        <ul
          className={`font-barlow text-xl flex flex-col md:flex-row items-center justify-center transition-all duration-300  ${
            toggle
              ? " opacity-0 -translate-y-5 max-h-0 md:opacity-100 md:max-h-full"
              : "max-h-full"
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
          <section className="mr-5">
            <ul className="flex items-center justify-center">
              <li className="p-1 m-1 hover:text-gray-500 transition-colors duration-200">
                <a
                  className="p-1 cursor-pointer"
                  href="https://www.facebook.com/trulykerala"
                  title="Facebook"
                >
                  <Facebook_icon />
                </a>
              </li>
              <li className="p-1 m-1 hover:text-gray-500 transition-colors duration-200">
                <a
                  className="p-1 cursor-pointer"
                  href="https://www.linkedin.com/company/trulykerala/"
                  title="Linkedin"
                >
                  <Linkedin_icon />
                </a>
              </li>
              <li className="p-1 m-1 hover:text-gray-500 transition-colors duration-200">
                <a
                  className="p-1 cursor-pointer"
                  href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Ftrulykerala%2F"
                  title="Instagram"
                >
                  <Instagram_icon />
                </a>
              </li>
            </ul>
          </section>
        </ul>
      </section>
    </nav>
  );
}
