function SeeMoreButton() {
    return (
        <div className="flex justify-center px-4 sm:px-6 md:px-8 lg:px-10">
            <button className="flex items-center gap-2 sm:gap-3 bg-white hover:bg-gray-100 text-black text-sm font-semibold pl-4 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full transition-all duration-200 shadow-lg">
                See More
                <span className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-1.5 sm:p-2 transition-all">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </span>
            </button>
        </div>
    );
}

export default SeeMoreButton;