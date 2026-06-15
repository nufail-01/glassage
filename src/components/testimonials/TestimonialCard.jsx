// components/testimonials/TestimonialCard.jsx
import StarRating from "../cta/StarRating";
import QuoteIcon from "./QuoteIcon";
import ReviewerAvatar from "./ReviewerAvatar";

function TestimonialCard({ title, review, reviewer, location, rating = 5 }) {
    return (
        <div className="relative flex flex-col justify-between gap-8 bg-[#0d1420] border border-white/5 rounded-2xl p-8 shadow-xl">
            {/* Quote icon top-right */}
            <div className="absolute top-5 right-5 opacity-40">
                <QuoteIcon />
            </div>

            {/* Top: stars + title + review */}
            <div className="flex flex-col gap-3 pr-10">
                <StarRating count={rating} />
                <h3 className="text-white font-semibold text-xl leading-snug">{title}</h3>
                <p className="text-gray-300 text-md leading-relaxed">{review}</p>
            </div>

            {/* Bottom: avatar + name */}
            <div className="flex items-center gap-3 pt-2 border-white/5">
                <ReviewerAvatar name={reviewer} />
                <span className="text-white text-sm font-medium">
                    {reviewer}
                    <span className="text-gray-500"> – {location}</span>
                </span>
            </div>
        </div>
    );
}

export default TestimonialCard;