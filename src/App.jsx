import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Dither from './Dither';
import SplitText from "./SplitText";
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import TechBackground from './components/TechBackground';
import ExperienceCard from './components/ExperienceCard';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Grainient from './Grainient';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgLinkTrack from './img/LinkTrack.png';
import imgDexia from './img/dexia logo.png';
import imgDexiaScreen from './img/dexia_screen.png';
import imgSaePhp from './img/saephp.png';

gsap.registerPlugin(ScrollTrigger);

const handleAnimationComplete = () => {

  console.log('All letters have animated!');

};

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Projects Animation
      gsap.fromTo(
        projectsRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            scroller: mainRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Skills Animation
      gsap.fromTo(
        skillsRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            scroller: mainRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Experience Animation
      gsap.fromTo(
        experienceRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: experienceRef.current,
            scroller: mainRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
      // About Animation
      gsap.fromTo(
        aboutRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            scroller: mainRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, [projectsRef, skillsRef, experienceRef, aboutRef]);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-black text-white relative">
      <div className={`transition-all duration-500 ease-in-out ${selectedProject ? 'blur-sm brightness-50' : ''}`}>
        <Header />
        <Section id="hero" className="relative">
          <div className="absolute inset-0 w-full h-full bg-black opacity-40">
            <Dither
              waveColor={[0.5, 0.5, 0.5]}
              disableAnimation={false}
              enableMouseInteraction={false}
              mouseRadius={0.3}
              colorNum={4}
              waveAmplitude={0.3}
              waveFrequency={3}
              waveSpeed={0.05}
            />
          </div>

          <div className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10'>
            <SplitText
              text="Étudiant en BUT Informatique"
              className="text-xl md:text-2xl font-light uppercase tracking-widest text-center"
              delay={0.2}
              duration={1}
              stagger={0.02}
              enableScrollTrigger={false}
            />
            <SplitText
              text="Denis VUONG"
              className="text-4xl md:text-8xl font-bold uppercase mt-1 text-center"
              delay={0.5}
              duration={1}
              stagger={0.03}
              enableScrollTrigger={false}
            />
            <SplitText
              text="En recherche d'un stage à partir du 9 mars 2026"
              className="text-xl md:text-1xl font-light uppercase mt-1 text-center"
              delay={0.5}
              duration={0.5}
              stagger={0.03}
              enableScrollTrigger={false}
            />
          </div>


        </Section>

        <Section id="about" className="border-white/10 relative">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center" ref={aboutRef}>
            <h2 className="text-4xl font-bold mb-8 md:mb-12">À propos</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              {/* Text Content - 2/3 width */}
              <div className="md:col-span-2 space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  Hello ! Je suis Denis, développeur Full Stack avec un gros faible pour le Back-end et l'Intelligence Artificielle. Ce qui me passionne dans le code, c'est le moment précis où un produit prend vie et devient 100 % fonctionnel. Que ce soit en créant une automatisation ou en développant une application complète de A à Z, mon moteur reste le même : concevoir des outils concrets qui facilitent le quotidien et résolvent de vrais problèmes. Je ne code pas juste pour aligner des lignes, je code pour que ça serve à quelqu'un.
                </p>
                <p>
                  Mon approche du développement commence d'ailleurs toujours par l'utilisateur. Avant même de toucher à mon IDE, je me pose deux questions : « Quel problème cela résout-il, et pour qui ? ». Une fois l'utilité définie, j'imagine l'identité visuelle et le design du projet, puis je passe à la technique.
                </p>
                <p>
                  Quand je ne suis pas en train de débugger mon code, j'échange mon clavier pour une tête de lion ! Depuis juin 2023, je suis membre très actif de l'association LDFA (Lion Dance Franco-Asiatique). Vous pouvez me retrouver sous le costume du lion ou aux percussions lors de grands événements (nous avons notamment fait des démonstrations chez Tang Frères et dans les locaux de Google !). J'y exprime aussi ma créativité visuelle en gérant toute la communication de l'association sur Instagram et TikTok (montage vidéo, photo, création d'affiches). C'est une passion intense qui m'apporte un équilibre parfait entre tradition, esprit d'équipe et dépassement de soi !
                </p>
              </div>

              {/* Image Placeholder - 1/3 width */}
              <div className="md:col-span-1 flex justify-center items-center">
                {/* <div className="w-80 h-80 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group shadow-lg shadow-white/5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div> */}
              </div>
            </div>
          </div>
        </Section>

        <Section id="projects" className="relative">
          <TechBackground />
          <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10" ref={projectsRef}>
            <h2 className="text-4xl font-bold mb-12 text-center">Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="LinkTrack (projet en cours...)"
                displayTitle={<span>LinkTrack <span className="font-light text-white/70 text-lg">(projet en cours...)</span></span>}
                description={`Raccourcisseur d'URLs SaaS avec tracking des clics`}
                imageUrl={imgLinkTrack}
                techStack={['Node.js', 'Express', 'PostgreSQL', 'Docker', 'JWT', 'React', 'Tailwind CSS']}
                repoLink="https://github.com/DenisVuong/LinkTrack"
                onClick={() => setSelectedProject({
                  title: "LinkTrack",
                  description: `Architecture REST API robuste avec authentification sécurisée JWT et containerisation Docker. Le système backend gère le tracking des clics et le parsing User-Agent.
                  
                  Le développement de l'interface utilisateur (front-end) est actuellement en cours.`,
                  imageUrl: imgLinkTrack,
                  techStack: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'JWT', 'React', 'Tailwind CSS'],
                  repoLink: "https://github.com/DenisVuong/LinkTrack"
                })}
              />
              <ProjectCard
                title="Dexia"
                description="Développement d'une application mobile de recommandation de films."
                imageUrl={imgDexia}
                techStack={['React Native', 'Native Wind', 'Expo', 'SQLite', 'Git/Github']}
                repoLink="https://github.com/Maxime-Lointier/Dexia"
                onClick={() => setSelectedProject({
                  title: "Dexia - Application mobile",
                  description: "Dexia est une application mobile native conçue pour offrir des recommandations de films via une interface de type 'swipe'. Le projet intègre un algorithme de filtrage qui analyse les interactions de l'utilisateur (Likes/Dislikes) pour affiner les suggestions en temps réel et afficher un taux de compatibilité. Les fonctionnalités incluent la gestion de profil, la visualisation de statistiques dynamiques et la gestion de listes (historique et watchlist) avec persistance des données.",
                  imageUrl: imgDexiaScreen,
                  techStack: ['React Native', 'Native Wind', 'Expo', 'SQLite', 'Git/Github'],
                  repoLink: "https://github.com/Maxime-Lointier/Dexia"
                })}
              />
              <ProjectCard
                title="Gestionnaire de stages BUT"
                description="Application web responsive centralisant le suivi administratif et pédagogique des stages (S4/S6) pour l'IUT de Villetaneuse."
                imageUrl={imgSaePhp}
                techStack={['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS']}
                repoLink="https://github.com/LiOlivier/SAE-S3.01"
                onClick={() => setSelectedProject({
                  title: "Gestionnaire de stages BUT",
                  description: "Conception d'une plateforme de gestion complète suite à la réforme du BUT. L'outil permet le suivi en temps réel des étapes clés : conventions, comptes rendus d'installation, entretiens de mi-parcours et dépôts de rapports. Comprend des tableaux de bord spécifiques pour les étudiants, tuteurs et responsables, avec système de notifications et historique.",
                  imageUrl: imgSaePhp,
                  techStack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Git/Github'],
                  repoLink: "https://github.com/LiOlivier/SAE-S3.01"
                })}
              />
            </div>
          </div>
        </Section>

        <Section id="skills" className="relative">

          <div className="absolute inset-0 z-0">
            <Grainient
              color1="#3d3d3dff"
              color2="#606060ff"
              color3="#4b4b4bff"
              timeSpeed={0.50}
              colorBalance={0}
              warpStrength={1}
              warpFrequency={5}
              warpSpeed={2}
              warpAmplitude={50}
              blendAngle={0}
              blendSoftness={0.05}
              rotationAmount={500}
              noiseScale={2}
              grainAmount={0.1}
              grainScale={2}
              grainAnimated={false}
              contrast={1.5}
              gamma={1}
              saturation={1}
              centerX={0}
              centerY={0}
              zoom={0.9}
            />
          </div>
          <div ref={skillsRef} className="relative z-10">
            <Skills />
          </div>
        </Section>

        <Section id="experience" className="bg-gradient-to-b from-black via-[#0a0a0a] to-[#1F1F1F]">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center" ref={experienceRef}>
            <h2 className="text-4xl font-bold mb-16 text-center">Parcours</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              {/* Left Column: Education / Formation */}
              <div>
                <h3 className="text-2xl font-light uppercase tracking-widest mb-8 text-white/80 flex items-center gap-4">
                  <span className="w-8 h-px bg-white/50"></span>
                  Formation
                </h3>
                <div className="flex flex-col gap-8 border-l border-white/10 pl-8 ml-4">

                  {/* Timeline Item 1 */}
                  <div className="relative">
                    <div className="absolute w-3 h-3 bg-white rounded-full -left-[39px] top-1.5 ring-4 ring-black"></div>
                    <span className="text-xs font-mono text-white/60 mb-1 block">2023 - Présent</span>
                    <h4 className="text-xl font-bold mb-1">BUT Informatique</h4>
                    <p className="text-white/60 text-sm">Sorbonne Paris Nord - IUT de Villetaneuse</p>
                    <p className="mt-3 text-white/50 text-sm leading-relaxed">
                      Spécialisation en réalisation d'applications (conception, développement, validation).
                      <br></br>
                      <br></br>
                      Deux premières années validées.
                    </p>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative">
                    <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[39px] top-1.5 ring-4 ring-black"></div>
                    <span className="text-xs font-mono text-white/40 mb-1 block">2020 - 2023</span>
                    <h4 className="text-xl font-bold mb-1">Baccalauréat Général</h4>
                    <p className="text-white/60 text-sm">Lycée René Cassin (95)</p>
                    <p className="mt-3 text-white/50 text-sm leading-relaxed">
                      Spécialités Mathématiques et Numérique et Sciences Informatiques (NSI). Mention Assez Bien.
                    </p>
                  </div>

                </div>
              </div>

              {/* Right Column: Professional Experience */}
              <div>
                <h3 className="text-2xl font-light uppercase tracking-widest mb-8 text-white/80 flex items-center gap-4">
                  <span className="w-8 h-px bg-white/50"></span>
                  Expérience
                </h3>
                <div className="flex flex-col gap-6">
                  <ExperienceCard
                    role="Consultant Digital Process Automation (stage)"
                    company="Société de conseil et services IT"
                    date="Février 2025 - Avril 2025"
                    location="Ho Chi Minh, Vietnam"
                    description="Ce stage visait à moderniser les processus de gestion SAP en développant des solutions d'automatisation intelligente sur le cloud Microsoft. 
                      
                    J'ai d'abord analysé les flux de données métiers pour identifier les tâches manuelles critiques. Ensuite, j'ai conçu et déployé des applications via Power Apps pour automatiser ces actions, ce qui a permis de simplifier le travail des équipes et d'améliorer la productivité globale."
                    stack={['Power Automate', 'Odoo', 'Make', 'Gemini (API)']}
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" className="relative">
          <Contact />
        </Section>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
