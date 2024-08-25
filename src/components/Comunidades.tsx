import React from 'react'
import styles from '../styles'
import ComunidadesCard from './ComunidadesCard'
import Button from './Button'
import { Link } from 'react-router-dom'
import pythonLatam from '../assets/pythonLatam.jpeg'

interface Props {
    className?: string
}

const Comunidades = () => {

    const communities = [
        {
            id: 1,
            title: 'Python LatinoAmerica',
            description: 'Únete a la comunidad más grande de desarrolladores Python en América Latina. Aquí compartimos conocimientos, recursos y oportunidades para aprender y crecer juntos en el mundo de la programación.',
            members: 1653,
            image: pythonLatam,
            className: 'col-span-2'
        },
        {
            id: 2,
            title: 'JavaScript Hispano',
            description: 'Esta comunidad está dedicada a todos los apasionados por JavaScript y su ecosistema. Aprende, comparte y colabora en proyectos mientras conectas con desarrolladores de todo el mundo hispanohablante.',
            members: 1653,
            image: pythonLatam
        },

    ]
    return (
        <div>
            <div className='text-center text-white'>
                <h2 className={`${styles.heading}`}>Comunidades</h2>
                <p className={`${styles.paragraph} w-[55%] mx-auto`}>Encuentra comunidades donde puedas intercambiar conocimientos y divulgar de temas de interes.</p>


                <div className='mt-[3rem] grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]'>
                    {communities.map((community) => (
                        <ComunidadesCard title={community.title} description={community.description} members={community.members} 
                        image={community.image} className={community.className}/>

                    ))}
                    {/* 
                <ComunidadesCard title={'Python LatinoAmerica'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium illo enim voluptates, obcaecati nam aspernatur.'} members={1203}/>

                <ComunidadesCard title={'Python LatinoAmerica'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium illo enim voluptates, obcaecati nam aspernatur.'} members={165} className='col-span-2'/> */}

                </div>

                <Link to={'/community'} className='mt-[2rem] flex justify-start'>
                    <Button title={'Ver todas'} className='px-[1rem] py-[.4rem]' />
                </Link>
            </div>
        </div>
    )
}

export default Comunidades