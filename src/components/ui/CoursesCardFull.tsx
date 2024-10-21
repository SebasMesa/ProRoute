import React from 'react'
import styles from '../../styles'
import ProgressBar from "@ramonak/react-progress-bar";

type CursosCard = {
    title: string;
    image: React.ReactNode;
    description: string;
    valor: number;
    IfProgress: boolean
    className?: string
  }
  

const CoursesCardFull = ({ title, image, description, valor, IfProgress, className } : CursosCard) => {
  return (
    <div className={`overflow-hidden font-rubik transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl hover:-translate-y-2 relative z-[15] rounded-br-2xl rounded-tr-sm rounded-tl-2xl rounded-bl-sm md:flex mx-[2rem] ${className}`}>
      <div className={`py-[2rem] bg-black flex justify-center items-center md:px-[4rem]`}>
        {image}
      </div>

      <div className={`bg-glass px-[1.5rem] md:px-[2rem] py-[1rem] flex flex-col justify-between w-full`}>
        <div className='flex flex-col gap-[1rem]'>
          <h2 className={`font-poppins text-[1.3rem] text-white`}>{title}</h2>
          <p className={`${styles.paragraph} md:w-[50%]`}>{description}</p>
          <span className='text-gray-600'>Por: Luis Fernando</span>

          <div>
            <span className='text-gradient text-[1.5rem]'>Gratis</span>
          </div>
        </div>

        <ProgressBar completed={valor}
          className={`wrapper mt-[3rem] flex ${IfProgress ? 'block' : 'hidden'}`}
          barContainerClassName="container"
          bgColor='#00c9b156'
          height='35px'
        />

      </div>
    </div>
  )
}

export default CoursesCardFull


