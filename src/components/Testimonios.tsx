import React, { useState, useEffect } from 'react';
import styles from '../styles';
import Card from './TestimoniosCard';
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

const Testimonios = () => {
  const testimonials = [
    {
      quote:
      `"ProRoute me ha ayudado a dar el primer paso en mi carrera como desarrolladora web. Gracias a sus recursos detallados y guías prácticas, pude aprender a programar desde cero. Ahora tengo un trabajo en una empresa de tecnología y no podría estar más feliz. ¡Recomiendo ProRoute a todos los que quieren empezar en la programación!"`,
      name: "Ana García",
      title: "Desarrolladora Web Junior",
    },
    {
      quote:
      `"Después de años queriendo cambiar de carrera, encontré ProRoute y fue la mejor decisión que pude tomar. Las guías son muy completas y fáciles de seguir, y los retos de programación me ayudaron a poner en práctica lo aprendido. Hoy en día, trabajo como ingeniero de software en una startup y todo gracias a ProRoute."`,
      name: "Carlos Martínez",
      title: "Desarrollador de Software",
    },
    {
      quote: `"ProRoute ha sido fundamental en mi transición al campo de la ciencia de datos. Los recursos y tutoriales me guiaron a través de los conceptos más complejos de una manera sencilla. Ahora estoy trabajando en un proyecto de análisis de datos en una gran empresa y no podría haberlo logrado sin ProRoute."`,
      name: "Laura Pérez",
      title: "Data Scientist",
    },
    {
      quote:
      `"Gracias a ProRoute, aprendí a desarrollar aplicaciones móviles en poco tiempo. La plataforma ofrece una gran cantidad de recursos y la comunidad es muy activa y servicial. Ahora tengo varias aplicaciones publicadas y estoy trabajando en una startup. ¡ProRoute realmente hace la diferencia!"
      `,
      name: "Javier Rodríguez",
      title: "Desarrollador de Aplicaciones Móviles",
    },
    {
      quote:
      `"Siempre me ha interesado la inteligencia artificial, pero no sabía por dónde empezar. ProRoute me proporcionó una guía clara y recursos valiosos que me ayudaron a entender y aplicar los conceptos de IA. Hoy en día, trabajo en un proyecto emocionante relacionado con IA y todo gracias a ProRoute."
      `,
      name: "Marta Fernández",
      title: "Especialista en Inteligencia Artificial",
    },
  ];

  return (
    <div className={`${styles.paddingY} ${styles.flexCenter}`}>
      <div className='w-full'>
        <h2 className={`${styles.heading} text-center`}>Testimonios</h2>

        <p className={`${styles.paragraph} text-center mt-5`}>Inspírate con historias de personas como tú que comenzaron su viaje en la programación con ProRoute y lograron alcanzar sus metas profesionales.  </p>

        <div className='text-white'>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />

        </div>
      </div>
    </div>
  );
};

export default Testimonios;
