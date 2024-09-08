import React from 'react'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import styles from '@/styles'
import linksMain from '@/data/linksMain.json'


const Account = () => {
  return (
    <>
      <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[101] bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
        </div>
      </header>


      <footer>
        <Footer />
      </footer>

    </>
  )
}

export default Account