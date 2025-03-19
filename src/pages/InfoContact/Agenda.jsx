import React from 'react';
import { motion } from 'framer-motion';

const Agenda = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 lg:px-20">
      <div className="container mx-auto">
        <motion.h1 
          className="text-5xl font-oriental font-bold text-[rgb(200,180,140)] text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          Agenda & Disponibilités
        </motion.h1>

        <motion.section 
          className="max-w-3xl mx-auto bg-[#111111] p-8 rounded-lg border border-[rgb(200,180,140)] shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-[rgb(200,180,140)] mb-6">
            Horaires de consultation
          </h2>
          
          <div className="space-y-4 text-[rgb(220,200,160)]">
            <div className="flex justify-between items-center border-b border-[rgb(200,180,140)] pb-2">
              <span>Lundi - Vendredi</span>
              <span>9h00 - 19h00</span>
            </div>
            <div className="flex justify-between items-center border-b border-[rgb(200,180,140)] pb-2">
              <span>Samedi</span>
              <span>9h00 - 17h00</span>
            </div>
            <div className="flex justify-between items-center border-b border-[rgb(200,180,140)] pb-2">
              <span>Dimanche</span>
              <span>Fermé</span>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[rgb(220,200,160)] mb-4">
              Les consultations se font uniquement sur rendez-vous. Veuillez prévoir environ 1 heure par séance.
            </p>
            <p className="text-[rgb(220,200,160)] mb-6">
              En cas d'empêchement, merci de prévenir au moins 24 heures à l'avance.
            </p>
          </div>

          <motion.button
            className="w-full px-6 py-3 bg-black text-white border border-[rgb(200,180,140)] rounded hover:bg-[rgb(200,180,140)] hover:text-black transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Prendre rendez-vous
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
};

export default Agenda;