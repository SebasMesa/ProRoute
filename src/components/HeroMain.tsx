import React from 'react'
import styles, { layout } from '../styles'
import { Link } from 'react-router-dom';
import CursosCard from './CursosCard'
import Button from './Button'

const HeroMain = () => {
  return (
    <div className='h-[70vh] relative font-rubik relative'>
       {/* <div className="bg-blue-500 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          ¡Bienvenido, user!
        </h1>
        <p className="text-xl md:text-2xl">
          Comienza tu viaje de aprendizaje con nosotros. Explora nuestros cursos y desarrolla tus habilidades.
        </p>
        <button className="mt-8 bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
          Explorar Cursos
        </button>
      </div>
    </div> */}

      <div className={`gap-[8rem] h-auto md:h-[60vh]`}>
        <div className='mx-auto md:mx-0 pt-[7rem]'>
          {/*<span className={`${styles.paragraph} bg-glass-purple text-center text-[1.3rem] md:text-[1.5rem] px-2 md:px-4 py-2 rounded-2xl`}>Bienvenido a ProRoute </span>*/}
          <h1 className='text-white md:text-7xl text-5xl uppercase font-poppins ss:leading-[90px] lebnading-[75px] md:my-[2.5rem] text-center'>
            <span className='text-gradient'>Bienvenido</span>, Sebas!
          </h1>
          <p className={`${styles.paragraph} max-w-[850px] mx-auto mt-[3rem] mb-[3rem] relative z-[100] text-center md:text-[1.4rem] text-[1.3rem]`}>
          Aqui comienza tu viaje de aprendizaje con nosotros. Explora nuestros cursos y desarrolla tus habilidades.
          </p>


          <Link to={'/cursos'} className='w-full flex justify-center'>
            <Button title={'Explorar Cursos'} className={``}></Button>
          </Link>

        </div>
      </div>

    </div>
  )
}

export default HeroMain