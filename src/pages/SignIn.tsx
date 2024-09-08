import React, { useState, useRef } from 'react';
import ParticlesComponent from '@/components/ui/ParticlesComponent';
import styles from '@/styles';
import Button from '@/components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '@/components/ui/Footer';

const SignIn = () => {
    return (
        <>
            <section className='bg-primary min-h-screen relative font-rubik'>
                <div className='absolute z-[100]'>
                    <ParticlesComponent id='particles' />
                </div>

                <div className={`w-full min-h-screen grid grid-cols-1 md:grid-cols-2`}>
                    <div className={`${styles.padding} bg-glass-purple rounded-t-[2.5rem] md:rounded-l-[2.5rem] flex justify-center items-center flex-col relative`}>
                        <Link to={"/"} className='relative z-[2] text-white uppercase text-2xl font-anurati md:hidden'>
                            Pro<span className='text-secondary'>route</span>
                        </Link>

                        <div className='absolute w-[400px] h-[400px] pink__gradient2 right-0 top-0 z-[1]'></div>

                        <h2 className={`${styles.heading2} mt-8 md:w-[60%] z-[3]`}>Iniciar Sesion</h2>
                        <p className={`md:text-[1.1rem] text-dimWhite mt-4 md:w-[60%] w-[85%] text-center md:text-start`}>¡Tu camino hacia la excelencia en programación comienza aquí!</p>

                        <form action="" className='text-dimWhite md:w-[450px] flex flex-col gap-5 mt-8 z-[2]'>
                            {/* {error.length > 0 && (
                                <ul>
                                    {error.map((err, index) => (
                                        <li key={index} className="text-red-500">{err}</li>
                                    ))}
                                </ul>
                            )}
 */}
                            <div>
                                <label htmlFor="email">Correo Electrónico *</label>
                                <input
                                    type="email"
                                    name="email"
                                    className='w-full bg-transparent border border-gray-500 p-3 rounded-lg mt-2'
                                    placeholder='Email'
                                    id="email"
                                />
                            </div>

                            <div>
                                <label htmlFor="password">Contraseña *</label>
                                <input
                                    type="password"
                                    name="password"
                                    className='w-full bg-transparent border border-gray-500 p-3 rounded-lg mt-2'
                                    placeholder='Password'
                                    id="password"
                                />
                            </div>


                            <Button className={'w-full inline-block text-center'} title={'Iniciar Sesion'}></Button>
                        </form>
                    </div>

                    <div className={`${styles.padding} text-white relative hidden md:block`}>
                        <div className='absolute w-[400px] h-[400px] blue__gradient left-0 top-0 z-[1]'></div>
                        <div className='absolute w-[400px] h-[400px] purple__gradient bottom-0 right-0 z-[1]'></div>

                        <Link to={"/"} className='relative z-[2] text-white uppercase text-2xl font-anurati'>
                            Pro<span className='text-secondary'>route</span>
                        </Link>

                        <div className='{/*md:mt-[12rem]*/} h-full flex flex-col justify-center relative z-[2]'>
                            <h1 className={`${styles.heading} mt-8 md:w-[60%]`}>Inicia tu aventura en ProRoute</h1>
                            <p className={`${styles.paragraph} mt-4 md:w-[65%]`}>Bienvenido de nuevo a ProRoute, tu puerta de entrada al mundo de la programación. Inicia sesión para acceder a una comunidad vibrante de aspirantes a desarrolladores y expertos en tecnología!</p>
                        </div>
                    </div>

                </div>
            </section>


            <footer className='mt-[3rem] relative z-[100]'>
                <Footer />
            </footer>

        </>
    );
};

export default SignIn;


