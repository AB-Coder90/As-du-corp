import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAppointment } from '@/context/AppointmentContext';

const Confirmation = () => {
  const navigate = useNavigate();
  const { selectedSlot } = useAppointment();

  if (!selectedSlot) {
    navigate('/info-contact/agenda');
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-[#111111] p-8 rounded-lg border border-[rgb(200,180,140)] shadow-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="w-20 h-20 mx-auto mb-8 rounded-full bg-[rgb(200,180,140)] flex items-center justify-center"
        >
          <svg 
            className="w-12 h-12 text-black" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </motion.div>

        <h2 className="text-3xl font-oriental font-bold text-center text-[rgb(200,180,140)] mb-8">
          Rendez-vous confirmé !
        </h2>

        <div className="space-y-6 text-center text-[rgb(220,200,160)]">
          <p className="text-xl">
            Votre rendez-vous est programmé pour le{' '}
            <span className="font-semibold">
              {new Date(selectedSlot.date).toLocaleDateString('fr-FR')} à{' '}
              {selectedSlot.time.replace(':', 'h')}
            </span>
          </p>

          <div className="bg-[rgb(200,180,140)] bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Rappels importants :</h3>
            <ul className="space-y-2 text-left list-disc list-inside">
              <li>Arrivez 10 minutes avant votre rendez-vous</li>
              <li>Apportez vos documents médicaux pertinents</li>
              <li>Portez des vêtements confortables</li>
              <li>En cas d'empêchement, prévenez 24h à l'avance</li>
            </ul>
          </div>

          <p>
            Un email de confirmation a été envoyé à votre adresse.
            Vous recevrez également un rappel 24h avant votre rendez-vous.
          </p>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-black text-[rgb(200,180,140)] border border-[rgb(200,180,140)] rounded hover:bg-[rgb(200,180,140)] hover:text-black transition-colors"
            >
              Retour à l'accueil
            </button>
            <button
              onClick={() => navigate('/info-contact/agenda')}
              className="px-6 py-3 bg-[rgb(200,180,140)] text-black rounded hover:bg-[rgb(220,200,160)] transition-colors"
            >
              Voir l'agenda
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Confirmation;
