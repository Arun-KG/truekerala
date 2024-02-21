import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div className="md:hidden h-16 bg-gradient-to-r from-[#80b451] to-[#b5cb13]"></div>
      <Image
        src="/banner.webp"
        alt="hero_image"
        width={1280}
        height={720}
        className="w-full select-none drag-none"
      />
      <div>
        <section className="absolute top-2/3 md:top-1/2 -translate-y-1/2 pl-[10%] lg:pl-[20%]">
          <h2 className="text-white font-open_Sans font-semibold text-2xl sm:text-4xl lg:text-[70px] lg:leading-[1.2]">
            Organic Nendran<br></br>Banana Chips
          </h2>
          <p className="font-charm text-white text-lg mt-2 sm:text-4xl sm:mt-5 lg:mt-10">
            Truly from Kerala
          </p>
        </section>
      </div>
    </section>
  );
}
