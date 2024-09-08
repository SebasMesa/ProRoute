import React from 'react'
import ChallengesHero from '@/components/challenges/ChallengesHero'
import Navbar from '@/components/ui/Navbar'
import styles from '@/styles'
import Banner from '@/components/ui/Banner'
import Footer from '@/components/ui/Footer'
import linksMain from '@/data/linksMain.json'


const Challenges = () => {

    return (
        <>
            <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[101] bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
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

            <footer>
                <Footer></Footer>
            </footer>
        </>
    )
}

export default Challenges