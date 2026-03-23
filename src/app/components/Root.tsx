import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import logoLycee from "../../assets/logo-lycee.jpg";

export function Root() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/programme", label: "Le Programme" },
    { path: "/debouches", label: "Débouchés" },
    { path: "/portfolios", label: "Portfolios" },
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
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="BTS Communication - Lycée Victor Louis Talence" className="h-20 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm transition-colors ${
                    isActive(link.path)
                      ? "text-[#1C5C7F] font-semibold"
                      : "text-gray-700 hover:text-[#F39226]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 text-sm transition-colors ${
                    isActive(link.path)
                      ? "text-[#1C5C7F] font-semibold"
                      : "text-gray-700"
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
                  <p className="text-sm">05 56 84 18 10</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-[#F39226] flex-shrink-0" />
                  <p className="text-sm">BTS.com.vl@gmail.com</p>
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
