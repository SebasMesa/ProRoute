import React from 'react'
import styles from '@/styles'
import Navbar from '@/components/ui/Navbar'
import Banner from '@/components/ui/Banner'
import Footer from '@/components/ui/Footer'
import linksMain from '@/data/linksMain.json'

const Course = () => {
    return (
        <>
            <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[1001] bg-primary top-0`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
                </div>
            </header>

            {/* <main className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative`}>
                <div className={`${styles.marginY}`}>
                    <Banner title='Cursos' />
                </div>
            </main>
 */}

            <div className={`bg-black ${styles.paddingX} ${styles.flexCenter} relative z-[115] text-white mt-[5.5rem]`}>
                <div className={`${styles.boxWidth} ${styles.marginY} ${styles.heading2}`}>
                    <p>Introduccion al Desarrollo Web</p>
                </div>
            </div>

            <main className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative pb-[5rem]`}>
                <div className={`${styles.marginY} ${styles.boxWidth} ${styles.paragraph}`}>
                    <section className='grid md:grid-cols-[2fr_1fr] gap-[2.5rem]'>

                        <div>
                            <h3 className='text-gradient'>Descripción general</h3>
                            <p className='text-white'>Este curso te enseñará a construir aplicaciones web avanzadas utilizando las últimas tecnologías y mejores prácticas. Aprenderás a dominar el desarrollo frontend con React, manejar datos con APIs y bases de datos, y desplegar tus aplicaciones de manera eficiente.</p>
                        </div>

                        <div>
                            <h3 className='text-gradient'>Detalles del curso</h3>
                            <ul>
                                <li>Duración aproximada: 5 semanas</li>
                                {/* <li>Horario: Lunes y Miércoles, 19:00 - 21:00</li> */}
                                <li>Requisitos previos: Conocimientos básicos de HTML, CSS y JavaScript</li>
                            </ul>

                        </div>
                    </section>

                    <h3 className='text-gradient mt-[3rem]'>Temario</h3>

                    <section className='grid grid-cols-2 gap-4 mt-[2rem]'>
                        <div className='border-[1px] border-gray-500 rounded-route px-[2rem] py-[1.5rem]'>
                            <span className='text-white'>Modulo 1: Fundamentos Basicos</span>
                            <ul className='mt-[1rem]'>
                                <li>Introducción a React</li>
                                <li>Componentes y JSX</li>
                                <li>Estado y props</li>
                                <li>Ciclo de vida de los componentes</li>
                            </ul>

                        </div>

                        <div className='border-[1px] border-gray-500 rounded-route px-[2rem] py-[1.5rem]'>
                            <span className='text-white'>Modulo 1: Fundamentos Basicos</span>
                            <ul className='mt-[1rem]'>
                                <li>Introducción a React</li>
                                <li>Componentes y JSX</li>
                                <li>Estado y props</li>
                                <li>Ciclo de vida de los componentes</li>
                            </ul>

                        </div>

                        <div className='border-[1px] border-gray-500 rounded-route px-[2rem] py-[1.5rem]'>
                            <span className='text-white'>Modulo 1: Fundamentos Basicos</span>
                            <ul className='mt-[1rem]'>
                                <li>Introducción a React</li>
                                <li>Componentes y JSX</li>
                                <li>Estado y props</li>
                                <li>Ciclo de vida de los componentes</li>
                            </ul>

                        </div>

                        <div className='border-[1px] border-gray-500 rounded-route px-[2rem] py-[1.5rem]'>
                            <span className='text-white'>Modulo 1: Fundamentos Basicos</span>
                            <ul className='mt-[1rem]'>
                                <li>Introducción a React</li>
                                <li>Componentes y JSX</li>
                                <li>Estado y props</li>
                                <li>Ciclo de vida de los componentes</li>
                            </ul>
                        </div>

                    </section>

                    <section>
                        <h3 className='text-gradient mt-[3rem]'>Sobre el instructor</h3>

                        <div className='mt-[1.5rem] flex items-center gap-[2rem]'>
                            <div className='bg-gray-500 w-[160px] h-[160px] rounded-full'>

                            </div>

                            <div>
                                <h2 className='text-gradient text-[1.3rem]'>Luis Fernando</h2>
                                <p>Desarrollador web con más de 10 años de experiencia. Experto en React, Node.js y arquitecturas de microservicios.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <footer className={`relative z-[115] mt-[2rem]`}>
                <Footer />
            </footer>


        </>
    )
}

export default Course