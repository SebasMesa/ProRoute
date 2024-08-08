import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import styles from '../styles'
import ProgressBar from "@ramonak/react-progress-bar";


const CursosCard = ({ title, image, description, valor }) => {
  return (
    <div className='border  border-gray-900 p-5'>
      <div className='md:flex'>
        <img className='w-[150px] mx-auto md:mr-5 md:ml-0' src={image} alt="" />
        <div className='mt-5 md:mt-0'>
          <span className={`font-poppins text-white text-[21px]`}>{title}</span>
          <p className={`font-rubik text-white text-[15px] font-[400] text-[#D9D9D9]`}>{description}</p>
        </div>
      </div>

      <ProgressBar completed={valor} 
        className="wrapper mt-[3rem]"
        barContainerClassName="container"
        bgColor='#00c9b156'
        baseBgColor='red'
        />
    </div>
  )
}

export default CursosCard