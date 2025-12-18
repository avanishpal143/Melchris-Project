interface PlaceholderImageProps {
    width?: number;
    height?: number;
    text?: string;
    className?: string;
    gradient?: string;
}

export default function PlaceholderImage({
    width = 400,
    height = 300,
    text = "Image Placeholder",
    className = "",
    gradient = "from-collective-blue to-friend-orange"
}: PlaceholderImageProps) {
    return (
        <div
            className={`bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-semibold rounded-lg ${className}`}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <div className="text-center">
                <div className="text-lg mb-2">{text}</div>
                <div className="text-sm opacity-80">{width} × {height}</div>
            </div>
        </div>
    );
}