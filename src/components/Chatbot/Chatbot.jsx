import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Base de connaissances prédéfinie
const knowledgeBase = {
  greetings: {
    keywords: ['bonjour', 'salut', 'bonsoir', 'hello', 'hey', 'coucou', 'hi'],
    response: "Bonjour ! Je suis l'assistant virtuel de L'As Du Corps. Comment puis-je vous aider aujourd'hui ?"
  },
  goodbye: {
    keywords: ['au revoir', 'bye', 'à bientôt', 'merci', 'adieu', 'bonne journée'],
    response: "Au revoir ! N'hésitez pas à revenir si vous avez d'autres questions. Bonne journée !"
  },
  rdv: {
    keywords: ['rendez-vous', 'rdv', 'réserver', 'disponibilité', 'horaire', 'planning', 'créneau', 'consultation'],
    response: "Pour prendre rendez-vous, vous avez plusieurs options :\n1. Utilisez notre formulaire en ligne dans la section 'RDV et Contact'\n2. Appelez-nous au 06.XX.XX.XX.XX\n3. Consultez nos disponibilités dans la section 'Agenda'\n\nNos horaires d'ouverture sont :\n- Lundi au Vendredi : 9h-19h\n- Samedi : 9h-14h"
  },
  tarifs: {
    keywords: ['prix', 'tarif', 'coût', 'honoraires', 'paiement', 'remboursement', 'mutuelle', 'séance'],
    response: "Voici nos tarifs :\n- Première séance (1h30) : XX€\n- Séances suivantes (1h) : XX€\n\nNous acceptons :\n- Cartes bancaires\n- Espèces\n- Chèques\n\nCertaines mutuelles prennent en charge nos séances, n'hésitez pas à vous renseigner auprès de la vôtre."
  },
  discipline: {
    keywords: ['discipline', 'pratique', 'méthode', 'technique', 'médecine chinoise', 'traditionnel', 'ancestral'],
    response: "Notre pratique s'appuie sur la médecine traditionnelle chinoise qui comprend :\n- L'acupuncture\n- La moxibustion\n- Le tuina (massage thérapeutique)\n- La phytothérapie\n- Le qi gong\n\nPour plus de détails, visitez notre section 'Discipline'."
  },
  douleur: {
    keywords: ['mal', 'douleur', 'dos', 'muscle', 'articulation', 'migraine', 'stress', 'fatigue', 'sommeil'],
    response: "La médecine chinoise peut aider à soulager de nombreux maux :\n- Douleurs musculaires et articulaires\n- Maux de tête et migraines\n- Troubles du sommeil\n- Stress et anxiété\n- Problèmes digestifs\n\nChaque cas étant unique, nous établirons un diagnostic personnalisé lors de votre première consultation."
  },
  experience: {
    keywords: ['expérience', 'diplôme', 'formation', 'études', 'qualifications', 'compétences'],
    response: "Notre praticien est diplômé en médecine traditionnelle chinoise avec :\n- Plus de X années d'expérience\n- Formation à [École/Université]\n- Spécialisation en [domaines]\n\nDécouvrez son parcours complet dans la section 'Compétences'."
  },
  preparation: {
    keywords: ['préparer', 'préparation', 'première séance', 'première fois', 'venir', 'apporter'],
    response: "Pour votre première séance, voici quelques conseils :\n1. Prévoyez des vêtements confortables\n2. Apportez vos examens médicaux récents si pertinent\n3. Arrivez 10 minutes avant l'heure du rendez-vous\n4. Évitez un repas copieux dans l'heure précédant la séance"
  },
  urgence: {
    keywords: ['urgent', 'urgence', 'rapide', 'aujourd\'hui', 'demain', 'immédiat'],
    response: "Pour les demandes urgentes :\n1. Appelez-nous directement au 06.XX.XX.XX.XX\n2. En cas d'urgence médicale grave, contactez le 15 (SAMU)\n3. Pour un rendez-vous rapide, consultez nos créneaux d'urgence dans la section 'Agenda'"
  },
  localisation: {
    keywords: ['où', 'adresse', 'lieu', 'cabinet', 'localisation', 'accès', 'parking', 'transport'],
    response: "Notre cabinet est situé :\n[Adresse complète]\n\nAccès :\n- Métro : ligne X, station Y\n- Bus : lignes A, B\n- Parking : disponible à [emplacement]\n\nUn plan détaillé est disponible dans la section 'Contact'."
  },
  covid: {
    keywords: ['covid', 'coronavirus', 'sanitaire', 'masque', 'protection', 'virus'],
    response: "Mesures sanitaires en place :\n- Désinfection entre chaque patient\n- Gel hydroalcoolique disponible\n- Port du masque selon recommandations\n- Aération régulière des locaux\n\nMerci de nous prévenir en cas de symptômes."
  },
  contreIndications: {
    keywords: ['contre', 'indication', 'risque', 'danger', 'grossesse', 'enceinte', 'maladie'],
    response: "Certaines situations nécessitent des précautions particulières :\n- Grossesse\n- Problèmes cardiaques\n- Traitements anticoagulants\n\nMerci d'en discuter lors de la prise de rendez-vous pour adapter la séance."
  },
  bienfaits: {
    keywords: ['bienfait', 'bénéfice', 'avantage', 'effet', 'résultat', 'amélioration'],
    response: "La médecine chinoise offre de nombreux bienfaits :\n- Soulagement des douleurs chroniques\n- Amélioration du sommeil\n- Réduction du stress\n- Renforcement du système immunitaire\n- Meilleure circulation énergétique\n\nChaque traitement est personnalisé selon vos besoins."
  },
  techniques: {
    keywords: ['acupuncture', 'massage', 'tuina', 'moxibustion', 'ventouse', 'aiguille'],
    response: "Nous utilisons différentes techniques selon vos besoins :\n- Acupuncture : stimulation de points précis\n- Tuina : massage thérapeutique\n- Moxibustion : chaleur ciblée\n- Ventouses : amélioration circulation\n\nToutes nos techniques sont pratiquées dans le respect des traditions."
  },
  duree: {
    keywords: ['durée', 'temps', 'long', 'minute', 'heure', 'séance'],
    response: "Durée des séances :\n- Première consultation : 1h30\n- Séances suivantes : 1h\n- Séances express (selon cas) : 30min\n\nPrévoyez un peu de temps supplémentaire pour votre première visite."
  },
  default: {
    response: "Je ne suis pas sûr de comprendre votre demande. Voici nos principales sections :\n- RDV et Contact\n- Honoraires\n- Discipline\n- Compétences\n\nOu posez-moi une question sur :\n- Nos tarifs\n- La prise de rendez-vous\n- Nos méthodes de soin\n- La préparation des séances"
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Bonjour ! Je suis l'assistant virtuel de L'As Du Corps. Comment puis-je vous aider aujourd'hui ?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fonction pour trouver la meilleure réponse basée sur les mots-clés
  const findBestResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    
    // Chercher dans la base de connaissances
    for (const category of Object.values(knowledgeBase)) {
      if (category.keywords && category.keywords.some(keyword => lowercaseInput.includes(keyword))) {
        return category.response;
      }
    }
    
    // Si aucune correspondance n'est trouvée, retourner la réponse par défaut
    return knowledgeBase.default.response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Ajouter le message de l'utilisateur
    const userMessage = inputValue;
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    // Simuler un délai de réponse naturel
    setTimeout(() => {
      const response = findBestResponse(userMessage);
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#111111] border border-[rgb(200,180,140)] rounded-lg shadow-lg w-96 mb-4"
          >
            <div className="p-4 border-b border-[rgb(200,180,140)]">
              <h3 className="text-[rgb(200,180,140)] font-oriental text-xl">Assistant L'As Du Corps</h3>
            </div>
            
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-[rgb(200,180,140)] text-black font-medium'
                        : 'bg-black border border-[rgb(200,180,140)] text-[rgb(220,200,160)]'
                    }`}
                  >
                    {message.content.split('\n').map((line, i) => (
                      <p key={i} className={i > 0 ? 'mt-2' : ''}>
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-black border border-[rgb(200,180,140)] text-[rgb(220,200,160)] p-3 rounded-lg">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-[rgb(200,180,140)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-[rgb(200,180,140)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-[rgb(200,180,140)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-[rgb(200,180,140)]">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Tapez votre message..."
                  className="flex-1 p-2 bg-black border border-[rgb(200,180,140)] rounded text-white focus:outline-none focus:border-white transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[rgb(200,180,140)] text-black rounded hover:bg-[rgb(220,200,160)] transition-colors duration-200"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[rgb(200,180,140)] text-black p-4 rounded-full shadow-lg hover:bg-[rgb(220,200,160)] transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;
