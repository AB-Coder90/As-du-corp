import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Nos Services</h2>
                
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Réservation de taxis</li>
                    <li>Véhicules sanitaires légers (VSL)</li>
                    <li>Ambulances médicalisées</li>
                </ul>
                
                <button className="btn btn-primary">Réserver</button>


    </div>

  );
};

export default Services;