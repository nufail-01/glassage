// components/testimonials/ReviewerAvatar.jsx
function ReviewerAvatar({ name }) {
    // Generate initials from name
    const initials = name
        .split(" ")
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase();

    return (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center shrink-0 border border-white/10">
            <span className="text-white text-xs font-semibold">{initials}</span>
        </div>
    );
}

export default ReviewerAvatar;