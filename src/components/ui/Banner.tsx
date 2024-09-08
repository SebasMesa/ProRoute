import React from 'react'
import styles from '@/styles'
import ParticlesComponent from './ParticlesComponent';

interface CoursesHeroProps {
    title: string;
  }

const CoursesHero = ({ title } : CoursesHeroProps) => {
    return (
        <>
            <div className='absolute z-[100]'>
                <ParticlesComponent id='particles' />
            </div>

            <h1 className={`${styles.heading} ${styles.paddingY} my-[3rem] text-gradient`}>{title}</h1>
        </>
    )
}

export default CoursesHero