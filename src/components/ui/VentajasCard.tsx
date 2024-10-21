import React from 'react'
import styles from '../../styles'

import { CardProps } from '../../types'


const VentajasCard = ({title, icono, descripcion} : CardProps) => {
  return (
    <div className={`md:border-r border-gray-900 last-of-type:border-r-0 mb-12`}>
        <div className='flex justify-center mb-5'>
          {icono}
        </div>
        <h2 className={`${styles.heading2} text-center`}>{title}</h2>
        <p className={`${styles.paragraph} text-center w-[80%] mx-auto`}>{descripcion}</p>
    </div>

  )
}

export default VentajasCard
