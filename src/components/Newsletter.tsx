import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from '@/styles';
import Button from '@/components/ui/Button';

const Newsletter = () => {
  return (
    <div className='grid grid-columns-1 md:grid-cols-3 text-white font-rubik'>
        <div className={`md:border-r md:border-b border-gray-700 pb-[4rem] col-span-2`}>
            <h2 className='font-poppins text-[1.4rem] w-[82%]'>Suscribete a nuestro Newsletter para nuevas recomendaciones semanales.</h2>

            <form action="" className='mt-[2rem]'>
                <input type="email" placeholder='Ingresa tu email' className='p-[.5rem] bg-transparent border rounded-l-lg md:w-[400px]'/>

                <Button title='Enviar' className='py-[.55rem] rounded-r-lg rounded-l-none'></Button>
            </form>
        </div>

        <div className='pl-[2rem] md:border-b border-gray-700 hidden md:block'>
            <h2 className='font-poppins text-[1.4rem]'>Siguenos en redes</h2>
            <p className='text-dimWhite text-[1rem] my-[1rem]'>No te pierdas de lo ultimo que sucede.</p>

            <div className="flex gap-[1rem]">
              <FaInstagram size={'20px'}/>
              <FaFacebook size={'20px'}/>
              <FaTwitter size={'20px'} />
              <FaYoutube size={'20px'} />
            </div>

        </div>
    </div>
  )
}

export default Newsletter