import React from 'react'
import styles, {layout} from '@/styles'
import Button from '@/components/ui/Button'
import RelojImg from '@/assets/Relojs.webp'

const Tiempo = () => {
  return (
    <div className={`${styles.paddingY} ${layout.section}`}>
        <div className='w-[350px] md:w-[500px] flex md:justify-self-end justify-self-center md:hidden'>
            <img 
                src={RelojImg} 
                alt="" 
                className='img w-[100%] h-[100%] mb-14 md:mt-0'
            />
        </div>

        <div className='mb-12 md:mb-0'>
            <h2 className={`${styles.heading}`}>
                Ahorra valioso <br/> tiempo aprendiendo
            </h2>
            <p className={`${styles.paragraph} mt-4`}>
            Nuestra plataforma está diseñada para ofrecerte el contenido más relevante y útil, ahorrándote tiempo en la búsqueda de recursos y permitiéndote concentrarte en aprender y practicar.            </p>

            <div className='mt-12'>
                <Button title='Empieza Ahora'/>
            </div>
        </div>

        <div className='w-[350px] md:w-[500px] hidden md:flex md:justify-self-end justify-self-center'>
            <img 
                src={RelojImg} 
                alt="" 
                className='w-[100%] h-[100%] mt-14 md:mt-0 img'
            />
        </div>
    </div>
  )
}

export default Tiempo