
// components/cta/CTAFeatureBar.jsx
import CTAFeatureIcon from "./CTAFeatureIcon";
import features from "./ctaFeaturesData.jsx";

function CTAFeatureBar({ activeIndex, setActiveIndex }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 mt-10 sm:mt-16 lg:mt-25 bg-black/30 backdrop-blur-md rounded-full px-3 sm:px-5 py-2 sm:py-3 border border-white/10 flex-wrap justify-center max-w-full">
      {features.map((f, i) => (
        <CTAFeatureIcon
          key={i}
          icon={f.icon}
          isActive={activeIndex === i}
          onClick={() => setActiveIndex(i)}
        />
      ))}
    </div>
  );
}

export default CTAFeatureBar;