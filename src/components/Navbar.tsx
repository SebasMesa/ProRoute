import React, { useState } from 'react'
import styles from '../styles'
import { AiOutlineClose } from "react-icons/ai";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Button from './Button'
import ScrambleText from './ScrambleText';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

return (
        <>
            <nav className={`flex justify-between w-full items-center py-6 relative`}>
                <div>
                    <h2 className='text-white uppercase text-2xl font-anurati'>Pro<span className='text-secondary'>route</span></h2>
                </div>

                <ul className='text-white font-kodeMono text-[1.070rem] md:flex hidden uppercase rounded-[10px] px-8 py-4 items-center'>
                    <li className='flex gap-6'>
                        <div className='w-[63px]'>
                            <ScrambleText text={'Inicio'} className={'text-white'} link={"#"}/>
                        </div>
                        <div className='w-[95px]'>
                            <ScrambleText text={'Acerca De'} className={'text-white'} link={"#acerca"}/>
                        </div>
                        <div className='w-[115px]'>
                            <ScrambleText text={'Testimonios'} className={'text-white'} link={"#testimonios"} />
                        </div>
                    </li>
                </ul>

                <div className='hidden md:block z-[1000]'>
                    <Link to={'/login'}>
                        <Button title={'Inicia Sesion'}></Button>
                    </Link>
                </div>

                <div onClick={() => { setToggle(!toggle) }} className='cursor-pointer flex md:hidden z-[101]'>
                    {toggle ? <AiOutlineClose size={'25px'} className='text-white' /> : <HiMiniBars3BottomRight size={'25px'} className='text-white' />}
                </div>

            </nav>

            <ul className={`${toggle ? 'bottom-0' : 'bottom-[-100%]'} text-white font-kodeMono text-[1.2rem] fixed bottom-0 w-full md:hidden bg-black transition-all duration-500 text-center left-0 z-[100]`}>
                <li className='flex flex-col text-center gap-6 w-full py-20 items-center uppercase'>
                        <ScrambleText text={'Inicio'} className={'text-white'} />
                        <ScrambleText text={'Acerca De'} className={'text-white'} />
                        <ScrambleText text={'Testimonios'} className={'text-white'} />
                        <Link to={'/login'}>
                            <Button title={'Inicia Sesion'}></Button>
                        </Link>

                </li>

            </ul>

        </>


    )
}

export default Navbar