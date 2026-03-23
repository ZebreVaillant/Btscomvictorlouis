import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Link } from "react-router";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Bonjour ! 👋 Je suis l'assistant virtuel du BTS Communication du Lycée Victor Louis. Comment puis-je vous aider ?",
      isBot: true,
      timestamp: new Date(),
      suggestions: [
        "Le programme",
        "Les débouchés",
        "Comment s'inscrire ?",
        "Journée portes ouvertes"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): { text: string; suggestions?: string[] } => {
    const lowerMessage = userMessage.toLowerCase();

    // Programme
    if (lowerMessage.includes("programme") || lowerMessage.includes("cours") || lowerMessage.includes("matière")) {
      return {
        text: "Le BTS Communication est une formation complète sur 2 ans (1350h) couvrant :\n\n• Culture de la communication\n• Projet de communication\n• Communication digitale\n• Relation annonceur\n• 14 semaines de stage\n\nVoulez-vous en savoir plus ?",
        suggestions: ["Voir le programme complet", "Les débouchés", "Contact"]
      };
    }

    // Débouchés
    if (lowerMessage.includes("débouché") || lowerMessage.includes("métier") || lowerMessage.includes("travail") || lowerMessage.includes("emploi")) {
      return {
        text: "Nos diplômés exercent dans de nombreux domaines :\n\n📱 Community Manager\n🎨 Chargé de communication\n📊 Chef de projet digital\n✍️ Rédacteur web\n📢 Responsable marketing\n\nTaux d'insertion professionnelle : 85% sous 6 mois !",
        suggestions: ["Le programme", "Admission", "Portfolios étudiants"]
      };
    }

    // Admission / Inscription
    if (lowerMessage.includes("admission") || lowerMessage.includes("inscri") || lowerMessage.includes("candidat") || lowerMessage.includes("parcoursup")) {
      return {
        text: "📝 L'admission se fait via Parcoursup.\n\nPré-requis :\n• Baccalauréat (tous types)\n• Dossier scolaire\n• Lettre de motivation\n• Projet professionnel\n\nLes candidatures pour 2026 sont ouvertes !",
        suggestions: ["Journée portes ouvertes", "Contact", "Le programme"]
      };
    }

    // Portes ouvertes
    if (lowerMessage.includes("porte") || lowerMessage.includes("ouverte") || lowerMessage.includes("visite") || lowerMessage.includes("7 mars")) {
      return {
        text: "🎓 Journée Portes Ouvertes\n📅 Samedi 7 mars 2026 (matin)\n📍 Lycée Victor Louis - Talence\n\nAu programme :\n• Visite des locaux\n• Rencontre avec les enseignants\n• Échanges avec les étudiants\n• Présentation des projets\n\nRéservation conseillée !",
        suggestions: ["Réserver ma place", "Plan d'accès", "Contact"]
      };
    }

    // Contact
    if (lowerMessage.includes("contact") || lowerMessage.includes("téléphone") || lowerMessage.includes("email") || lowerMessage.includes("joindre")) {
      return {
        text: "📞 05 56 80 76 40\n📧 bts-com-vl@gmail.com\n📍 2 Avenue de Thouars, Talence (33)\n\n🕒 Horaires : Lun-Ven 8h-17h\n\nVous pouvez également remplir notre formulaire de contact en ligne.",
        suggestions: ["Formulaire de contact", "Plan d'accès", "Réseaux sociaux"]
      };
    }

    // Stage
    if (lowerMessage.includes("stage")) {
      return {
        text: "Les stages en entreprise :\n\n1️⃣ 1ère année : 6 semaines\n2️⃣ 2ème année : 8 semaines\n\n100% de nos étudiants trouvent un stage dans la région bordelaise ou au-delà. Nous vous accompagnons dans votre recherche !",
        suggestions: ["Le programme", "Les débouchés", "Portfolios étudiants"]
      };
    }

    // Réseaux sociaux
    if (lowerMessage.includes("instagram") || lowerMessage.includes("facebook") || lowerMessage.includes("réseau") || lowerMessage.includes("social")) {
      return {
        text: "Suivez-nous sur les réseaux sociaux ! 📱\n\n• Instagram : @bts_com_vl\n• Facebook : BTS Com VL\n\nDécouvrez le quotidien de nos étudiants, nos projets et nos actualités !",
        suggestions: ["Contact", "Portfolios étudiants", "Actualités"]
      };
    }

    // Tarif / Prix
    if (lowerMessage.includes("tarif") || lowerMessage.includes("prix") || lowerMessage.includes("coût") || lowerMessage.includes("gratuit")) {
      return {
        text: "Le BTS Communication est une formation publique GRATUITE ! 🎉\n\nSeuls quelques frais annexes sont à prévoir :\n• Matériel scolaire\n• Éventuels déplacements\n• Participation vie étudiante (facultative)\n\nPas de frais de scolarité !",
        suggestions: ["Admission", "Le programme", "Contact"]
      };
    }

    // Alternance
    if (lowerMessage.includes("alternan")) {
      return {
        text: "Le BTS Communication du Lycée Victor Louis est proposé en formation initiale avec stages.\n\nPour l'alternance, nous vous invitons à nous contacter pour connaître les possibilités.",
        suggestions: ["Contact", "Le programme", "Stage"]
      };
    }

    // Talence / Localisation
    if (lowerMessage.includes("talence") || lowerMessage.includes("bordeaux") || lowerMessage.includes("où") || lowerMessage.includes("adresse") || lowerMessage.includes("plan")) {
      return {
        text: "📍 Lycée Victor Louis\n2 Avenue de Thouars\n33400 Talence\n\nÀ 10 min du centre de Bordeaux en tramway (Ligne B - Arts et Métiers).\n\nAccès facile en transports en commun !",
        suggestions: ["Plan d'accès Google Maps", "Contact", "Journée portes ouvertes"]
      };
    }

    // Réponse par défaut
    return {
      text: "Je ne suis pas sûr de comprendre votre question. 🤔\n\nVoici quelques sujets sur lesquels je peux vous renseigner :",
      suggestions: [
        "Le programme",
        "Les débouchés",
        "Admission",
        "Contact",
        "Journée portes ouvertes"
      ]
    };
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Message utilisateur
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Réponse du bot (avec délai pour effet de typing)
    setTimeout(() => {
      const botResponseData = getBotResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseData.text,
        isBot: true,
        timestamp: new Date(),
        suggestions: botResponseData.suggestions
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Liens directs
    if (suggestion === "Voir le programme complet") {
      window.location.href = "/programme";
      return;
    }
    if (suggestion === "Formulaire de contact" || suggestion === "Réserver ma place") {
      window.location.href = "/contact";
      return;
    }
    if (suggestion === "Portfolios étudiants") {
      window.location.href = "/portfolios";
      return;
    }
    if (suggestion === "Actualités") {
      window.location.href = "/actualites";
      return;
    }
    if (suggestion === "Plan d'accès Google Maps" || suggestion === "Plan d'accès") {
      window.open("https://www.google.com/maps/place/Lyc%C3%A9e+Victor+Louis/@44.805404,-0.595184,17z", "_blank");
      return;
    }
    if (suggestion === "Réseaux sociaux") {
      handleSendMessage("réseaux sociaux");
      return;
    }

    // Autres suggestions déclenchent une recherche
    handleSendMessage(suggestion);
  };

  return (
    <>
      {/* Bouton flottant - Design amélioré */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 group"
          aria-label="Ouvrir le chatbot"
        >
          {/* Cercle de pulsation en arrière-plan */}
          <div className="absolute inset-0 bg-[#F39226] rounded-full animate-ping opacity-20"></div>
          
          {/* Glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#F39226] via-[#E07B15] to-[#F39226] rounded-full opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-300"></div>
          
          {/* Bouton principal */}
          <div className="relative bg-gradient-to-br from-[#F39226] via-[#E68A1E] to-[#E07B15] text-white p-4 md:p-4.5 rounded-full shadow-2xl hover:shadow-[#F39226]/50 hover:scale-110 transition-all duration-300">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Icône */}
            <MessageCircle size={24} className="md:hidden relative z-10" strokeWidth={2.5} />
            <MessageCircle size={28} className="hidden md:block relative z-10" strokeWidth={2.5} />
            
            {/* Badge "en ligne" avec animation */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white shadow-lg"></span>
            </span>
          </div>
          
          {/* Tooltip amélioré */}
          <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1">
            <div className="bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2.5 rounded-xl shadow-2xl border border-white/10 whitespace-nowrap">
              <p className="text-sm font-semibold flex items-center gap-2">
                <MessageCircle size={16} className="text-[#F39226]" />
                Une question ? Je suis là !
              </p>
              <p className="text-xs text-gray-300 mt-0.5">Cliquez pour discuter 💬</p>
            </div>
            {/* Flèche du tooltip */}
            <div className="absolute top-full right-6 -mt-1">
              <div className="border-8 border-transparent border-t-gray-900/95"></div>
            </div>
          </div>
        </button>
      )}

      {/* Fenêtre du chatbot - Taille réduite et positionnée à droite, responsive */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 md:bottom-6 md:right-6 z-50 w-full h-[85vh] md:w-[340px] md:h-[480px] md:rounded-2xl bg-white shadow-2xl flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1C5C7F] to-[#2A7BA0] text-white p-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Assistant BTS Com</h3>
                <p className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  En ligne
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1.5 rounded-lg transition-colors"
              aria-label="Fermer le chatbot"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id}>
                <div className={`flex gap-3 ${!message.isBot ? 'flex-row-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.isBot 
                      ? 'bg-gradient-to-br from-[#1C5C7F] to-[#2A7BA0]' 
                      : 'bg-gradient-to-br from-[#F39226] to-[#E07B15]'
                  } text-white`}>
                    {message.isBot ? <Bot size={16} /> : <User size={16} />}
                  </div>

                  {/* Message */}
                  <div className={`max-w-[70%] ${!message.isBot ? 'items-end' : ''}`}>
                    <div className={`px-4 py-2.5 rounded-2xl ${
                      message.isBot 
                        ? 'bg-white text-gray-800 rounded-tl-sm shadow-sm' 
                        : 'bg-gradient-to-br from-[#F39226] to-[#E07B15] text-white rounded-tr-sm'
                    }`}>
                      <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    </div>
                    <p className={`text-xs text-gray-500 mt-1 px-1 ${!message.isBot ? 'text-right' : ''}`}>
                      {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>

                {/* Suggestions */}
                {message.suggestions && message.suggestions.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2 ml-11">
                    {message.suggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs px-3 py-1.5 bg-white border border-[#F39226]/30 text-[#1C5C7F] rounded-full hover:bg-[#F39226] hover:text-white hover:border-[#F39226] transition-all shadow-sm font-medium"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F39226] focus:border-transparent text-sm"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="bg-gradient-to-br from-[#F39226] to-[#E07B15] text-white p-2.5 rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-md"
                aria-label="Envoyer"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}