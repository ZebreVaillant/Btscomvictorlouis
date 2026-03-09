import { BookOpen, Laptop, Users, TrendingUp, Calendar, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Programme() {
  const matieres = [
    {
      titre: "Culture de la communication",
      description: "Théorie et pratique de la communication, analyse des médias, sémiologie",
      icon: BookOpen,
    },
    {
      titre: "Projet de communication",
      description: "Conception et mise en œuvre de campagnes de communication complètes",
      icon: TrendingUp,
    },
    {
      titre: "Communication digitale",
      description: "Stratégie digitale, réseaux sociaux, création de contenus web",
      icon: Laptop,
    },
    {
      titre: "Relation annonceur",
      description: "Gestion de la relation client, conseil en communication",
      icon: Users,
    },
  ];

  const competences = [
    "Concevoir et mettre en œuvre des opérations de communication",
    "Gérer la relation avec l'annonceur",
    "Mettre en œuvre et suivre un projet de communication",
    "Déployer une stratégie de communication digitale",
    "Analyser et produire des messages",
    "Conseiller l'annonceur ou l'agence",
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Le Programme</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Une formation complète sur 2 ans pour maîtriser tous les aspects de la communication moderne
          </p>
        </div>
      </section>

      {/* Organisation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1565351167686-7a19c5114965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBicmFpbnN0b3JtaW5nfGVufDF8fHx8MTc3MzA1MTU2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Travail d'équipe"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#1C5C7F] mb-6">
                Organisation de la formation
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#F39226] rounded-lg flex items-center justify-center">
                      <Calendar className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Durée</h3>
                    <p className="text-gray-700">
                      Formation en 2 ans avec 1350 heures d'enseignement et 14 semaines de stage en entreprise
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#F39226] rounded-lg flex items-center justify-center">
                      <BookOpen className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Enseignements</h3>
                    <p className="text-gray-700">
                      Cours théoriques, travaux pratiques, projets tutorés et ateliers professionnels
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#F39226] rounded-lg flex items-center justify-center">
                      <Award className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Diplôme</h3>
                    <p className="text-gray-700">
                      BTS reconnu par l'État de niveau Bac+2 (120 crédits ECTS)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matières principales */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1C5C7F] mb-12">
            Les enseignements clés
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {matieres.map((matiere, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-14 h-14 bg-[#1C5C7F] rounded-lg flex items-center justify-center mb-6">
                  <matiere.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1C5C7F]">
                  {matiere.titre}
                </h3>
                <p className="text-gray-700">{matiere.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1C5C7F] mb-6">
                Compétences acquises
              </h2>
              <p className="text-gray-700 mb-8">
                À l'issue de la formation, vous serez capable de :
              </p>
              <ul className="space-y-4">
                {competences.map((comp, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#F39226] rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1675869940341-d495d49010b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjb21tdW5pY2F0aW9uJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzA1MjQyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Espace de travail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stage */}
      <section className="py-20 bg-[#1C5C7F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Stage en entreprise
            </h2>
            <p className="text-xl text-white/90 mb-8">
              14 semaines de stage réparties sur les deux années de formation vous permettent de mettre en pratique vos compétences et de construire votre réseau professionnel.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center mt-12">
              <div>
                <div className="text-5xl font-bold text-[#F39226] mb-2">6</div>
                <div className="text-white/80">semaines en 1ère année</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#F39226] mb-2">8</div>
                <div className="text-white/80">semaines en 2ème année</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#F39226] mb-2">100%</div>
                <div className="text-white/80">de nos étudiants trouvent un stage</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
