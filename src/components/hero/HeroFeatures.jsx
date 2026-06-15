import FeatureItem from "./FeatureItem";
import { features } from "../../data/hero/heroFeaturesData";

function HeroFeatures() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-10 flex-wrap">
      {features.map((f) => (
        <FeatureItem
          key={f.id}
          icon={
            <img
              src={f.icon}
              alt={f.alt}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
            />
          }
          text={f.text}
        />
      ))}
    </div>
  );
}

export default HeroFeatures;