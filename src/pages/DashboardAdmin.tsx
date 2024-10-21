import React from 'react'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import styles from '@/styles'
import linksMain from '@/data/linksMain.json'
import AdminMain from "@/components/admin/AdminMain";
import AdminSidebar from "@/components/admin/AdminSidebar"

const DashboardAdmin = () => {
    return (
        <>
            <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[101] bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
                </div>
            </header>

            <main className={`bg-primary ${styles.paddingX} ${styles.flexCenter} pt-[10rem]`}>
                <div className={`${styles.boxWidth} md:flex`}>
                    <AdminSidebar />
                    <AdminMain />
                </div>
            </main>



            <footer>
                <Footer />
            </footer>

        </>
    )
}

export default DashboardAdmin