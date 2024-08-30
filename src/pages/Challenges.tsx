import React from 'react'
import ChallengesHero from '@/components/ChallengesHero'
import Navbar from '@/components/Navbar'
import styles from '@/styles'
import Banner from '@/components/Banner'

const Challenges = () => {
    const links = [
        { text: 'Inicio', url: '/main' },
        { text: 'Cursos', url: '/courses' },
        { text: 'Comunidad', url: '/community' },
        { text: 'Retos Programacion', url: '/challenges' },
        { text: 'Blog', url: '/blog' },
    ];

    return (
        <>
            <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[1000] h-full`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar links={links} main={true} typeOfLink='Link' />
                </div>
            </header>

            <main className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative`}>
                <div className={`${styles.marginY}`}>
                    <Banner title='Retos Programacion' />
                </div>
            </main>




            <section className={`${styles.paddingX} ${styles.flexCenter}] relative z-[15]`}>
                <div className={`${styles.boxWidth} ${styles.marginY}`}>
                    <ChallengesHero />
                </div>
            </section>
        </>
    )
}

export default Challenges