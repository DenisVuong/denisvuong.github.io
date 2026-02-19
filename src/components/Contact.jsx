import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold mb-12 text-center">Me contacter</h2>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl w-full max-w-2xl text-center shadow-xl">
                <p className="text-xl text-white/80 mb-10 leading-relaxed">
                    N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement pour échanger !
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    <a
                        href="mailto:vuong.denis.p@gmail.com"
                        className="group flex flex-col items-center gap-4 text-white/70 hover:text-white transition-colors duration-300"
                        aria-label="Email"
                    >
                        <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 ring-1 ring-white/10 group-hover:ring-white/30">
                            <FaEnvelope className="text-4xl" />
                        </div>
                        <span className="text-sm font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-8">Email</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/denisvuong/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4 text-white/70 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 ring-1 ring-white/10 group-hover:ring-white/30">
                            <FaLinkedin className="text-4xl" />
                        </div>
                        <span className="text-sm font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-8">LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/DenisVuong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4 text-white/70 hover:text-white transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300 ring-1 ring-white/10 group-hover:ring-white/30">
                            <FaGithub className="text-4xl" />
                        </div>
                        <span className="text-sm font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-8">GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
