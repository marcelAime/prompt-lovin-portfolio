import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Github, Linkedin, MessageCircle, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Assouho Aimé Pierre 
                <span className="block text-gradient bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  Marcel Agohi
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-100 font-medium">
                Informaticien – Développement & Analyse de données
              </h2>
              <p className="text-lg text-blue-50 max-w-2xl">
                Des solutions digitales fiables, bâties sur une solide formation en informatique
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <EnhancedButton 
                variant="glass" 
                size="xl"
                onClick={() => document.getElementById('formation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Découvrir mon parcours
              </EnhancedButton>
              <EnhancedButton 
                variant="outline" 
                size="xl"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Me contacter
              </EnhancedButton>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/marcelAime/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-smooth hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/marcel-aime-assouho" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-smooth hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://wa.me/2250747783618" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-smooth hover:scale-110"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a 
                href="tel:+2250747783618"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-smooth hover:scale-110"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow border-4 border-white/20">
                <img 
                  src={profilePhoto} 
                  alt="Assouho Aimé Pierre Marcel Agohi - Portrait professionnel" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;