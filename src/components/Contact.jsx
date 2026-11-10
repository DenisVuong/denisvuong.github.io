import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const links = [
    { label: 'Email', detail: 'vuong.denis.p@gmail.com', href: 'mailto:vuong.denis.p@gmail.com', icon: <FaEnvelope aria-hidden="true" className="contact-icon" /> },
    { label: 'LinkedIn', detail: 'Échangeons sur LinkedIn', href: 'https://www.linkedin.com/in/denisvuong/', icon: <FaLinkedin aria-hidden="true" className="contact-icon" /> },
    { label: 'GitHub', detail: 'Découvrir mon code', href: 'https://github.com/DenisVuong', icon: <FaGithub aria-hidden="true" className="contact-icon" /> },
];

export default function Contact() {
    return (
        <div className="contact-section w-full min-h-screen flex items-center relative overflow-hidden">
            <div className="contact-content container mx-auto px-6 relative z-10">
                <div className="contact-heading">
                    <h2>Parlons de<br /><span>la suite.</span></h2>
                    <p>Un projet, une opportunité ou simplement envie d’échanger ? Je serais ravi d’en discuter.</p>
                </div>
                <div className="contact-links">
                    {links.map(({ label, detail, href, icon }) => (
                        <a key={label} href={href} {...(href.startsWith('https:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                            {icon}
                            <span><strong>{label}</strong><small>{detail}</small></span>
                            <FaArrowRight aria-hidden="true" className="contact-arrow" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
