import React from 'react'
import styles, { layout } from '@/styles'
import { Link } from 'react-router-dom';
import CursosCard from '@/components/ui/CursosCard'
import Button from '@/components/ui/Button'
import { FaRegClipboard } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { SparklesCore } from "@/components/ui/Sparkles";
import { FiBook } from "react-icons/fi";
import { GoTrophy } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";


const HeroMain = () => {
  return (

    <>
      <div className='w-full mx-auto md:mx-0 py-[5rem] grid md:grid-cols-2 text-center md:text-start relative z-[15!important] h-[80vh] items-center mt-[1rem]'>
        <div className={`h-full flex flex-col justify-center`}>
          <h1 className='text-white md:text-7xl text-5xl font-poppins ss:leading-[90px] leading-[75px] my-[1rem] md:my-[2.5rem]'>
            <span className='text-gradient'>Desbloquea tu potencial con nuestras guias</span>
          </h1>

          <p className={`${styles.paragraph} max-w-[550px] mx-auto md:text-[1.4rem] text-[1.3rem] md:mx-0`}>
            <span>Bienvenid<span></span>o, </span>Tu viaje hacia el conocimiento comienza aquí.
          </p>

          {/*  Explora una variedad de cursos diseñados para impulsar tu crecimiento profesional y personal. <span className='hidden'>Con cada lección, estarás un paso más cerca de dominar nuevas habilidades y alcanzar tus metas. ¡El futuro lo construyes tú, empieza hoy!</span> */}
          
          {/* {userData.gender === 'male' ? 'o' : 'a'} */}

          {/* <Link to={'/courses'} className='mt-[2rem]'>
            <Button title={'Explorar Cursos'} className={``}></Button>
          </Link>
 */}

        </div>

        <div className='hidden md:grid'>
          {/* <div className='bg-glass-purple flex justify-between px-[1rem] py-[1rem] font-rubik text-start rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm text-white col-span-2'>
            <div className={`${styles.paragraph} flex flex-col justify-around`}>
              <div>
                <p className='font-poppins text-[1.3rem] text-white'>Tareas pendientes</p>

                <p className='mb-[1.5rem] w-[90%] '>Tienes 8 tareas por completar esta semana! No olvides completar tu desafío semanal antes del viernes para mantener tu racha de productividad.</p>

              </div>



              <Button title={'Ver tareas'} className='text-[1rem] px-[.5rem] py-[.5rem] w-fit'></Button>
            </div>

            <div className='flex gap-[1rem] flex-col justify-around'>
              <div className='flex'>
                <FaRegClipboard size={25} />

                <span className='text-[1.2rem] font-bold ml-[.5rem]'>8</span>

              </div>

              <div></div>
            </div>
          </div> */}

          {/* <div className='bg-glass flex justify-between px-[1rem] py-[1rem] font-rubik text-start rounded-route text-white col-span-2 md:col-span-1'>
            <div className={`${styles.paragraph}`}>
              <p className='font-poppins text-[1.3rem] text-white'>Desafíos de programación</p>
              <p className='mb-[1.5rem] mt-[.7rem]'>Pon a prueba tus habilidades y mejora tu capacidad de resolución de problemas con los desafíos de codificación.</p>

              <Link to={'/challenges'} className='flex items-center text-gradient relative' onMouseEnter={(e) => {
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
                Resolver Desafíos
                <FaArrowRightLong size={20} className='ml-[1rem]' />
              </Link>

            </div>

            <div className='flex flex-col items-center gap-[1rem] justify-around'>
              <FaRegClipboard size={25} />

              <span className='text-[1.2rem] font-bold'>8</span>
            </div>

          </div> */}

          <div className='bg-glass px-[1rem] py-[1rem] font-rubik text-start rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm text-white img'>
          <h2 className={`${styles.heading2} mb-[2rem]`}>Tu progreso</h2>

            {/* <div className={`${styles.paragraph}`}>
                <p className='font-poppins text-[1.3rem] text-white'>Comunidades</p>

                <p className='mb-[1.5rem] mt-[.7rem]'>Conéctese con otros desarrolladores, comparta conocimientos y colabore en proyectos.</p>

                <Link to={'/community'} className='flex items-center text-gradient relative' onMouseEnter={(e) => {
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
                  Únete a una Comunidad
                  <FaArrowRightLong size={20} className='ml-[1rem]' />
                </Link>

              </div> */}

            <div className="text-white flex items-center gap-[1rem]">
              <FiBook size={25} />

              <div className='flex flex-col'>
                <span className='font-poppins text-[1.2rem] text-white'>Cursos completados</span>
                <span className='text-[1.3rem] font-[500] text-gradient'>12</span>
              </div>
            </div>

            <div className="text-white flex items-center gap-[1rem] mt-[2rem]">
              <GoTrophy size={25} />

              <div className='flex flex-col'>
                <span className='font-poppins text-[1.2rem] text-white'>Retos completados</span>
                <span className='text-[1.3rem] font-[500] text-gradient'>20</span>
              </div>
            </div>


            <div className="text-white flex items-center gap-[1rem] mt-[2rem]">
              <FaRegClipboard size={25} />

              <div className='flex flex-col'>
                <span className='font-poppins text-[1.2rem] text-white'>Retos por completar</span>
                <span className='text-[1.3rem] font-[500] text-gradient'>8</span>
              </div>
            </div>

            <div className="text-white flex items-center gap-[1rem] mt-[2rem]">
              <FaRegStar size={25} />

              <div className='flex flex-col'>
                <span className='font-poppins text-[1.2rem] text-white'>Puntuación total</span>
                <span className='text-[1.3rem] font-[500] text-gradient'>1,234</span>
              </div>
            </div>






          </div>
        </div>
      </div >

    </>

  )
}

export default HeroMain