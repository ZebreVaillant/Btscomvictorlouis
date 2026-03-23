import { Calendar, ArrowRight, Filter, Megaphone, Users, Briefcase, BookOpen, Award, UserPlus } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import capsmeImage from "figma:asset/b5f069b81c49d6e61cd983ac0d0dd133d630305d.png";
import kakemonoImage from "figma:asset/8ac2a7f1ab628087990603c558b4ec971ef2a39e.png";
import portesOuvertesImage from "figma:asset/e8548b0c2b06953228a04c1e4b79314ddf78e11b.png";

interface Actualite {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export function Actualites() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const actualites: Actualite[] = [
    {
      id: 1,
      title: "Portes Ouvertes 2026",
      date: "7 mars 2026",
      category: "Événement",
      description: "Venez découvrir notre formation BTS Communication lors de nos journées portes ouvertes ! Rencontrez nos étudiants, nos enseignants et visitez nos locaux. Une occasion unique de poser toutes vos questions sur la formation, les débouchés et de découvrir les réalisations de nos étudiants.",
      imageUrl: portesOuvertesImage
    },
    {
      id: 2,
      title: "Projet Caps'me : Création publicitaire complète",
      date: "3 mars 2026",
      category: "Projet",
      description: "Les étudiants de 2ème année ont réalisé une campagne publicitaire print et audiovisuelle complète pour l'annonceur Caps'me (projet fictif). De la stratégie créative à la production finale, ce projet professionnel a permis aux étudiants de mettre en pratique toutes leurs compétences en communication.",
      imageUrl: capsmeImage
    },
    {
      id: 3,
      title: "Kakemono étudiant pour promouvoir la formation",
      date: "25 février 2026",
      category: "Actualité",
      description: "Un kakemono conçu et réalisé par nos étudiants a été acheté par le lycée pour promouvoir la formation BTS Communication lors de salons et événements. Une belle reconnaissance du talent créatif de nos étudiants et un outil de communication qui servira à valoriser notre formation !",
      imageUrl: kakemonoImage
    },
    {
      id: 4,
      title: "Inscriptions Parcoursup ouvertes",
      date: "20 janvier 2026",
      category: "Admission",
      description: "Les inscriptions pour la rentrée 2026 sont désormais ouvertes sur Parcoursup ! N'attendez pas pour candidater au BTS Communication du Lycée Victor Louis. Retrouvez toutes les informations sur notre processus d'admission et préparez votre dossier. Places limitées, ne tardez pas !",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXBwbGljYXRpb24lMjByZWdpc3RyYXRpb258ZW58MXx8fHwxNzczMDY1MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Événement":
        return "bg-[#F39226] text-white";
      case "Formation":
        return "bg-[#1C5C7F] text-white";
      case "Projet":
        return "bg-blue-600 text-white";
      case "Actualité":
        return "bg-green-600 text-white";
      case "Partenariat":
        return "bg-purple-600 text-white";
      case "Admission":
        return "bg-red-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  const categories = [
    { id: "all", label: "Tous", icon: Filter },
    { id: "Événement", label: "Événements", icon: Users },
    { id: "Projet", label: "Projets", icon: Briefcase },
    { id: "Actualité", label: "Actualités", icon: Megaphone },
    { id: "Formation", label: "Formation", icon: BookOpen },
    { id: "Partenariat", label: "Partenariats", icon: Award },
    { id: "Admission", label: "Admissions", icon: UserPlus },
  ];

  const filteredActualites = selectedCategory === "all" 
    ? actualites 
    : actualites.filter((a) => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1C5C7F] to-[#2a7aa3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl mb-6">Actualités</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Restez informés des dernières nouvelles, événements et réussites du BTS Communication
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-24 z-40 border-b-2 border-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Filter size={24} className="text-[#1C5C7F]" />
            <h2 className="text-2xl font-bold text-[#1C5C7F]">Filtrer par catégorie</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-[#1C5C7F] to-[#2A7BA0] text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-[#F39226] hover:text-white hover:scale-105"
                  }`}
                >
                  <IconComponent size={18} />
                  {cat.label}
                  {cat.id !== "all" && (
                    <span className="ml-1 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                      {actualites.filter((a) => a.category === cat.id).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Actualités Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActualites.map((actualite) => (
              <article
                key={actualite.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={actualite.imageUrl}
                    alt={actualite.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(actualite.category)}`}>
                      {actualite.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar size={16} />
                    <span>{actualite.date}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#1C5C7F] mb-3">
                    {actualite.title}
                  </h3>

                  <p className="text-gray-600 mb-4 flex-1">
                    {actualite.description}
                  </p>

                  {actualite.link && (
                    <a
                      href={actualite.link}
                      className="text-[#F39226] font-semibold flex items-center gap-2 hover:gap-3 transition-all group"
                    >
                      En savoir plus
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-[#1C5C7F] mb-4">
            Restez informés
          </h2>
          <p className="text-gray-600 mb-8">
            Abonnez-vous à notre newsletter pour recevoir nos actualités directement dans votre boîte mail
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F39226]"
              required
            />
            <button
              type="submit"
              className="bg-[#F39226] text-white px-8 py-3 rounded-lg hover:bg-[#1C5C7F] transition-colors font-semibold"
            >
              S'abonner
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}