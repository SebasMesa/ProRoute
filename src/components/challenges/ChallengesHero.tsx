import React from 'react'
import RetosCard from '@/components/ui/RetosCard'
import styles from '@/styles'
import Button from '@/components/ui/Button'
import { FaAward } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

const ChallengesHero = () => {
  const items = [
    { id: 1, titulo: 'Calculadora Básica', descripcion: 'Crea una calculadora básica que pueda realizar las operaciones aritméticas fundamentales', difficulty: 'Fácil', date: '10/08/2024', puntaje: 10 },

    { id: 2, titulo: 'Juego del Ahorcado', descripcion: 'Desarrolla un juego del ahorcado donde el usuario pueda adivinar una palabra letra por letra. ', difficulty: 'Medio', date: '10/08/2024', puntaje: 20 },

    { id: 3, titulo: 'Ordenamiento de Números', descripcion: 'Implementa diferentes algoritmos de ordenamiento (burbuja, selección, inserción) ', difficulty: 'Medio', date: '10/08/2024', puntaje: 25 },

    { id: 4, titulo: 'Generador de Contraseñas Seguras', descripcion: 'Diseña un generador de contraseñas que permita a los usuarios crear contraseñas seguras.', difficulty: 'Fácil', date: '10/08/2024', puntaje: 15 },

    { id: 5, titulo: 'Conversor de Monedas', descripcion: 'Crea una aplicación que permita convertir entre diferentes monedas utilizando tasas de cambio actuales.', difficulty: 'Difícil', date: '10/08/2024', puntaje: 30 },
  ];

  return (
    <>
      <section className='md:flex items-center gap-[1rem] justify-between'>
        <div className='md:w-[50%]'>
          <h2 className={`${styles.heading2} my-[2.5rem]`}>¿Listo para demostrar tus habilidades?</h2>
          <p className={`${styles.paragraph} my-[1rem]`}>Enfrenta desafíos que te retarán a pensar de forma innovadora y a encontrar soluciones creativas. Cada desafío completado te acercará a la cima del ranking. ¡Conviértete en el mejor!</p>
          <div>
            <Button title='Resolver Ahora'></Button>
          </div>
        </div>

        <div className='bg-glass md:w-[400px] px-[1rem] py-[1rem] rounded-route flex flex-col mt-[3rem] md:mt-0 img h-full'>
          <span className={`${styles.heading2} text-gradient`}>1100</span>
          <span className={`text-[25px] text-dimWhite font-rubik`}>Usuarios</span>

          <div className='mt-[1.5rem] flex flex-col gap-[1rem]'>

            <div className={`text-white ${styles.paragraph} md:flex items-center gap-[.3rem]`}>
              <span className='flex items-center '>
                <FaAward color='#d4af37' />
                #1
              </span>
              <Link to={'/'} className="hover:underline">Nicol Figueroa</Link>
              <span className='text-dimWhite'>(53 Retos realizados)</span>
            </div>

            <div className={`text-white ${styles.paragraph} md:flex items-center gap-[.3rem]`}>
              <span className='flex items-center '>
              <FaAward color='#d4af37' />
                #1
              </span>
              <Link to={'/'} className="hover:underline">Sara Builes</Link>
              <span className='text-dimWhite'>(53 Retos realizados)</span>
            </div>

            <div className={`text-white ${styles.paragraph} md:flex items-center gap-[.3rem]`}>
              <span className='flex items-center '>
                {/* <FaAward color='#CD7F32' /> BRONCEE*/}
                <FaAward color='#C0C0C0' />
                #2
              </span>
              <Link to={'/'} className="hover:underline">Sebas Mesa</Link>
              <span className='text-dimWhite'>(20 Retos realizados)</span>
            </div>

          </div>

          <Link to={'/community'} className='flex items-center text-gradient relative mt-[1rem]' onMouseEnter={(e) => {
                const arrow = e.currentTarget.querySelector('svg');
                if (arrow) {
                  arrow.style.animation = 'moveArrow 1s infinite alternate';
                }
              }} onMouseLeave={(e) => {
                const arrow = e.currentTarget.querySelector('svg');
                if (arrow) {
                  arrow.style.animation = '';
                }
              }}>
                <style>{`
                  @keyframes moveArrow {
                    from {
                      transform: translateX(0);
                    }
                    to {
                      transform: translateX(10px);
                    }
                  }
                `}</style>
                Ver todos
                <FaArrowRightLong size={16} className='ml-[1rem] text-secondary' />
              </Link>

        </div>
      </section>


      <section className='grid md:grid-cols-3 gap-[2rem] mt-[7rem]'>
        {items.map(item => <RetosCard key={item.id} title={item.titulo} id={item.id} description={item.descripcion} difficulty={item.difficulty} date={item.date} puntaje={item.puntaje} classNameDificultad='flex-col' />)}
      </section>
    </>
  )
}

export default ChallengesHero

// Título:
// "¿Listo para demostrar tus habilidades?"

// Descripción:
// "Enfrenta desafíos que te retarán a pensar de forma innovadora y a encontrar soluciones creativas. Cada desafío completado te acercará a la cima del ranking. ¡Conviértete en el mejor!"

// Botón:
// "Resolver Ahora"