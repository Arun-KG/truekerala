import About from "@/components/sections/about/About";
import Hero from "@/components/sections/hero/Hero";
import HowAreWeUnique from "@/components/sections/howAreWeUnique/HowAreWeUnique";
import Ingredients from "@/components/sections/ingredients/Ingredients";
import Review from "@/components/sections/review/Review";
import StoreSection from "@/components/sections/storeSection/StoreSection";
import WhyAreWeUnique from "@/components/sections/whyAreWeUnique/WhyAreWeUnique";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <WhyAreWeUnique />
      <About />
      <Ingredients />
      <HowAreWeUnique />
      <Review />
      <StoreSection />
    </main>
  );
}
