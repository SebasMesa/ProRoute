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
            <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[101] bg-primary top-0`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
                </div>
            </header>

            <section className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative mt-[80px]`}>
                <div className={`my-[1.5rem]`}>
                    <Banner title='Retos de programación' />
                </div>
            </section>


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