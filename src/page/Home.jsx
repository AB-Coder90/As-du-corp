import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const numParticles = 700;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: Math.random() * 1.2 - 0.6,
        speedY: Math.random() * 1.2 - 0.6,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.fillStyle = "rgba(255, 215, 0, 0.8)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <main className="relative w-full h-screen bg-black text-white flex items-center justify-center px-8 lg:px-20 overflow-hidden">
      {/* Effet de points animés en arrière-plan */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20"></canvas>

      <div className="relative w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Texte (Gauche, Centré) */}
        <motion.div
          className="w-full lg:w-1/2 z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-7xl md:text-8xl font-oriental font-bold uppercase tracking-wide leading-tight text-gold">
            L'As Du Corps
          </h1>

          <p className="mt-6 text-lg md:text-xl font-light tracking-wider max-w-xl text-gold">
            Découvrez la médecine chinoise, un art ancestral visant à rétablir l'équilibre entre le corps et l'esprit grâce aux méridiens énergétiques, à l'acupuncture et aux massages Tui Na.
          </p>

          <div className="mt-8 flex gap-6">
            <button className="bg-gold text-black px-8 py-4 rounded-full font-semibold transition hover:bg-yellow-500 text-lg">
              En savoir plus
            </button>
            <Link 
              to="/contact" 
              className="text-white border-b-2 border-gold hover:text-gold transition text-lg"
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>

        {/* Image (Droite, Agrandie) */}
        <motion.div
          className="hidden lg:flex w-1/2 justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Effet de blending amélioré */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-40"></div>

          <img
            src="merged_human_meridians.png"
            alt="Méridiens de la médecine chinoise"
            className="w-[160%] max-w-3xl object-cover rounded-lg shadow-lg border-4 border-gold"
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Home;





