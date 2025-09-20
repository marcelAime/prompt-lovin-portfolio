import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Settings, Zap, Layers } from "lucide-react";

const Competences = () => {
  const skillCategories = [
    {
      title: "Langages de Programmation",
      icon: Code,
      skills: ["Java", "C++", "Python", "PHP"],
      color: "text-blue-600"
    },
    {
      title: "Technologies Web",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "SQL"],
      color: "text-green-600"
    },
    {
      title: "Outils & Plateformes",
      icon: Settings,
      skills: ["ODK Collect", "SurveyCTO", "KoboToolbox", "Odoo"],
      color: "text-purple-600"
    },
    {
      title: "Méthodologies",
      icon: Layers,
      skills: ["UML", "Agile", "Analyse logicielle", "Gestion de projet"],
      color: "text-orange-600"
    }
  ];

  const expertise = [
    {
      title: "Développement Full-Stack",
      description: "Conception et développement d'applications complètes",
      level: 85,
      icon: Zap
    },
    {
      title: "Analyse de Données",
      description: "Collecte, traitement et analyse de données métier",
      level: 90,
      icon: Database
    },
    {
      title: "Gestion de Projet",
      description: "Coordination et suivi de projets informatiques",
      level: 80,
      icon: Layers
    }
  ];

  return (
    <section id="competences" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Code className="w-5 h-5" />
            <span className="font-medium">Compétences Techniques</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mes 
            <span className="text-gradient"> Expertises</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un ensemble de compétences techniques et méthodologiques acquises à travers ma formation et mes expériences professionnelles.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth hover:scale-105 border border-border/50">
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-3`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expertise Levels */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Niveaux d'Expertise</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <Card key={index} className="shadow-elegant border border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Niveau</span>
                      <span className="text-primary font-medium">{item.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="hero-gradient h-2 rounded-full transition-smooth"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;