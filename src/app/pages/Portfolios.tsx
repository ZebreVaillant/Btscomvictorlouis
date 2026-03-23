import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Portfolios() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Portfolios de nos étudiants</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Découvrez les portfolios personnels de chaque étudiant de la promotion 2026
          </p>
        </div>
      </section>

      {/* Section Portfolios individuels des étudiants */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F39226]/10 text-[#F39226] px-4 py-2 rounded-full mb-6">
              <ExternalLink size={16} />
              <span className="text-sm font-semibold">Promotion 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C5C7F] mb-4">
              26 Étudiants Créatifs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cliquez sur une carte pour découvrir le portfolio personnel de chaque étudiant
            </p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {/* Giorgini Laura */}
            <a href="https://lauramaygiorgini.wixsite.com/portfolio" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1589220286904-3dcef62c68ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwaGVhZHNob3QlMjBzdHVkZW50fGVufDF8fHx8MTc3MzIxMDYwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Giorgini Laura"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Giorgini Laura</h3>
                </div>
              </div>
            </a>

            {/* Bergese Matéo */}
            <a href="https://portefolioloispage.my.canva.site/mat-o-bergese-portfolio" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1762753674498-73ec49feafc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzczMjEwNjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Bergese Matéo"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Bergese Matéo</h3>
                </div>
              </div>
            </a>

            {/* Beyoud Sofia */}
            <a href="#" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwcG9ydHJhaXQlMjBzbWlsaW5nfGVufDF8fHx8MTc3MzIxMDYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Beyoud Sofia"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Beyoud Sofia</h3>
                </div>
              </div>
            </a>

            {/* Bouillard Ambre */}
            <a href="https://www.canva.com/design/DAG9p8VFpJg/9F0HP0hUUvDsR7JUoSgBiQ/view" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN0dWRlbnQlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzMyMTA2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Bouillard Ambre"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Bouillard Ambre</h3>
                </div>
              </div>
            </a>

            {/* Colongue Alison */}
            <a href="https://portefolioloispage.my.canva.site/alison-colongue/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758598306913-5cd682b9e53b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGZhY2UlMjBwb3J0cmFpdCUyMGNvbmZpZGVudHxlbnwxfHx8fDE3NzMyMTA2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Colongue Alison"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Colongue Alison</h3>
                </div>
              </div>
            </a>

            {/* Courtot Léonard */}
            <a href="https://portefolioloispage.my.canva.site/leonard-courtot" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1680104073282-8462cdf70b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBmYWNlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczMjEwMDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Courtot Léonard"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Courtot Léonard</h3>
                </div>
              </div>
            </a>

            {/* Dubernet--Larrue Anaïs */}
            <a href="https://portefolioloispage.my.canva.site/ana-s-larrue-dubernet-portfolio" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzMyMDkwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Dubernet--Larrue Anaïs"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Dubernet--Larrue Anaïs</h3>
                </div>
              </div>
            </a>

            {/* Durand Manon */}
            <a href="https://portefolioloispage.my.canva.site/manon-durand-portfolio" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1676369134323-243e00148e54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvbWFuJTIwcG9ydHJhaXQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzMyMTA2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Durand Manon"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Durand Manon</h3>
                </div>
              </div>
            </a>

            {/* Fèvres Chrys */}
            <a href="https://portefolioloispage.my.canva.site/chrys-fevres" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1769636930047-4478f12cf430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBvcnRyYWl0JTIwbWFuJTIwcHJvZmVzc2lvbmFsJTIwY29uZmlkZW50fGVufDF8fHx8MTc3MzIwOTQ4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Fèvres Chrys"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Fèvres Chrys</h3>
                </div>
              </div>
            </a>

            {/* Givran Chloé */}
            <a href="https://portefolioloispage.my.canva.site/portolio-givran-chlo" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1769636930016-5d9f0ca653aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3QlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzMyMTA2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Givran Chloé"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Givran Chloé</h3>
                </div>
              </div>
            </a>

            {/* Gnaleko Améthyste */}
            <a href="https://portefolioloispage.my.canva.site/amethyste" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1657310771828-ec5bbc25df98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pY2F0aW9uJTIwc3R1ZGVudCUyMHdvbWFuJTIwY3JlYXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMyMTA2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Gnaleko Améthyste"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Gnaleko Améthyste</h3>
                </div>
              </div>
            </a>

            {/* Haladi Hairdine */}
            <a href="https://portefolioloispage.my.canva.site/hhairdine" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758598304332-94b40ce7c7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwaGVhZHNob3QlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMHNtaWxlfGVufDF8fHx8MTc3MzIxMDYwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Haladi Hairdine"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Haladi Hairdine</h3>
                </div>
              </div>
            </a>

            {/* Ibarrola Mila */}
            <a href="https://portefolioloispage.my.canva.site/mila-ibarrola" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1697095098675-1d02496ef86a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvbWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWwlMjB5b3VuZ3xlbnwxfHx8fDE3NzMyMTA2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Ibarrola Mila"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Ibarrola Mila</h3>
                </div>
              </div>
            </a>

            {/* Iturriaga Guerrero Lorena */}
            <a href="https://portefolioloispage.my.canva.site/lorena-iturriaga-guerrero/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1765238938586-efe0d0f5ce64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN0dWRlbnQlMjBwb3J0cmFpdCUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MzIxMDA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Iturriaga Guerrero Lorena"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Iturriaga Guerrero Lorena</h3>
                </div>
              </div>
            </a>

            {/* Ladeveze Louna */}
            <a href="https://www.flipsnack.com/5688A98C5A8/portfolio-louna" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1770058428154-9eee8a6a1fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGZhY2UlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMyMDk4MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Ladeveze Louna"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Ladeveze Louna</h3>
                </div>
              </div>
            </a>

            {/* Laffont Maéva */}
            <a href="https://portefolioloispage.my.canva.site/maeva-laffont-portfolio" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1765648763932-43a3e2f8f35c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwc21pbGV8ZW58MXx8fHwxNzczMTk1NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Laffont Maéva"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Laffont Maéva</h3>
                </div>
              </div>
            </a>

            {/* Lafitte Oriane */}
            <a href="https://portefolioloispage.my.canva.site/oriane-lafitte" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1624260473740-164b3099c7c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjB3b21hbiUyMGNyZWF0aXZlJTIwY29tbXVuaWNhdGlvbnxlbnwxfHx8fDE3NzMyMDk0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Lafitte Oriane"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Lafitte Oriane</h3>
                </div>
              </div>
            </a>

            {/* Larrazet Oriane */}
            <a href="https://portefolioloispage.my.canva.site/portfofio-larrazet-oriane" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1769636929130-56648d6e9c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwaGVhZHNob3QlMjBtb2Rlcm58ZW58MXx8fHwxNzczMjA5NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Larrazet Oriane"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Larrazet Oriane</h3>
                </div>
              </div>
            </a>

            {/* Lebourg Alice */}
            <a href="https://lebourgalice33.wixsite.com/aboutme" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1699658744252-acf837366ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHlvdW5nJTIwd29tYW4lMjBhcnRpc3R8ZW58MXx8fHwxNzczMjA5NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Lebourg Alice"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Lebourg Alice</h3>
                </div>
              </div>
            </a>

            {/* Martin Léana */}
            <a href="https://portefolioloispage.my.canva.site/portfolio-l-ana-martin-v2" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBvcnRyYWl0JTIwd29tYW4lMjBwcm9mZXNzaW9uYWwlMjBzbWlsZXxlbnwxfHx8fDE3NzMyMDk0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Martin Léana"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Martin Léana</h3>
                </div>
              </div>
            </a>

            {/* Page Lois */}
            <a href="https://foxdecom.fr/portfolio/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1763745315951-7daac4821af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMGNvbmZpZGVudHxlbnwxfHx8fDE3NzMxMzM2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Page Lois"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Page Lois</h3>
                </div>
              </div>
            </a>

            {/* Quetier Klara */}
            <a href="https://portefolioloispage.my.canva.site/modeling-portfolio-website-in-pastel-pink-pastel-blue-black-colored-experimental-style" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1610413352588-fe480e968b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbiUyMHN0dWRlbnQlMjBjb25maWRlbnR8ZW58MXx8fHwxNzczMjA5NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Quetier Klara"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Quetier Klara</h3>
                </div>
              </div>
            </a>

            {/* Silvente Maïlys */}
            <a href="https://portefolioloispage.my.canva.site/portfolio-copie" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHlvdW5nJTIwbWFuJTIwY3JlYXRpdmUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczMjA5NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Silvente Maïlys"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Silvente Maïlys</h3>
                </div>
              </div>
            </a>

            {/* Six Romain */}
            <a href="https://portefolioloispage.my.canva.site/romain-six-portfolio" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/flagged/photo-1555728750-55f4db213833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG1hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsJTIwc3R1ZGVudHxlbnwxfHx8fDE3NzMyMTA2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Six Romain"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Six Romain</h3>
                </div>
              </div>
            </a>

            {/* Taïbi Chahinaz */}
            <a href="https://portefolioloispage.my.canva.site/portfolio-chahinaz" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1722635255984-827851ba91be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbiUyMHlvdW5nJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzczMjA5NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Taïbi Chahinaz"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Taïbi Chahinaz</h3>
                </div>
              </div>
            </a>

            {/* Vaz Catarino Ash */}
            <a href="https://leavazcatarinoclg.wixsite.com/portfolio3" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#F39226]">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMGhlYWRzaG90JTIwY2FzdWFsfGVufDF8fHx8MTc3MzEzNTkwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Vaz Catarino Ash"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-[10px] font-bold text-gray-900 group-hover:text-[#F39226] transition-colors leading-tight">Vaz Catarino Ash</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Vous aussi, créez votre portfolio</h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez notre formation et développez vos compétences créatives pour construire un portfolio professionnel qui vous ressemble
          </p>
          <a
            href="/admission"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F39226] text-white rounded-full font-semibold hover:bg-[#E07B15] transition-colors shadow-xl"
          >
            Candidater au BTS Communication
            <ExternalLink size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
