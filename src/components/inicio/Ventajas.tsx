import React from 'react'
import VentajasCard from '@/components/ui/VentajasCard'
import styles from '@/styles'
import { CiStopwatch } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { IconType } from 'react-icons';

interface VentajasProps {
  title: string;
  icono: IconType;  
  descripcion: string;
}


const Ventajas: React.FC<VentajasProps> = ({ title, icono, descripcion }) => {  return (
  
    <div className={`${styles.paddingY} grid grid-cols-1 md:grid-cols-3`}>
      <VentajasCard title={title} icono={icono} descripcion={descripcion}/>
      {/* <VentajasCard title='Práctica Real' icono={<CiCircleCheck size={'100px'} color='#33bbcf'/>} descripcion={'Accede a ejercicios prácticos y proyectos reales que te prepararán para enfrentar desafíos del mundo profesional.'}/>
      <VentajasCard title='Certificaciones' icono={<CiFaceSmile size={'100px'} color='#33bbcf'/>} descripcion={'Obtén certificaciones reconocidas que validarán tus habilidades y te ayudarán a destacarte en el competitivo mercado laboral.'}/> */}
    </div>
  )
}

export default Ventajas