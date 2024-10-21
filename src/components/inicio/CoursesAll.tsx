import React from 'react'
import CoursesCardFull from '@/components/ui/CoursesCardFull'
import { FiBook } from "react-icons/fi";
import styles from '@/styles'
import Button from '@/components/ui/Button'
import { Link } from 'react-router-dom';

const CoursesAll = () => {
    return (
        <>
            <h2 className={`${styles.heading2}`}>Todos los cursos</h2>

            <div className='flex flex-col gap-[2rem] mt-[4rem] justify-center'>

                <Link to={'/CourseIntroduction'}>
                    <CoursesCardFull title="Cursos de programación" image={<FiBook size={40} className='text-secondary' />} description="Fugiat voluptate officiis cumque architecto, cupiditate recusandae cum similique pariatur et." valor={0} IfProgress={false} />
                </Link>


                <Link to={'/CourseIntroduction'}>
                    <CoursesCardFull title="Cursos de programación" image={<FiBook size={40} className='text-secondary' />} description="Fugiat voluptate officiis cumque architecto, cupiditate recusandae cum similique pariatur et." valor={0} IfProgress={false} />
                </Link>


                <Link to={'/CourseIntroduction'}>
                    <CoursesCardFull title="Cursos de programación" image={<FiBook size={40} className='text-secondary' />} description="Fugiat voluptate officiis cumque architecto, cupiditate recusandae cum similique pariatur et." valor={0} IfProgress={false} />
                </Link>


                <Link to={'/CourseIntroduction'}>
                    <CoursesCardFull title="Cursos de programación" image={<FiBook size={40} className='text-secondary' />} description="Fugiat voluptate officiis cumque architecto, cupiditate recusandae cum similique pariatur et." valor={0} IfProgress={false} />
                </Link>


                <Button title='Ver todos' />
            </div>
        </>
    )
}

export default CoursesAll