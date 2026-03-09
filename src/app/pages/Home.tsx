import { Link } from "react-router";
import { ArrowRight, Users, Briefcase, GraduationCap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              BTS Communication
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Devenez un professionnel de la communication au Lycée Victor Louis à Talence
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/programme"
                className="inline-flex items-center gap-2 bg-[#F39226] hover:bg-[#E07B15] text-white px-6 py-3 rounded-lg transition-colors"
              >
                Découvrir le programme
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg border-2 border-white transition-colors"
              >
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1C5C7F] mb-6">
                Une formation d'excellence
              </h2>
              <p className="text-gray-700 mb-4">
                Le BTS Communication du Lycée Victor Louis forme des professionnels capables de concevoir et de mettre en œuvre des opérations de communication dans tous types d'organisations (entreprises, agences, collectivités).
              </p>
              <p className="text-gray-700 mb-4">
                Cette formation en 2 ans allie théorie et pratique, vous permettant d'acquérir toutes les compétences nécessaires pour réussir dans le secteur dynamique de la communication.
              </p>
              <p className="text-gray-700">
                Située à Talence, au cœur de la métropole bordelaise, notre formation bénéficie d'un environnement stimulant et d'un réseau professionnel développé.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="figma:asset/c0ff9a0cf6c2a72f8ca5e025d04be85ba5c74b34.png"
                alt="Lycée Victor Louis - Talence"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Points clés */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1C5C7F] mb-12">
            Pourquoi choisir notre BTS Communication ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-[#F39226] rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1C5C7F]">
                Formation complète
              </h3>
              <p className="text-gray-700">
                Un programme riche couvrant tous les aspects de la communication : publicité, événementiel, digital, relations publiques, médias sociaux.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-[#F39226] rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1C5C7F]">
                Projets concrets
              </h3>
              <p className="text-gray-700">
                Travaillez sur des projets réels en partenariat avec des entreprises et développez votre book professionnel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-[#F39226] rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1C5C7F]">
                Stage en entreprise
              </h3>
              <p className="text-gray-700">
                14 semaines de stage pour vous immerger dans le monde professionnel et construire votre réseau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-20 bg-[#1C5C7F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="text-6xl text-[#F39226] mb-4">"</div>
            <p className="text-xl md:text-2xl mb-6 italic">
              Le BTS Communication du Lycée Victor Louis m'a permis d'acquérir toutes les compétences nécessaires pour démarrer ma carrière. Les enseignants sont passionnés et le suivi est personnalisé. Aujourd'hui, je travaille dans une agence de communication à Bordeaux.
            </p>
            <div className="font-semibold">Sarah M.</div>
            <div className="text-white/70 text-sm">Promotion 2024</div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#1C5C7F] mb-6">
            Prêt à nous rejoindre ?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Les candidatures pour la rentrée 2026 sont ouvertes
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 bg-[#F39226] hover:bg-[#E07B15] text-white px-8 py-4 rounded-lg transition-colors"
            >
              Déposer ma candidature
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#1C5C7F] px-8 py-4 rounded-lg transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}