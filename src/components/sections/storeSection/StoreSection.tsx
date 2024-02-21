"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function StoreSection() {
  const [mainImage, setMainImage] = useState<string>("/chips1.jpg");

  // Handles the click event on the selector images and updates the main image
  function handleImageClick(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    setMainImage((e.target as Element).id);
  }

  return (
    <section
      id="shop"
      className="flex flex-col lg:flex-row items-center justify-around w-full max-w-7xl py-12"
    >
      <div className="m-5">
        <Image
          src={mainImage}
          alt="health-first-policy"
          width={500}
          height={500}
          className="w-full border-solid border-[1px] rounded-xl border-gray-600"
        />
        <div>
          <ul className="flex items-center justify-center">
            <li className="m-2 cursor-pointer">
              <Image
                src="/chips1.jpg"
                alt="health-first-policy"
                width={152}
                height={152}
                id="/chips1.jpg"
                onClick={handleImageClick}
                className="w-36 border-[1px] rounded-xl border-gray-600 drag-none select-none"
              />
            </li>
            <li className="m-2 cursor-pointer" id="chips2">
              <Image
                src="/chips2.jpg"
                alt="health-first-policy"
                width={152}
                height={152}
                id="/chips2.jpg"
                onClick={handleImageClick}
                className="w-36 border-[1px] rounded-xl border-gray-600 drag-none select-none"
              />
            </li>
            <li className="m-2 cursor-pointer" id="chips3">
              <Image
                src="/chips3.jpg"
                alt="health-first-policy"
                width={152}
                height={152}
                id="/chips3.jpg"
                onClick={handleImageClick}
                className="w-36 border-[1px] rounded-xl border-gray-600 drag-none select-none"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <strong>
          <h3 className="font-barlow text-2xl pb-6 leading-10 my-4">
            Organic Nendran Banana Chips(125g)
          </h3>
        </strong>
        <strong>
          <p className="font-barlow text-xl leading-10 pb-3 my-4">
            Size : 125g ( Per canister )
          </p>
        </strong>
        <Link
          href="/checkout"
          className="bg-[#f9e925] text-xl font-semibold px-9 py-3 my-4 rounded-[50px] transition-colors duration-300 hover:bg-[#ecdf47] active:bg-[#ccc03e]"
        >
          Buy Online
        </Link>
        <strong>
          <p className="font-barlow text-xl leading-10 pb-3 my-4">
            Also Available On
          </p>
        </strong>
        <a href="https://www.amazon.in/dp/B09P6ZMR1Z">
          <Image
            src="/amazon1.jpg"
            alt="health-first-policy"
            width={152}
            height={152}
            className="w-36 border-[1px] rounded-md border-gray-600 drag-none select-none p-1 my-4 cursor-pointer"
          />
        </a>
        <a href="https://www.flipkart.com/trulykerala-organic-nendran-banana-chips/p/itmb45da1e50cbd1">
          <Image
            src="/flipkart1.jpg"
            alt="health-first-policy"
            width={152}
            height={152}
            className="w-36 border-[1px] rounded-md border-gray-600 drag-none select-none p-1 my-4 cursor-pointer"
          />
        </a>
      </div>
    </section>
  );
}
