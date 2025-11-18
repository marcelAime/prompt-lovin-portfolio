import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Briefcase, Calendar, MapPin, ExternalLink, Github } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Agent de collecte - Chargé de collecte de données MCLU",
      company: "OnPoint Africa Analytics",
      location: "Abidjan",
      period: "Mai – Juin 2025",
      type: "Mission",
      description: "Collecte et analyse de données MCLU (Mobile Core Learning Unit). Mise en œuvre d'enquêtes terrain et coordination avec les équipes d'analyse.",
      skills: ["Collecte de données", "Analyse terrain", "MCLU", "Coordination"]
    },
    {
      title: "Agent de collecte - Projet IAP Nestlé Cacao Kit 4",
      company: "Nazan Consulting",
      location: "Abidjan",
      period: "Juil. – Août 2025",
      type: "Mission",
      description: "Collecte et analyse de données auprès des producteurs de cacao pour identifier leurs besoins et soutenir le développement de pratiques agricoles durables et l'amélioration des rendements.",
      skills: ["Collecte de données", "Enquêtes terrain", "Agriculture durable", "ODK Collect"]
    },
    {
      title: "Agent de collecte - Projet Mars et S",
      company: "Nazan Consulting",
      location: "Abidjan",
      period: "Fév. – Mars 2025",
      type: "Mission",
      description: "Collecte et analyse de données auprès des producteurs de cacao pour identifier leurs besoins et soutenir le développement de pratiques agricoles durables et l'amélioration des rendements.",
      skills: ["Collecte de données", "Agriculture", "Enquêtes qualitatives", "SurveyCTO"]
    },
    {
      title: "Agent de collecte - CAREDEFOR, MAGNUN et IRGECC",
      company: "CARE International",
      location: "Abidjan",
      period: "Janv. 2025",
      type: "Mission",
      description: "Collecte et analyse de données auprès des ménages producteurs de cacao bénéficiaires des projets AVEC, tels que CAREDEFOR, MAGNUN et IRGECC initiés par CARE International pour améliorer leurs conditions de vie et pratiques agricoles.",
      skills: ["Collecte de données", "Enquêtes socio-économiques", "CARE International", "Analyse statistique"]
    },
    {
      title: "Agent de collecte - Enquête sur la traite des enfants",
      company: "NORC University Chicago / The Khana Group",
      location: "Abidjan",
      period: "Nov. – Déc. 2024",
      type: "Mission",
      description: "Réalisation d'enquêtes terrain pour collecter des données qualitatives et quantitatives sur la traite des enfants. Conduite d'entretiens en respectant les normes éthiques, collaboration avec les chercheurs pour assurer la fiabilité des données et rédaction de rapports.",
      skills: ["Enquêtes sensibles", "Éthique de recherche", "Collecte qualitative", "Rédaction de rapports"]
    },
    {
      title: "Agent de collecte - Projet GDE/IECD",
      company: "GDE / IECD",
      location: "Abidjan",
      period: "Oct. 2024",
      type: "Mission",
      description: "Collecte de données pour évaluer l'impact de la formation en plomberie sanitaire sur l'insertion professionnelle des apprenants. Réalisation d'entretiens et assurance de la qualité des données collectées.",
      skills: ["Évaluation d'impact", "Entretiens qualitatifs", "Contrôle qualité", "Formation professionnelle"]
    },
    {
      title: "Agent de collecte - Projet IAP Nestlé Cacao Kit 3",
      company: "Nazan Consulting",
      location: "Abidjan",
      period: "Juil. – Sept. 2024",
      type: "Mission",
      description: "Collecte et analyse de données auprès des producteurs de cacao pour identifier leurs besoins et soutenir le développement de pratiques agricoles durables et l'amélioration des rendements.",
      skills: ["Collecte de données", "Secteur cacao", "Développement durable", "Analyse de besoins"]
    },
    {
      title: "Développeur Web Junior / Business Developer / Community Manager",
      company: "Nkinda Sarl",
      location: "Abidjan",
      period: "2022 – 2024",
      type: "CDI",
      description: "Développement d'applications web, gestion de projets digitaux et animation de communautés en ligne. Participation active au développement commercial de l'entreprise.",
      skills: ["Développement Web", "Business Development", "Community Management", "Gestion de projet"]
    }
  ];

  const projects = [
    {
      title: "AMES-CI - ONG Ambassadeurs de l'Espoir",
      description: "Plateforme web complète pour l'ONG AMES-CI (Ambassadeurs de l'Espoir en Côte d'Ivoire). Site vitrine avec présentation des activités, galerie photo, système de dons et section actualités pour promouvoir leurs actions humanitaires.",
      url: "https://ong-ames-ci.org/",
      tech: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      featured: true
    },
    {
      title: "FaciLyfe - Plateforme de Services",
      description: "Plateforme web complète de mise en relation pour la location de logements et l'emploi de personnel domestique à Abidjan. Système de publication d'annonces, recherche avancée et gestion de profils pour faciliter les connexions entre particuliers et professionnels.",
      url: "https://facilyfe.africwork.com/",
      tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
      featured: true
    },
    {
      title: "Site ONG Santé",
      description: "Développement d'un site web pour une organisation de santé avec gestion de contenu et interface utilisateur moderne.",
      url: "https://ong-sante.siteviral.com/",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      featured: true
    },
    {
      title: "Projets GitHub",
      description: "Collection de projets open source et expérimentations techniques disponibles sur mon profil GitHub.",
      url: "https://github.com/marcelAime/",
      tech: ["Java", "Python", "Web Development"],
      featured: false
    }
  ];

  return (
    <section id="experience" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Briefcase className="w-5 h-5" />
            <span className="font-medium">Expérience Professionnelle</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mon 
            <span className="text-gradient"> Parcours</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des expériences variées qui m'ont permis de développer mes compétences techniques et relationnelles dans différents contextes professionnels.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-elegant z-10"></div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="shadow-elegant hover:shadow-glow transition-smooth hover:scale-105 border border-border/50">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="default" className="text-xs">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-primary font-medium mb-3">
                        {exp.company}
                      </h4>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Projets & 
            <span className="text-gradient"> Réalisations</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-premium hover:shadow-glow transition-smooth hover:scale-105 border border-border/50 group overflow-hidden">
                <CardContent className="p-6 relative">
                  {project.featured && (
                    <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-primary-variant text-primary-foreground px-3 py-1 rounded-bl-lg text-xs font-semibold">
                      ⭐ Featured
                    </div>
                  )}
                  <div className="mb-4 mt-2">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">{project.title}</h4>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Project Link */}
                  <EnhancedButton 
                    variant="tech" 
                    size="sm" 
                    asChild
                    className="w-full"
                  >
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      {project.title.includes('GitHub') ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                      Voir le projet
                    </a>
                  </EnhancedButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;