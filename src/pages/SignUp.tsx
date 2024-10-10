import React, { useState} from 'react';
import ParticlesComponent from '@/components/ui/ParticlesComponent';
import styles from '@/styles';
import Button from '@/components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '@/components/ui/Footer';
import { useAuth } from '@/context/authContext';

type User = {
    email: string
    password: string
}


const SignUp = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const {signup} = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handleChange = ({target: {name, value} }: {target: {name: string, value: string}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await signup(user)
            navigate("/main")
        } catch (error : any) {
            if (error.code === 'auth/email-already-in-use') {
                setError('Email already in use')
            } else if (error.code === 'auth/weak-password') {
                setError('Password should be at least 6 characters')
            } else if (error.code === 'auth/invalid-email') {
                setError('Invalid email')
            } else {
                setError('Something went wrong')
            }   

        }
    }

    return (
        <>
            <section className='bg-primary min-h-screen relative font-rubik'>
                {/* <div className='absolute z-[100]'>
                    <ParticlesComponent id='particles' />
                </div> */}

                <div className={`w-full min-h-screen grid grid-cols-1 md:grid-cols-2`}>
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

                    <div className={`${styles.padding} bg-glass-purple rounded-t-[2.5rem] md:rounded-l-[2.5rem] flex justify-center items-center flex-col relative`}>
                        <Link to={"/"} className='relative z-[2] text-white uppercase text-2xl font-anurati md:hidden'>
                            Pro<span className='text-secondary'>route</span>
                        </Link>

                        <div className='absolute w-[400px] h-[400px] pink__gradient2 right-0 top-0 z-[1]'></div>

                        <h2 className={`${styles.heading2} mt-8 md:w-[60%] z-[3]`}>Registrarse</h2>
                        <p className={`md:text-[1.1rem] text-dimWhite mt-4 md:w-[60%] w-[85%] text-center md:text-start`}>¡Tu camino hacia la excelencia en programación comienza aquí!</p>

                        <form action="" className='text-dimWhite md:w-[450px] flex flex-col gap-5 mt-8 z-[2]' onSubmit={handleSubmit}>
                            {error && (
                                <ul>
                                    <li className="text-red-500">{error}</li>
                                </ul>
                            )}

                            {/* {error && <p>{error}</p>} */}
                            <div>
                                <label htmlFor="username">Nombre *</label>
                                <input
                                    type="text"
                                    name="name"
                                    className='w-full bg-transparent border border-gray-500 p-3 rounded-lg mt-2'
                                    placeholder='Username'
                                    id="username"
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="email">Correo Electrónico *</label>
                                <input
                                    type="email"
                                    name="email"
                                    className='w-full bg-transparent border border-gray-500 p-3 rounded-lg mt-2'
                                    placeholder='Email'
                                    id="email"
                                    onChange={handleChange}

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
                                    onChange={handleChange}

                                />
                            </div>

                            <div>
                                <label htmlFor="confirmPassword">Repetir Contraseña *</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className='w-full bg-transparent border border-gray-500 p-3 rounded-lg mt-2'
                                    placeholder='Confirm Password'
                                    id="confirmPassword"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className=' mb-[1rem] '>
                                <label htmlFor="gender">Genero *</label>

                                <div className='flex justify-around items-center border border-gray-500 p-3 rounded-lg mt-2'>
                                    <div className='flex items-center'>
                                        <input
                                            type="radio"
                                            name="gender"
                                            id="male"
                                            value="male"
                                            className='border border-gray-500 p-3 rounded-lg mr-2'
                                            onChange={handleChange}
                                            
                                        />
                                        <label htmlFor="male">Masculino</label>
                                    </div>

                                    <div className='flex items-center'>
                                        <input
                                            type="radio"
                                            name="gender"
                                            id="female"
                                            value="female"
                                            className='border border-gray-500 p-3 rounded-lg mr-2'
                                            onChange={handleChange}

                                        />
                                        <label htmlFor="female">Femenino</label>
                                    </div>

                                    <div className='flex items-center'>
                                        <input
                                            type="radio"
                                            name="gender"
                                            id="other"
                                            value="other"
                                            className='border border-gray-500 p-3 rounded-lg mr-2'
                                            onChange={handleChange}

                                        />
                                        <label htmlFor="other">Otro</label>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <p className='text-dimWhite mt-4'>Al registrarte, aceptas los <span className='text-secondary'>términos y condiciones</span> de uso de la aplicación.</p>
                            </div>

                            <Button className={'w-full inline-block text-center'} title={'Registrarse'} ></Button>
                        </form>
                    </div>
                </div>
            </section>


            <footer className='mt-[3rem] relative z-[100]'>
                <Footer />
            </footer>

        </>
    );
};

export default SignUp;


