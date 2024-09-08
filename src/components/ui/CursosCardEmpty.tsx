import React from 'react'
import { CiSquarePlus } from "react-icons/ci";

const CursosCardEmpty = () => {
  return (
    <div className='border border-gray-900 p-5 flex items-center'>
        <CiSquarePlus className='text-white mr-3' size={'35px'}/>
        <span className='text-white'>No tienes cursos, Empieza ahora!</span>
    </div>
  )
}

export default CursosCardEmpty