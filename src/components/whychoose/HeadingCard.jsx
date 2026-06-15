import bgShape from "../../assets/images/imgi_33_gemini_photoroom.webp";
import logo from "../../assets/images/gl.webp";

function HeadingCard() {
    return (
        <div className="relative rounded-3xl bg-slate-900/60 backdrop-blur p-10 border border-slate-700/40 overflow-hidden flex flex-col items-center text-center min-h-[400px]">
            <div className="flex items-center gap-2 mb-8 w-full">
                <div className="w-full flex items-center justify-center gap-5">
                    <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                    <span className="text-sky-400 font-medium">Why Choose Us</span>
                </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-medium text-white leading-tight">
                Why Glassage is<br />the right choice
            </h1>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none">
                <img
                    src={bgShape}
                    alt=""
                    className="w-[300px] h-[300px] opacity-[0.10]"
                />
            </div>
        </div>
    );
}

export default HeadingCard;