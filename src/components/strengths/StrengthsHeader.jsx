// components/strengths/StrengthsHeader.jsx
import SectionBadge from "../services/SectionBadge";

function StrengthsHeader() {
  return (
    <div className="flex flex-col items-center gap-4 text-center px-4 sm:px-6 md:px-8 lg:px-10">
      <SectionBadge label="Our Strengths" />
      <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-medium text-white leading-tight">
        Why clients trust
        <br />
        Glassage's solutions
      </h2>
    </div>
  );
}

export default StrengthsHeader;