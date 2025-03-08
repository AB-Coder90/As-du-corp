import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci ${name}, votre message a été envoyé !`);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Contactez-nous</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-gray-700">Nom</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-2 border rounded"></textarea>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;