import Image from "next/image";

export default function Ingredients() {
  return (
    <section className="w-full relative bg-[#ebffc5] flex flex-col items-center justify-center py-10">
      <Image
        src="/bg-3.jpg"
        alt="bg-3"
        width={1390}
        height={21}
        className="absolute top-0 w-full"
      />
      <h2 className="text-[#2f6e3b] font-signika_Negative text-4xl font-bold uppercase text-center mb-16 z-10">
        Ingredients
      </h2>
      <div className="w-full max-w-7xl flex-col sm:flex-row flex flex-1 items-center justify-center ">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex items-center flex-col justify-center m-2 my-4">
            <Image
              src="/ing-1.jpg"
              alt="banana-chips"
              width={404}
              height={701}
              className="w-52"
            />
            <h3 className="bg-[#2f6e3b] text-white font-poppins text-xl font-semibold mt-10 text-center p-4 rounded-[50px] w-72">
              Organic nendran banana
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center m-2 my-4">
            <Image
              src="/ing-2.jpg"
              alt="banana-chips"
              width={404}
              height={701}
              className="w-52"
            />
            <h3 className="bg-[#2f6e3b] text-white font-poppins text-xl font-semibold mt-10 text-center p-4 rounded-[50px] w-72">
              Turmeric
            </h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col items-center justify-center m-2 my-4">
            <Image
              src="/ing-3.jpg"
              alt="banana-chips"
              width={404}
              height={701}
              className="w-52"
            />
            <h3 className="bg-[#2f6e3b] text-white font-poppins text-xl font-semibold mt-10 text-center p-4 rounded-[50px] w-72">
              Vegetable Oil
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center m-2 my-4">
            <Image
              src="/ing-4.jpg"
              alt="banana-chips"
              width={404}
              height={701}
              className="w-52"
            />
            <h3 className="bg-[#2f6e3b] text-white font-poppins text-xl font-semibold mt-10 text-center p-4 rounded-[50px] w-72">
              Rock Salt
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
