import Card from "@/components/card/Card";

export default function WhyAreWeUnique() {
  return (
    <section className="flex flex-col w-full justify-center items-center bg-sec-1-bg bg-contain bg-no-repeat pt-12 py-10 lg:pt-24">
      <h1 className="text-[#2f6e3b] font-signika_Negative uppercase text-3xl sm:text-4xl font-bold">
        WHY ARE WE UNIQUE
      </h1>
      <div className="flex flex-col md:flex-row">
        <Card image="/card-img-1.png" title="health first policy">
          Our customers are our family members. So we won't do anything harmful
          to you or to your family's health. We will not add any preservatives
          to increase the shelf life, we won't use any kind of external elements
          to increase the crispiness, we won't reuse the oil for later use and
          we don’t add any colours or flavours to increase the taste & colour of
          Banana Chips.
        </Card>
        <Card image="/card-img-2.png" title="AUTHENTIC & ORGANIC">
          We are using Nendran Banana which is mostly seen in Kerala with a lot
          of specialities including its taste, texture, and nutritional facts.
          We are also procuring bananas which are 'organic' in nature. This
          might not be bigger in size. but we ensure it is authentic & organic.
        </Card>
        <Card image="/card-img-3.png" title="EXPERIENCE IN SNACKING">
          We are also ensuring that you get the maximum experience while having
          the snacks, whether you are eating the chips at the office, work time
          or with friends / family. <br /> The sophisticated packaging on
          canisters ensures best experience in handling the packet while having
          the chips.
        </Card>
      </div>
    </section>
  );
}
