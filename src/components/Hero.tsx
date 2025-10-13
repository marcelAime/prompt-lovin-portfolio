import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Github, Linkedin, MessageCircle, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Premium background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-glow rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-primary-variant rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-[400px] h-[400px] bg-white rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-4">
                  👋 Bienvenue sur mon portfolio
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
                Assouho Aimé Pierre 
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mt-2">
                  Marcel Agohi
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/90 font-semibold">
                Informaticien – Développement & Analyse de données
              </h2>
              <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                Des solutions digitales fiables et innovantes, bâties sur une solide formation en informatique
              </p>
            </div>

            {/* Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <EnhancedButton 
                variant="default" 
                size="xl"
                className="bg-white text-primary hover:bg-white/90 shadow-premium font-semibold"
                onClick={() => document.getElementById('formation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Découvrir mon parcours
              </EnhancedButton>
              <EnhancedButton 
                variant="outline" 
                size="xl"
                className="glass-effect border-white/30 text-white hover:bg-white/20 font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Me contacter
              </EnhancedButton>
            </div>

            {/* Premium Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/marcelAime/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-card hover:bg-white/20 text-white transition-smooth hover:scale-110 hover:shadow-glow group"
              >
                <Github className="w-6 h-6 group-hover:rotate-12 transition-smooth" />
              </a>
              <a 
                href="https://linkedin.com/in/marcel-aime-assouho" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-card hover:bg-white/20 text-white transition-smooth hover:scale-110 hover:shadow-glow group"
              >
                <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-smooth" />
              </a>
              <a 
                href="https://wa.me/2250747783618" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-card hover:bg-white/20 text-white transition-smooth hover:scale-110 hover:shadow-glow group"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-smooth" />
              </a>
              <a 
                href="tel:+2250747783618"
                className="p-4 rounded-xl glass-card hover:bg-white/20 text-white transition-smooth hover:scale-110 hover:shadow-glow group"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-smooth" />
              </a>
            </div>
          </div>

          {/* Premium Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Main image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-premium border-4 border-white/30 backdrop-blur-sm">
                <img 
                  src={profilePhoto} 
                  alt="Assouho Aimé Pierre Marcel Agohi - Portrait professionnel" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              {/* Decorative animated rings */}
              <div className="absolute -inset-6 rounded-3xl border-2 border-white/30 animate-pulse"></div>
              <div className="absolute -inset-8 rounded-3xl border border-white/20 animate-pulse delay-500"></div>
              
              {/* Floating glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-primary-glow/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-smooth"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;