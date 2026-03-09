import { FileText, Calendar, CheckCircle, AlertCircle, User, Mail } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Admission() {
  const prerequis = [
    "Être titulaire du baccalauréat (toutes séries)",
    "Avoir un intérêt pour la communication et les médias",
    "Être créatif et curieux",
    "Aimer le travail en équipe",
    "Avoir une bonne expression écrite et orale",
  ];

  const etapes = [
    {
      numero: "1",
      titre: "Candidature sur Parcoursup",
      description: "Créez votre dossier et formulez votre vœu pour le BTS Communication du Lycée Victor Louis",
      date: "Janvier - Mars",
    },
    {
      numero: "2",
      titre: "Examen du dossier",
      description: "Votre dossier scolaire et votre lettre de motivation sont étudiés par notre commission",
      date: "Avril - Mai",
    },
    {
      numero: "3",
      titre: "Résultats Parcoursup",
      description: "Consultez les réponses à vos vœux et confirmez votre choix",
      date: "Juin",
    },
    {
      numero: "4",
      titre: "Inscription administrative",
      description: "Finalisez votre inscription au lycée",
      date: "Juillet",
    },
  ];

  const documents = [
    "Bulletins de notes de Première et Terminale",
    "Lettre de motivation personnalisée",
    "Fiche Avenir remplie par votre lycée",
    "CV détaillant vos expériences et compétences",
    "Portfolio ou book (si disponible)",
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Admission</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Rejoignez le BTS Communication du Lycée Victor Louis pour la rentrée 2026
          </p>
        </div>
      </section>

      {/* Prérequis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1C5C7F] mb-6">
                Conditions d'admission
              </h2>
              <p className="text-gray-700 mb-6">
                Le BTS Communication est accessible à tous les bacheliers motivés par les métiers de la communication.
              </p>
              <div className="bg-[#F39226]/10 border-l-4 border-[#F39226] p-6 rounded-r-lg mb-6">
                <div className="flex gap-3">
                  <AlertCircle className="text-[#F39226] flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-[#1C5C7F] mb-2">À savoir</p>
                    <p className="text-sm text-gray-700">
                      La sélection se fait sur dossier via Parcoursup. Aucun entretien n'est prévu, d'où l'importance de soigner votre lettre de motivation.
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-4 text-[#1C5C7F]">Profil recherché :</h3>
              <ul className="space-y-3">
                {prerequis.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle className="text-[#F39226] flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643816185311-0a6ec95d0660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3JkZWF1eCUyMGNpdHklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzczMDUyNDIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bordeaux"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1C5C7F] mb-12">
            Processus d'admission
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {etapes.map((etape, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#F39226] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {etape.numero}
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-[#1C5C7F]">
                        {etape.titre}
                      </h3>
                      <span className="text-sm bg-[#1C5C7F] text-white px-3 py-1 rounded-full">
                        {etape.date}
                      </span>
                    </div>
                    <p className="text-gray-700">{etape.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#1C5C7F] mb-6">
              Dossier de candidature
            </h2>
            <p className="text-center text-gray-700 mb-12">
              Votre dossier Parcoursup doit contenir les éléments suivants :
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <div key={index} className="flex gap-4 bg-gray-50 p-6 rounded-xl">
                  <FileText className="text-[#F39226] flex-shrink-0" size={24} />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conseils */}
      <section className="py-20 bg-[#1C5C7F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nos conseils pour votre candidature
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-3">Lettre de motivation</h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• Montrez votre intérêt pour la communication</li>
                <li>• Expliquez votre projet professionnel</li>
                <li>• Mettez en avant vos qualités et expériences</li>
                <li>• Soignez l'orthographe et la présentation</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-3">Dossier scolaire</h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• Appréciations des enseignants importantes</li>
                <li>• Notes de français et langues valorisées</li>
                <li>• Assiduité et implication comptent</li>
                <li>• Options créatives sont un plus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact pour questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#1C5C7F] mb-6">
            Des questions sur l'admission ?
          </h2>
          <p className="text-gray-700 mb-8">
            Notre équipe est à votre disposition pour vous accompagner dans votre candidature
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <Mail className="text-[#F39226]" size={24} />
              <div className="text-left">
                <div className="text-sm text-gray-600">Email</div>
                <div className="font-semibold text-[#1C5C7F]">btscom@lycee-victorlouis.fr</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md">
              <User className="text-[#F39226]" size={24} />
              <div className="text-left">
                <div className="text-sm text-gray-600">Téléphone</div>
                <div className="font-semibold text-[#1C5C7F]">05 56 84 18 10</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dates clés */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1C5C7F] mb-12">
            Dates clés 2026
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Calendar className="text-[#F39226]" size={24} />
              <div className="flex-1">
                <div className="font-semibold text-[#1C5C7F]">17 janvier 2026</div>
                <div className="text-gray-700">Ouverture de Parcoursup</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Calendar className="text-[#F39226]" size={24} />
              <div className="flex-1">
                <div className="font-semibold text-[#1C5C7F]">13 mars 2026</div>
                <div className="text-gray-700">Date limite de formulation des vœux</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Calendar className="text-[#F39226]" size={24} />
              <div className="flex-1">
                <div className="font-semibold text-[#1C5C7F]">30 mai 2026</div>
                <div className="text-gray-700">Début de la phase d'admission</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
