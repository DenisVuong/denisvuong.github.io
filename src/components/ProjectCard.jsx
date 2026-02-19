export default function ProjectCard({ title, description, imageUrl, techStack = [], demoLink, repoLink, onClick, displayTitle }) {
    return (
        <div
            onClick={onClick}
            className="bg-[#111] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1 group cursor-pointer"
        >
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                        {demoLink && (
                            <a
                                href={demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                            >
                                Live Demo
                            </a>
                        )}
                        {repoLink && (
                            <a
                                href={repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg backdrop-blur-sm transition-colors"
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{displayTitle || title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2 whitespace-pre-line">{description}</p>

                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
