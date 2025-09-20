import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const CalendlyWidget = () => {
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
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    // Créer le message WhatsApp avec les détails
    const message = `🗓️ *Nouvelle demande de rendez-vous*

👤 *Nom:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Téléphone:* ${formData.phone || 'Non renseigné'}
📅 *Date souhaitée:* ${formData.date}
⏰ *Heure:* ${formData.time}
🔧 *Service:* ${formData.service || 'Non spécifié'}
💬 *Message:* ${formData.message || 'Aucun message'}

Merci de confirmer ce rendez-vous !`;

    // Créer l'URL WhatsApp avec le message
    const whatsappUrl = `https://wa.me/2250747783618?text=${encodeURIComponent(message)}`;
    
    // Ouvrir WhatsApp dans un nouvel onglet
    const newWindow = window.open(whatsappUrl, '_blank');
    
    if (newWindow) {
      toast.success("Redirection vers WhatsApp... Marcel vous confirmera rapidement !");
      
      // Reset form après succès
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: ''
      });
    } else {
      toast.error("Impossible d'ouvrir WhatsApp. Veuillez vérifier les paramètres de votre navigateur.");
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const timeSlots = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const services = [
    { value: "development", label: "Développement Web/Mobile" },
    { value: "data-analysis", label: "Analyse de données" },
    { value: "consulting", label: "Conseil en informatique" },
    { value: "other", label: "Autre" }
  ];

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
            Remplissez le formulaire ci-dessous. Votre demande sera envoyée via WhatsApp pour confirmation.
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
                    <select
                      id="time"
                      value={formData.time}
                      onChange={(e) => handleChange('time', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      required
                    >
                      <option value="">Choisir l'heure</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Type de service */}
                <div className="space-y-2">
                  <Label htmlFor="service">Type de consultation</Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => handleChange('service', e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="">Sélectionner le type de consultation</option>
                    {services.map(service => (
                      <option key={service.value} value={service.value}>{service.label}</option>
                    ))}
                  </select>
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
                  Envoyer via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            📱 Votre demande sera envoyée directement à Marcel via WhatsApp pour une confirmation rapide
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalendlyWidget;