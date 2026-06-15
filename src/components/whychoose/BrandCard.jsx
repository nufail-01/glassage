import { ArrowRight } from "lucide-react";
import logo from "../../assets/images/gl.webp";


function BrandCard() {
  return (
    <div className="relative rounded-3xl bg-slate-900/60 backdrop-blur p-8 border border-slate-700/40 overflow-hidden flex flex-col justify-between min-h-[380px]">
      <div className="relative">
        <div className="w-20 h-20  ">
          <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
        </div>
        <h2 className="text-2xl md:text-3xl font-medium text-white leading-tight">
          Weather-resistant facade and exterior systems
        </h2>
      </div>

      <button className="mt-8 inline-flex items-center gap-3 self-start rounded-full border border-slate-600 pl-6 pr-2 py-2 text-white hover:bg-white/5 transition">
        <span className="font-medium">Read More</span>
        <span className="w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center">
          <ArrowRight className="w-4 h-4" />
        </span>
      </button>
    </div>
  );
}

export default BrandCard;