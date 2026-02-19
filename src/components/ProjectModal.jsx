import { useEffect, useState } from 'react';

export default function ProjectModal({ project, onClose }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for animation
    };

    if (!project) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={handleClose}
            ></div>

            <div
                className={`relative w-full max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
                <div className="flex flex-col md:flex-row h-[85vh] md:h-[650px]">
                    {/* Image Section */}
                    <div className="w-full md:w-5/12 h-64 md:h-full relative bg-black border-r border-white/5">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a]/50"></div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-7/12 p-8 md:p-14 overflow-y-auto flex flex-col bg-[#0a0a0a]">
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors z-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h2>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.techStack?.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-blue-400"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="prose prose-invert max-w-none mb-8 text-gray-300">
                            <p className="text-lg leading-relaxed whitespace-pre-line">{project.description}</p>
                        </div>

                        <div className="mt-auto flex gap-4 pt-6 border-t border-white/10">
                            {project.demoLink && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-center font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
                                >
                                    <span>Live Demo</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            )}
                            {project.repoLink && (
                                <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-center font-medium rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-2"
                                >
                                    <span>GitHub Code</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
