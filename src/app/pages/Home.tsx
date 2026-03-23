import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, Users, Briefcase, GraduationCap, TrendingUp, Award, Calendar, Sparkles, Star, CheckCircle, BookOpen, Globe, ChevronLeft, ChevronRight, Building2, DollarSign, Target } from "lucide-react";
import lyceeImage1 from "figma:asset/bf6272581529e7f63df0acac631fab16bb3f1e3b.png";
import lyceeImage2 from "figma:asset/a001fbcdaf1ac94174c6c97a54241674724d1140.png";
import lyceeImage3 from "figma:asset/1f90bab0eb5f47de619e61e45dcce341b5cd25b6.png";
import Slider from "react-slick";
import { motion, useInView } from "motion/react";
import { Counter } from "../components/Counter";
import confetti from "canvas-confetti";

export function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [stats, setStats] = useState({
    success: 0,
    students: 0,
    internships: 0,
    experience: 0
  });

  const sliderRef = useRef<Slider>(null);
  const [current3DSlide, setCurrent3DSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const carousel3DItems = [
    {
      image: lyceeImage1,
      title: "Notre Campus",
      description: "Un environnement moderne et inspirant à Talence"
    },
    {
      image: lyceeImage2,
      title: "Équipements Pro",
      description: "Studios, matériel photo/vidéo, Adobe Suite"
    },
    {
      image: lyceeImage3,
      title: "Vie Étudiante",
      description: "Une ambiance conviviale et dynamique"
    },
    {
      image: lyceeImage1,
      title: "Projets Réels",
      description: "Collaboration avec des entreprises locales"
    },
    {
      image: lyceeImage2,
      title: "Salles de Cours",
      description: "Espaces adaptés à la pédagogie de projet"
    }
  ];

  const next3DSlide = () => {
    setCurrent3DSlide((prev) => (prev + 1) % carousel3DItems.length);
  };

  const prev3DSlide = () => {
    setCurrent3DSlide((prev) => (prev - 1 + carousel3DItems.length) % carousel3DItems.length);
  };

  const testimonials = [
    {
      text: "Le BTS Communication du Lycée Victor Louis m'a permis d'acquérir toutes les compétences nécessaires pour démarrer ma carrière. Les enseignants sont passionnés et le suivi est personnalisé. Aujourd'hui, je travaille dans une agence de communication à Bordeaux.",
      author: "Sarah M.",
      year: "Promotion 2024",
      role: "Chargée de communication en agence"
    },
    {
      text: "Les projets concrets et les stages m'ont donné une vraie expérience professionnelle. J'ai pu développer mon portfolio et créer mon réseau. Le BTS m'a ouvert toutes les portes !",
      author: "Thomas L.",
      year: "Promotion 2023",
      role: "Community Manager"
    },
    {
      text: "Une formation complète qui allie théorie et pratique. Les équipements sont excellents et l'ambiance de classe est super. Je recommande vivement ce BTS !",
      author: "Léa D.",
      year: "Promotion 2025",
      role: "Étudiante en 2ème année"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const currentRef = sliderRef.current;
    if (currentRef) {
      currentRef.slickGoTo(currentTestimonial);
    }
  }, [currentTestimonial]);

  return (
    <div>
      {/* Hero Section - Version moderne avec animation */}
      <section className="relative h-[700px] overflow-hidden">
        {/* Background avec overlay animé */}
        <div className="absolute inset-0">
          <img 
            src={lyceeImage1} 
            alt="Lycée Victor Louis - Talence"
            className="w-full h-full object-cover scale-105 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1C5C7F]/90 via-[#1C5C7F]/80 to-[#F39226]/60"></div>
          
          {/* Formes géométriques décoratives */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#F39226]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl">
            {/* Badge animé */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles size={16} className="text-[#F39226]" />
              <span className="text-sm font-medium">Formation certifiée par l'État • Bac+2</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white animate-fade-in-up">
              BTS Communication
              <span className="block text-[#F39226] mt-2">Victor Louis</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-white/95 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Devenez un professionnel de la communication créative et digitale
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/programme"
                className="group inline-flex items-center gap-2 bg-[#F39226] hover:bg-[#E07B15] text-white px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-2xl hover:shadow-[#F39226]/30 hover:scale-105"
              >
                Découvrir le programme
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-xl border-2 border-white/50 hover:border-white transition-all"
              >
                S'inscrire
              </Link>
            </div>

            {/* Stats rapides */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">2 ans</div>
                <div className="text-white/70 text-sm">de formation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">14 sem.</div>
                <div className="text-white/70 text-sm">de stage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">100%</div>
                <div className="text-white/70 text-sm">d'insertion pro</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Bandeau Journée Portes Ouvertes */}
      <section className="bg-gradient-to-r from-[#F39226] to-[#E07B15] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Calendar size={32} className="text-white" />
              <div>
                <div className="font-bold text-xl">Journée Portes Ouvertes</div>
                <div className="text-white/90">Vendredi 7 mars 2026 • 9h-17h</div>
              </div>
            </div>
            <Link
              to="/contact"
              className="bg-white text-[#F39226] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Réserver ma visite
            </Link>
          </div>
        </div>
      </section>

      {/* Statistiques impressionnantes */}
      <section className="py-20 bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] text-white relative overflow-hidden">
        {/* Décorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F39226]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Notre BTS en chiffres</h2>
            <p className="text-xl text-white/80">Des résultats qui parlent d'eux-mêmes</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
              <TrendingUp size={40} className="text-[#F39226] mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2">
                <Counter end={95} suffix="%" />
              </div>
              <div className="text-white/80">Taux de réussite</div>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
              <Users size={40} className="text-[#F39226] mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2">
                <Counter end={24} />
              </div>
              <div className="text-white/80">Étudiants par classe</div>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
              <Briefcase size={40} className="text-[#F39226] mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2">
                <Counter end={100} suffix="%" />
              </div>
              <div className="text-white/80">Trouvent un stage</div>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all hover:scale-105">
              <Award size={40} className="text-[#F39226] mx-auto mb-4" />
              <div className="text-5xl font-bold mb-2">
                <Counter end={15} suffix="+" />
              </div>
              <div className="text-white/80">Années d'expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation moderne avec 2 colonnes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image avec effet */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#1C5C7F]/20 to-[#F39226]/20 rounded-3xl blur-2xl"></div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={lyceeImage2}
                  alt="Lycée Victor Louis - Bâtiment principal - Talence"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Badge flottant */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#F39226] to-[#E07B15] text-white p-6 rounded-2xl shadow-2xl">
                <div className="text-3xl font-bold">33400</div>
                <div className="text-sm">Talence, Bordeaux</div>
              </div>
            </div>

            {/* Contenu */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F39226]/10 text-[#F39226] px-4 py-2 rounded-full mb-6">
                <Star size={16} />
                <span className="text-sm font-semibold">Formation d'excellence</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#1C5C7F] mb-6">
                Votre avenir en communication commence ici
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Le BTS Communication du Lycée Victor Louis forme des professionnels capables de concevoir et de mettre en œuvre des opérations de communication dans tous types d'organisations : entreprises, agences, collectivités.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Cette formation en 2 ans allie théorie et pratique, vous permettant d'acquérir toutes les compétences nécessaires pour réussir dans le secteur dynamique de la communication.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#F39226] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-[#1C5C7F] mb-1">Pédagogie par projet</div>
                    <div className="text-gray-600">Cas réels d'entreprises et développement de votre portfolio professionnel</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#F39226] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-[#1C5C7F] mb-1">Équipements modernes</div>
                    <div className="text-gray-600">Studios, matériel photo/vidéo, logiciels professionnels (Adobe Suite)</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#F39226] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-[#1C5C7F] mb-1">Réseau professionnel</div>
                    <div className="text-gray-600">Partenariats avec entreprises et agences de la région bordelaise</div>
                  </div>
                </div>
              </div>

              <Link
                to="/programme"
                className="inline-flex items-center gap-2 bg-[#1C5C7F] hover:bg-[#2A7BA0] text-white px-6 py-3 rounded-lg mt-8 transition-colors"
              >
                Voir le programme détaillé
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Points clés - Version moderne avec cartes animées */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C5C7F] mb-4">
              Pourquoi choisir notre BTS ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une formation complète qui vous prépare aux métiers de demain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#F39226]/30 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F39226] to-[#E07B15] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1C5C7F]">
                Établissement public
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Le lycée Victor Louis est un établissement public d'enseignement, gage de qualité et d'accessibilité pour tous.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#F39226]/30 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F39226] to-[#E07B15] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1C5C7F]">
                Professeurs certifiés
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Une équipe pédagogique ayant réussi les concours de l'Éducation Nationale, pour un encadrement solide et reconnu.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#F39226]/30 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F39226] to-[#E07B15] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <DollarSign className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1C5C7F]">
                Coût accessible
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Formation gratuite dans le public, bien plus accessible que dans le privé. Seuls les frais d'inscription universitaires sont à prévoir.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#F39226]/30 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1C5C7F]">
                Cadre professionnalisant
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Projets concrets avec de vraies entreprises, outils professionnels (Adobe Suite), et interventions régulières de professionnels du secteur.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#F39226]/30 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1C5C7F]">
                14 semaines de stage
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Immersion professionnelle répartie sur 2 ans pour construire votre réseau et acquérir une vraie expérience terrain.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#F39226]/30 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1C5C7F]">
                Diplôme d'État
              </h3>
              <p className="text-gray-700 leading-relaxed">
                BTS reconnu par l'État (niveau Bac+2). L'obtention du BTS emporte l'acquisition de 120 crédits européens (ECTS), ouvrant les portes du marché du travail ou de la poursuite d'études.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrousel 3D - Découvrez notre univers */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-[#1C5C7F] to-gray-900 relative overflow-hidden">
        {/* Décorations d'ambiance */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F39226]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1C5C7F]/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Découvrez notre univers
            </h2>
            <p className="text-xl text-white/80">
              Explorez en 3D tous les aspects de votre future formation
            </p>
          </div>

          {/* Container 3D */}
          <div className="relative h-[500px] md:h-[600px]" style={{ perspective: '1200px' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Carrousel 3D */}
              <div className="relative w-full h-full flex items-center justify-center">
                {carousel3DItems.map((item, index) => {
                  const totalItems = carousel3DItems.length;
                  const angle = ((index - current3DSlide) * 360) / totalItems;
                  const isActive = index === current3DSlide;
                  const distance = Math.abs(index - current3DSlide);
                  const normalizedDistance = Math.min(distance, totalItems - distance);
                  
                  return (
                    <div
                      key={index}
                      className="absolute transition-all duration-700 ease-out"
                      style={{
                        transform: `
                          rotateY(${angle}deg) 
                          translateZ(${isActive ? '450px' : '400px'})
                          scale(${isActive ? 1.1 : 0.85})
                        `,
                        opacity: normalizedDistance <= 2 ? (isActive ? 1 : 0.4) : 0,
                        zIndex: isActive ? 10 : 5 - normalizedDistance,
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                    >
                      <div className={`w-80 md:w-96 h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 ${
                        isActive ? 'border-[#F39226]' : 'border-white/20'
                      }`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                          <h3 className={`font-bold mb-2 transition-all duration-300 ${
                            isActive ? 'text-3xl text-[#F39226]' : 'text-2xl text-white'
                          }`}>
                            {item.title}
                          </h3>
                          <p className={`text-white/90 transition-all duration-300 ${
                            isActive ? 'text-base opacity-100' : 'text-sm opacity-70'
                          }`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contrôles de navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
              <button
                onClick={prev3DSlide}
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-[#F39226] text-white transition-all flex items-center justify-center group"
                aria-label="Précédent"
              >
                <ChevronLeft size={28} className="group-hover:scale-110 transition-transform" />
              </button>

              {/* Indicateurs */}
              <div className="flex gap-2">
                {carousel3DItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent3DSlide(index)}
                    className={`transition-all ${
                      index === current3DSlide
                        ? 'w-8 h-3 bg-[#F39226]'
                        : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                    } rounded-full`}
                    aria-label={`Aller à la slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next3DSlide}
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-[#F39226] text-white transition-all flex items-center justify-center group"
                aria-label="Suivant"
              >
                <ChevronRight size={28} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Info slide actif */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full z-20">
              <p className="text-white font-semibold">
                {current3DSlide + 1} / {carousel3DItems.length}
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mt-12">
            <p className="text-white/60 text-sm">
              Utilisez les flèches pour naviguer dans le carrousel 3D
            </p>
          </div>
        </div>
      </section>

      {/* Galerie immersive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C5C7F] mb-4">
              La vie au BTS Communication
            </h2>
            <p className="text-xl text-gray-600">
              Immergez-vous dans notre quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative h-[400px] rounded-2xl overflow-hidden group">
              <img
                src={lyceeImage3}
                alt="Campus Victor Louis"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Notre campus à Talence</h3>
                  <p className="text-white/90">Un cadre moderne et inspirant</p>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <img
                src={lyceeImage2}
                alt="Équipements"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-1">Équipements professionnels</h3>
                  <p className="text-sm text-white/90">Adobe Suite, studios...</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/portfolios"
              className="inline-flex items-center gap-2 text-[#F39226] hover:text-[#E07B15] font-semibold text-lg transition-colors group"
            >
              Découvrir nos réalisations étudiantes
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Actualités Récentes - Carrousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C5C7F] mb-4">
              Actualités récentes
            </h2>
            <p className="text-xl text-gray-600">
              Suivez la vie de notre BTS
            </p>
          </div>

          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={4000}
            pauseOnHover={true}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]}
            className="actualites-carousel"
          >
            <div className="px-3">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] flex items-center justify-center">
                  <Calendar size={64} className="text-white/30" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#F39226] font-semibold mb-2">15 février 2026</div>
                  <h3 className="text-xl font-bold text-[#1C5C7F] mb-3">
                    Journée Portes Ouvertes - 7 mars
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Venez découvrir notre formation, rencontrer l'équipe pédagogique et échanger avec nos étudiants.
                  </p>
                  <Link to="/actualites" className="text-[#F39226] hover:text-[#E07B15] font-semibold inline-flex items-center gap-1">
                    En savoir plus
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="px-3">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#F39226] to-[#E07B15] flex items-center justify-center">
                  <Award size={64} className="text-white/30" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#F39226] font-semibold mb-2">10 février 2026</div>
                  <h3 className="text-xl font-bold text-[#1C5C7F] mb-3">
                    Projet étudiant primé
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Nos étudiants remportent le concours régional de communication digitale avec leur campagne innovante.
                  </p>
                  <Link to="/actualites" className="text-[#F39226] hover:text-[#E07B15] font-semibold inline-flex items-center gap-1">
                    En savoir plus
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="px-3">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#1C5C7F] to-[#F39226] flex items-center justify-center">
                  <Briefcase size={64} className="text-white/30" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#F39226] font-semibold mb-2">5 février 2026</div>
                  <h3 className="text-xl font-bold text-[#1C5C7F] mb-3">
                    Partenariat avec agence locale
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Nouvelle collaboration avec une agence bordelaise pour des projets réels et des opportunités de stage.
                  </p>
                  <Link to="/actualites" className="text-[#F39226] hover:text-[#E07B15] font-semibold inline-flex items-center gap-1">
                    En savoir plus
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="px-3">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#2A7BA0] to-[#1C5C7F] flex items-center justify-center">
                  <Users size={64} className="text-white/30" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#F39226] font-semibold mb-2">28 janvier 2026</div>
                  <h3 className="text-xl font-bold text-[#1C5C7F] mb-3">
                    Conférence métiers de la com'
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Rencontre avec des professionnels : retours d'expérience et conseils pour votre future carrière.
                  </p>
                  <Link to="/actualites" className="text-[#F39226] hover:text-[#E07B15] font-semibold inline-flex items-center gap-1">
                    En savoir plus
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </Slider>

          <div className="text-center mt-10">
            <Link
              to="/actualites"
              className="inline-flex items-center gap-2 bg-[#1C5C7F] hover:bg-[#2A7BA0] text-white px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              Voir toutes les actualités
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages - Carrousel */}
      <section className="py-20 bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] text-white relative overflow-hidden">
        {/* Décorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F39226]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ils témoignent</h2>
            <p className="text-xl text-white/80">L'expérience de nos étudiants et diplômés</p>
          </div>

          <div className="relative min-h-[320px]">
            <Slider
              ref={sliderRef}
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={6000}
              pauseOnHover={true}
              pauseOnFocus={true}
              arrows={false}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentTestimonial
                      ? 'opacity-100 translate-x-0'
                      : index < currentTestimonial
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl">
                    <div className="text-6xl text-[#F39226] mb-6">"</div>
                    <p className="text-xl md:text-2xl mb-8 italic leading-relaxed">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#F39226] rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-lg">{testimonial.author}</div>
                        <div className="text-white/70 text-sm">{testimonial.role}</div>
                        <div className="text-white/60 text-xs">{testimonial.year}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial
                    ? 'bg-[#F39226] w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Version moderne */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C5C7F]/5 to-[#F39226]/5"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F39226]/10 text-[#F39226] px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-semibold">Rentrée 2026</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#1C5C7F] mb-6">
            Prêt à nous rejoindre ?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Les candidatures pour la rentrée 2026 sont ouvertes. Rejoignez une formation qui transformera votre passion en carrière.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/admission"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#F39226] to-[#E07B15] hover:from-[#E07B15] hover:to-[#F39226] text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all shadow-xl hover:shadow-2xl hover:shadow-[#F39226]/30 hover:scale-105"
            >
              Déposer ma candidature
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1C5C7F] px-10 py-5 rounded-xl text-lg font-semibold border-2 border-[#1C5C7F] transition-all hover:shadow-lg"
            >
              Nous contacter
            </Link>
          </div>

          {/* Info supplémentaire */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Des questions ? Notre équipe est disponible pour vous accompagner
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm">
              <a href="mailto:bts-com-vl@gmail.com" className="text-[#F39226] hover:text-[#E07B15] font-medium">
                bts-com-vl@gmail.com
              </a>
              <span className="text-gray-300">•</span>
              <a href="tel:0556807640" className="text-[#F39226] hover:text-[#E07B15] font-medium">
                05 56 80 76 40
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}