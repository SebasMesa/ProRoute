import React from 'react'
import styles, { layout } from '@/styles'
import { Link } from 'react-router-dom';
import { HiSparkles } from "react-icons/hi2";
import { useAuth } from '@/context/authContext'



const HeroMain = () => {

  const { user } = useAuth();

  return (

    <>

<div className='relative'>
      {/* <div className='absolute z-[100] opacity-[.2]'>
        <ParticlesComponent id='particles' />
      </div> */}

      <div className={`h-auto relative mb-[5rem]`}>
        <div className='mx-auto md:mx-0 text-center md:mt-[5rem] mt-[4rem] mb-[7rem]'>
          <span className={`${styles.paragraph} bg-glass-purple border border-[#3d3d3d] md:text-[1.1rem] px-2 md:px-4 py-2 rounded-2xl flex w-fit mx-auto items-center`}>Potenciado por OpenAI <HiSparkles size={20} className='ml-[.5rem]'/></span>
          <h1 className={`${styles.heading} text-white my-[1rem]`}>
            Tu viaje de programación impulsado por IA 
            {/* <br className='block md:hidden' />
            <ReactTyped strings={['Crea', 'Sueña', 'Aprende', 'Programa']} typeSpeed={120} backSpeed={140} loop /> */}
          </h1>
          <p className={`${styles.paragraph} max-w-[850px] mx-auto relative z-[100]`}>
            {/* tu guía definitiva para iniciar en el mundo de la programación. Aquí encontrarás todo lo que necesitas para comenzar tu viaje en diversas ramas de la programación, desde conceptos básicos hasta recursos avanzados. */}

            Conéctate, colabora y avanza con una comunidad activa.
          </p>

        {!user ? 
          <div className='flex justify-center gap-[1rem]'>
            <Link to={"/signin"}>
              <button className='bg-purple-gradient text-white px-[1.5rem] py-[.8rem] rounded-lg mt-[2rem] font-poppins z-[999]'>Comienza ahora</button>
            </Link>
            <button className='bg-black-gradient text-white px-[1.5rem] py-[.8rem] rounded-lg mt-[2rem] font-poppins'>Mas info</button>

          </div>
          : ''}
        </div>
      </div>
    </div>

    </>

  )
}

export default HeroMain