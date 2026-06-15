import logo from "../../assets/logo.webp";

function Logo() {
  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt="Glassage Interior and Exterior Pvt Ltd"
        className="h-14 md:h-16 lg:h-19 w-auto object-contain"
      />
    </div>
  );
}

export default Logo;