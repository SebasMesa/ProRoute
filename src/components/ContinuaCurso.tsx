import React from 'react'
import CursosCard from './CursosCard'
import styles from '../styles'
import CursosCardEmpty from './CursosCardEmpty'
import { Link } from 'react-router-dom'
import Button from './Button'
import { FiBook } from "react-icons/fi";
import { IoMdCode } from "react-icons/io";
import { GoDatabase } from "react-icons/go";



const ContinuaCurso = () => {
    const cursos = [
        {
            id: 1,
            title: 'Introduccion a Desarrollo Web',
            description: 'Aprende los fundamentos del Desarrollo Web, incluyendo HTML, CSS y JavaScript',
            image: <FiBook className='text-secondary' size={'35px'}/>,
            valor: 50
        },
        {
            id: 2,
            title: 'Conceptos avanzados de JavaScript',
            description: 'Profundice en JavaScript y aprenda técnicas y patrones avanzados.',
            image: <IoMdCode className='text-secondary' size={'35px'}/>,
            valor: 20
        },
        {
            id: 3,
            title: 'Diseño y gestión de bases de datos',
            description: 'Aprenda a diseñar y gestionar bases de datos para sus aplicaciones.',
            image: <GoDatabase className='text-secondary' size={'35px'}/>,
            valor: 70
        },
    ]

    console.log(cursos.length)

    return (
        <>
            <h2 className={`${styles.heading2}`}>Continua donde lo dejaste!</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
                {cursos.length > 0 ? (
                    cursos.map((curso) => (
                        <CursosCard IfProgress={true} key={curso.id} image={curso.image} description={curso.description} title={curso.title} valor={curso.valor} />
                    ))
                ) : (
                    <CursosCardEmpty />
                )}
            </div>

            <Link to={'/courses'} className='flex justify-end mt-[2rem]'>
                <Button title={'Ver todos mis cursos'}></Button>
            </Link>

            {/* <p className='mt-10 text-center text-dimWhite text-[1.5rem]'>¿No encuentras el curso que necesitas? <Link to={'/cursos'} className='text-secondary'>Explora nuestros cursos</Link></p> */}
        </>
    )
}

export default ContinuaCurso
