import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <main className="bg-black text-white min-h-screen py-16 px-8 lg:px-20">
      {/* En-tête de la section */}
      <section className="text-center mb-16">
        <motion.h1
          className="text-6xl font-oriental font-bold text-gold uppercase"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          À propos de L'As Du Corp 63
        </motion.h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Découvrez la médecine chinoise et l'expertise de **Brahim Chahid**, praticien diplômé EMC Clermont-Ferrand - UFPMTC.
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
          <h2 className="text-4xl font-bold text-gold">Qu'est-ce que la médecine chinoise ?</h2>
          <p className="mt-4 text-lg">
            La médecine traditionnelle chinoise (MTC) repose sur une philosophie millénaire qui considère le corps comme un système énergétique global.
            Elle vise à rétablir l'équilibre entre le **Yin et le Yang** et utilise des techniques telles que :
          </p>
          <ul className="mt-4 space-y-3 text-lg">
            <li>✅ **L'acupuncture** : stimulation des méridiens pour rétablir l’énergie vitale.</li>
            <li>✅ **Le massage Tui Na** : une thérapie manuelle pour soulager les tensions.</li>
            <li>✅ **La phytothérapie** : utilisation de plantes médicinales pour soigner.</li>
            <li>✅ **La diététique chinoise** : adapter l’alimentation pour maintenir l’équilibre.</li>
            <li>✅ **Le Qi Gong** : gymnastique énergétique pour renforcer le bien-être.</li>
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
            className="w-full max-w-md object-cover rounded-lg shadow-lg border-4 border-gold"
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
            alt="Brahim Chahid"
            className="w-full max-w-md object-cover rounded-lg shadow-lg border-4 border-gold"
          />
        </motion.div>

        {/* Texte de présentation */}
        <motion.div
          className="lg:w-2/3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-gold">Qui est Brahim Chahid ?</h2>
          <p className="mt-4 text-lg">
            **Brahim Chahid** est un praticien en médecine traditionnelle chinoise, diplômé de **EMC Clermont-Ferrand - UFPMTC**.  
            Fort d’une solide formation et d’une **expérience approfondie**, il met son expertise au service du bien-être de ses patients.
          </p>
          <p className="mt-4 text-lg">
            Ses domaines de compétence incluent :
          </p>
          <ul className="mt-4 space-y-3 text-lg">
            <li>✅ **Traitement des douleurs chroniques** (dos, articulations, migraines).</li>
            <li>✅ **Gestion du stress et des troubles du sommeil**.</li>
            <li>✅ **Accompagnement en rééquilibrage énergétique**.</li>
            <li>✅ **Soins adaptés aux sportifs et récupération physique**.</li>
          </ul>
        </motion.div>
      </section>

      {/* Section Contact */}
      <section className="mt-20 text-center">
        <h2 className="text-4xl font-bold text-gold">Prenez Rendez-vous</h2>
        <p className="mt-4 text-lg">
          Contactez-nous dès aujourd'hui pour un diagnostic personnalisé et un accompagnement sur-mesure.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 bg-gold text-black px-6 py-3 rounded-full font-semibold transition hover:bg-yellow-500"
        >
          Nous contacter
        </a>
      </section>
    </main>
  );
};

export default AboutUs;
