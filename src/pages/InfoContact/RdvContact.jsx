import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RdvContact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    date: '',
    heure: '',
    motif: ''
  });

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
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 lg:px-20">
      <div className="container mx-auto">
        <motion.h1 
          className="text-5xl font-oriental font-bold text-[rgb(200,180,140)] text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          Prendre Rendez-vous
        </motion.h1>

        <motion.form 
          className="max-w-2xl mx-auto space-y-6 bg-[#111111] p-8 rounded-lg border border-[rgb(200,180,140)] shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-[rgb(200,180,140)]">Nom</label>
              <input 
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-[rgb(200,180,140)] rounded text-white focus:outline-none focus:border-white transition-colors duration-200"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-[rgb(200,180,140)]">Prénom</label>
              <input 
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-[rgb(200,180,140)] rounded text-white focus:outline-none focus:border-white transition-colors duration-200"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-[rgb(200,180,140)]">Email</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-[rgb(200,180,140)] rounded text-white focus:outline-none focus:border-white transition-colors duration-200"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-[rgb(200,180,140)]">Téléphone</label>
              <input 
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-[rgb(200,180,140)] rounded text-white focus:outline-none focus:border-white transition-colors duration-200"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-[rgb(200,180,140)]">Date souhaitée</label>
              <input 
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-[rgb(200,180,140)] rounded text-white focus:outline-none focus:border-white transition-colors duration-200"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-[rgb(200,180,140)]">Heure souhaitée</label>
              <input 
                type="time"
                name="heure"
                value={formData.heure}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-[rgb(200,180,140)] rounded text-white focus:outline-none focus:border-white transition-colors duration-200"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-[rgb(200,180,140)]">Motif de consultation</label>
            <textarea 
              name="motif"
              value={formData.motif}
              onChange={handleChange}
              className="w-full p-3 bg-black border border-[rgb(200,180,140)] rounded text-white focus:outline-none focus:border-white transition-colors duration-200 min-h-[100px]"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full px-6 py-3 bg-black text-white border border-[rgb(200,180,140)] rounded hover:bg-[rgb(200,180,140)] hover:text-black transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Envoyer la demande
          </motion.button>

          <p className="text-sm text-[rgb(220,200,160)] mt-4">
            * Tous les champs sont obligatoires. Vous recevrez une confirmation par email.
          </p>
        </motion.form>
      </div>
    </div>
  );
};

export default RdvContact;