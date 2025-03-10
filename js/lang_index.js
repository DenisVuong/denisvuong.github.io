const translation = {

    fr:{
        // Nav Bar
        info : "Infos",
        projet: "Projet",
        contact: "Contact",

        // Welcome
        bienvenue:"Bienvenue je suis ",
        jesuis: "Je suis ",
        etudiant: "étudiant en informatique",

        //Actuellement a...
        actuellement:'Actuellement en <span class="semibold" data-translate="but">BUT Informatique</span> à l’<span class="semibold" data-translate="iut">IUT de Villetaneuse</span>',

        //Qui je suis ?
        Qui:"Qui je suis ? 🙎‍♂️",
        textlong:"Denis Vuong, né en 2005 à Gonesse, en France. Étudiant en informatique, j’aspire à devenir un développeur capable de concevoir des logiciels innovants pour répondre aux enjeux technologiques de demain. <br><br> Optant pour des approches analytiques et méthodiques, je cherche à ameliorer mes compétences en programmation afin de créer des solutions performantes et adaptées aux besoins clients. <br><br>Je m’investis pleinement dans mon apprentissage pour transformer ma passion en expertise et avoir un réel impact dans le domaine du développement logiciel.",

        //timeline
        education:"Education",
        but:"BUT INFORMATIQUE",
        parcours:"Parcours réalisation d’applications : conception, développement, validation",
        premiere:"- Première année validée ✅",

        lyceeloc:"Lycée René Cassin",
        bac:"Bac Général",
        mention:"Bac générale mention assez bien",
        spe:"Spécialités :",
        mathFR:"Mathématiques",
        NSIFR:"Numérique Science Informatique",
        anglais:"LLCER Anglais",

        //skills
        devFR:"💻 Développement & Programmation",
        outilFR:"🛠 Outils & Environnements de Développement",
        VirtualFR:"🖥 Virtualisation & Réseaux",
        AutoFR:"⚙️ Automatisation & Gestion",

        //card

        ressource:"Ressources", // RESSOURCES
        livrable:"Lien vers livrables",
        site:"Lien vers projet", // LIEN VERS PROJET
        rendu:"Lien vers rendu du projet",
        personaFR:"Lien vers persona",
        organisationFR:"Organisation d'un travail d'equipe",
        txtorganisationFR:" Création d’un site web pour un événement culturel en 2025, avec intégration de médias et accessibilité en anglais. Ce projet a sollicité ma participation sur le terrain, j'ai dû interviewer des participants pour enrichir le contenu du site. Cela a parmi le développement de compétences en travail d’équipe, gestion de projet, communication et journalisme.",
        voirPlus:"Voir plus  →", // VOIR PLUS
        devappFR:"Développement d'une application",
        devtxtFR: "Développement en équipe d’un site web pour la gestion des stages à l’université, avec intégration d’une base de données et d’un système de cryptage. Pour ce projet une collaboration efficace était nécessaire pour renforcer nos compétences en travail d’équipe, de développement web et sécurité informatique.",
        recueil: "Recueil de besoins",
        recueiltxtFR:"Mise en situation d'un échange avec un client fictif afin de recueillir les besoins du site afin de réaliser une maquette sur Figma et ajuster selon les retours client.",
        

        // Formulaire

        formulaire:"Formulaire de contact",
        envoyer:"Envoyer" 
    },

    en: {
        // Nav Bar
        info: "Info",
        projet: "Project",
        contact: "Contact",

        // Welcome
        bienvenue: "Welcome, I am ",
        jesuis: "I am ",
        etudiant: "a computer science student",

        // Actuellement a...
        actuellement: 'Currently in <span class="semibold" data-translate="but">Computer Science Bachelor (BUT)</span> at <span class="semibold" data-translate="iut">IUT of Villetaneuse</span>',


        // Who am I?
        Qui: "Who am I? 🙎‍♂️",
        textlong: "Denis Vuong, born in 2005 in Gonesse, France. As a computer science student, I aspire to become a developer capable of designing innovative software to address tomorrow's technological challenges. <br><br> Adopting analytical and methodical approaches, I strive to improve my programming skills to create efficient solutions tailored to client needs. <br><br> I am fully committed to my learning journey to turn my passion into expertise and make a real impact in the software development field.",

        // Timeline
        education: "Education",
        but: "COMPUTER SCIENCE BACHELOR",
        parcours: "Application Development Pathway: design, development, validation",
        premiere: "- First year validated ✅",

        lyceeloc: "René Cassin High School",
        bac: "General Baccalaureate",
        mention: "High school diploma with honors",
        spe: "Specialties:",
        mathFR: "Mathematics",
        NSIFR: "Computer Science",
        anglais: "Advanced English (LLCER)",

        // Skills
        devFR: "💻 Development & Programming",
        outilFR: "🛠 Tools & Development Environments",
        VirtualFR: "🖥 Virtualization & Networks",
        AutoFR: "⚙️ Automation & Management",

        // Card
        ressource: "Resources",
        livrable: "Link to deliverables",
        site: "Project link",
        rendu: "Project submission link",
        personaFR: "Persona link",
        organisationFR: "Teamwork organization",
        txtorganisationFR: "Creation of a website for a cultural event in 2025, including media integration and English accessibility. This project involved field participation, where I had to interview participants to enrich the site's content. It developed skills in teamwork, project management, communication, and journalism.",
        voirPlus: "See more  →",
        devappFR: "Application development",
        devtxtFR: "Team development of a website for internship management at the university, with a database and encryption system integration. This project required effective collaboration to strengthen our skills in teamwork, web development, and cybersecurity.",
        recueil: "Requirement gathering",
        recueiltxtFR: "Role-play meeting with a fictional client to gather website requirements, create a Figma prototype, and adjust based on client feedback.",

        // Form
        formulaire: "Contact form",
        envoyer: "Send"
    }


};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translation[lang] && translation[lang][key]) {
            element.innerHTML = translation[lang][key];
        }
    });
}

const selectLang = document.getElementById('language-select');

selectLang.addEventListener('change', function () {
    const selectedLang = this.value;
    setLanguage(selectedLang);
    localStorage.setItem('selectedLanguage', selectedLang);
});

window.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('selectedLanguage') || 'fr';
    selectLang.value = storedLang;
    setLanguage(storedLang);
});
