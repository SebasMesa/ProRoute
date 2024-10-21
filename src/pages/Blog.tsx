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
            <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[101] bg-primary top-0`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
                </div>
            </header>

            <section className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative mt-[80px]`}>
                <div className={`my-[1.5rem]`}>
                    <Banner title='Blog' />
                </div>
            </section>


            <main className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} ${styles.marginY}`}>
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