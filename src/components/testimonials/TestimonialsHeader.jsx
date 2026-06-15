// components/testimonials/TestimonialsHeader.jsx
import SectionBadge from "../services/SectionBadge";
import GoogleReviewBadge from "./GoogleReviewBadge";

function TestimonialsHeader() {
    return (
        <div className="flex items-start justify-between flex-wrap gap-6">
            {/* Left: badge + title */}
            <div className="flex flex-col gap-4">
                <SectionBadge label="Testimonials" />
                <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                    What our clients say
                    <br />
                    about Glassage
                </h2>
            </div>

            {/* Right: Google rating */}
            <GoogleReviewBadge />
        </div>
    );
}

export default TestimonialsHeader;