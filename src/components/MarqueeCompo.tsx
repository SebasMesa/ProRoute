import React from 'react'
import Marquee from "react-fast-marquee";
import styles from '../styles';

const MarqueeCompo = ({descri, direction, speed}) => {
  return (
    <>
    <Marquee direction={direction} autoFill={true} speed={speed}>
        <h1 className={`${styles.heading} mr-3`}>
         {descri[0]}
        </h1>

        <h1 className={`${styles.heading} mr-3`}>
         {descri[1]}
        </h1>


        <h1 className={`${styles.heading} mr-3`}>
         {descri[2]}
        </h1>

    </Marquee>  
    </>
    )
}

export default MarqueeCompo