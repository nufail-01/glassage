// components/testimonials/TestimonialsSection.jsx
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsGrid from "./TestimonialsGrid";

function TestimonialsSection() {
    return (
        <section className="bg-[#020710] px-6 sm:px-10 py-16 flex flex-col gap-10">
            <TestimonialsHeader />
            <TestimonialsGrid />
        </section>
    );
}

export default TestimonialsSection;