import StrengthsHeader from "./StrengthsHeader";
import StrengthsGrid from "./StrengthsGrid";
import bgImage from "../../assets/images/imgi_71_image-bg.webp";

function StrengthsSection() {
  return (
    <section className="relative bg-[#020711] px-6 sm:px-10 py-10 sm:py-12 md:py-14 lg:py-16 flex flex-col gap-8 sm:gap-10 md:gap-12 overflow-hidden">
      {/* Background watermark image top-left */}
      <div className="absolute top-4 left-6 w-[320px] h-[320px] select-none pointer-events-none">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <StrengthsHeader />
      <StrengthsGrid />
    </section>
  );
}

export default StrengthsSection;