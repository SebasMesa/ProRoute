import React from 'react'
import styles from '../styles'

const TecnicaCard = ({title, description, img}) => {
  return (
    <div className='mx-auto'>
        <img src="https://via.placeholder.com/300x200" alt=""  className='mx-auto'/>
        <h3 className='font-poppins font-[300] xs:text-[28px] text-[20px] text-white text-center'>{title}</h3>
        <p className={`${styles.paragraph} text-[16px] w-[80%] mx-auto text-center`}>{description}</p>
    </div>
  )
}

export default TecnicaCard