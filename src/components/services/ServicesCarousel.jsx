import ServiceCard from "./ServiceCard";
import { services } from "../../data/services/servicesData";

function ServicesCarousel({ carouselRef }) {
  return (
    <div
      ref={carouselRef}
      className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto pb-2 scroll-smooth px-4 sm:px-6 md:px-8 lg:px-10"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          {...service}
          title={service.title.replace("\\n", "\n")}
        />
      ))}
    </div>
  );
}

export default ServicesCarousel;