import React from 'react'
import { ReactTyped } from "react-typed"; 
import styles, { layout } from '@/styles'
import ParticlesComponent from '@/components/ui/ParticlesComponent';

const HeroAlt = () => {
  return (
    <div className='relative'>
      <div className='absolute z-[100]'>
        <ParticlesComponent id='particles' />
      </div>

      <div className={`h-auto md:h-[60vh] relative mb-[5rem]`}>
        <div className='mx-auto md:mx-0 text-center md:mt-[7.5rem] mt-[4rem] '>
          <span className={`${styles.paragraph} bg-glass-purple text-center text-[1.3rem] md:text-[1.5rem] px-2 md:px-4 py-2 rounded-2xl`}>Bienvenido a ProRoute </span>
          <h1 className='text-white md:text-7xl text-5xl uppercase font-poppins ss:leading-[90px] leading-[75px] md:my-[2.5rem] my-[1.5rem]'>
            El momento es ahora <br className='hidden sm:block' />  <span className='text-gradient'>Empieza </span>
            <br className='block md:hidden' />
            <ReactTyped strings={['Crea', 'Sueña', 'Aprende', 'Programa']} typeSpeed={120} backSpeed={140} loop />
          </h1>
          <p className={`${styles.paragraph} max-w-[850px] mx-auto mt-5 mb-[10rem] relative z-[100]`}>
            tu guía definitiva para iniciar en el mundo de la programación. Aquí encontrarás todo lo que necesitas para comenzar tu viaje en diversas ramas de la programación, desde conceptos básicos hasta recursos avanzados.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroAlt