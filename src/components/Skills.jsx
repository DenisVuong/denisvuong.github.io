
import {
    SiPython, SiFastapi, SiNodedotjs, SiExpress, SiPhp, SiSpring,
    SiPostgresql, SiMysql, SiSqlite, SiMongodb, SiRedis,
    SiReact, SiHtml5, SiCss3, SiTailwindcss, SiExpo, SiFigma, SiCanva, SiAdobephotoshop,
    SiDocker, SiGit, SiGithub, SiJenkins, SiLinux, SiApple, SiIntellijidea,
    SiJavascript
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const skillsData = [
    {
        category: "Backend & Architecture API",
        items: [
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "FastAPI", icon: SiFastapi, color: "#009688" },
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Express", icon: SiExpress, color: "#000000" },
            { name: "Java", icon: FaJava, color: "#007396" },
            { name: "Spring", icon: SiSpring, color: "#6DB33F" },
            { name: "PHP", icon: SiPhp, color: "#777BB4" }
        ]
    },
    {
        category: "Data & Persistance",
        items: [
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "SQLite", icon: SiSqlite, color: "#003B57" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" }
        ]
    },
    {
        category: "Frontend & Mobile",
        items: [
            { name: "Javascript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "React Native", icon: SiReact, color: "#61DAFB" },
            { name: "Expo", icon: SiExpo, color: "#000000" },
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", icon: SiCss3, color: "#1572B6" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
            { name: "Canva", icon: SiCanva, color: "#00C4CC" },
            { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" }
        ]
    },
    {
        category: "DevOps & Cloud",
        items: [
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "#181717" },
            { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
            { name: "MacOS", icon: SiApple, color: "#000000" },
            { name: "VS Code", icon: VscVscode, color: "#007ACC" },
            { name: "IntelliJ", icon: SiIntellijidea, color: "#000000" }
        ]
    },

];

export default function Skills() {
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center">Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {skillsData.map((category, index) => (
                    <div
                        key={index}
                        className="bg-[#111] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
                    >
                        <h3 className="text-xl font-bold mb-6 text-white/90 border-b border-white/10 pb-4">
                            {category.category}
                        </h3>

                        <div className="flex flex-wrap gap-4">
                            {category.items.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="flex flex-col items-center gap-2 group cursor-default"
                                >
                                    <div
                                        className="p-3 bg-white/5 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors"
                                        title={skill.name}
                                    >
                                        {skill.icon && <skill.icon
                                            size={24}
                                            className="transition-colors"
                                            style={{ color: skill.color }}
                                        />}
                                    </div>
                                    <span className="text-xs text-white/40 group-hover:text-white/70 transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
