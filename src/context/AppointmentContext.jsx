import React, { createContext, useState, useContext } from 'react';

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [timeSlots, setTimeSlots] = useState({});

  const selectTimeSlot = (date, time) => {
    setSelectedSlot({ date, time });
  };

  const updateTimeSlots = (newSlots) => {
    setTimeSlots(newSlots);
  };

  return (
    <AppointmentContext.Provider 
      value={{ 
        selectedSlot,
        timeSlots,
        selectTimeSlot,
        updateTimeSlots
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
};
