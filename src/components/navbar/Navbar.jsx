import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">

      <Logo />
      <NavLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Enquire Now — desktop only (lg and above) */}
      <button
        className="hidden lg:block relative overflow-hidden text-black text-sm font-semibold px-8 py-3 rounded-full transition-all duration-300 cursor-pointer"
        style={{
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(20px) saturate(1.4)",
          WebkitBackdropFilter: "blur(20px) saturate(1.4)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "rgb(0, 0, 0)";
          e.currentTarget.style.border = "1px solid rgba(255,255,255,0.15)";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.85)";
          e.currentTarget.style.border = "1px solid rgba(255,255,255,0.4)";
          e.currentTarget.style.color = "black";
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
        Enquire Now
      </button>

    </nav>
  );
}

export default Navbar;