import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAppointment } from '@/context/AppointmentContext';

const Agenda = () => {
  const navigate = useNavigate();
  const { timeSlots, updateTimeSlots, selectTimeSlot } = useAppointment();
  const [selectedWeek, setSelectedWeek] = useState(new Date());

  // Heures de travail
  const workingHours = {
    "09:00": "9h00",
    "10:30": "10h30",
    "12:00": "12h00",
    "14:00": "14h00",
    "15:30": "15h30",
    "17:00": "17h00",
    "18:30": "18h30"
  };

  // Jours de la semaine en français
  const weekDays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

  // Fonction pour obtenir les dates de la semaine
  const getWeekDates = (date) => {
    const week = [];
    const currentDate = new Date(date);
    
    // Trouver le lundi de la semaine
    const currentDay = currentDate.getDay() || 7; // Convertir 0 (dimanche) en 7
    const mondayOffset = currentDay - 1; // Nombre de jours jusqu'au lundi
    currentDate.setDate(currentDate.getDate() - mondayOffset);
    
    // Générer les 6 jours (lundi à samedi)
    for (let i = 0; i < 6; i++) {
      week.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return week;
  };

  // Fonction pour formater la date
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('fr-FR', { 
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  // Fonction pour formater la date avec le mois en texte
  const formatDateWithMonth = (date) => {
    return new Intl.DateTimeFormat('fr-FR', { 
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  // Simuler le chargement des créneaux disponibles
  useEffect(() => {
    const generateTimeSlots = () => {
      const slots = {};
      const weekDates = getWeekDates(selectedWeek);
      const now = new Date();

      weekDates.forEach(date => {
        const dateStr = date.toISOString().split('T')[0];
        slots[dateStr] = {};
        
        Object.keys(workingHours).forEach(hour => {
          // Vérifier si le créneau n'est pas dans le passé
          const [h, m] = hour.split(':');
          const slotDate = new Date(date);
          slotDate.setHours(parseInt(h), parseInt(m));
          
          // Les créneaux dans le passé sont indisponibles
          slots[dateStr][hour] = slotDate > now && Math.random() > 0.3;
        });
      });

      updateTimeSlots(slots);
    };

    generateTimeSlots();
  }, [selectedWeek, updateTimeSlots]);

  // Fonction pour naviguer entre les semaines
  const navigateWeek = (direction) => {
    const newDate = new Date(selectedWeek);
    newDate.setDate(selectedWeek.getDate() + (direction * 7));
    setSelectedWeek(newDate);
  };

  // Fonction pour gérer la sélection d'un créneau
  const handleSlotClick = (date, time) => {
    selectTimeSlot(date, time);
    navigate('/info-contact/rdv-contact');
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 lg:px-20">
      <div className="container mx-auto">
        <motion.h1 
          className="text-5xl font-oriental font-bold text-[rgb(200,180,140)] text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Agenda & Disponibilités
        </motion.h1>

        <motion.section 
          className="max-w-6xl mx-auto bg-[#111111] p-8 rounded-lg border border-[rgb(200,180,140)] shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Navigation des semaines */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => navigateWeek(-1)}
              className="px-4 py-2 bg-black border border-[rgb(200,180,140)] rounded hover:bg-[rgb(200,180,140)] hover:text-black transition-colors"
            >
              Semaine précédente
            </button>
            <h2 className="text-2xl font-semibold text-[rgb(200,180,140)]">
              Semaine du {formatDateWithMonth(getWeekDates(selectedWeek)[0])}
            </h2>
            <button
              onClick={() => navigateWeek(1)}
              className="px-4 py-2 bg-black border border-[rgb(200,180,140)] rounded hover:bg-[rgb(200,180,140)] hover:text-black transition-colors"
            >
              Semaine suivante
            </button>
          </div>

          {/* Tableau des disponibilités */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-3 border-b border-[rgb(200,180,140)] text-[rgb(200,180,140)]">Horaire</th>
                  {getWeekDates(selectedWeek).map((date, index) => (
                    <th key={date} className="p-3 border-b border-[rgb(200,180,140)] text-[rgb(200,180,140)]">
                      <div>{weekDays[index]}</div>
                      <div>{formatDate(date)}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(workingHours).map(([hour, displayHour]) => (
                  <tr key={hour}>
                    <td className="p-3 border-b border-[rgb(200,180,140)] text-[rgb(200,180,140)]">
                      {displayHour}
                    </td>
                    {getWeekDates(selectedWeek).map(date => {
                      const dateStr = date.toISOString().split('T')[0];
                      const isAvailable = timeSlots[dateStr]?.[hour];
                      
                      return (
                        <td 
                          key={`${dateStr}-${hour}`}
                          className="p-3 border-b border-[rgb(200,180,140)] text-center"
                        >
                          <button
                            onClick={() => handleSlotClick(dateStr, hour)}
                            className={`w-full py-2 px-4 rounded transition-colors ${
                              isAvailable
                                ? 'bg-[rgb(200,180,140)] text-black hover:bg-[rgb(220,200,160)]'
                                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={!isAvailable}
                          >
                            {isAvailable ? 'Disponible' : 'Réservé'}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-4 text-[rgb(220,200,160)]">
            <p>Les consultations se font uniquement sur rendez-vous. Durée d'une séance : 1 heure.</p>
            <p>En cas d'empêchement, merci de prévenir au moins 24 heures à l'avance.</p>
            <p className="font-semibold">Pour confirmer votre rendez-vous, cliquez sur un créneau disponible puis remplissez le formulaire de contact.</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Agenda;