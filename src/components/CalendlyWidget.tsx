import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const CalendlyWidget = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Nettoyer d'abord tout widget existant
    if (calendlyRef.current) {
      calendlyRef.current.innerHTML = '';
    }

    // Charger le script Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    script.onload = () => {
      // Initialiser le widget une fois le script chargé
      if (calendlyRef.current && (window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url: 'https://calendly.com/assouhoaime',
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        });
      }
    };

    // Ajouter le script seulement s'il n'existe pas déjà
    if (!document.querySelector('script[src*="calendly.com"]')) {
      document.body.appendChild(script);
    } else if ((window as any).Calendly) {
      // Si le script est déjà chargé, initialiser directement
      (window as any).Calendly.initInlineWidget({
        url: 'https://calendly.com/assouhoaime',
        parentElement: calendlyRef.current,
        prefill: {},
        utm: {}
      });
    }

    return () => {
      // Cleanup
      if (calendlyRef.current) {
        calendlyRef.current.innerHTML = '';
      }
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
              {/* Widget Calendly inline */}
              <div 
                ref={calendlyRef}
                style={{ minWidth: '320px', height: '700px' }}
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>

        {/* Instructions pour personnaliser */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Pour personnaliser :</strong> Remplacez l'URL dans le code par votre lien Calendly personnel
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalendlyWidget;