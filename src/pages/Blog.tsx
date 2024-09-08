import React from 'react'
import BlogMain from '@/components/blog/BlogMain'
import styles from '@/styles'
import Navbar from '@/components/ui/Navbar'
import Banner from '@/components/ui/Banner'
import Footer from '@/components/ui/Footer'
import linksMain from '@/data/linksMain.json'


const Blog = () => {

    return (
        <>
            <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[101] bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
                </div>
            </header>

            <main className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative`}>
                <div className={`${styles.marginY}`}>
                    <Banner title='Blog' />
                </div>
            </main>


            <main className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <BlogMain />
                </div>
            </main>


            <footer className={`mt-[3rem]`}>
                <Footer></Footer>
            </footer>
        </>
    )
}

export default Blog