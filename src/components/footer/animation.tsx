import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = ["©BERLIN 2023", "©BERLIN 2023"];

function AnimatedText() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) =>
        prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Tempo de exibição de cada frase em milissegundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <AnimatePresence mode='popLayout'>
        <motion.h3
          key={currentPhraseIndex}
          className="text-custom-yellow text-[250px] font-[700] h-fit w-full"
          initial={{ x: window.innerWidth }}
          animate={{ x: 0 }}
          exit={{ x: -window.innerWidth }}
          transition={{ duration: 1.5, ease: "linear" }}
        >
          {phrases[currentPhraseIndex]}
        </motion.h3>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedText;