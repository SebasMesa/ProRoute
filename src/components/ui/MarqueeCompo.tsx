import React from 'react'
import Marquee from "react-fast-marquee";
import styles from '@/styles';

type Props = {
  descri: string[]
  direction: "left" | "right" | "up" | "down"
  speed: number
}

const MarqueeCompo = ({descri, direction, speed} : Props) => {
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