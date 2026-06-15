function LearnMoreButton() {
  return (
    <button className="flex items-center gap-2 sm:gap-3 bg-white hover:bg-gray-100 text-black text-sm sm:text-base font-medium px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-200 w-fit ml-4 sm:ml-6 md:ml-8 lg:ml-10">
      Learn More
      <span className="bg-[#3aaade] hover:bg-blue-600 text-white rounded-full p-2 sm:p-2.5 transition-all">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 sm:w-4.5 sm:h-4.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </button>
  );
}

export default LearnMoreButton;