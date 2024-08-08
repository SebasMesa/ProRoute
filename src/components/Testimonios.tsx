import React, { useState, useEffect } from 'react';
import styles from '../styles';
import Card from './TestimoniosCard';
import Carousel from 'next-elastic-carousel';

const Testimonios = () => {
  const items = [
    { id: 1, name: 'Ana García', cargo: 'Desarrolladora Web Junior', message: `"ProRoute me ha ayudado a dar el primer paso en mi carrera como desarrolladora web. Gracias a sus recursos detallados y guías prácticas, pude aprender a programar desde cero. Ahora tengo un trabajo en una empresa de tecnología y no podría estar más feliz. ¡Recomiendo ProRoute a todos los que quieren empezar en la programación!"`, image: 'https://via.placeholder.com/150x150' },

    { id: 2, name: 'Carlos Martínez', cargo: 'Desarrollador de Software', message: `"Después de años queriendo cambiar de carrera, encontré ProRoute y fue la mejor decisión que pude tomar. Las guías son muy completas y fáciles de seguir, y los retos de programación me ayudaron a poner en práctica lo aprendido. Hoy en día, trabajo como ingeniero de software en una startup y todo gracias a ProRoute."`, cargo: 'Ingeniero de Software', image: 'https://via.placeholder.com/150x150' },

    { id: 3, name: 'Laura Pérez', cargo: 'Data Scientist', message: `"ProRoute ha sido fundamental en mi transición al campo de la ciencia de datos. Los recursos y tutoriales me guiaron a través de los conceptos más complejos de una manera sencilla. Ahora estoy trabajando en un proyecto de análisis de datos en una gran empresa y no podría haberlo logrado sin ProRoute."
    `,  image: 'https://via.placeholder.com/150x150' },

    { id: 4, name: 'Javier Rodríguez', cargo: 'Desarrollador de Aplicaciones Móviles', message: `"Gracias a ProRoute, aprendí a desarrollar aplicaciones móviles en poco tiempo. La plataforma ofrece una gran cantidad de recursos y la comunidad es muy activa y servicial. Ahora tengo varias aplicaciones publicadas y estoy trabajando en una startup. ¡ProRoute realmente hace la diferencia!"
    `,  image: 'https://via.placeholder.com/150x150' },

    { id: 5, name: 'Marta Fernández', cargo: 'Especialista en Inteligencia Artificial', message: `"Siempre me ha interesado la inteligencia artificial, pero no sabía por dónde empezar. ProRoute me proporcionó una guía clara y recursos valiosos que me ayudaron a entender y aplicar los conceptos de IA. Hoy en día, trabajo en un proyecto emocionante relacionado con IA y todo gracias a ProRoute."
    `,  image: 'https://via.placeholder.com/150x150' }
  ];

  const [itemsToShow, setItemsToShow] = useState(1); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setItemsToShow(3);
      } else if (window.innerWidth > 480) {
        setItemsToShow(2);
      }else {
        setItemsToShow(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`${styles.paddingY} ${styles.flexCenter}`} id='testimonios'>
      <div className='w-full'>
        <h2 className={`${styles.heading} text-center`}>Testimonios</h2>

        <p className={`${styles.paragraph} text-center mt-5`}>Inspírate con historias de personas como tú que comenzaron su viaje en la programación con ProRoute y lograron alcanzar sus metas profesionales.  </p>

        <div className='text-white'>
          <Carousel itemsToShow={itemsToShow} itemsToScroll={itemsToShow}> 
            {items.map(item => (
              <div key={item.id} className='w-[90%]'>
                <Card name={item.name} message={item.message} cargo={item.cargo} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
