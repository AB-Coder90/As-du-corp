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

        ctx.fillStyle = "rgba(200, 180, 140, 0.9)";
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
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30"></canvas>

      <div className="relative w-full flex flex-col lg:flex-row items-center justify-between">
        
        {/* Texte (Gauche, Centré) */}
        <motion.div
          className="w-full lg:w-1/2 z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-7xl font-oriental font-bold uppercase tracking-wide leading-tight text-[rgb(200,180,140)]">
            Équilibrez votre corps et votre esprit
          </h1>

          <p className="mt-6 text-lg md:text-xl font-light tracking-wider max-w-xl text-[rgb(220,200,160)]">
            La médecine chinoise repose sur des principes ancestraux visant à restaurer l'harmonie entre le corps et l'esprit. Grâce aux méridiens énergétiques, l'acupuncture et les massages Tui Na, elle favorise la circulation du Qi et améliore votre bien-être global.
          </p>

          <div className="mt-8 flex gap-6">
            <button className="bg-[rgb(200,180,140)] text-black px-8 py-4 rounded-full font-semibold transition hover:bg-yellow-500 text-lg">
              Découvrir les bienfaits
            </button>
            <Link 
              to="/contact" 
              className="text-white border-b-2 border-[rgb(200,180,140)] hover:text-[rgb(200,180,140)] transition text-lg"
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>

        {/* Image (Droite, Fusion complète sur tous les côtés) */}
        <motion.div
          className="hidden lg:flex w-[90%] justify-center relative z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Effet de blending fluide */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md rounded-full w-[220%] h-[220%] -z-10"></div>

          {/* Image avec effet de fusion sur tous les côtés */}
          <img
            src="merged_human_meridians.png"
            alt="Méridiens de la médecine chinoise"
            className="w-[180%] max-w-6xl object-cover opacity-95 shadow-2xl"
            style={{
              maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 95%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 95%)",
            }}
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Home;












