import React, { useState, useRef } from 'react';
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

const SignIn = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { login, loginWithGoogle } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handleChange = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setError('');
        try {
            await loginWithGoogle();
            console.log("exitoso")
            // navigate('/main');
        } catch (error: any) {
            setError('Error de autenticación con Google. Inténtalo de nuevo.');
            console.error(error);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await login(user)
            navigate("/main")
        } catch (error: any) {
            // if (error.code === 'auth/email-already-in-use') {
            //     setError('Email already in use')
            // } else if (error.code === 'auth/weak-password') {
            //     setError('Password should be at least 6 characters')
            // } else if (error.code === 'auth/invalid-email') {
            //     setError('Invalid email')
            // } else {
            //     setError('Something went wrong')
            // }

            setError(error.code)

        }
    }

    return (
        <>
            <section className='bg-primary min-h-screen relative font-rubik'>

                <div className={`w-full min-h-screen grid grid-cols-1 md:grid-cols-2`}>
                    <div className={`${styles.padding} bg-glass-purple rounded-t-[2.5rem] md:rounded-l-[2.5rem] flex justify-center items-center flex-col relative`}>
                        <Link to={"/"} className='relative z-[2] text-white uppercase text-2xl font-anurati md:hidden'>
                            Pro<span className='text-secondary'>route</span>
                        </Link>

                        <div className='absolute w-[400px] h-[400px] pink__gradient2 right-0 top-0 z-[1]'></div>

                        <h2 className={`${styles.heading2} mt-8 md:w-[60%] z-[3]`}>Iniciar Sesion</h2>
                        <p className={`md:text-[1.1rem] text-dimWhite mt-4 md:w-[60%] w-[85%] text-center md:text-start`}>¡Tu camino hacia la excelencia en programación comienza aquí!</p>

                        <form action="" className='text-dimWhite md:w-[450px] flex flex-col gap-5 mt-8 z-[2]' onSubmit={handleSubmit}>
                            {error && (
                                <ul>
                                    <li className="text-red-500">{error}</li>
                                </ul>
                            )}

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


                            <Button className={'w-full inline-block text-center'} title={'Iniciar Sesion'}></Button>

                            <div
                                className="flex items-center justify-center w-full py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={handleGoogleSignIn}>

                                <svg
                                    className="w-5 h-5 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="#EA4335"
                                        d="M24 9.5c3.18 0 5.94 1.15 8.15 3.03l6.07-6.07C34.68 3.32 29.66 1 24 1 14.61 1 6.79 6.91 3.48 14.91l7.43 5.77C12.69 15.11 17.94 9.5 24 9.5z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M46.2 24.27c0-1.6-.14-3.12-.4-4.6H24v9.3h12.55c-.54 2.83-2.14 5.21-4.55 6.81l7.13 5.53c4.15-3.83 6.55-9.48 6.55-16.04z"
                                    />
                                    <path
                                        fill="#4A90E2"
                                        d="M12.91 28.09c-1.15-1.76-1.81-3.81-1.81-6 0-2.19.66-4.24 1.81-6l-7.43-5.77C3.37 14.74 2 19.23 2 24s1.37 9.26 3.48 13.01l7.43-5.77z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M24 46c5.66 0 10.41-1.88 13.87-5.1l-7.13-5.53c-2 1.32-4.47 2.12-7.16 2.12-6.07 0-11.32-5.61-12.43-12.91L3.48 37.01C6.79 45.01 14.61 51 24 51z"
                                    />
                                </svg>
                                <span className="text-gray-700 font-medium">Ingresar con Google</span>
                            </div>                       
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


