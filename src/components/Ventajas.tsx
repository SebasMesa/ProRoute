import React from 'react'
import VentajasCard from './VentajasCard'
import styles from '../styles'
import { CiStopwatch } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";

const Ventajas = () => {
  return (
    <div className={`${styles.paddingY} grid grid-cols-1 md:grid-cols-3`}>
      <VentajasCard title='Crecimiento' icono={<CiStopwatch size={'100px'} color='#33bbcf'/>} descripcion={'Desarrolla tus habilidades y amplía tus conocimientos con contenido cuidadosamente seleccionado para garantizar tu progreso en el mundo de la programación.'}/>
      <VentajasCard title='Práctica Real' icono={<CiCircleCheck size={'100px'} color='#33bbcf'/>} descripcion={'Accede a ejercicios prácticos y proyectos reales que te prepararán para enfrentar desafíos del mundo profesional.'}/>
      <VentajasCard title='Certificaciones' icono={<CiFaceSmile size={'100px'} color='#33bbcf'/>} descripcion={'Obtén certificaciones reconocidas que validarán tus habilidades y te ayudarán a destacarte en el competitivo mercado laboral.'}/>
    </div>
  )
}

export default Ventajas