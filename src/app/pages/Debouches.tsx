import { Megaphone, Building2, Palette, BarChart3, Users, Globe } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Debouches() {
  const metiers = [
    {
      titre: "Chargé de communication",
      description: "En entreprise, association ou collectivité territoriale",
      icon: Megaphone,
    },
    {
      titre: "Assistant chef de publicité",
      description: "En agence de communication ou de publicité",
      icon: Building2,
    },
    {
      titre: "Community manager",
      description: "Gestion de la présence digitale et des réseaux sociaux",
      icon: Globe,
    },
    {
      titre: "Chargé de relations publiques",
      description: "Organisation d'événements et relations presse",
      icon: Users,
    },
    {
      titre: "Chargé d'études médias",
      description: "Analyse et planification des campagnes médias",
      icon: BarChart3,
    },
    {
      titre: "Concepteur-rédacteur",
      description: "Création de contenus et messages publicitaires",
      icon: Palette,
    },
  ];

  const secteurs = [
    "Agences de communication et de publicité",
    "Services communication d'entreprises",
    "Médias et régies publicitaires",
    "Collectivités territoriales",
    "Associations et ONG",
    "Start-ups et e-commerce",
  ];

  const poursuites = [
    {
      titre: "Licence Professionnelle",
      description: "Communication digitale, événementiel, marketing...",
    },
    {
      titre: "Bachelor",
      description: "Communication, marketing, digital...",
    },
    {
      titre: "École de commerce",
      description: "Admission parallèle en 3ème année",
    },
    {
      titre: "École de communication",
      description: "CELSA, ISCOM, SUP DE PUB...",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Débouchés</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            De nombreuses opportunités professionnelles dans un secteur en constante évolution
          </p>
        </div>
      </section>

      {/* Métiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1C5C7F] mb-6">
            Les métiers de la communication
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Le BTS Communication ouvre les portes de nombreux métiers dans des secteurs variés
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metiers.map((metier, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#F39226] rounded-lg flex items-center justify-center mb-4">
                  <metier.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#1C5C7F]">
                  {metier.titre}
                </h3>
                <p className="text-sm text-gray-700">{metier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image et secteurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1547621008-d6d6d2e28e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWVkaWElMjBkZXNpZ258ZW58MXx8fHwxNzczMDUyNDIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Design digital"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#1C5C7F] mb-6">
                Secteurs d'activité
              </h2>
              <p className="text-gray-700 mb-6">
                Nos diplômés travaillent dans des structures très variées :
              </p>
              <ul className="space-y-3">
                {secteurs.map((secteur, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#F39226] rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{secteur}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20 bg-[#1C5C7F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Insertion professionnelle
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F39226] mb-2">85%</div>
              <div className="text-white/80">trouvent un emploi dans les 6 mois</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F39226] mb-2">60%</div>
              <div className="text-white/80">poursuivent leurs études</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F39226] mb-2">92%</div>
              <div className="text-white/80">satisfaits de leur formation</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F39226] mb-2">1800€</div>
              <div className="text-white/80">salaire moyen débutant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Poursuite d'études */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1C5C7F] mb-6">
            Poursuites d'études
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Le BTS Communication permet également de poursuivre ses études pour se spécialiser
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {poursuites.map((poursuite, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-[#1C5C7F]">
                  {poursuite.titre}
                </h3>
                <p className="text-gray-700">{poursuite.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages carrière */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1C5C7F] mb-12">
            Ils ont réussi
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "Après mon BTS Communication au Lycée Victor Louis, j'ai été embauchée comme Community Manager dans une start-up bordelaise. La formation m'a donné toutes les bases pour réussir dans le digital."
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-[#1C5C7F]">Léa D.</div>
                  <div className="text-sm text-gray-600">Community Manager - Promotion 2023</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "J'ai poursuivi en Licence Pro Communication Digitale puis intégré une agence de publicité comme Assistant Chef de Pub. Le BTS a été un excellent tremplin."
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-[#1C5C7F]">Thomas R.</div>
                  <div className="text-sm text-gray-600">Assistant Chef de Publicité - Promotion 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
