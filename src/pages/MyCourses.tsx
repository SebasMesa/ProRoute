import React from 'react'
import styles from '@/styles'
import Navbar from '@/components/ui/Navbar'
import Banner from '@/components/ui/Banner'
import FirstCourses from '@/components/FirstCourses'
import Footer from '@/components/ui/Footer'
import { FiBook } from "react-icons/fi";
import CourseCard from '@/components/ui/CursosCard'
import linksMain from '@/data/linksMain.json'

const MyCourses = () => {

    const misCursos = [
        { id: 1, title: 'Curso', description: 'Short Description for my course', img: <FiBook size={40} className='text-secondary' /> },
        { id: 2, title: 'Curso', description: 'Short Description for my course', img: <FiBook size={40} className='text-secondary' /> },
        // {id: 3, title: 'Curso', description: 'Short Description for my course'}
    ]


    return (
        <>
            <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[101] bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
                </div>
            </header>


            <main className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative`}>
                <div className={`${styles.marginY}`}>
                    <Banner title='Mis Cursos' />
                </div>
            </main>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} relative z-[115]`}>
                <div className={`${styles.boxWidth} ${styles.marginY}`}>
                    <div className='grid grid-cols-3 gap-[1rem]'>
                        {misCursos.map((course) => (
                            <CourseCard title={course.title} image={course.img} description={course.description} valor={0} IfProgress={false} />
                        ))}
                    </div>

                </div>
            </div>

            <footer className={`relative z-[115]`}>
                <Footer />
            </footer>





        </>
    )
}

export default MyCourses