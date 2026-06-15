
import StrengthCard from "./StrengthCard";
import { strengths } from "../../data/strengths/strengthsData";

function StrengthsGrid() {
  return (
    <div className="flex gap-5 flex-col md:flex-row">
      {strengths.map((strength, index) => (
        <StrengthCard
          key={index}
          {...strength}
          icon={
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="w-full h-full"
            >
              <image href={strength.icon} width="48" height="48" />
            </svg>
          }
        />
      ))}
    </div>
  );
}

export default StrengthsGrid;