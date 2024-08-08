import React from 'react'
import TecnicaCard from './TecnicaCard'
import styles from '../styles'


const Tecnicas = () => {
  return (
    <div className={`${styles.paddingY} grid md:grid-cols-3 mx-auto gap-8`}>
      <TecnicaCard title={'Programacion P.B'} description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}/>
      <TecnicaCard title={'Programacion P.B'} description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}/>
      <TecnicaCard title={'Programacion P.B'} description={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}/>
    </div>
  )
}

export default Tecnicas