import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';

const CursosCardEmpty = () => {
  return (
    <Link to={'/courses'} className='border border-gray-900 px-[1rem] py-[1.5rem] flex items-center bg-glass rounded-lg text-center'>
        <CiSquarePlus className='text-white mr-3' size={'50px'}/>
        <span className='text-white'>No tienes cursos, Empieza ahora!</span>
    </Link>
  )
}

export default CursosCardEmpty