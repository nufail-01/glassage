// components/ctabottom/CTABottomBanner.jsx
import CTABottomBackground from "./CTABottomBackground";
import CTABottomHeadline from "./CTABottomHeadline";
import CTABottomSubtitle from "./CTABottomSubtitle";
import CTABottomButton from "./CTABottomButton";

export default function CTABottomBanner() {
    return (
        <section className="relative mx-6 sm:mx-10 mb-10 rounded-3xl overflow-hidden min-h-[380px] flex items-center border border-white/5 shadow-2xl">
            {/* Layered background */}
            <CTABottomBackground />

            {/* Content — left aligned */}
            <div className="relative z-10 flex flex-col gap-5 px-10 py-14 max-w-lg">
                <CTABottomHeadline />
                <CTABottomSubtitle />
                <CTABottomButton />
            </div>
        </section>
    );
}