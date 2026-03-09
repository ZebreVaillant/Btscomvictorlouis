import { ExternalLink, GraduationCap, Search } from "lucide-react";
import { useState } from "react";

export function Portfolios() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPromo, setSelectedPromo] = useState<string>("all");

  // Liste complète des étudiants par promotion
  const etudiants = [
    // Promotion 2026
    { nom: "Alonso", prenom: "Marina", promotion: "2026", portfolioUrl: "https://behance.net/marinaalonso" },
    { nom: "Beaumont", prenom: "Théo", promotion: "2026", portfolioUrl: "https://behance.net/theobeaumont" },
    { nom: "Carpentier", prenom: "Léa", promotion: "2026", portfolioUrl: "https://portfolio.lea-carpentier.fr" },
    { nom: "Desjardins", prenom: "Antoine", promotion: "2026", portfolioUrl: "https://antoinedesjardins.com" },
    { nom: "Ferrara", prenom: "Sofia", promotion: "2026", portfolioUrl: "https://behance.net/sofiaferrara" },
    { nom: "Girard", prenom: "Maxime", promotion: "2026", portfolioUrl: "https://maxime-girard.fr" },
    { nom: "Henrique", prenom: "Luna", promotion: "2026", portfolioUrl: "https://lunahenrique.myportfolio.com" },
    { nom: "Ivanov", prenom: "Nicolas", promotion: "2026", portfolioUrl: "https://nicolas-ivanov.com" },
    { nom: "Jiang", prenom: "Wei", promotion: "2026", portfolioUrl: "https://behance.net/weijiang" },
    { nom: "Klein", prenom: "Sarah", promotion: "2026", portfolioUrl: "https://sarahklein.fr" },
    { nom: "Laurent", prenom: "Julien", promotion: "2026", portfolioUrl: "https://julienlaurent.myportfolio.com" },
    { nom: "Mendes", prenom: "Clara", promotion: "2026", portfolioUrl: "https://claramendes.com" },
    { nom: "Nguyen", prenom: "Linh", promotion: "2026", portfolioUrl: "https://behance.net/linhnguyen" },
    { nom: "Oliveira", prenom: "Rafael", promotion: "2026", portfolioUrl: "https://rafael-oliveira.fr" },
    { nom: "Petit", prenom: "Camille", promotion: "2026", portfolioUrl: "https://camillepetit.myportfolio.com" },
    { nom: "Rousseau", prenom: "Thomas", promotion: "2026", portfolioUrl: "https://thomasrousseau.com" },
    { nom: "Silva", prenom: "Emma", promotion: "2026", portfolioUrl: "https://emmasilva.fr" },
    { nom: "Tanaka", prenom: "Yuki", promotion: "2026", portfolioUrl: "https://behance.net/yukitanaka" },
    { nom: "Vidal", prenom: "Hugo", promotion: "2026", portfolioUrl: "https://hugo-vidal.com" },
    { nom: "Weber", prenom: "Léonie", promotion: "2026", portfolioUrl: "https://leonieweber.myportfolio.com" },

    // Promotion 2025
    { nom: "André", prenom: "Baptiste", promotion: "2025", portfolioUrl: "https://baptiste-andre.fr" },
    { nom: "Benoit", prenom: "Chloé", promotion: "2025", portfolioUrl: "https://chloebenoit.com" },
    { nom: "Castellano", prenom: "Diego", promotion: "2025", portfolioUrl: "https://behance.net/diegocastellano" },
    { nom: "Dubois", prenom: "Marie", promotion: "2025", portfolioUrl: "https://mariedubois.fr" },
    { nom: "Eriksson", prenom: "Elsa", promotion: "2025", portfolioUrl: "https://elsaeriksson.myportfolio.com" },
    { nom: "Fischer", prenom: "Louis", promotion: "2025", portfolioUrl: "https://louisfischer.com" },
    { nom: "Garcia", prenom: "Inès", promotion: "2025", portfolioUrl: "https://inesgarcia.fr" },
    { nom: "Hassan", prenom: "Amira", promotion: "2025", portfolioUrl: "https://behance.net/amirahassan" },
    { nom: "Ibrahim", prenom: "Malik", promotion: "2025", portfolioUrl: "https://malikibrahim.com" },
    { nom: "Johansson", prenom: "Astrid", promotion: "2025", portfolioUrl: "https://astridjohansson.fr" },
    { nom: "Kim", prenom: "Min-Ji", promotion: "2025", portfolioUrl: "https://behance.net/minjikim" },
    { nom: "Lefebvre", prenom: "Chloé", promotion: "2025", portfolioUrl: "https://chloe-lefebvre.fr" },
    { nom: "Martin", prenom: "Lucas", promotion: "2025", portfolioUrl: "https://lucasmartin.myportfolio.com" },
    { nom: "Novak", prenom: "Ana", promotion: "2025", portfolioUrl: "https://ananovak.com" },
    { nom: "O'Brien", prenom: "Sean", promotion: "2025", portfolioUrl: "https://seanobrien.fr" },
    { nom: "Papadopoulos", prenom: "Alexis", promotion: "2025", portfolioUrl: "https://behance.net/alexispapadopoulos" },
    { nom: "Rossi", prenom: "Giulia", promotion: "2025", portfolioUrl: "https://giuliarossi.it" },
    { nom: "Schmidt", prenom: "Felix", promotion: "2025", portfolioUrl: "https://felixschmidt.com" },
    { nom: "Torres", prenom: "Lucia", promotion: "2025", portfolioUrl: "https://luciatorres.fr" },
    { nom: "Yamamoto", prenom: "Kenji", promotion: "2025", portfolioUrl: "https://behance.net/kenjiyamamoto" },
  ];

  // Filtrage des étudiants
  const filteredEtudiants = etudiants.filter(etudiant => {
    const matchesSearch = 
      etudiant.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      etudiant.prenom.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPromo = selectedPromo === "all" || etudiant.promotion === selectedPromo;
    return matchesSearch && matchesPromo;
  });

  // Grouper par promotion
  const etudiantsParPromo = filteredEtudiants.reduce((acc, etudiant) => {
    if (!acc[etudiant.promotion]) {
      acc[etudiant.promotion] = [];
    }
    acc[etudiant.promotion].push(etudiant);
    return acc;
  }, {} as Record<string, typeof etudiants>);

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Portfolios de nos étudiants</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Découvrez les portfolios en ligne de tous nos étudiants en BTS Communication
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 text-lg">
              Chaque étudiant développe son portfolio professionnel tout au long de sa formation. 
              Découvrez leurs créations, projets et réalisations en cliquant sur leurs noms.
            </p>
          </div>
        </div>
      </section>

      {/* Filtres et recherche */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Recherche */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un étudiant..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F39226]"
              />
            </div>

            {/* Filtres promotion */}
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedPromo("all")}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedPromo === "all"
                    ? "bg-[#F39226] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                Toutes les promos
              </button>
              <button
                onClick={() => setSelectedPromo("2026")}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedPromo === "2026"
                    ? "bg-[#F39226] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                Promo 2026
              </button>
              <button
                onClick={() => setSelectedPromo("2025")}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedPromo === "2025"
                    ? "bg-[#F39226] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                Promo 2025
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des étudiants par promotion */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.keys(etudiantsParPromo).length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">Aucun étudiant trouvé pour votre recherche.</p>
            </div>
          ) : (
            <div className="space-y-16">
              {Object.keys(etudiantsParPromo)
                .sort()
                .reverse()
                .map((promo) => (
                  <div key={promo}>
                    {/* En-tête de promotion */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex items-center gap-3 bg-[#1C5C7F] text-white px-6 py-3 rounded-lg">
                        <GraduationCap size={28} />
                        <h2 className="text-3xl font-bold">Promotion {promo}</h2>
                      </div>
                      <div className="text-gray-500 text-lg">
                        {etudiantsParPromo[promo].length} étudiant{etudiantsParPromo[promo].length > 1 ? 's' : ''}
                      </div>
                    </div>

                    {/* Grille d'étudiants */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {etudiantsParPromo[promo]
                        .sort((a, b) => a.nom.localeCompare(b.nom))
                        .map((etudiant, index) => (
                          <a
                            key={index}
                            href={etudiant.portfolioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#F39226] hover:shadow-lg transition-all"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="w-12 h-12 bg-[#1C5C7F] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                {etudiant.prenom[0]}{etudiant.nom[0]}
                              </div>
                              <ExternalLink 
                                className="text-gray-400 group-hover:text-[#F39226] transition-colors" 
                                size={20} 
                              />
                            </div>
                            <h3 className="font-semibold text-lg text-[#1C5C7F] group-hover:text-[#F39226] transition-colors">
                              {etudiant.prenom} {etudiant.nom}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                              Voir le portfolio
                            </p>
                          </a>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="py-20 bg-[#1C5C7F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Vous aussi, créez votre portfolio
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez notre formation et développez votre book professionnel avec des projets concrets
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/admission"
              className="inline-flex items-center gap-2 bg-[#F39226] hover:bg-[#E07B15] text-white px-8 py-4 rounded-lg transition-colors font-semibold"
            >
              Candidater maintenant
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1C5C7F] mb-12">
            Nos étudiants en chiffres
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F39226] mb-2">{etudiants.length}</div>
              <div className="text-gray-700">Étudiants au total</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F39226] mb-2">100%</div>
              <div className="text-gray-700">Ont un portfolio en ligne</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F39226] mb-2">50+</div>
              <div className="text-gray-700">Projets par étudiant</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#F39226] mb-2">15</div>
              <div className="text-gray-700">Prix remportés</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}