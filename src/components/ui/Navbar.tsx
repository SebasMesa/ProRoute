import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Button from '@/components/ui/Button';
import ScrambleText from '@/components/ui/ScrambleText';
import { Link } from 'react-router-dom';

const Navbar = ({ links, typeOfLink, main }: { links: { text: string, url: string }[], typeOfLink: string, main: boolean }) => {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav className={`flex justify-between w-full items-center py-5 z-[101] relative`}>
                <div className='flex items-center'>
                    <Link to={'/'}>
                        <h2 className='text-white uppercase text-2xl font-anurati'>P<span className='text-secondary'>R</span></h2>
                    </Link>

                    <ul className='text-white font-kodeMono text-[1.070rem] xl:flex hidden uppercase rounded-[10px] px-8 py-4 items-center ml-[2rem]'>
                        <li className='flex gap-6'>
                            {links.map((link, index) => (
                                <div key={index} className='w-fit'>
                                    <ScrambleText text={link.text} className={'text-white'} link={link.url} typeOfLink={typeOfLink} />
                                </div>
                            ))}
                        </li>
                    </ul>


                </div>
                <div className={`z-[100] ${main ? 'hidden' : 'hidden xl:block'}`}>
                    <Link to={'/signUp'} className='mr-[1rem]'>
                        <Button title={'Registrate'}></Button>
                    </Link>
                    <Link to={'/signIn'}>
                        <Button title={'Iniciar Sesion'}></Button>
                    </Link>
                </div>

                <Link to={'/myaccount'} className={`${main ? 'block' : 'hidden'} w-[40px] h-[40px] bg-gray-500 rounded-full flex items-center justify-center text-white`}>
                    S
                </Link>

                <div onClick={() => { setToggle(!toggle) }} className='cursor-pointer flex xl:hidden z-[101]'>
                    {toggle ? <AiOutlineClose size={'25px'} className='text-white' /> : <HiMiniBars3BottomRight size={'25px'} className='text-white' />}
                </div>
            </nav>

            <ul className={`${toggle ? 'left-0' : 'left-[-100%]'} text-white font-kodeMono text-[1.2rem] fixed bottom-0 w-full xl:hidden bg-black transition-all duration-500 text-center left-0 z-[100] h-full`}>
                <li className='flex flex-col text-center gap-6 w-full h-full py-20 items-center uppercase justify-center'>
                    {links.map((link, index) => (
                        <ScrambleText key={index} text={link.text} className={'text-white'} link={link.url} />
                    ))}

                    <div className={`z-[100] ${main ? 'hidden' : 'block'} flex flex-col gap-[1.5rem]`}>
                        <Link to={'/signUp'}>
                            <Button title={'Registrate'}></Button>
                        </Link>
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
