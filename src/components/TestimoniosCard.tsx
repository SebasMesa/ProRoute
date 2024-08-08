{/*import React from 'react'
import styles from '../styles'

const TestimoniosCard = ({title, description}) => {
  return (
    <div className='w-full mx-auto text-center my-12'>
        <img src="https://via.placeholder.com/150x150" alt="" className='rounded-full mx-auto w-[150px] h-[150px] object-cover mb-5'/>
        <h3 className='text-white font-poppins font-[300] xs:text-[28px] text-[20px] mb-3'>{title}</h3>
        <p className={`${styles.paragraph} text-[16px] w-[80%] mx-auto`}>{description}</p>
    </div>



  )
}

export default TestimoniosCard*/}

import React from 'react';
import styles from '../styles'; // Importa tus estilos
const Testimonios = ({name, message, cargo}) => {
  return (
    <div className={`${styles.paddingY}`}>
            <div className='bg-purple-gradient rounded-[20px] shadow-md p-6 '>
              <p className='text-gray-400'>{message}</p>
              <div className='mt-4 flex items-center'>
                  <img 
                    src="https://via.placeholder.com/150x150" 
                    alt="Raul"
                    className='w-12 h-12 rounded-full mr-4' 
                  />
                <div>
                  <h3 className='text-lg font-bold text-gray-600'>{name}</h3>
                  <p className='text-gray-400'>{cargo}</p>
                </div>
              </div>
            </div>
        </div>
  );
};
export default Testimonios;