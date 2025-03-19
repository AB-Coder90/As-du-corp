import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Discipline = () => {
  return (
    
    <main className="bg-black text-white min-h-screen py-16 px-8 lg:px-20">
      {/* En-tête de la section */}
      <section className="text-center mb-16">
        <motion.h1
          className="text-6xl font-oriental font-bold text-[rgb(200,180,140)] uppercase"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          La Médecine Chinoise & Ses Disciplines
        </motion.h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-[rgb(220,200,160)]">
          Découvrez comment la **médecine traditionnelle chinoise** favorise l'équilibre du corps et de l'esprit,
          à travers des techniques ancestrales pratiquées par **Brahim Chahid**, expert diplômé EMC Clermont-Ferrand - UFPMTC.
        </p>
      </section>

      {/* Présentation de la médecine chinoise */}
      <section className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-[rgb(200,180,140)]">
            🌿 Qu'est-ce que la médecine chinoise ?
          </h2>
          <p className="mt-4 text-lg text-[rgb(220,200,160)]">
            La médecine traditionnelle chinoise (MTC) repose sur une **philosophie millénaire** qui considère le corps 
            comme un système énergétique global. Elle vise à harmoniser le **Yin et le Yang** et utilise plusieurs méthodes :
          </p>
          <ul className="mt-4 space-y-3 text-lg">
            <li>✅ **L'acupuncture** : activation des points énergétiques pour restaurer l’équilibre.</li>
            <li>✅ **Le massage Tui Na** : technique de pression et de mobilisation pour libérer les tensions.</li>
            <li>✅ **La phytothérapie** : utilisation des plantes médicinales pour rétablir l’harmonie interne.</li>
            <li>✅ **La diététique chinoise** : nutrition adaptée aux déséquilibres énergétiques.</li>
            <li>✅ **Le Qi Gong** : exercices respiratoires et mouvements pour revitaliser le corps.</li>
          </ul>
        </motion.div>

        {/* Image d’illustration */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/medecine-chinoise.webp"
            alt="Médecine chinoise"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg border-4 border-[rgb(200,180,140)]"
          />
        </motion.div>
      </section>

      {/* Présentation du praticien */}
      <section className="mt-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Image du praticien */}
        <motion.div
          className="lg:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/brahim-chahid.jpg"
            alt="Brahim Chahid, expert en médecine chinoise"
            className="w-full max-w-md object-cover rounded-lg shadow-lg border-4 border-[rgb(200,180,140)]"
          />
        </motion.div>

        {/* Texte de présentation */}
        <motion.div
          className="lg:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-[rgb(200,180,140)]">🔎 Qui est Brahim Chahid ?</h2>
          <p className="mt-4 text-lg text-[rgb(220,200,160)]">
            **Brahim Chahid** est un expert en médecine chinoise, diplômé de **EMC Clermont-Ferrand - UFPMTC**.  
            Passionné par l’équilibre énergétique, il accompagne ses patients vers un **bien-être optimal** grâce à des techniques précises.
          </p>
          <p className="mt-4 text-lg text-[rgb(220,200,160)]">
            Ses spécialisations incluent :
          </p>
          <ul className="mt-4 space-y-3 text-lg">
            <li>✅ **Traitement des douleurs chroniques** (articulations, migraines, sciatiques).</li>
            <li>✅ **Gestion du stress et de l'anxiété** avec des soins énergétiques.</li>
            <li>✅ **Harmonisation du système digestif et métabolique**.</li>
            <li>✅ **Accompagnement des sportifs** pour optimiser la récupération musculaire.</li>
          </ul>
        </motion.div>
      </section>

      {/* Section Contact */}
      <section className="mt-20 text-center">
        <h2 className="text-4xl font-bold text-[rgb(200,180,140)]">📅 Prenez Rendez-vous</h2>
        <p className="mt-4 text-lg text-[rgb(220,200,160)]">
          Pour une **consultation personnalisée**, contactez-nous et bénéficiez d’un accompagnement adapté à vos besoins.
        </p>
        <Link
          to="/info-contact/rdv-contact"
          className="inline-block mt-6 bg-[rgb(200,180,140)] text-black px-6 py-3 rounded-full font-semibold transition hover:bg-yellow-500"
        >
          Nous contacter
        </Link>
      </section>
    </main>
  );
};

export default Discipline;


