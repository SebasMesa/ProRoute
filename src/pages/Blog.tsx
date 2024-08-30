import React from 'react'
import BlogMain from '@/components/BlogMain'
import styles from '@/styles'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'


const Blog = () => {
    const links = [
        { text: 'Inicio', url: '/main' },
        { text: 'Cursos', url: '/courses' },
        { text: 'Comunidad', url: '/community' },
        { text: 'Retos Programacion', url: '/challenges' },
        { text: 'Blog', url: '/blog' },
    ];

    return (
        <>
            <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[101] `}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar links={links} main={true} typeOfLink='Link' />
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
        </>
    )
}

export default Blog