import React from 'react'
import styles from '@/styles'
import Navbar from '@/components/ui/Navbar'
import FirstCourses from '@/components/FirstCourses'
import Footer from '@/components/ui/Footer'
import CoursesPopular from '@/components/courses/CoursesPopular'
import CoursesMentors from '@/components/courses/CoursesMentors'
import CoursesAll from '@/components/inicio/CoursesAll'
import Banner from '@/components/ui/Banner'
import linksMain from '@/data/linksMain.json'
import { IoCodeSlash } from "react-icons/io5";
import {Link} from 'react-router-dom'

const Courses = () => {


  return (
    <>


      <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[1001] bg-primary top-0`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
        </div>
      </header>


      <section className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative mt-[80px]`}>
                <div className={`my-[1.5rem]`}>
                    <Banner title='Cursos' />
                </div>
            </section>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} relative z-[115]`}>
        <div className={`${styles.boxWidth} ${styles.marginY}`}>
          <FirstCourses />
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} relative z-[115] hidden md:flex`}>
        <div className={`${styles.boxWidth} ${styles.marginY} grid grid-cols-2 h-[40vh] relative rounded-lg overflow-hidden bg-discount-gradient px-[3rem] py-[2rem]`}>
          <div className=''>
            <Link to={'/'}>
              <h2 className='text-white uppercase text-2xl font-anurati'>Pro<span className='text-secondary'>Route</span></h2>
            </Link>

            <h2 className={`${styles.heading2} w-[60%] mt-[1.5rem]`}>Mejora tus habilidades con un precio exclusivo.</h2>
          </div>

          <div className='absolute bg-glass-purple rounded-full w-[220px] h-[220px] top-0 left-0 right-0 bottom-0 m-auto flex justify-center items-center'>
            <IoCodeSlash size={90} className='text-white' />
          </div>
          <div className='absolute bg-transparent rounded-full w-[300px] h-[300px] top-0 left-0 right-0 bottom-0 m-auto border-[1px] border-secondary animate-pulse'></div>
          <div className='absolute bg-transparent rounded-full w-[250px] h-[250px] top-0 left-0 right-0 bottom-0 m-auto border-[1px] border-secondary animate-pulse'></div>
          <div className='absolute bg-transparent rounded-full w-[350px] h-[350px] top-0 left-0 right-0 bottom-0 m-auto border-[1px] border-secondary animate-pulse'></div>




          <div className='w-full flex justify-end'>
            <h2 className={`${styles.heading2}`}>Desde el 15 hata el 12</h2>
          </div>
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} relative z-[115]`}>
        <div className={`${styles.boxWidth} ${styles.marginY}`}>
          <CoursesPopular />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} relative z-[115]`}>
        <div className={`${styles.boxWidth} ${styles.marginY}`}>
          <CoursesMentors />
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} relative z-[115]`}>
        <div className={`${styles.boxWidth} ${styles.marginY}`}>
          <CoursesAll />
        </div>
      </div>



      <footer className={`relative z-[115]`}>
        <Footer />
      </footer>
    </>
  )
}

export default Courses