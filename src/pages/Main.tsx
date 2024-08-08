import React from 'react'
import HeroMain from '../components/HeroMain'
import styles from '../styles'
import ContinuaCurso from '../components/ContinuaCurso'
import Navbar from '../components/Navbar'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

const Main = () => {
  return (
    <div className='bg-primary w-full relative overflow-hidden'>
      <div className='absolute w-[300px] h-[720px] purple__gradient top-[-9rem]  rotate-[-45deg] z-[20]'></div>


      {/* ---------------- Componente de Navbar ----------------------- */}

      <header className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </header>

      <main className={`bg-app ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <HeroMain />
        </div>
      </main>


      <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} ${styles.marginY}`}>
          <ContinuaCurso />
        </div>
      </section>

      <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.marginY} bg-glass backdrop-blur-[300px] rounded-2xl md:flex`}>
            <div className='md:w-[40%] p-[3rem] text-white font-rubik'>
              <h3 className='text-dimWhite'>Texto</h3>
              <h2 className='md:text-[1.9rem] text-[1.5rem]'>En ProRoute apoyamos a la comunidad y mejoramos juntos.</h2>
              <p className='text-dimWhite text-[.95rem] my-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quisquam delectus tempora, quos nisi nesciunt eligendi suscipit.</p>

              <div className='mt-[4rem]'>
                <span className='text-[#ffffff95]'>12/05/2023</span>
              </div>

            </div>

            <div className='md:w-[60%] md:h-[450px] rounded-2xl overflow-hidden bg-[url("/src/assets/unnamed.jpg")] bg-cover'>

            </div>
          </div>
        </div>
      </section>

      <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} ${styles.marginY}`}>
          <h2 className={`${styles.heading2} text-center text-white`}>Nuestro Blog</h2>
          <Blog />
        </div>
      </section>

      <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} ${styles.marginY}`}>
          <Newsletter />
        </div>
      </section>


      <footer>
        <Footer/>
      </footer>




    </div>

  )
}

export default Main