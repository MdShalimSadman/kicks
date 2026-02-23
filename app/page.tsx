import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Products/>
      <Categories/>
      <Reviews/>
    </>
  );
}
