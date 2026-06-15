import { Gem, Award } from "lucide-react";
import BrandCard from "./BrandCard";
import HeadingCard from "./HeadingCard";
import StatsCard from "./StatsCard";
import ExperienceCard from "./ExperienceCard";
import RankCard from "./RankCard";
import FeatureCard from "./FeatureCard";

function WhyChooseUs() {
    return (
        <section className="min-h-screen bg-[#020711] py-15 px-6 sm:px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Left column */}
                <div className="flex flex-col gap-5">
                    <BrandCard />
                    <StatsCard />
                </div>

                {/* Center wide */}
                <div className="lg:col-span-2 flex flex-col gap-5">
                    <HeadingCard />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FeatureCard
                            iconBg="linear-gradient(135deg, #fb923c, #ea580c)"
                            icon={<Gem className="w-7 h-7 text-white" />}
                            title="Premium Quality Standards"
                            description="High-grade materials and expert project execution"
                        />
                        <FeatureCard
                            iconBg="linear-gradient(135deg, #38bdf8, #2563eb)"
                            icon={<Award className="w-7 h-7 text-white" />}
                            title="Innovative Design Expertise"
                            description="Modern facade and interior solutions for every project"
                        />
                    </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-5">
                    <ExperienceCard />
                    <RankCard />
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;