import React from 'react'
import styles from '@/styles'
import Navbar from '@/components/ui/Navbar'
import Banner from '@/components/ui/Banner'
import Footer from '@/components/ui/Footer'
import linksMain from '@/data/linksMain.json'

const Course = () => {
    return (
        <>
            <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[1001] bg-primary top-0`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
                </div>
            </header>

            {/* <main className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative`}>
                <div className={`${styles.marginY}`}>
                    <Banner title='Cursos' />
                </div>
            </main> */}


            <div className={`bg-black ${styles.paddingX} ${styles.flexCenter} relative z-[115] text-white mt-[5.5rem]`}>
                <div className={`${styles.boxWidth} ${styles.marginY} ${styles.heading2}`}>
                    <p>Introduccion al Desarrollo Web</p>
                </div>
            </div>

            <main className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative`}>
                <div className={`${styles.marginY}`}>

                </div>
            </main>

            <footer className={`relative z-[115] mt-[2rem]`}>
                <Footer />
            </footer>


        </>
    )
}

export default Course