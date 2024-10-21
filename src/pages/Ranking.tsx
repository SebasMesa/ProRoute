import React from 'react'
import linksMain from '@/data/linksMain.json'
import styles from '@/styles'
import Navbar from '@/components/ui/Navbar'
import Banner from '@/components/ui/Banner'
import Footer from '@/components/ui/Footer'


const Ranking = () => {
    return (
        <>
            <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[101] bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
                </div>
            </header>

            <section className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative`}>
                <div className={`${styles.marginY}`}>
                    <Banner title='Ranking' />
                </div>
            </section>

            <main className={`bg-primary ${styles.paddingX} ${styles.flexCenter} pt-[10rem]`}>
                <div className={`${styles.boxWidth} md:flex`}>

                </div>
            </main>



            <footer>
                <Footer></Footer>
            </footer>




        </>
    )
}

export default Ranking