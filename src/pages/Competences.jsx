import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Competences = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 lg:px-20">
      <div className="container mx-auto">
        
        {/* Titre de la page */}
        <motion.h1 
          className="text-5xl font-oriental font-bold text-[rgb(200,180,140)] text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          Les Compétences en Médecine Chinoise
        </motion.h1>

        {/* Section 1 - Introduction */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-[rgb(200,180,140)] mb-4">
            Une médecine ancestrale au service de votre bien-être
          </h2>
          <p className="text-lg text-[rgb(220,200,160)] leading-relaxed">
            La médecine traditionnelle chinoise repose sur une compréhension profonde du corps humain, de son énergie vitale (<strong>Qi</strong>) et de son équilibre avec l’environnement. 
            Elle associe plusieurs techniques pour restaurer l'harmonie entre le corps et l'esprit, favoriser la circulation énergétique et prévenir les maladies.
          </p>
        </motion.section>

        {/* Section 2 - Compétences */}
        <motion.section 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.4 }}
        >
          
          {/* Acupuncture */}
          <motion.div 
            className="p-6 border border-[rgb(200,180,140)] rounded-lg shadow-md hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <h3 className="text-2xl font-semibold text-[rgb(200,180,140)] mb-3">
              Acupuncture
            </h3>
            <p className="text-lg text-[rgb(220,200,160)]">
              Stimulation de points énergétiques à l’aide d’aiguilles fines pour équilibrer le flux du Qi et soulager douleurs, stress et troubles divers.
            </p>
          </motion.div>

          {/* Massage Tui Na */}
          <motion.div 
            className="p-6 border border-[rgb(200,180,140)] rounded-lg shadow-md hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <h3 className="text-2xl font-semibold text-[rgb(200,180,140)] mb-3">
              Massage Tui Na
            </h3>
            <p className="text-lg text-[rgb(220,200,160)]">
              Technique de massage thérapeutique visant à améliorer la circulation sanguine, réduire les tensions musculaires et rétablir l’équilibre énergétique.
            </p>
          </motion.div>

          {/* Pharmacopée Chinoise */}
          <motion.div 
            className="p-6 border border-[rgb(200,180,140)] rounded-lg shadow-md hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <h3 className="text-2xl font-semibold text-[rgb(200,180,140)] mb-3">
              Pharmacopée Chinoise
            </h3>
            <p className="text-lg text-[rgb(220,200,160)]">
              Utilisation de plantes médicinales et minéraux pour rééquilibrer le Yin et le Yang et traiter divers déséquilibres du corps.
            </p>
          </motion.div>

          {/* Ventouses */}
          <motion.div 
            className="p-6 border border-[rgb(200,180,140)] rounded-lg shadow-md hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <h3 className="text-2xl font-semibold text-[rgb(200,180,140)] mb-3">
              Thérapie par Ventouses
            </h3>
            <p className="text-lg text-[rgb(220,200,160)]">
              Application de ventouses sur la peau pour améliorer la circulation sanguine, réduire les tensions et stimuler l’énergie vitale.
            </p>
          </motion.div>

          {/* Diététique Chinoise */}
          <motion.div 
            className="p-6 border border-[rgb(200,180,140)] rounded-lg shadow-md hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <h3 className="text-2xl font-semibold text-[rgb(200,180,140)] mb-3">
              Diététique Chinoise
            </h3>
            <p className="text-lg text-[rgb(220,200,160)]">
              Adaptation de l’alimentation selon la constitution et l’énergie de chacun pour préserver la santé et prévenir les maladies.
            </p>
          </motion.div>

          {/* Qi Gong et Tai Chi */}
          <motion.div 
            className="p-6 border border-[rgb(200,180,140)] rounded-lg shadow-md hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <h3 className="text-2xl font-semibold text-[rgb(200,180,140)] mb-3">
              Qi Gong & Tai Chi
            </h3>
            <p className="text-lg text-[rgb(220,200,160)]">
              Exercices de respiration et mouvements lents pour renforcer le corps, calmer l’esprit et stimuler la circulation énergétique.
            </p>
          </motion.div>

        </motion.section>

        {/* Section 3 - Conclusion & CTA */}
        <motion.section 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }}
        >
          <p className="text-lg text-[rgb(220,200,160)] max-w-3xl mx-auto mb-6">
            Chaque technique de la médecine chinoise est adaptée aux besoins spécifiques de chacun. Un bilan énergétique personnalisé permet de choisir la méthode la plus appropriée pour retrouver équilibre et bien-être.
          </p>
          <Link to="/rdv-contact">
            <motion.button 
              className="bg-[rgb(200,180,140)] text-black px-8 py-4 rounded-full font-semibold transition duration-300"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              Prendre rendez-vous
            </motion.button>
          </Link>
        </motion.section>

      </div>
    </div>
  );
};

export default Competences;
