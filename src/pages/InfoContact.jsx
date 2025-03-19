import React, { useState } from "react";
import { motion } from "framer-motion";

const InfoContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci ${name}, votre message a été envoyé !`);
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
          Contact & Informations
        </motion.h1>

        <motion.form 
          className="max-w-2xl mx-auto space-y-6 bg-[#111111] p-8 rounded-lg border border-[rgb(200,180,140)] shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block mb-2 text-[rgb(200,180,140)]">Nom</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="w-full p-3 bg-black border border-[rgb(200,180,140)] rounded text-white focus:outline-none focus:border-white transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block mb-2 text-[rgb(200,180,140)]">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-3 bg-black border border-[rgb(200,180,140)] rounded text-white focus:outline-none focus:border-white transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block mb-2 text-[rgb(200,180,140)]">Message</label>
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              className="w-full p-3 bg-black border border-[rgb(200,180,140)] rounded text-white focus:outline-none focus:border-white transition-colors duration-200 min-h-[150px]"
            ></textarea>
          </div>
          <button 
            className="w-full px-6 py-3 bg-black text-white border border-[rgb(200,180,140)] rounded hover:bg-[rgb(200,180,140)] hover:text-black transition-colors duration-200"
          >
            Envoyer
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default InfoContact;