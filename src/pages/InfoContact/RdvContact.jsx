import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAppointment } from '@/context/AppointmentContext';

const RdvContact = () => {
  const navigate = useNavigate();
  const { selectedSlot } = useAppointment();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    date: '',
    heure: '',
    motif: ''
  });

  // Mettre à jour le formulaire quand un créneau est sélectionné
  useEffect(() => {
    if (selectedSlot) {
      setFormData(prev => ({
        ...prev,
        date: selectedSlot.date,
        heure: selectedSlot.time
      }));
    }
  }, [selectedSlot]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log('Formulaire soumis:', formData);
    // Rediriger vers la confirmation
    navigate('/info-contact/confirmation');
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-[#111111] p-8 rounded-lg border border-[rgb(200,180,140)] shadow-md"
      >
        <h2 className="text-3xl font-oriental font-bold text-center text-[rgb(200,180,140)] mb-8">
          Prendre Rendez-vous
        </h2>

        {selectedSlot ? (
          <div className="mb-8 p-4 bg-[rgb(200,180,140)] bg-opacity-10 rounded-lg">
            <p className="text-[rgb(200,180,140)] text-center">
              Créneau sélectionné : {new Date(selectedSlot.date).toLocaleDateString('fr-FR')} à {selectedSlot.time.replace(':', 'h')}
            </p>
          </div>
        ) : (
          <div className="mb-8 p-4 bg-red-900 bg-opacity-10 rounded-lg">
            <p className="text-red-400 text-center">
              Aucun créneau sélectionné. Veuillez choisir un créneau dans l'agenda.
            </p>
            <div className="text-center mt-4">
              <button
                onClick={() => navigate('/info-contact/agenda')}
                className="px-4 py-2 bg-[rgb(200,180,140)] text-black rounded hover:bg-[rgb(220,200,160)] transition-colors"
              >
                Voir l'agenda
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-[rgb(200,180,140)]">
                Nom
              </label>
              <input
                type="text"
                name="nom"
                id="nom"
                required
                value={formData.nom}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-black border border-[rgb(200,180,140)] text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(200,180,140)] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-[rgb(200,180,140)]">
                Prénom
              </label>
              <input
                type="text"
                name="prenom"
                id="prenom"
                required
                value={formData.prenom}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-black border border-[rgb(200,180,140)] text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(200,180,140)] focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[rgb(200,180,140)]">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-black border border-[rgb(200,180,140)] text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(200,180,140)] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-[rgb(200,180,140)]">
                Téléphone
              </label>
              <input
                type="tel"
                name="telephone"
                id="telephone"
                required
                value={formData.telephone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-black border border-[rgb(200,180,140)] text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(200,180,140)] focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="motif" className="block text-sm font-medium text-[rgb(200,180,140)]">
              Motif du rendez-vous
            </label>
            <textarea
              name="motif"
              id="motif"
              required
              rows={4}
              value={formData.motif}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-black border border-[rgb(200,180,140)] text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(200,180,140)] focus:border-transparent"
              placeholder="Décrivez brièvement la raison de votre consultation..."
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/info-contact/agenda')}
              className="px-6 py-3 bg-black text-[rgb(200,180,140)] border border-[rgb(200,180,140)] rounded hover:bg-[rgb(200,180,140)] hover:text-black transition-colors"
            >
              Retour à l'agenda
            </button>
            <button
              type="submit"
              disabled={!selectedSlot}
              className={`px-6 py-3 rounded transition-colors ${
                selectedSlot
                  ? 'bg-[rgb(200,180,140)] text-black hover:bg-[rgb(220,200,160)]'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
              }`}
            >
              Confirmer le rendez-vous
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default RdvContact;