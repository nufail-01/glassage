// components/about/AboutHeadline.jsx

function AboutHeadline() {
  const text = "Glassage combines innovation, aesthetics, and functionality to deliver premium solutions in glass facades, ACP cladding, aluminium systems, UPVC windows, roofing solutions, and luxury interiors for residential and commercial projects across industries.";

  return (
    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-[#21b5ff] flex flex-wrap gap-x-[4px] sm:gap-x-[5px] md:gap-x-[6px] gap-y-1 px-4 sm:px-6 md:px-8 lg:px-10">
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-300 hover:text-white cursor-default"
        >
          {word}
        </span>
      ))}
    </h2>
  );
}

export default AboutHeadline;