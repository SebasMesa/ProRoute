import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Button from './Button';
import ScrambleText from './ScrambleText';
import { Link } from 'react-router-dom';

const Navbar = ({ links, auth, setAuth, typeOfLink }: { links: { text: string, url: string }[], auth : boolean, setAuth : (auth: boolean) => void, typeOfLink: string } ) => {
    
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav className={`flex justify-between w-full items-center py-6 relative z-[100]`}>
                <Link to={'/'}>
                    <h2 className='text-white uppercase text-2xl font-anurati'>Pro<span className='text-secondary'>route</span></h2>
                </Link>

                <ul className='text-white font-kodeMono text-[1.070rem] md:flex hidden uppercase rounded-[10px] px-8 py-4 items-center'>
                    <li className='flex gap-6'>
                        {links.map((link, index) => (
                            <div key={index} className='w-fit'>
                                <ScrambleText text={link.text} className={'text-white'} link={link.url} typeOfLink={typeOfLink} />
                            </div>
                        ))}
                    </li>
                </ul>

                <div className='hidden md:block z-[1000]'>
                    {auth ? 
                    <Button title={'Cerrar Sesion'} onClick={() => {setAuth(false) }}></Button>
                    : 
                    <Link to={'/login'}>
                        <Button title={'Inicia Sesion'}></Button>
                    </Link>
                    }
                </div>

                <div onClick={() => { setToggle(!toggle) }} className='cursor-pointer flex md:hidden z-[101]'>
                    {toggle ? <AiOutlineClose size={'25px'} className='text-white' /> : <HiMiniBars3BottomRight size={'25px'} className='text-white' />}
                </div>
            </nav>

            <ul className={`${toggle ? 'bottom-0' : 'bottom-[-100%]'} text-white font-kodeMono text-[1.2rem] fixed bottom-0 w-full md:hidden bg-black transition-all duration-500 text-center left-0 z-[100]`}>
                <li className='flex flex-col text-center gap-6 w-full py-20 items-center uppercase'>
                    {links.map((link, index) => (
                        <ScrambleText key={index} text={link.text} className={'text-white'} link={link.url} />
                    ))}
                    <Link to={'/login'}>
                        <Button title={'Inicia Sesion'}></Button>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Navbar;
