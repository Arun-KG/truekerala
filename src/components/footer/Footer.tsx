import Image from "next/image";
import Link from "next/link";
import {
  Facebook_icon,
  Instagram_icon,
  Linkedin_icon,
} from "../svg_icons/SvgIcons";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#2f6e3b] flex flex-col items-center justify-center "
    >
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl">
        <div className="flex flex-col items-start justify-center flex-1 m-5 md:m-12">
          <h1 className="font-signika_Negative text-4xl font-bold uppercase text-white">
            Contact Us
          </h1>
          <Image
            src="/Truly-kerala-logo.png"
            alt="logo"
            width={178}
            height={150}
            priority
            className="w-24 md:w-fit my-10"
          />
          <p className="font-barlow text-lg text-white leading-7">
            TrulyKerala
          </p>
          <p className="font-barlow text-lg text-white leading-7">
            Ground Floor Sapthagiri Apartment, EMS Road
          </p>
          <p className="font-barlow text-lg text-white leading-7">
            Padamugal Kochi, Kerala 682021
          </p>
          <br />
          <p className="font-barlow text-lg text-white leading-7">
            Phone: +91 85904 68816
          </p>
          <p className="font-barlow text-lg text-white leading-7">
            Email: trulykerala@gmail.com
          </p>

          <ul className="flex items-center justify-center text-white">
            <span className="font-barlow text-lg text-white leading-7">
              Follow Us On
            </span>
            <li className="p-1 m-1 hover:text-gray-400 transition-colors duration-200">
              <a
                className="p-1 cursor-pointer"
                href="https://www.facebook.com/trulykerala"
                title="Facebook"
              >
                <Facebook_icon />
              </a>
            </li>
            <li className="p-1 m-1 hover:text-gray-400 transition-colors duration-200">
              <a
                className="p-1 cursor-pointer"
                href="https://www.linkedin.com/company/trulykerala/"
                title="Linkedin"
              >
                <Linkedin_icon />
              </a>
            </li>
            <li className="p-1 m-1 hover:text-gray-400 transition-colors duration-200">
              <a
                className="p-1 cursor-pointer"
                href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Ftrulykerala%2F"
                title="Instagram"
              >
                <Instagram_icon />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1 bg-[#f9e925] m-5 md:m-12 rounded-3xl overflow-hidden">
          <Image
            src="/chips.jpg"
            alt="health-first-policy"
            width={702}
            height={320}
            className="w-full"
          />
          <p className="font-barlow leading-7 text-[#333333] text-base p-5 text-justify">
            We wish to make the traditional Kerala Banana chips available across
            the globe for all the Banana Chips lovers with the core principles
            of - Maintaining its Authentic nature without adding any
            preservatives and also using Organically available ingredients such
            as Nendran Banana & Turmeric. In addition to this, the product needs
            to be healthy so that it can be used by people of any age and it
            offers an experience in having the snacks from a handy container.
            Established in 2016, the parent company - NPR Foods is offering Food
            products to premium hotels & supermarkets in Kerala in addition to
            our PAN India presence in selling Banana Chips online using various
            Online platforms including Amazon, Flipkart etc. Company is founded
            by Ms.Priya Suresh with years of experience in the Food Industry
            along with the support and guidance from remarkable Chefs in India &
            abroad.
          </p>
        </div>
      </div>
      <div className="bg-[#ebffc5] w-full p-1 px-4 flex justify-between flex-col lg:flex-row">
        <p className="py-2">
          &copy;{new Date().getFullYear()} Truly Kerala. All Rights Reserved.{" "}
          <Link
            href="/privacy-policy/"
            className="transition-colors duration-300 hover:text-[#0d6efd]"
          >
            Privacy Policy
          </Link>
          &nbsp; |{" "}
          <Link
            href="/terms-of-use/"
            className="transition-colors duration-300 hover:text-[#0d6efd]"
          >
            {" "}
            Terms of Use
          </Link>
          &nbsp;|
          <Link
            href="/refund-policy/"
            className="transition-colors duration-300 hover:text-[#0d6efd]"
          >
            {" "}
            Refund Policy
          </Link>
        </p>
        <p className="py-2">Call Us: +91 85904 68816</p>
      </div>
    </footer>
  );
}
