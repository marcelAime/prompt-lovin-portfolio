import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const CalendlyWidget = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    // Créer le message WhatsApp/Email avec les détails
    const message = `Nouvelle demande de rendez-vous:
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Date souhaitée: ${formData.date}
Heure souhaitée: ${formData.time}
Service: ${formData.service}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/2250747783618?text=${encodeURIComponent(message)}`;
    const emailUrl = `mailto:assouhoaime@gmail.com?subject=Demande de rendez-vous&body=${encodeURIComponent(message)}`;
    
    // Ouvrir WhatsApp pour confirmer le rendez-vous
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Demande envoyée !",
      description: "Votre demande de rendez-vous a été envoyée via WhatsApp. Marcel vous confirmera rapidement.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
            Remplissez le formulaire ci-dessous pour réserver votre consultation avec Marcel.
          </p>
        </div>

        {/* Formulaire de rendez-vous */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant border border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Réservez votre consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Informations personnelles */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nom complet *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Téléphone
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+225 XX XX XX XX XX"
                  />
                </div>

                {/* Date et heure */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Date souhaitée *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Heure préférée *
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => handleChange('time', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir l'heure" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00</SelectItem>
                        <SelectItem value="10:00">10:00</SelectItem>
                        <SelectItem value="11:00">11:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="15:00">15:00</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                        <SelectItem value="17:00">17:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Type de service */}
                <div className="space-y-2">
                  <Label htmlFor="service">Type de consultation</Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner le type de consultation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="development">Développement Web/Mobile</SelectItem>
                      <SelectItem value="data-analysis">Analyse de données</SelectItem>
                      <SelectItem value="consulting">Conseil en informatique</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Décrivez brièvement votre projet ou vos besoins..."
                    rows={4}
                  />
                </div>

                {/* Bouton de soumission */}
                <Button type="submit" className="w-full" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Demander un rendez-vous
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            📱 Votre demande sera envoyée via WhatsApp pour une confirmation rapide
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalendlyWidget;