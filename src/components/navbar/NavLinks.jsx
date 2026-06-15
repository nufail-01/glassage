import { useState } from "react";

const links = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Our Expertise", id: "expertise" },
  { label: "Projects", id: "projects" },
  { label: "Careers", id: "careers" },
  { label: "Contact Us", id: "contact" },
  { label: "Blogs", id: "blogs" },
];

function NavLinks({ menuOpen, setMenuOpen }) {
  const [active, setActive] = useState("Home");

  const handleClick = (link) => {
    setActive(link.label);
    setMenuOpen(false);
    const el = document.getElementById(link.id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop */}
      <div
        className="hidden lg:flex items-center gap-1 rounded-full px-4 py-2 relative overflow-hidden"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(20px) saturate(1.4)",
          WebkitBackdropFilter: "blur(20px) saturate(1.4)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
        {links.map((link) => (
          <button
            key={link.label}
            onClick={() => handleClick(link)}
            className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${active === link.label
                ? "bg-black/80 text-white shadow-md"
                : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden flex flex-col justify-center gap-1.5 w-10 h-10 p-2 rounded-xl"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(20px) saturate(1.4)",
          WebkitBackdropFilter: "blur(20px) saturate(1.4)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
        aria-label="Toggle menu"
      >
        <span className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
        <span className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="lg:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl p-3 flex flex-col gap-1 z-50"
          style={{
            background: "rgba(10, 10, 20, 0.90)",
            backdropFilter: "blur(20px) saturate(1.4)",
            WebkitBackdropFilter: "blur(20px) saturate(1.4)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${active === link.label
                  ? "bg-white/15 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
            >
              {link.label}
            </button>
          ))}

          <div className="mt-2 pt-2 border-t border-white/10">
            <button
              className="w-full relative overflow-hidden text-black text-sm font-semibold px-8 py-3 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(20px) saturate(1.4)",
                WebkitBackdropFilter: "blur(20px) saturate(1.4)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default NavLinks;