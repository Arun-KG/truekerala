import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  image: string;
  title: string;
  children: ReactNode;
};

export default function Card({ children, image, title }: Props) {
  return (
    <div className="bg-[#faffb3] m-7 rounded-3xl overflow-hidden ">
      <div className="flex flex-col flex-1 flex-grow items-center justify-center  h-fit max-w-sm ">
        <div className="bg-[#85a901] w-full h-60 flex flex-col items-center relative justify-center">
          <Image
            src={image}
            alt="card-img"
            width={300}
            height={300}
            className="translate-y-4 w-60 z-10"
          />
          <Image
            src="/card-bg-btm.png"
            alt="card-bg-btm"
            width={270}
            height={20}
            className="w-full bottom-0 absolute"
          />
        </div>
        <h2 className="font-poppins uppercase text-xl font-semibold mt-5">
          {title}
        </h2>
        <p className="font-barlow text-lg text-justify text-[#333333] leading-7 p-5 ">
          {children}
        </p>
      </div>
    </div>
  );
}
