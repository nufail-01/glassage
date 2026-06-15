function HeroBackground({ backgroundImage }) {
  return (
    <div className="absolute inset-0 w-full h-full sm:h-[85vh] md:h-full">
      {/* Dynamic Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
    </div>
  );
}

export default HeroBackground;



