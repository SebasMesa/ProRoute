import React from 'react'
import CursosCard from './CursosCard'
import styles from '../styles'
import CursosCardEmpty from './CursosCardEmpty'
import { Link } from 'react-router-dom'
import Button from './Button'

const ContinuaCurso = () => {
    const cursos = [
        {
            id: 1,
            title: 'Desarrollo Web',
            description: 'Aprende a desarrollar paginas web',
            image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
            valor: 50
        },
        {
            id: 2,
            title: 'Data Science',
            description: 'Aprende Data Science',
            image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
            valor: 20
        },
        {
            id: 3,
            title: 'Inteligencia Artificial',
            description: 'Aprende Inteligencia Artificial',
            image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
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
                        <CursosCard key={curso.id} curso={curso} image={curso.image} description={curso.description} title={curso.title} valor={curso.valor} />
                    ))
                ) : (
                    <CursosCardEmpty />
                )}
            </div>

            <Link to={'/cursos'} className='flex justify-end mt-[2rem]'>
                <Button title={'Ver todos mis cursos'}></Button>
            </Link>

            {/* <p className='mt-10 text-center text-dimWhite text-[1.5rem]'>¿No encuentras el curso que necesitas? <Link to={'/cursos'} className='text-secondary'>Explora nuestros cursos</Link></p> */}
        </>
    )
}

export default ContinuaCurso
