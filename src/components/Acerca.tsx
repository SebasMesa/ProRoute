import React from 'react'
import styles, { layout } from '../styles'
import Button from './Button'
import Img from '../assets/acerca.svg'

const Acerca = () => {
  return (
    <div className={`${styles.paddingY} ${layout.section} gap-10`} id='acerca'>
      <div className='w-full'>
        <img 
          src={Img}
          alt="Acerca De" 
          className='flex justify-self-start img'
        />
      </div>

      <div>
        <h2 className={`${styles.heading} w-full md:w-[70%]`}>Y cual es <br/> el proposito de esta guia<span className='font-exan'>?</span> </h2>
        <p className={`${styles.paragraph}`}>El propósito de ProRoute es proporcionarte una guía clara y completa para iniciar tu camino en la programación. Ofrecemos recursos detallados, consejos prácticos y una comunidad de apoyo para ayudarte a alcanzar tus metas.
        </p>
        <div className='mt-10'>
          <Button title='Saber Mas'/>
        </div>
      </div>
    </div>
  )
}

export default Acerca