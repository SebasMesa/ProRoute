import React from 'react'
import styles from '@/styles'
import Carousel from 'next-elastic-carousel';
import { useState, useEffect } from 'react';
import CoursesCardFull from '@/components/ui/CoursesCardFull'
import { FiBook } from "react-icons/fi";
import { Link } from 'react-router-dom';

const CoursesPopular = () => {
    const [itemsToShow, setItemsToShow] = useState(1);
    const [ArrowsShow, setArrowsShow] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setArrowsShow(true);
            }
            else {
                setArrowsShow(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className=''>
            <h1 className={`${styles.heading2} text-center`}>Cursos Destacados</h1>
            <p className={`${styles.paragraph} text-center w-[50%] mx-auto`}>Descubre nuestros cursos más populares y comienza tu camino hacia el éxito. Cada uno de estos cursos está diseñado para llevar tus habilidades al siguiente nivel.</p>

            <Carousel className='mt-[3rem] h-fit' itemsToShow={itemsToShow} itemsToScroll={itemsToShow} showArrows={ArrowsShow} >
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

            </Carousel>


        </div>
    )
}

export default CoursesPopular