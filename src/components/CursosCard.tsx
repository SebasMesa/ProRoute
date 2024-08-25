import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import styles from '../styles'
import ProgressBar from "@ramonak/react-progress-bar";
import { FiBook } from "react-icons/fi";
import { GlareCard } from "@/components/ui/GlareCard";



const CursosCard = ({ title, image, description, valor }) => {
  return (
    <div className='overflow-hidden font-rubik transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl hover:-translate-y-2 relative z-[15] rounded-br-2xl rounded-tr-sm rounded-tl-2xl rounded-bl-sm'>
      <div className={`py-[2rem] bg-black flex justify-center items-center `}>
        {image}
      </div>

      <div className={`bg-glass px-[1.5rem] md:px-[2rem] py-[1rem] md:h-[calc(100%-100px)] flex flex-col justify-between`}>
        <div>
          <h2 className={`font-poppins text-[1.3rem] text-white my-[1.5rem]`}>{title}</h2>
          <p className={`${styles.paragraph}`}>{description}</p>
        </div>

        <ProgressBar completed={valor}
          className="wrapper mt-[3rem] flex"
          barContainerClassName="container"
          bgColor='#00c9b156'
          height='35px'
        />

      </div>
    </div>
  )
}

export default CursosCard
