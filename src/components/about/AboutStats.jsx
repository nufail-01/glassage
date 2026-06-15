import StatItem from "./StatItem";
import { stats } from "../../data/about/aboutStatsData";

function AboutStats() {
  return (
    <div className="flex gap-8 sm:gap-10 md:gap-12 lg:gap-16 flex-wrap px-4 sm:px-6 md:px-8 lg:px-10">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
}

export default AboutStats;