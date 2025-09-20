import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageCircle, Calendar, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Note: Pour le formulaire Supabase, il faudra connecter la base de données
    console.log('Form data:', formData);
    alert('Merci pour votre message ! Je vous répondrai bientôt.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "assouhoaime@gmail.com",
      link: "mailto:assouhoaime@gmail.com"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+225 07 47 78 36 18",
      link: "tel:+2250747783618"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Marcel Assouho",
      link: "https://wa.me/2250747783618"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Abidjan, Côte d'Ivoire",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Mail className="w-5 h-5" />
            <span className="font-medium">Contact & Rendez-vous</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Travaillons 
            <span className="text-gradient"> Ensemble</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos besoins et voir comment je peux vous aider.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant border border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom complet"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet ou posez votre question..."
                    rows={6}
                    required
                  />
                </div>

                <EnhancedButton type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </EnhancedButton>
              </form>

            </CardContent>
          </Card>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="shadow-elegant border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-smooth">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{info.title}</div>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-sm text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-elegant border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Actions rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <EnhancedButton 
                  variant="tech" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="https://wa.me/2250747783618" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    Discuter sur WhatsApp
                  </a>
                </EnhancedButton>

                <EnhancedButton 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="tel:+2250747783618">
                    <Phone className="w-4 h-4" />
                    Appeler directement
                  </a>
                </EnhancedButton>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;