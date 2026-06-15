import HeroFeatures from "./HeroFeatures";

function HeroContent() {
  return (
    <div className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl  px-4 sm:px-6 md:px-8 lg:px-10 font-medium text-white leading-tight mb-4 md:mb-6 drop-shadow-lg">
        Creating elegant interiors
        <br />
        and architectural exteriors
      </h1>
      <HeroFeatures />
    </div>
  );
}

export default HeroContent;