import React, {useEffect, useState} from 'react'
import styles from '@/styles'
import CourseCard from '@/components/ui/CursosCard'
import {FiBook} from "react-icons/fi";
import Carousel from 'next-elastic-carousel';

const FirstCourses = () => {

  const [itemsToShow, setItemsToShow] = useState(1);
  const [ArrowsShow, setArrowsShow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setArrowsShow(true);
        setItemsToShow(3);
      }
      else {
        setItemsToShow(1);
        setArrowsShow(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className='mt-[5rem]'>
        <h1 className={`${styles.heading2} text-center md:text-start`}>Estas empezando?</h1>  
        <p className={`${styles.paragraph} text-center md:text-start`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        <Carousel className='gap-[1rem] mt-[3rem]' itemsToShow={itemsToShow} itemsToScroll={itemsToShow} showArrows={ArrowsShow}>
          <CourseCard  title="Cursos de programación" image={<FiBook size={40} className='text-secondary'/>} description="Cursos de programación" valor={0} IfProgress={false}/>

          <CourseCard  title="Cursos de programación" image={<FiBook size={40} className='text-secondary'/>} description="Cursos de programación" valor={0} IfProgress={false}/>


          <CourseCard  title="Cursos de programación" image={<FiBook size={40} className='text-secondary'/>} description="Cursos de programación" valor={0} IfProgress={false}/>


          <CourseCard  title="Cursos de programación" image={<FiBook size={40} className='text-secondary'/>} description="Cursos de programación" valor={0} IfProgress={false}/>

        </Carousel>
    </div>
  )
}

export default FirstCourses