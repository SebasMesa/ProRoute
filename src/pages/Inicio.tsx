import React from 'react'
import Navbar from '@/components/ui/Navbar'
import styles from '@/styles'
import Acerca from '@/components/inicio/Acerca'
import Hero from '@/components/inicio/Hero'
import HeroAlt from '@/components/inicio/HeroAlt'
import Ventajas from '@/components/inicio/Ventajas'
import Tiempo from '@/components/inicio/Tiempo'
import MarqueeCompo from '@/components/ui/MarqueeCompo'
import Empieza from '@/components/inicio/Empieza'
import Testimonios from '@/components/inicio/Testimonios'
import Faqs from '@/components/inicio/Faqs'
import Footer from '@/components/ui/Footer'
import Video from '@/assets/video.mp4'
import { AppleCardsCarouselDemo } from '@/components/ui/AppleCardsCarouselDemo';
import { useAuth } from '@/context/authContext'
import {Link, Navigate} from 'react-router-dom'



const Inicio = () => {

  const { user } = useAuth();

  if (user) {
    return <Navigate to={'/main'}/>
  }

  const links = [
    { text: 'Inicio', url: '#' },
    { text: 'Acerca De', url: '#acerca' },
    { text: 'Testimonios', url: '#testimonios' },
];

  return (
    <div className='bg-primary w-full overflow-hidden relative'>

    <div className='absolute w-[500px] h-[420px] purple__gradient top-[0rem] right-[-6rem] rotate-[45deg] z-[20]'></div>
    <div className='absolute w-[500px] h-[420px] blue__gradient top-[30rem] left-[-12rem] rotate-[-45deg] z-[20] opacity-[.3]'></div>


      {/* ---------------- Componente de Navbar ----------------------- */}

      <header className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar links={links} typeOfLink='' main={false }/>
        </div>
      </header>

      {/* ---------------- Componente de Hero ----------------------- */}

      <main className={`bg-app ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Hero /> */}
          <HeroAlt/>
        </div>
      </main>

      {/* ---------------- Componente de Ventajas ----------------------- */}

      {/* <section className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Ventajas />
        </div>
      </section>
 */}

      <section className={`${styles.paddingX} ${styles.flexCenter} mt-[-5rem] mb-[10rem] hidden md:flex`}>
        <div className={`${styles.boxWidth}`}>
          <div className='desvanecido h-[60vh]'>
            <video src={Video} autoPlay loop muted className='w-full rounded-2xl'></video>
          </div>
        </div>
      </section>

      <section className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} ${styles.marginY}`}>
        <AppleCardsCarouselDemo/>
        </div>
      </section>


      {/* ---------------- Componente de Tiempo ----------------------- */}

      <section className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} ${styles.marginY}`}>
          <Tiempo />
        </div>
      </section>

      {/* ---------------- Componente de Marquee ----------------------- */}

      <section className={`${styles.boxWidth} ${styles.paddingY} mx-auto lg:px-16 xl:px-0 ${styles.marginY}`}>
          <MarqueeCompo descri={[
            'Sueña ·',
            'Crea ·',
            'Aprende ·'
          ]} direction='right' speed={60}/>
          <MarqueeCompo descri={[
            'Tu ·',
            'Puedes ·',
            'Lograrlo ·'
          ]} direction='left' speed={50}/>
          <MarqueeCompo descri={[
            'Sonrie😊 ·',
            'Respira😮‍💨 ·',
            'Avanza🚀 ·'
          ]} direction='right' speed={25}/>
      </section>


      {/* ---------------- Componente de Testimonios ----------------------- */}

      <section className={`bg-app-up ${styles.paddingX} ${styles.flexCenter}`} id='testimonios'>
        <div className={`${styles.boxWidth} z-[1000]`}>
          <Testimonios />
        </div>
      </section>

      {/* ---------------- Componente de Faqs ----------------------- */}

      <section className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Faqs />
        </div>
      </section>

      {/* ---------------- Componente de Empieza ----------------------- */}

      <section className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Empieza />
        </div>
      </section>

      {/* ---------------- Componente de Footer ----------------------- */}

      <footer className='mt-[5rem]'>
        <Footer/>
      </footer>



    </div>
  )
}

export default Inicio