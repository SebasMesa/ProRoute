import React from 'react'
import Button from './Button'
import styles from '../styles'

const Empieza = () => {
  return (
    <div className={`${styles.paddingY} ${styles.paddingX} bg-black-gradient flex flex-col md:flex-row justify-between items-center rounded-lg mt-12 md:mt-0`}>
        <div>
            <h2 className={`${styles.heading}`}>
                Es tu momento de <span className='text-gradient'>brillar!</span>
            </h2>

            <p className={`${styles.paragraph} md:w-[50%] mt-5`}>
            En ProRoute, creemos en tu potencial para alcanzar grandes logros. Comienza tu aventura en la programación hoy mismo y transforma tus sueños en realidad.            </p>

        </div>

        <div className='md:w-[30%] w-full mt-9 md:mt-0'>
            <Button title="Empieza Ahora!"/>
        </div>
    </div>
  )
}

export default Empieza