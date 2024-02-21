import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-sec-2-bg bg-contain bg-no-repeat flex flex-col items-center justify-center my-10 lg:flex-row max-w-7xl"
    >
      <Image
        src="/banana-chips.png"
        alt="banana-chips"
        width={404}
        height={701}
        className="w-56 lg:w-auto"
      />
      <div className="m-10">
        <div className="flex m-4 flex-col lg:flex-row items-center justify-center">
          <Image src="/5.jpg" alt="5" width={142} height={216} />
          <h2 className="font-signika_Negative text-[#2f6e3b] text-4xl m-4 font-bold text-center leading-[64px] uppercase">
            YEARS OF SINCE <br /> WE PROVIDE CHIPS <br /> SUCCESSFULLY
          </h2>
        </div>
        <p className="text-[#333333] font-barlow leading-7 text-justify text-lg m-5">
          <span className="text-[#2f6e3b] text-3xl uppercase font-open_Sans font-semibold">
            W
          </span>
          e wish to make the traditional Kerala Banana chips available across
          the globe for all the Banana Chips lovers with the core principles of
          - Maintaining its Authentic nature without adding any preservatives
          and also using Organically available ingredients such as Nendran
          Banana & Turmeric. In addition to this, the product needs to be
          healthy so that it can be used by people of any age and it offers an
          experience in having the snacks from a handy container. Established in
          2016, the parent company - NPR Foods is offering Food products to
          premium hotels & supermarkets in Kerala in addition to our PAN India
          presence in selling Banana Chips online using various Online platforms
          including Amazon, Flipkart etc. Company is founded by Ms.Priya Suresh
          with years of experience in the Food Industry along with the support
          and guidance from remarkable Chefs in India & abroad.
        </p>
      </div>
    </section>
  );
}
