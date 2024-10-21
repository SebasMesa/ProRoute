import React, {useEffect, useState} from 'react'
import styles from '@/styles'
import CourseCard from '@/components/ui/CursosCard'
import {FiBook} from "react-icons/fi";
import Carousel from 'next-elastic-carousel';
import { Link } from 'react-router-dom';

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
        <h1 className={`${styles.heading2} text-center md:text-start`}>¿Estás empezando?</h1>  
        <p className={`${styles.paragraph} text-center md:text-start w-[50%]`}>¿Quieres programar? ¡Empieza ya! Te ayudamos a dar tus primeros pasos sin complicaciones. ¡Es más fácil de lo que crees!</p>

        <Carousel className='gap-[1rem] mt-[3rem]' itemsToShow={itemsToShow} itemsToScroll={itemsToShow} showArrows={ArrowsShow}>

          <Link to={`/courseintroduction?course=fundamentals`}>
            <CourseCard  title="Fundamentos" image={<FiBook size={40} className='text-secondary'/>} description="Los fundamentos por sebitas" valor={0} IfProgress={false}/>
          </Link>

          <Link to={'/courseintroduction?course=Python'}>
            <CourseCard  title="Python" image={<FiBook size={40} className='text-secondary'/>} description="Cursos de programación" valor={0} IfProgress={false}/>
          </Link>


          <Link to={'/courseintroduction?course=database'}>
            <CourseCard  title="Bases de datos" image={<FiBook size={40} className='text-secondary'/>} description="Cursos de programación" valor={0} IfProgress={false}/>
          </Link>

        </Carousel>
    </div>
  )
}

export default FirstCourses