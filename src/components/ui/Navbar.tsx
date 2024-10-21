import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Button from '@/components/ui/Button';
import ScrambleText from '@/components/ui/ScrambleText';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/authContext'

const Navbar = ({ links, typeOfLink, main }: { links: { text: string, url: string }[], typeOfLink: string, main: boolean }) => {

    const [toggle, setToggle] = useState(false);
    const { user, logout } = useAuth();


    return (
        <>
            <nav className={`flex justify-between w-full items-center py-5 z-[101] relative`}>
                <div className='flex items-center'>
                    {user ?
                        <Link to={'/main'} className='flex items-center'>
                            <h2 className='text-white uppercase text-3xl font-anurati mr-[.5rem]'>P<span className='text-secondary'>R</span></h2>
                            <div className='bg-black-gradient text-white px-[.5rem] py-[.2rem] rounded-lg text-[14px]'>Beta</div>
                        </Link>

                        :
                        <Link to={'/'} className='flex items-center'>
                            <h2 className='text-white uppercase text-3xl font-anurati mr-[.5rem]'>P<span className='text-secondary'>R</span></h2>
                            <div className='bg-black-gradient text-white px-[.5rem] py-[.2rem] rounded-lg text-[14px]'>Beta</div>

                        </Link>
                    }

                    <ul className='text-white font-rubik text-[19px] xl:flex hidden rounded-[10px] px-8 py-4 items-center ml-[1rem]'>
                        <li className='flex items-center gap-6'>
                            {links.map((link, index) => (
                                <div key={index} className='w-fit'>
                                    {/* <ScrambleText text={link.text} className={'text-white'} link={link.url} typeOfLink={typeOfLink} /> */}

                                    <ul>
                                        <Link to={link.url}>{link.text}</Link>
                                    </ul>
                                </div>
                            ))}

                            {/* {user ?
                                <button className='px-[.5rem] py-1 rounded-lg bg-glass-red' onClick={logout}>Cerrar Sesion</button>
                                : ''} */}

                        </li>
                    </ul>


                </div>
                <div className={`z-[100] ${main ? 'hidden' : 'hidden xl:block'}`}>
                    {user ?
                        ''
                        : <Link to={'/signIn'}>
                            <Button title={'Iniciar Sesion'} className='font-poppins text-dimWhite'></Button>
                        </Link>}
                </div>

                {user ?
                <Link to={'/myaccount'} className={`${main ? 'block' : 'hidden'} w-[40px] h-[40px] bg-gray-500 rounded-full flex items-center justify-center text-white cursor-pointer z-[101]`}>
                    {user.photoURL ? <img src={user.photoURL} className='w-full h-full rounded-full' alt="foto de perfil" /> : ''}
                </Link>
                : ''}

                <div onClick={() => { setToggle(!toggle) }} className='cursor-pointer flex xl:hidden z-[101]'>
                    {toggle ? <AiOutlineClose size={'25px'} className='text-white' /> : <HiMiniBars3BottomRight size={'25px'} className='text-white' />}
                </div>
            </nav>

            <ul className={`${toggle ? 'left-0' : 'left-[-100%]'} text-white font-rubik text-[20px] fixed bottom-0 w-full xl:hidden bg-black transition-all duration-500 text-center left-0 z-[100] h-full`}>
                <li className='flex flex-col text-center gap-6 w-full h-full py-20 items-center justify-center'>
                    {links.map((link, index) => (
                        // <ScrambleText key={index} text={link.text} className={'text-white'} link={link.url} />

                        <ul>
                            <Link to={link.url}>{link.text}</Link>
                        </ul>


                    ))}
                    <button className='px-[.5rem] py-1 rounded-lg bg-glass-red' onClick={logout}>Cerrar Sesion</button>


                    <div className={`z-[100] ${main ? 'hidden' : 'block'} flex flex-col gap-[1.5rem]`}>
                        <Link to={'/signIn'}>
                            <Button title={'Iniciar Sesion'}></Button>
                        </Link>
                    </div>

                </li>
            </ul>
        </>
    );
}

export default Navbar;
