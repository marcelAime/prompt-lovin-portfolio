import { Github, Linkedin, MessageCircle, Phone, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/marcelAime/",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/marcel-aime-assouho",
      label: "LinkedIn"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/2250747783618",
      label: "WhatsApp"
    },
    {
      icon: Phone,
      href: "tel:+2250747783618",
      label: "Téléphone"
    },
    {
      icon: Mail,
      href: "mailto:assouhoaime@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="tech-gradient text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Marcel Agohi</h3>
            <p className="text-blue-100 leading-relaxed">
              Informaticien passionné par le développement et l'analyse de données. 
              Toujours prêt à relever de nouveaux défis techniques.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-100">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Formation', 'Compétences', 'Expérience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-blue-200 hover:text-white transition-smooth text-left text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-100">Contact</h4>
            <div className="space-y-2 text-sm text-blue-200">
              <div>📧 assouhoaime@gmail.com</div>
              <div>📱 +225 07 47 78 36 18</div>
              <div>📍 Abidjan, Côte d'Ivoire</div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Assouho Aimé Pierre Marcel Agohi.</span>
              <span>Développé avec</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>et Lovable</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-smooth"
              >
                Retour en haut
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;