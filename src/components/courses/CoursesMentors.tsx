import React from 'react'
import { InfiniteMovingCards } from '@/components/ui/aceternity/InfiniteMovingCards'
import styles from '@/styles'
import { CardsMentors } from '../ui/aceternity/CardsMentors';

const CoursesMentors = () => {
    const testimonials = [
        {
          img: 'https://via.placeholder.com/150x150',
          name: "Juan Pérez",
          title: "Desarrollador Frontend",
        },
        {
          img: 'hhttps://via.placeholder.com/150x150',
          name: "Ana García",
          title: "Desarrolladora Web Junior",
        },
        {
          img: 'hhttps://via.placeholder.com/150x150',
          name: "Carlos Martínez",
          title: "Desarrollador de Software",
        },
        {
          img: 'hhttps://via.placeholder.com/150x150',
          name: "Carlos Martínez",
          title: "Data Scientist",
        },
        {
          img: 'hhttps://via.placeholder.com/150x150',

          name: "Javier Rodríguez",
          title: "Desarrollador de Aplicaciones Móviles",
        },
        {
          img: 'hhttps://via.placeholder.com/150x150',
          name: "Marta Fernández",
          title: "Especialista en Inteligencia Artificial",
        },
      ];

  return (    
    <div className=''>
        <h2 className={`${styles.heading2} mb-[2rem]`}>Nuestros mentores</h2>
        <CardsMentors
            items={testimonials}
            direction="right"
            speed="slow"
          />

    </div>
  )
}

export default CoursesMentors