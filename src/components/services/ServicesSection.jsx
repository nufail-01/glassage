import { useRef } from "react";
import ServicesHeader from "./ServicesHeader";
import ServicesCarousel from "./ServicesCarousel";

function ServicesSection() {
  const carouselRef = useRef(null);

  const scroll = (dir) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#020711] px-6 sm:px-10 py-10 sm:py-12 md:py-14 lg:py-16 flex flex-col gap-6 sm:gap-8 md:gap-10">
      <ServicesHeader onPrev={() => scroll(-1)} onNext={() => scroll(1)} />
      <ServicesCarousel carouselRef={carouselRef} />
    </section>
  );
}

export default ServicesSection;