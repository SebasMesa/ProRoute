import React, { useState, useEffect, useRef } from 'react';
import { PropsLink } from '../../types';
import { Link } from 'react-router-dom';

const ScrambleText = ({ text, className, link, typeOfLink }: PropsLink) => {
  const [displayText, setDisplayText] = useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // const letters = "abcdefghijklmnopqrstuvwxyz"
  const intervalRef = useRef<number | NodeJS.Timeout | null>(null);
  
  
  useEffect(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const handleMouseOver = () => {
    let iteration = 0;
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current! = setInterval(() => {
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
        clearInterval(intervalRef.current!);
      }

      iteration += 1 / 3;
    }, 40);
  };

  return (
    <>
      {typeOfLink === 'Link' ? (
        <Link to={link!} className={className} onMouseOver={handleMouseOver} data-value={text}>
          {displayText}
        </Link>
      ) : (
        <a href={link} onMouseOver={handleMouseOver} data-value={text} className={className}>{displayText}</a>
      )}
    </>
  );

}
export default ScrambleText;
