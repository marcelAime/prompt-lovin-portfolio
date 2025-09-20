import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const CalendlyWidget = () => {
  useEffect(() => {
    // Supprimer tout script Calendly existant pour éviter les conflits
    const existingScripts = document.querySelectorAll('script[src*="calendly"]');
    existingScripts.forEach(script => script.remove());

    // Ajouter le script Calendly officiel
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup si nécessaire
      const scripts = document.querySelectorAll('script[src*="calendly"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <section id="calendly" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Prise de rendez-vous</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Planifiez un 
            <span className="text-gradient"> Rendez-vous</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez un créneau qui vous convient pour discuter de vos projets et besoins directement avec Marcel.
          </p>
        </div>

        {/* Widget Calendly */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border border-border/50 overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Réservez votre consultation</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Calendly inline widget - Code HTML officiel */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/assouhoaime?hide_gdpr_banner=1&primary_color=6366f1"
                style={{ 
                  minWidth: '320px', 
                  height: '700px',
                  width: '100%'
                }}
              />
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            📅 Sélectionnez votre créneau préféré directement ci-dessus
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalendlyWidget;