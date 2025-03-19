import React from 'react';
import { motion } from 'framer-motion';

const Galerie = () => {
  const images = [
    {
      src: '/images/cabinet-1.jpg',
      alt: 'Cabinet de médecine chinoise - Vue principale',
      title: 'Espace de consultation'
    },
    {
      src: '/images/cabinet-2.jpg',
      alt: 'Table de massage et matériel',
      title: 'Espace de soins'
    },
    {
      src: '/images/cabinet-3.jpg',
      alt: 'Collection d\'aiguilles d\'acupuncture',
      title: 'Matériel d\'acupuncture'
    },
    {
      src: '/images/cabinet-4.jpg',
      alt: 'Espace d\'attente',
      title: 'Salle d\'attente'
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
          Galerie du Cabinet
        </motion.h1>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.2 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg border border-[rgb(200,180,140)] shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-lg font-semibold text-[rgb(200,180,140)]">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          className="text-center text-[rgb(220,200,160)] mt-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }}
        >
          Découvrez notre cabinet de médecine traditionnelle chinoise, un espace dédié à votre bien-être et à votre santé.
        </motion.p>
      </div>
    </div>
  );
};

export default Galerie;