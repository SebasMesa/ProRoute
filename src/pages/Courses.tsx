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


const Courses = () => {


  return (
    <>


      <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[1001] bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
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