import React from 'react';
import { motion } from 'framer-motion';

const Honoraires = () => {
  const tarifs = [
    {
      service: 'Consultation initiale',
      duree: '1h30',
      prix: '80€',
      description: 'Bilan complet et première séance de traitement'
    },
    {
      service: 'Consultation de suivi',
      duree: '1h',
      prix: '65€',
      description: 'Séance de traitement et suivi thérapeutique'
    },
    {
      service: 'Massage Tui Na',
      duree: '1h',
      prix: '60€',
      description: 'Massage thérapeutique traditionnel chinois'
    },
    {
      service: 'Acupuncture',
      duree: '45min',
      prix: '55€',
      description: 'Séance d\'acupuncture ciblée'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 lg:px-20">
      <div className="container mx-auto">
        <motion.h1 
          className="text-5xl font-oriental font-bold text-[rgb(200,180,140)] text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          Honoraires
        </motion.h1>

        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.2 }}
        >
          {tarifs.map((tarif, index) => (
            <motion.div
              key={index}
              className="bg-[#111111] p-6 rounded-lg border border-[rgb(200,180,140)] shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-semibold text-[rgb(200,180,140)]">
                  {tarif.service}
                </h2>
                <span className="text-xl font-bold text-[rgb(200,180,140)]">
                  {tarif.prix}
                </span>
              </div>
              <div className="flex justify-between items-center text-[rgb(220,200,160)] mb-2">
                <span>Durée : {tarif.duree}</span>
              </div>
              <p className="text-[rgb(220,200,160)]">
                {tarif.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto mt-12 p-6 bg-[#111111] rounded-lg border border-[rgb(200,180,140)] shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-[rgb(200,180,140)] mb-4">
            Informations importantes
          </h2>
          <ul className="space-y-3 text-[rgb(220,200,160)]">
            <li>• Les tarifs sont donnés à titre indicatif et peuvent être adaptés selon la situation</li>
            <li>• Les consultations sont prises en charge par certaines mutuelles</li>
            <li>• Moyens de paiement acceptés : espèces, chèques, carte bancaire</li>
            <li>• Un reçu vous sera systématiquement remis</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Honoraires;