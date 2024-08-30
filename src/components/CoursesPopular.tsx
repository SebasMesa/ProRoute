import React from 'react'
import styles from '@/styles'
import Carousel from 'next-elastic-carousel';
import { useState, useEffect } from 'react';
import CoursesCardFull from '@/components/CoursesCardFull'
import { FiBook } from "react-icons/fi";

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
            <p className={`${styles.paragraph} text-center`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <Carousel className='mt-[3rem] h-fit' itemsToShow={itemsToShow} itemsToScroll={itemsToShow} showArrows={ArrowsShow} >
                <CoursesCardFull title="Cursos de programación" image={<FiBook size={40} className='text-secondary' />} description="Fugiat voluptate officiis cumque architecto, cupiditate recusandae cum similique pariatur et." valor={0} IfProgress={false} />

                <CoursesCardFull title="Cursos de programación" image={<FiBook size={40} className='text-secondary' />} description="Cursos de programación" valor={0} IfProgress={false} />


                <CoursesCardFull title="Cursos de programación" image={<FiBook size={40} className='text-secondary' />} description="Cursos de programación" valor={0} IfProgress={false} />


                <CoursesCardFull title="Cursos de programación" image={<FiBook size={40} className='text-secondary' />} description="Cursos de programación" valor={0} IfProgress={false} />

            </Carousel>


        </div>
    )
}

export default CoursesPopular