import React, { useState } from 'react'
import HeroMain from '@/components/HeroMain'
import styles from '@/styles'
import ContinuaCurso from '@/components/ContinuaCurso'
import Blog from '@/components/blog/Blog'
import Footer from '@/components/ui/Footer'
import Newsletter from '@/components/Newsletter'
import Retos from '@/components/Retos'
import { UserData } from '@/types/'
import Comunidades from '@/components/Comunidades'
import { Community } from 'undraw-react';
import { Link, useNavigate } from 'react-router-dom'
import Button from "@/components/ui/Button"
// import { AuroraBackground } from "@/components/ui/AuroraBackground";
import Navbar from '@/components/ui/Navbar'
import linksMain from '@/data/linksMain.json'
import { useAuth } from '@/context/authContext'
import Modal from '@/components/ui/Modal'



const Main = () => {

  const { user } = useAuth();


  return (

    <div className="rounded-tl-2xl bg-transparent w-full h-full overflow-hidden">
      <div className='bg-primary w-full relative overflow-hidden'>
        <div className='absolute w-[1000px] h-[1020px] blue__gradient top-[60rem] z-[10] opacity-[.15!important] right-[-10rem]'></div>
        <div className='absolute w-[2000px] h-[1020px] purple__gradient top-[200rem] z-[10] opacity-[0.04!important]'></div>

        {/* ---------------- Componente de Navbar ----------------------- */}


        <Modal />

        <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[101] bg-primary top-0`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
          </div>
        </header>

        <div className={`${styles.paddingX} ${styles.flexCenter} mt-[80px] bg-app`}>
          <div className={`${styles.boxWidth} ${styles.marginY}`}>
            <HeroMain />
          </div>
        </div>


        <section className={`${styles.paddingX} ${styles.flexCenter}] relative z-[15]`}>
          <div className={`${styles.boxWidth} ${styles.marginY}`}>
            <ContinuaCurso />
          </div>
        </section>


        <section className={`${styles.paddingX} ${styles.flexCenter} relative z-[10]`}>
          <div className={`${styles.boxWidth}`}>
            <div className={`${styles.marginY} bg-glass backdrop-blur-[300px] rounded-2xl md:flex`}>
              <div className='md:w-[40%] p-[3rem] text-white font-rubik'>
                <h3 className='text-dimWhite'>Comunidad</h3>
                <h2 className={`${styles.heading2} my-[1rem]`}>Juntos <span className='text-gradient'>Construimos</span> el Futuro</h2>
                <p className={`${styles.paragraph} my-[1rem]`}>En ProRoute, creemos en el poder de la colaboración. Nuestro objetivo es apoyar a cada miembro de la comunidad mientras avanzamos juntos en el apasionante mundo de la programación.</p>

                {/* <div className='mt-[4rem]'>
                <span className='text-[#ffffff95]'>12/05/2023</span>
              </div> */}

              </div>

              <div className='md:w-[60%] md:h-auto rounded-2xl overflow-hidden bg-glass-purple flex justify-center items-center py-[2rem]'>
                {/* <Welcome color="blue" size={200} style={{ marginTop: '20px' }} /> */}
                {/* <UndrawIllustration name="Welcome" color="green" size={450} style={{ }} /> */}
                {/* <WebsiteBuilder /> */}
                <Community color="#00f6ff" size={450} style={{}} />
              </div>
            </div>
          </div>
        </section>

        <section className={` ${styles.paddingX} ${styles.flexCenter} relative z-[15]`}>
          <div className={`${styles.boxWidth} ${styles.marginY}`}>
            <h2 className={`${styles.heading2} text-center text-white`}>Nuestro Blog</h2>
            <Blog />
          </div>
        </section>

        <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.marginY}`}>
            <Retos />
          </div>
        </section>

        <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.marginY}`}>
            <Comunidades />
          </div>
        </section>


        <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.marginY}`}>
            <Newsletter />
          </div>
        </section>


        <footer>
          <Footer />
        </footer>




      </div>


    </div>
  );
}

export default Main