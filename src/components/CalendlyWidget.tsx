import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CalendlyWidget = () => {
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

        {/* Options de prise de rendez-vous */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Réservez votre consultation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Bouton direct vers Calendly */}
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a 
                    href="https://calendly.com/assouhoaime" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Prendre rendez-vous sur Calendly
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Contact alternatif */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-center mb-4">Ou contactez-moi directement :</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" asChild>
                    <a href="mailto:assouhoaime@gmail.com" className="inline-flex items-center gap-2">
                      📧 assouhoaime@gmail.com
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="tel:+2250747783618" className="inline-flex items-center gap-2">
                      📱 +225 07 47 78 36 18
                    </a>
                  </Button>
                </div>
              </div>

              {/* Note pour la configuration */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Note :</strong> Si le lien Calendly ne fonctionne pas, assurez-vous que :
                </p>
                <ul className="text-sm text-yellow-700 mt-2 ml-4 list-disc">
                  <li>Votre compte Calendly est actif</li>
                  <li>Vous avez créé au moins un type d'événement</li>
                  <li>Votre profil public est accessible</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalendlyWidget;