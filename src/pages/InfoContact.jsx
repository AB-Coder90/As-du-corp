import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const InfoContact = () => {
  const sections = [
    {
      title: "Prendre Rendez-vous",
      path: "/info-contact/rdv-contact",
      description: "Réservez votre séance en ligne",
      icon: "📅"
    },
    {
      title: "Honoraires",
      path: "/info-contact/honoraires",
      description: "Consultez nos tarifs",
      icon: "💰"
    },
    {
      title: "Agenda",
      path: "/info-contact/agenda",
      description: "Horaires et disponibilités",
      icon: "⏰"
    },
    {
      title: "Galerie",
      path: "/info-contact/galerie",
      description: "Découvrez notre espace",
      icon: "🖼️"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 lg:px-20">
      <div className="container mx-auto">
        <motion.h1 
          className="text-5xl font-oriental font-bold text-[rgb(200,180,140)] text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Contact & Informations
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={section.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={section.path}
                className="block h-full"
              >
                <div className="bg-[#111111] p-8 rounded-lg border border-[rgb(200,180,140)] shadow-md hover:bg-[#1a1a1a] transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h2 className="text-2xl font-bold text-[rgb(200,180,140)] mb-2">
                    {section.title}
                  </h2>
                  <p className="text-gray-300">
                    {section.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoContact;