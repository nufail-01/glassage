// components/ctabottom/CTABottomBackground.jsx
import image from './src/assets/images/img1_71_image-bg.webp';


export default function CTABottomBackground() {
    return (
        <>
            {/* Glass facade photo — right side */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-right bg-no-repeat"
                    style={{
                        backgroundImage: `url(${imageBg})`,
                    }}
                />
            </div>
            {/* Left-to-right fade: solid blue → transparent */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-sky-500/90 to-sky-400/10" />
            {/* Subtle bottom dark edge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </>
    );
}