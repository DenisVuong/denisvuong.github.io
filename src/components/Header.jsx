import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function Header() {
    const scrollToId = useSmoothScroll();

    const handleClick = (e, id) => {
        e.preventDefault();
        scrollToId(id);
    };

    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50 text-white mix-blend-difference pointer-events-none">
            <a href="#hero" onClick={(e) => handleClick(e, 'hero')} className="text-xl font-bold uppercase pointer-events-auto cursor-pointer">DV</a>
            <nav className="flex gap-8 pointer-events-auto">
                <a href="#about" onClick={(e) => handleClick(e, 'about')} className="hover:opacity-70 transition-opacity uppercase text-sm cursor-pointer">About</a>
                <a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="hover:opacity-70 transition-opacity uppercase text-sm cursor-pointer">Projects</a>
                <a href="#skills" onClick={(e) => handleClick(e, 'skills')} className="hover:opacity-70 transition-opacity uppercase text-sm cursor-pointer">Skills</a>
                <a href="#experience" onClick={(e) => handleClick(e, 'experience')} className="hover:opacity-70 transition-opacity uppercase text-sm cursor-pointer">Experience</a>
                <a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="hover:opacity-70 transition-opacity uppercase text-sm cursor-pointer">Contact</a>
            </nav>
        </header>
    );
}
