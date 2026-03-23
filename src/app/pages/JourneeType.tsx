import { Clock, Coffee, Book, Users, Laptop, Award, Home, Sun, Moon } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function JourneeType() {
  const horaires = [
    {
      heure: "08:30",
      titre: "Arrivée au lycée",
      description: "Accueil des étudiants, mise en place pour la journée",
      icon: Sun,
      color: "from-yellow-400 to-orange-400",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY2FtcHVzJTIwbW9ybmluZ3xlbnwxfHx8fDE3NzMwNjMxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      heure: "09:00 - 11:00",
      titre: "Culture de la communication",
      description: "Cours théorique : analyse sémiologique d'une campagne publicitaire récente",
      icon: Book,
      color: "from-blue-400 to-cyan-400",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY2xhc3Nyb29tJTIwbGVjdHVyZXxlbnwxfHx8fDE3NzMwNjMxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      heure: "11:00 - 11:15",
      titre: "Pause café",
      description: "Moment d'échange entre étudiants, détente et convivialité",
      icon: Coffee,
      color: "from-amber-400 to-orange-500",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmVha3xlbnwxfHx8fDE3NzMwNjMxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      heure: "11:15 - 13:00",
      titre: "Atelier Adobe Creative Suite",
      description: "TP Photoshop & Illustrator : création d'une affiche événementielle",
      icon: Laptop,
      color: "from-purple-400 to-pink-400",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjBjb21wdXRlcnxlbnwxfHx8fDE3NzMwNjMxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      heure: "13:00 - 14:00",
      titre: "Pause déjeuner",
      description: "Déjeuner à la cafétéria ou en ville avec les camarades",
      icon: Users,
      color: "from-green-400 to-emerald-400",
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGx1bmNoJTIwY2FmZXRlcmlhfGVufDF8fHx8MTc3MzA2MzEzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      heure: "14:00 - 16:00",
      titre: "Projet tutoré en équipe",
      description: "Travail collaboratif sur une campagne de communication pour un client réel",
      icon: Users,
      color: "from-indigo-400 to-blue-500",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHRlYW13b3JrJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MzA2MzEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      heure: "16:00 - 17:30",
      titre: "Communication digitale",
      description: "Stratégie social media : créer et optimiser une campagne Facebook Ads",
      icon: Laptop,
      color: "from-cyan-400 to-blue-400",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2Rlcm58ZW58MXx8fHwxNzczMDYzMTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      heure: "17:30",
      titre: "Fin de journée",
      description: "Retour à la maison ou travail personnel à la bibliothèque",
      icon: Moon,
      color: "from-indigo-600 to-purple-600",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVuaW5nJTIwY2FtcHVzfGVufDF8fHx8MTc3MzA2MzEzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#1C5C7F] via-[#2A7BA0] to-[#1C5C7F] text-white py-20 overflow-hidden">
        {/* Décorations */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#F39226]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-[#F39226] rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <Clock size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Une journée type en BTS Communication</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Plongez dans le quotidien d'un étudiant et découvrez un aperçu concret de votre future formation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Voici un exemple de journée en 1ère année. Chaque journée est différente et alterne entre cours théoriques, 
            travaux pratiques, projets tutorés et ateliers créatifs. Une formation dynamique et professionnalisante !
          </p>
        </div>
      </section>

      {/* Timeline animée */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1C5C7F] via-[#F39226] to-[#1C5C7F] transform md:-translate-x-1/2"></div>

            {/* Items de la timeline */}
            <div className="space-y-12">
              {horaires.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col md:gap-8`}
                  >
                    {/* Contenu */}
                    <div className={`w-full md:w-5/12 ${isEven ? "md:text-right" : "md:text-left"} ml-20 md:ml-0`}>
                      <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-[#F39226]">
                        {/* Heure */}
                        <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-full font-bold text-sm mb-4 shadow-lg`}>
                          <Clock size={16} className="inline mr-2" />
                          {item.heure}
                        </div>

                        {/* Titre */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.titre}</h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>

                        {/* Image */}
                        <div className="mt-4 rounded-xl overflow-hidden shadow-md">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.titre}
                            className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Icône centrale */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-0 md:translate-y-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white`}>
                        <IconComponent size={28} className="text-white" />
                      </div>
                    </div>

                    {/* Espace vide pour l'alignement */}
                    <div className="hidden md:block w-5/12"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats de la journée */}
      <section className="py-20 bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">En chiffres</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20"
            >
              <div className="text-5xl font-bold text-[#F39226] mb-2">9h</div>
              <div className="text-white/80">de cours par jour</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20"
            >
              <div className="text-5xl font-bold text-[#F39226] mb-2">50%</div>
              <div className="text-white/80">de pratique créative</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20"
            >
              <div className="text-5xl font-bold text-[#F39226] mb-2">24</div>
              <div className="text-white/80">étudiants par classe</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20"
            >
              <div className="text-5xl font-bold text-[#F39226] mb-2">31h</div>
              <div className="text-white/80">de cours par semaine</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-10 border-2 border-[#F39226]/20">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                  L
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Laura May GIORGINI</h3>
                  <span className="px-3 py-1 bg-[#F39226] text-white text-sm rounded-full font-semibold">
                    Étudiante 2ème année
                  </span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic mb-4">
                  "Ce que j'adore dans cette formation, c'est la variété des cours ! Chaque journée est différente : 
                  on alterne entre théorie et pratique, travail individuel et projets d'équipe. Les profs sont 
                  des professionnels qui partagent leur expérience, et on travaille sur de vrais projets 
                  avec des clients réels. C'est ultra concret et ça nous prépare vraiment au monde du travail !"
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} size={20} className="text-[#F39226] fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à vivre cette expérience ?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Rejoignez-nous et découvrez une formation passionnante, créative et professionnalisante
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admission"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1C5C7F] text-white rounded-full font-semibold hover:bg-[#2A7BA0] transition-colors shadow-xl"
            >
              Candidater maintenant
            </a>
            <a
              href="/programme"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1C5C7F] border-2 border-[#1C5C7F] rounded-full font-semibold hover:bg-[#1C5C7F] hover:text-white transition-colors"
            >
              Voir le programme complet
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
