import { useState } from "react";
import SlideCard from "./SlideCard";
import HeroBackground from "./HeroBackground";
import { slides } from "../../data/hero/heroSlidesData";

function SlidePanel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="absolute inset-0 w-screen h-screen overflow-hidden pointer-events-none">
      {/* Background changes with slide */}
      <HeroBackground backgroundImage={slides[currentIndex].imageUrl} />

      {/* Slide card — hidden on mobile, visible md+ */}
      <div className="hidden md:block absolute bottom-16 right-16 z-20 pointer-events-auto">
        <SlideCard
          {...slides[currentIndex]}
          currentSlide={currentIndex}
          totalSlides={slides.length}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}

export default SlidePanel;