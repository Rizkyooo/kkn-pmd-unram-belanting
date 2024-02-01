import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function HeroSection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, x: 0, transition: { duration: 1 } });
  }, [controls]);

  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-lg"></div>
      <div className="text-center text-white relative z-10 mt-72 md:mt-96">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={controls}
          className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2"
        >
          KKN PMD UNRAM DESA{" "}
          <span className="px-2 bg-blue-900">
            BELANTING
          </span>
        </motion.h1>
        <motion.p 
        initial={{ opacity: 0, x: 30 }}
        animate={controls} className="text-sm md:text-lg lg:text-xl">Periode 2023-2024</motion.p>
      </div>
    </div>
  );
}
