import React from 'react'
import styles from '@/styles'
import Navbar from '@/components/Navbar'
import FirstCourses from '@/components/FirstCourses'
import Footer from '@/components/Footer'
import CoursesPopular from '@/components/CoursesPopular'
import CoursesMentors from '@/components/CoursesMentors'
import CoursesAll from '@/components/CoursesAll'
import Banner from '@/components/Banner'

const Courses = () => {
  const links = [
    { text: 'Inicio', url: '/main' },
    { text: 'Cursos', url: '/courses' },
    { text: 'Comunidad', url: '/community' },
    { text: 'Retos Programacion', url: '/challenges' },
    { text: 'Blog', url: '/blog' },
  ];

  return (
    <>


      <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[1000]`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar links={links} main={true} typeOfLink='Link' />
        </div>
      </header>


      <main className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative`}>
        <div className={`${styles.marginY}`}>
          <Banner title='Cursos' />
        </div>
      </main>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} relative z-[115]`}>
        <div className={`${styles.boxWidth} ${styles.marginY}`}>
          <FirstCourses />
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