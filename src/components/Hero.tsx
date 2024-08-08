import React from 'react'
import { ReactTyped } from "react-typed"; 
import styles, {layout} from '../styles' 
import HeroImg from '../assets/hero2.svg' 
import ScrambleText from './ScrambleText';

const Hero = () => {
  return (
    <div className={`${layout.section} gap-8`}>
      <div className='mx-auto md:mx-0'> 
        <h1 className='text-white text-6xl uppercase font-stellar ss:leading-[90px] leading-[75px]'> 
          El momento es ahora <br/>
          <span className='text-gradient'>Empieza</span> <br/>
          <ReactTyped strings={['Crea', 'Sueña', 'Aprende', 'Programa']} typeSpeed={120} backSpeed={140} loop/> 
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Bienvenido a ProRoute, tu guía definitiva para iniciar en el mundo de la programación. Aquí encontrarás todo lo que necesitas para comenzar tu viaje en diversas ramas de la programación, desde conceptos básicos hasta recursos avanzados.
        </p>
              </div>

      <div className='w-full mb-9 md:mb-0'> 
        <img 
          src={HeroImg}
          alt="" 
          className='w-[90%] mx-auto img-b' 
        />
      </div>
    </div>
  )
}

export default Hero 
