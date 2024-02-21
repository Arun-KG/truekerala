import TestimonyCard from "@/components/testimonyCard/TestimonyCard";
import Image from "next/image";

export default function Review() {
  return (
    <section className="flex flex-col lg:flex-row w-full relative">
      <div className="bg-[#eeeff2]">
        <Image
          src="/coma.png"
          alt="health-first-policy"
          width={75}
          height={41}
          className="w-96 p-10"
        />
      </div>
      <div className=" bg-[#f5f953] w-full h-96 flex items-center overflow-hidden relative">
        <div className="flex absolute right-0 h-5/6 w-full overflow-x-scroll scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-transparent ">
          <TestimonyCard person="Lakshmi gangadharan">
            "Could feel the freshness of the ingredients, the taste was
            authentic Kerala home style banana chips. The packaging is ideal for
            gifting."
          </TestimonyCard>
          <TestimonyCard person="Lakshmi gangadharan">
            "Could feel the freshness of the ingredients, the taste was
            authentic Kerala home style banana chips. The packaging is ideal for
            gifting."
          </TestimonyCard>
          <TestimonyCard person="Lakshmi gangadharan">
            "Could feel the freshness of the ingredients, the taste was
            authentic Kerala home style banana chips. The packaging is ideal for
            gifting."
          </TestimonyCard>
          <TestimonyCard person="Lakshmi gangadharan">
            "Could feel the freshness of the ingredients, the taste was
            authentic Kerala home style banana chips. The packaging is ideal for
            gifting."
          </TestimonyCard>
          <TestimonyCard person="Lakshmi gangadharan">
            "Could feel the freshness of the ingredients, the taste was
            authentic Kerala home style banana chips. The packaging is ideal for
            gifting."
          </TestimonyCard>
          <TestimonyCard person="Lakshmi gangadharan">
            "Could feel the freshness of the ingredients, the taste was
            authentic Kerala home style banana chips. The packaging is ideal for
            gifting."
          </TestimonyCard>
          <TestimonyCard person="Lakshmi gangadharan">
            "Could feel the freshness of the ingredients, the taste was
            authentic Kerala home style banana chips. The packaging is ideal for
            gifting."
          </TestimonyCard>
          <TestimonyCard person="Lakshmi gangadharan">
            "Could feel the freshness of the ingredients, the taste was
            authentic Kerala home style banana chips. The packaging is ideal for
            gifting."
          </TestimonyCard>
        </div>
      </div>
      <h4 className="text-[#2f6e3b] absolute text-center top-1/4 ml-10 font-signika_Negative uppercase text-3xl sm:text-4xl font-bold">
        PEOPLE'S SAY <br />
        US
      </h4>
    </section>
  );
}
