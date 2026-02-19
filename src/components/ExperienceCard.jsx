export default function ExperienceCard({ company, role, date, location, description, stack = [] }) {
    return (
        <div className="bg-[#111] border border-white/10 p-6 rounded-xl hover:border-white/20 transition-colors group">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-white transition-colors">{role}</h4>
                    <p className="text-white/70">{company}</p>
                </div>
                <div className="text-right">
                    <span className="block text-xs text-white/50 font-mono mb-1">{date}</span>
                    <span className="block text-xs text-white/50">{location}</span>
                </div>
            </div>

            <p className="text-white/60 text-sm mb-4 leading-relaxed whitespace-pre-line">
                {description}
            </p>

            <div className="flex flex-wrap gap-2">
                {stack.map((tech, index) => (
                    <span
                        key={index}
                        className="px-2 py-1 text-[10px] uppercase tracking-wider bg-white/5 text-white/50 rounded border border-white/5"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
