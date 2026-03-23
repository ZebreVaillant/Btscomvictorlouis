import { BookOpen, Laptop, Users, TrendingUp, Calendar, Award, ArrowRight, Globe, Lightbulb, Target, Star, Briefcase, Heart, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import lyceeImage3 from "figma:asset/1f90bab0eb5f47de619e61e45dcce341b5cd25b6.png";
import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";

export function Programme() {
  const coursSupports = [
    {
      titre: "Culture de la communication",
      description: "Théorie et pratique de la communication, analyse des médias, sémiologie",
      icon: Lightbulb,
    },
    {
      titre: "CEJM (Culture économique, juridique et managériale)",
      description: "Compréhension de l'environnement économique, juridique et managérial des organisations",
      icon: BookOpen,
    },
    {
      titre: "LV (Anglais)",
      description: "Anglais professionnel appliqué à la communication et aux affaires",
      icon: Globe,
    },
  ];

  const blocsProfessionnels = [
    {
      titre: "BLOC 1 - Stratégie de communication",
      description: "Élaboration et pilotage d'une stratégie de communication globale",
      icon: Target,
    },
    {
      titre: "BLOC 2 - Conception et mise en œuvre de solutions de communication",
      description: "Création et production de supports et campagnes de communication",
      icon: TrendingUp,
    },
    {
      titre: "BLOC 3 - Solutions médias et digitales",
      description: "Stratégie digitale, réseaux sociaux, création de contenus web et médias",
      icon: Laptop,
    },
  ];

  const options = [
    {
      titre: "LV Option",
      description: "Langue vivante supplémentaire pour renforcer vos compétences linguistiques",
      icon: Globe,
    },
    {
      titre: "Entrepreneuriat",
      description: "Développement de l'esprit d'entreprise et accompagnement de projets entrepreneuriaux",
      icon: Briefcase,
    },
    {
      titre: "Engagement étudiant",
      description: "Valorisation de votre engagement associatif, sportif ou citoyen",
      icon: Heart,
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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#F39226] rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Modalités d'évaluation</h3>
                    <p className="text-gray-700">
                      Établissement habilité à faire passer le Contrôle en Cours de Formation (CCF).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Interactive - Parcours des 2 ans */}
      <section ref={ref} className="py-20 bg-gradient-to-br from-[#1C5C7F] via-[#2A7BA0] to-[#1C5C7F] text-white relative overflow-hidden">
        {/* Particules d'ambiance */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F39226]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Votre parcours en 2 ans
            </h2>
            <p className="text-xl text-white/90">
              Une progression structurée pour devenir un expert de la communication
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Ligne verticale centrale */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F39226] via-white to-[#F39226] hidden md:block transform -translate-x-1/2"></div>

            {/* 1ère Année */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-16"
            >
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                {/* Contenu gauche */}
                <div className="md:text-right mb-8 md:mb-0">
                  <div className="inline-block md:block">
                    <div className="bg-white/10 backdrop-blur-md border-2 border-[#F39226] rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform">
                      <div className="flex md:justify-end items-center gap-3 mb-4">
                        <Calendar size={32} className="text-[#F39226]" />
                        <h3 className="text-3xl font-bold">1ère Année</h3>
                      </div>
                      <p className="text-lg text-white/90 mb-6">
                        Septembre - Juin • Fondamentaux
                      </p>
                      
                      <div className="space-y-4 text-left md:text-right">
                        <div className="flex md:justify-end items-start gap-3">
                          <CheckCircle2 size={20} className="text-[#F39226] flex-shrink-0 md:order-2" />
                          <p className="text-white/90">Apprentissage des bases de la communication</p>
                        </div>
                        <div className="flex md:justify-end items-start gap-3">
                          <CheckCircle2 size={20} className="text-[#F39226] flex-shrink-0 md:order-2" />
                          <p className="text-white/90">Maîtrise des outils Adobe (Photoshop, InDesign, Illustrator)</p>
                        </div>
                        <div className="flex md:justify-end items-start gap-3">
                          <CheckCircle2 size={20} className="text-[#F39226] flex-shrink-0 md:order-2" />
                          <p className="text-white/90">Premiers projets clients en équipe</p>
                        </div>
                        <div className="flex md:justify-end items-start gap-3">
                          <CheckCircle2 size={20} className="text-[#F39226] flex-shrink-0 md:order-2" />
                          <p className="text-white/90">Stage de 6 semaines (mai-juin)</p>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-white/20">
                        <div className="flex md:justify-end items-center gap-2 text-[#F39226] font-semibold">
                          <Clock size={18} />
                          <span>31 heures / semaine</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Point central */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-16 h-16 bg-[#F39226] rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                </div>

                {/* Image droite */}
                <div className="hidden md:block">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 hover:border-[#F39226] transition-colors">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHRlYW13b3JrJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MzA2MzEzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Étudiants 1ère année"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2ème Année */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                {/* Image gauche */}
                <div className="hidden md:block">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 hover:border-[#F39226] transition-colors">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NzMwNjMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Étudiants 2ème année"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>

                {/* Point central */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-16 h-16 bg-[#F39226] rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                </div>

                {/* Contenu droite */}
                <div className="mb-8 md:mb-0">
                  <div className="inline-block md:block">
                    <div className="bg-white/10 backdrop-blur-md border-2 border-[#F39226] rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform">
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar size={32} className="text-[#F39226]" />
                        <h3 className="text-3xl font-bold">2ème Année</h3>
                      </div>
                      <p className="text-lg text-white/90 mb-6">
                        Septembre - Juin • Perfectionnement
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-[#F39226] flex-shrink-0" />
                          <p className="text-white/90">Approfondissement de la stratégie digitale</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-[#F39226] flex-shrink-0" />
                          <p className="text-white/90">Gestion de projets complexes en autonomie</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-[#F39226] flex-shrink-0" />
                          <p className="text-white/90">Préparation aux épreuves du BTS</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-[#F39226] flex-shrink-0" />
                          <p className="text-white/90">Stage de 8 semaines (janvier-mars)</p>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-white/20">
                        <div className="flex items-center gap-2 text-[#F39226] font-semibold">
                          <Clock size={18} />
                          <span>31 heures / semaine</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Diplôme Final */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <div className="inline-block bg-gradient-to-br from-[#F39226] to-[#E07B15] rounded-2xl p-8 shadow-2xl border-4 border-white">
                <Award size={48} className="mx-auto mb-4 text-white" />
                <h3 className="text-3xl font-bold mb-2">Diplôme BTS Communication</h3>
                <p className="text-white/90 text-lg">
                  Bac+2 reconnu par l'État • 120 crédits ECTS
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blocs professionnels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1C5C7F] mb-4">
            Blocs professionnels
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Les compétences métier au cœur de la formation, structurées en 3 blocs de compétences professionnelles
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {blocsProfessionnels.map((bloc, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border-2 border-[#F39226]/20 hover:border-[#F39226] transition-all hover:shadow-xl">
                <div className="w-14 h-14 bg-[#F39226] rounded-lg flex items-center justify-center mb-6">
                  <bloc.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1C5C7F]">
                  {bloc.titre}
                </h3>
                <p className="text-gray-700">{bloc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enseignements supports */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-[#1C5C7F] mb-4">
              Enseignements supports
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Des cours généraux pour développer une culture solide et des compétences transversales essentielles
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {coursSupports.map((matiere, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md border-2 border-gray-100 hover:border-[#1C5C7F]/30 transition-colors">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] rounded-lg flex items-center justify-center mb-6">
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
        </div>
      </section>

      {/* Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1C5C7F] mb-4">
            Options
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Choisissez parmi plusieurs options pour enrichir votre formation et développer des compétences supplémentaires
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {options.map((option, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border-2 border-[#F39226]/20 hover:border-[#F39226] transition-all hover:shadow-xl">
                <div className="w-14 h-14 bg-[#F39226] rounded-lg flex items-center justify-center mb-6">
                  <option.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1C5C7F]">
                  {option.titre}
                </h3>
                <p className="text-gray-700">{option.description}</p>
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

      {/* Galerie photos - La vie au BTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#1C5C7F] mb-4">
            La vie au BTS Communication
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez notre formation à travers quelques moments forts : cours, projets, événements et quotidien de nos étudiants
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Photo 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758270705172-07b53627dfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbW11bmljYXRpb24lMjBjbGFzc3Jvb20lMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzMwNjMxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Étudiants en cours de communication"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-semibold text-lg mb-1">Travail en équipe</h3>
                  <p className="text-sm text-white/80">Collaboration sur les projets de communication</p>
                </div>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758873272921-4b64aef3c32b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG1hcmtldGluZyUyMGJyYWluc3Rvcm1pbmclMjBvZmZpY2V8ZW58MXx8fHwxNzczMDYzMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Brainstorming créatif"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-semibold text-lg mb-1">Séances créatives</h3>
                  <p className="text-sm text-white/80">Brainstorming et conception de campagnes</p>
                </div>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760420940953-3958ad9f6287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcHJlc2VudGF0aW9uJTIwY29uZmVyZW5jZSUyMGV2ZW50fGVufDF8fHx8MTc3MzA2MzEzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Présentation étudiante"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-semibold text-lg mb-1">Présentations orales</h3>
                  <p className="text-sm text-white/80">Développement des compétences en prise de parole</p>
                </div>
              </div>
            </div>

            {/* Photo 4 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765539160785-e7953620488f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWVkaWElMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczMDYzMTMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Design et médias digitaux"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-semibold text-lg mb-1">Communication digitale</h3>
                  <p className="text-sm text-white/80">Maîtrise des outils de création numérique</p>
                </div>
              </div>
            </div>

            {/* Photo 5 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1701673841497-96b38bafd33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMGNhbXBhaWdufGVufDF8fHx8MTc3MzAxMDQwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Réseaux sociaux et marketing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-semibold text-lg mb-1">Social media</h3>
                  <p className="text-sm text-white/80">Gestion des réseaux sociaux et e-réputation</p>
                </div>
              </div>
            </div>

            {/* Photo 6 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={lyceeImage3}
                  alt="Lycée Victor Louis"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-semibold text-lg mb-1">Notre campus</h3>
                  <p className="text-sm text-white/80">Lycée Victor Louis à Talence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/portfolios"
              className="inline-flex items-center gap-2 text-[#F39226] hover:text-[#E07B15] font-semibold transition-colors"
            >
              Découvrir les réalisations de nos étudiants
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Rejoignez notre formation
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Découvrez comment devenir un professionnel de la communication avec notre programme.
            </p>
            <Link to="/inscription" className="inline-flex items-center px-6 py-3 bg-[#1C5C7F] text-white rounded-full shadow-md hover:bg-[#2A7BA0]">
              S'inscrire
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}