import React from 'react'
import styles from '@/styles.ts'
import { FiUsers } from "react-icons/fi";
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import pythonLatam from '../assets/pythonLatam.jpeg'

interface Props {
  className?: string
  title: string
  description: string
  image?: string
  members: number
}



const ComunidadesCard = ({ className, title, description, image,members }: Props) => {
  return (
    <div className={`text-white rounded-lg ${className} overflow-hidden font-rubik grid grid-rows-2`} >
      <div className={`w-full image`}>
        {/* <img src="https://via.placeholder.com/1980x920" alt="" className='rounded'/> */}

      </div>

      <div className='text-start bg-glass p-[2rem] h-full flex flex-col justify-between'>
        <div>
          <h2 className={`font-poppins text-[1.3rem] text-white`}>{title}</h2>

          <p className={`${styles.paragraph} mt-[1.5rem]`}>{description}</p>

        </div>

        <div className='flex items-center justify-between mt-[2.5rem]'>
          <div className='flex items-center'>
            <FiUsers size={'23px'} className='mr-[1rem] text-secondary' />
            <span>{members} Miembros</span>
          </div>

          <Link to={'/'}>
            <Button title={'Unirse'} className='px-[1rem] py-[.4rem]' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ComunidadesCard