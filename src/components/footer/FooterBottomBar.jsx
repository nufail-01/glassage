// components/footer/FooterBottomBar.jsx
import FooterSocialLinks from "./FooterSocialLinks";

function FooterBottomBar() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span>
                    © 2026 Glassage. All Rights Reserved |{" "}
                    <span>
                        Developed by <span className="text-blue-400 font-bold">Nufail Shaikh.</span>
                    </span>
                </span>
            </div>
            <FooterSocialLinks />
        </div>
    );
}

export default FooterBottomBar;