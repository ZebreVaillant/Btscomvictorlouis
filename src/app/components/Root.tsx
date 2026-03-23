import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/c31ed4306a186284e02a03ecc1310824ad68de52.png";
import logoLycee from "figma:asset/0d694966550b9cb3b72bf4db8905e0606580b564.png";
import { FloatingContactBar } from "./FloatingContactBar";
import { ScrollToTop } from "./ScrollToTop";
import { Chatbot } from "./Chatbot";
import { CustomCursor } from "./CustomCursor";
import { EasterEgg } from "./EasterEgg";
import { FloatingParticles } from "./FloatingParticles";

export function Root() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/programme", label: "Le Programme" },
    { path: "/debouches", label: "Débouchés" },
    { path: "/portfolios", label: "Portfolios" },
    { path: "/actualites", label: "Actualités" },
    { path: "/admission", label: "Admission" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Scroll to Top on route change */}
      <ScrollToTop />
      
      {/* Floating Contact Bar */}
      <FloatingContactBar />
      
      {/* Chatbot */}
      <Chatbot />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Easter Egg */}
      <EasterEgg />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo avec effet moderne */}
            <Link to="/" className="relative group -my-6">
              {/* Glow effect background */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#1C5C7F] via-[#F39226] to-[#1C5C7F] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 animate-gradient"></div>
              
              {/* Logo container avec effet de carte */}
              <div className="relative bg-gradient-to-br from-gray-50 to-white px-5 py-3 rounded-xl border-2 border-transparent group-hover:border-[#F39226]/30 transition-all duration-300 shadow-sm group-hover:shadow-lg">
                <img 
                  src={logo} 
                  alt="BTS Communication - Lycée Victor Louis Talence" 
                  className="h-32 w-auto object-contain transition-all duration-300 group-hover:scale-105 relative z-10" 
                />
                
                {/* Petit badge "BTS" animé */}
                <div className="absolute -top-1 -right-1 bg-gradient-to-br from-[#F39226] to-[#E07B15] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                  BTS
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isActive(link.path)
                      ? "text-[#1C5C7F]"
                      : "text-gray-600 hover:text-[#F39226] hover:bg-orange-50"
                  }`}
                >
                  {link.label}
                  {/* Underline animé pour le lien actif */}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#1C5C7F] to-[#F39226] transition-all duration-300 ${
                      isActive(link.path) ? "w-3/4" : "w-0 group-hover:w-3/4"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-gray-700 hover:text-[#F39226] hover:bg-orange-50 rounded-lg transition-all duration-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-md">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`block py-3 px-4 text-sm font-medium rounded-lg mx-2 mb-1 transition-all duration-300 animate-fade-in ${
                    isActive(link.path)
                      ? "text-[#1C5C7F] bg-blue-50 border-l-4 border-[#F39226]"
                      : "text-gray-700 hover:text-[#F39226] hover:bg-orange-50 hover:translate-x-2"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#4A6D8C] text-white mt-20 relative">
        {/* Bande orange en haut */}
        <div className="h-1 bg-[#F39226]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Plan du site */}
            <div>
              <h3 className="font-semibold mb-4 text-[#F39226]">Plan du site</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-white hover:text-[#F39226] transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/programme" className="text-sm text-white hover:text-[#F39226] transition-colors">
                    Le Programme
                  </Link>
                </li>
                <li>
                  <Link to="/debouches" className="text-sm text-white hover:text-[#F39226] transition-colors">
                    Débouchés
                  </Link>
                </li>
                <li>
                  <Link to="/portfolios" className="text-sm text-white hover:text-[#F39226] transition-colors">
                    Nos portfolios
                  </Link>
                </li>
                <li>
                  <Link to="/actualites" className="text-sm text-white hover:text-[#F39226] transition-colors">
                    Actualités
                  </Link>
                </li>
                <li>
                  <Link to="/admission" className="text-sm text-white hover:text-[#F39226] transition-colors">
                    Admission
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-white hover:text-[#F39226] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Nous contacter */}
            <div>
              <h3 className="font-semibold mb-4 text-[#F39226]">Nous contacter</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-[#F39226] mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    2 Avenue de Thouars<br />
                    33400 Talence
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-[#F39226] flex-shrink-0" />
                  <p className="text-sm">05 56 80 76 40</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-[#F39226] flex-shrink-0" />
                  <p className="text-sm">bts-com-vl@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Horaires secrétariat */}
            <div>
              <h3 className="font-semibold mb-4 text-[#F39226]">Horaires secrétariat</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-semibold">Lundi - Vendredi</p>
                  <p className="text-sm">8h30 - 12h00</p>
                  <p className="text-sm">14h30 - 17h00</p>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold">Vacances scolaires</p>
                  <p className="text-sm">Fermé</p>
                </div>
              </div>
            </div>

            {/* Suivez-nous */}
            <div>
              <h3 className="font-semibold mb-4 text-[#F39226]">Suivez-nous</h3>
              <div className="flex gap-3 mb-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#4A6D8C] hover:bg-[#F39226] hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#4A6D8C] hover:bg-[#F39226] hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#4A6D8C] hover:bg-[#F39226] hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              <p className="text-sm leading-relaxed">
                Restez informés de toutes nos actualités et événements !
              </p>
            </div>
          </div>

          {/* Bas du footer */}
          <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>© {new Date().getFullYear()} BTS Communication - Lycée Victor Louis Talence</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}