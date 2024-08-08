import React, { useState, useEffect, useRef } from 'react';
import { PropsLink } from '../types';

const ScrambleText = ({ text, className, link } : PropsLink) => {
  const [displayText, setDisplayText] = useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Limpiar el intervalo al desmontar el componente
  }, []);

  const handleMouseOver = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        prev.split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 3;
    }, 40);
  };

  return (
    <a href={link} className={className} onMouseOver={handleMouseOver} data-value={text}>
      {displayText}
    </a>
  );
};

export default ScrambleText;
