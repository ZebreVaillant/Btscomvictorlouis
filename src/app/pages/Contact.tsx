import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Contact</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Une question ? Besoin d'informations ? Contactez-nous !
          </p>
        </div>
      </section>

      {/* Contact Info et Formulaire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div>
              <h2 className="text-3xl font-bold text-[#1C5C7F] mb-8">
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#F39226] rounded-lg flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                    <p className="text-gray-700">
                      Lycée Victor Louis<br />
                      2 Avenue de Thouars<br />
                      33400 Talence
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#F39226] rounded-lg flex items-center justify-center">
                      <Phone className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                    <p className="text-gray-700">05 56 84 18 10</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#F39226] rounded-lg flex items-center justify-center">
                      <Mail className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-700">btscom@lycee-victorlouis.fr</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#F39226] rounded-lg flex items-center justify-center">
                      <Clock className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Horaires d'accueil</h3>
                    <p className="text-gray-700">
                      Lundi - Vendredi<br />
                      8h00 - 12h00 / 13h30 - 18h00
                    </p>
                  </div>
                </div>
              </div>

              {/* Accès transports */}
              <div className="mt-10 bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-4 text-[#1C5C7F]">
                  Accès transports
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-semibold">Tram B :</span> Arrêt Arts et Métiers</p>
                  <p><span className="font-semibold">Bus :</span> Lignes 10, 35, 44</p>
                  <p><span className="font-semibold">Parking :</span> Disponible sur le campus</p>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div>
              <h2 className="text-3xl font-bold text-[#1C5C7F] mb-8">
                Envoyez-nous un message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <div className="flex gap-3">
                    <Send className="text-green-500 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-green-800 mb-2">Message envoyé !</p>
                      <p className="text-sm text-green-700">
                        Nous vous répondrons dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-semibold mb-2 text-gray-700">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F39226]"
                      />
                    </div>
                    <div>
                      <label htmlFor="prenom" className="block text-sm font-semibold mb-2 text-gray-700">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        required
                        value={formData.prenom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F39226]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F39226]"
                    />
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-semibold mb-2 text-gray-700">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F39226]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F39226] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F39226] hover:bg-[#E07B15] text-white px-6 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    <Send size={20} />
                    Envoyer le message
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    * Champs obligatoires
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Plan d'accès */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#1C5C7F] mb-12">
            Plan d'accès
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.5830621719360352%2C44.80293238476562%2C-0.5749607086181641%2C44.80693238476562&layer=mapnik&marker=44.80493238476562%2C-0.5790114402770996"
                className="w-full h-full border-0"
                title="Plan d'accès Lycée Victor Louis Talence"
              />
            </div>
            <div className="p-6 bg-gray-50">
              <p className="text-center text-gray-700">
                <a
                  href="https://www.openstreetmap.org/?mlat=44.80493&mlon=-0.57901#map=17/44.80493/-0.57901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1C5C7F] hover:text-[#F39226] underline"
                >
                  Voir le plan en grand
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journées portes ouvertes */}
      <section className="py-20 bg-[#1C5C7F] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Journées Portes Ouvertes
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Venez découvrir notre formation et rencontrer l'équipe pédagogique
          </p>
          <div className="bg-white/10 p-8 rounded-xl max-w-md mx-auto">
            <p className="text-2xl font-bold mb-2">Samedi 15 février 2026</p>
            <p className="text-lg mb-4">9h00 - 17h00</p>
            <p className="text-white/80">
              Visite des locaux, présentation de la formation, échanges avec les étudiants et enseignants
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
