import a from "../../assets/images/imgi_10_4.WEBP";

function AboutImage() {
  return (
    <div className="w-full max-w-full sm:max-w-[420px] md:max-w-[470px] lg:max-w-[520px] h-[200px] sm:h-[240px] md:h-[290px] lg:h-[330px] rounded-2xl overflow-hidden shrink-0 shadow-2xl group cursor-pointer relative">

      {/* Premium Architectural Image Layer */}
      <img
        src={a}
        alt="Glassage architectural project"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Subtle Premium Glass Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    </div>
  );
}

export default AboutImage;