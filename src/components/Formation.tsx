import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Formation = () => {
  const formations = [
    {
      title: "Licence Professionnelle en Informatique",
      specialization: "Option Génie Logiciel",
      institution: "Institut de Formation Art et Développement (IFAD)",
      location: "Abidjan, Plateau",
      period: "Oct. 2019 – Août 2020",
      type: "Licence",
      description: "Compétences en développement d'applications, analyse et conception de logiciels, gestion de projets informatiques. Maîtrise des méthodologies Agile, UML et des langages Java, C++, Python. Expérience en conception de solutions logicielles et optimisation de la qualité des systèmes."
    },
    {
      title: "Baccalauréat A1",
      specialization: "Sciences Mathématiques et Lettres",
      institution: "Lycée Moderne de Dimbokro",
      location: "Dimbokro",
      period: "Sept. 2016 – Juil. 2017",
      type: "Baccalauréat",
      description: "Formation généraliste en sciences mathématiques et lettres, avec des compétences en analyse, résolution de problèmes et travail autonome."
    }
  ];

  const getBadgeVariant = (type: string) => {
    switch(type) {
      case 'Licence': return 'default';
      case 'BTS': return 'secondary';
      case 'Baccalauréat': return 'outline';
      default: return 'default';
    }
  };

  return (
    <section id="formation" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <GraduationCap className="w-5 h-5" />
            <span className="font-medium">Formation Académique</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mon Parcours 
            <span className="text-gradient"> Académique</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une formation solide et progressive en informatique, de la base théorique aux spécialisations techniques avancées.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

            {formations.map((formation, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-elegant z-10 animate-pulse"></div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="shadow-elegant hover:shadow-glow transition-smooth hover:scale-105 border border-border/50">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant={getBadgeVariant(formation.type)} className="text-xs">
                          {formation.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {formation.period}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {formation.title}
                      </h3>
                      
                      {/* Specialization */}
                      <p className="text-primary font-medium mb-3">
                        {formation.specialization}
                      </p>

                      {/* Institution */}
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{formation.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {formation.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-card shadow-elegant">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">3+</div>
            <div className="text-sm text-muted-foreground">Années de formation</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card shadow-elegant">
            <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">2</div>
            <div className="text-sm text-muted-foreground">Diplômes tech</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-card shadow-elegant">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-foreground mb-1">2024</div>
            <div className="text-sm text-muted-foreground">Dernière certification</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;