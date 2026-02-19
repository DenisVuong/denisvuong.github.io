export default function TechBackground() {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#1F1F1F]"></div>

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>


        </div>
    );
}
