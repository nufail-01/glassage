import AboutHeadline from "./AboutHeadline";
import AboutDescription from "./AboutDescription";
import AboutStats from "./AboutStats";
import LearnMoreButton from "./LearnMoreButton";
import AboutImage from "./AboutImage";

function AboutSection() {
  return (
    <section className="bg-[#020711] px-6 sm:px-10 py-10 sm:py-12 md:py-14 lg:py-18 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
      {/* Top headline */}
      <AboutHeadline />

      {/* Divider */}
      <hr className="border-white/10" />

      {/* Bottom row: left content + right image */}
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 items-start justify-between">
        {/* Left */}
        <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 flex-1">
          <AboutDescription />
          <AboutStats />
          <LearnMoreButton />
        </div>

        {/* Right */}
        <AboutImage />
      </div>
    </section>
  );
}

export default AboutSection;