import { MapPin, Mail, Instagram, Phone, Facebook } from "lucide-react";
import { Link } from "react-router";

export function FloatingContactBar() {
  return (
    <>
      {/* Version Desktop & Tablette - Barre verticale à droite */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
        {/* Plan d'accès */}
        <a
          href="https://www.google.com/maps/place/Lyc%C3%A9e+Victor+Louis/@44.805404,-0.595184,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-l from-[#F39226] to-[#f5a855] text-white p-3.5 hover:from-[#1C5C7F] hover:to-[#2a7aa3] transition-all duration-300 group relative rounded-full shadow-lg hover:shadow-xl hover:scale-110"
          aria-label="Plan d'accès"
        >
          <MapPin size={22} strokeWidth={2} />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl border border-white/10">
            Plan d'accès
          </span>
        </a>

        {/* Téléphone */}
        <a
          href="tel:0556807640"
          className="bg-gradient-to-l from-[#F39226] to-[#f5a855] text-white p-3.5 hover:from-[#1C5C7F] hover:to-[#2a7aa3] transition-all duration-300 group relative rounded-full shadow-lg hover:shadow-xl hover:scale-110"
          aria-label="Téléphone"
        >
          <Phone size={22} strokeWidth={2} />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl border border-white/10">
            05 56 80 76 40
          </span>
        </a>

        {/* Formulaire de contact */}
        <Link
          to="/contact"
          className="bg-gradient-to-l from-[#F39226] to-[#f5a855] text-white p-3.5 hover:from-[#1C5C7F] hover:to-[#2a7aa3] transition-all duration-300 group relative rounded-full shadow-lg hover:shadow-xl hover:scale-110"
          aria-label="Formulaire de contact"
        >
          <Mail size={22} strokeWidth={2} />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl border border-white/10">
            Nous contacter
          </span>
        </Link>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/bts_com_vl/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-l from-[#F39226] to-[#f5a855] text-white p-3.5 hover:from-[#1C5C7F] hover:to-[#2a7aa3] transition-all duration-300 group relative rounded-full shadow-lg hover:shadow-xl hover:scale-110"
          aria-label="Instagram BTS Communication"
        >
          <Instagram size={22} strokeWidth={2} />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl border border-white/10">
            @bts_com_vl
          </span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=100046358385465"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-l from-[#F39226] to-[#f5a855] text-white p-3.5 hover:from-[#1C5C7F] hover:to-[#2a7aa3] transition-all duration-300 group relative rounded-full shadow-lg hover:shadow-xl hover:scale-110"
          aria-label="Facebook BTS Communication"
        >
          <Facebook size={22} strokeWidth={2} />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl border border-white/10">
            BTS Com VL
          </span>
        </a>
      </div>

      {/* Version Mobile uniquement - Barre horizontale en bas */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t-2 border-[#F39226]/20 shadow-2xl animate-slide-up">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-around gap-2">
            {/* Téléphone */}
            <a
              href="tel:0556807640"
              className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-orange-50 transition-colors group"
              aria-label="Téléphone"
            >
              <div className="bg-gradient-to-br from-[#F39226] to-[#E07B15] text-white p-2.5 rounded-full group-hover:scale-110 transition-transform shadow-md">
                <Phone size={18} strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-medium text-gray-700">Appeler</span>
            </a>

            {/* Plan */}
            <a
              href="https://www.google.com/maps/place/Lyc%C3%A9e+Victor+Louis/@44.805404,-0.595184,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-orange-50 transition-colors group"
              aria-label="Plan d'accès"
            >
              <div className="bg-gradient-to-br from-[#F39226] to-[#E07B15] text-white p-2.5 rounded-full group-hover:scale-110 transition-transform shadow-md">
                <MapPin size={18} strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-medium text-gray-700">Plan</span>
            </a>

            {/* Contact */}
            <Link
              to="/contact"
              className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-orange-50 transition-colors group"
              aria-label="Contact"
            >
              <div className="bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] text-white p-3 rounded-full group-hover:scale-110 transition-transform shadow-lg">
                <Mail size={20} strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-medium text-gray-700">Contact</span>
            </Link>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/bts_com_vl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-orange-50 transition-colors group"
              aria-label="Instagram"
            >
              <div className="bg-gradient-to-br from-[#F39226] to-[#E07B15] text-white p-2.5 rounded-full group-hover:scale-110 transition-transform shadow-md">
                <Instagram size={18} strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-medium text-gray-700">Instagram</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100046358385465"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-orange-50 transition-colors group"
              aria-label="Facebook"
            >
              <div className="bg-gradient-to-br from-[#F39226] to-[#E07B15] text-white p-2.5 rounded-full group-hover:scale-110 transition-transform shadow-md">
                <Facebook size={18} strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-medium text-gray-700">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}