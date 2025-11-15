import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle2, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "OS Philosophy & GLPU Level 1",
      issuer: "Organisation internationale",
      date: "2024",
      category: "Systèmes d'exploitation",
      description: "Maîtrise des fondamentaux des systèmes d'exploitation et des principes GLPU.",
      icon: "🖥️"
    },
    {
      title: "Odoo Dev Skills Level 1",
      issuer: "Odoo",
      date: "2024",
      category: "ERP & Business",
      description: "Compétences en développement de modules Odoo et personnalisation ERP.",
      icon: "⚙️"
    },
    {
      title: "OSU Level 1 PHP",
      issuer: "OpenClassrooms / OSU",
      date: "2024",
      category: "Développement Web",
      description: "Fondamentaux du développement PHP et programmation orientée objet.",
      icon: "🐘"
    },
    {
      title: "Web Development - PHP Level 1 & 2",
      issuer: "Plateforme de certification",
      date: "2023-2024",
      category: "Développement Web",
      description: "Développement web avancé avec PHP : architecture MVC, bases de données, sécurité.",
      icon: "💻"
    },
    {
      title: "Odoo Business Development Support",
      issuer: "Odoo",
      date: "2024",
      category: "ERP & Business",
      description: "Support au développement commercial et utilisation des modules Odoo CRM et Sales.",
      icon: "📊"
    },
    {
      title: "Web Development - WordPress Level 1 & 2",
      issuer: "Plateforme de certification",
      date: "2023-2024",
      category: "CMS & Web",
      description: "Développement de sites WordPress : thèmes personnalisés, plugins, optimisation SEO.",
      icon: "📝"
    },
    {
      title: "Linux Level 1 Fundamental",
      issuer: "Linux Foundation / Organisme certifié",
      date: "2023",
      category: "Systèmes d'exploitation",
      description: "Administration système Linux, ligne de commande, gestion de fichiers et permissions.",
      icon: "🐧"
    },
    {
      title: "ITIL V4 - Incident Management Fundamental",
      issuer: "AXELOS / PeopleCert",
      date: "2023",
      category: "Gestion IT",
      description: "Gestion des incidents IT selon les meilleures pratiques ITIL V4.",
      icon: "🎯"
    }
  ];

  const categories = [
    { name: "Développement Web", count: 3, color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    { name: "ERP & Business", count: 2, color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
    { name: "Systèmes d'exploitation", count: 2, color: "bg-green-500/10 text-green-500 border-green-500/20" },
    { name: "Gestion IT", count: 1, color: "bg-orange-500/10 text-orange-500 border-orange-500/20" }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 shadow-glow">
            <Award className="w-5 h-5" />
            <span className="font-medium">Certifications Professionnelles</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Mes 
            <span className="text-gradient"> Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Formation continue et validation des compétences techniques à travers des certifications reconnues internationalement.
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <Card key={index} className={`${category.color} border transition-smooth hover:scale-105 shadow-elegant`}>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold mb-1">{category.count}</div>
                <div className="text-xs font-medium">{category.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="group shadow-elegant hover:shadow-glow transition-smooth hover:scale-105 border border-border/50 glass-card overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <Badge variant="secondary" className="text-xs">
                    {cert.category}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* Verification indicator */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-primary">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="font-medium">Certifié</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="shadow-elegant glass-card border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">8</div>
                  <div className="text-sm text-muted-foreground">Certifications Obtenues</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">4</div>
                  <div className="text-sm text-muted-foreground">Domaines d'Expertise</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gradient mb-2">2023-2024</div>
                  <div className="text-sm text-muted-foreground">Formation Continue</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
