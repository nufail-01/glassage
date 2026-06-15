// components/testimonials/TestimonialsGrid.jsx
import TestimonialCard from "./TestimonialCard";
import testimonials from "../../data/testimonials/testimonialsData";

function TestimonialsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard
                    key={index}
                    title={testimonial.title}
                    review={testimonial.review}
                    reviewer={testimonial.reviewer}
                    location={testimonial.location}
                    rating={testimonial.rating}
                />
            ))}
        </div>
    );
}

export default TestimonialsGrid;