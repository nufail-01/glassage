
// components/cta/CTAWindow.jsx
import CTAFeatureBar from "./CTAFeatureBar";
import { ctaBackgrounds } from "../../data/cta/ctaBackgroundsData";

function CTAWindow({ activeIndex, setActiveIndex }) {
  return (
    <div className="relative flex flex-col items-center gap-0 mt-6">
      {/* Feature icon bar */}
      <div className="-mt-1">
        <CTAFeatureBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
    </div>
  );
}

export default CTAWindow;