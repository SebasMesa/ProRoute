import React from 'react'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import styles from '@/styles'
import linksMain from '@/data/linksMain.json'
import Button from '@/components/ui/Button'
import { FiMessageSquare } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import CommunityChats from '@/components/community/CommunityChats'


const Account = () => {
  return (
    <>
      <header className={`${styles.paddingX} ${styles.flexStart} fixed top-0 w-full z-[101] bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
        </div>
      </header>

      {/* FOTO DE BANNER */}

      <div className='bg-[#2F4F4F] h-[35vh] bg-[url("https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4890896/b7c236207a594ca0a2292950e93b4173/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/3.jpeg?token-time=1730678400&token-hash=SM_bu3yzZKkF6DX35a8IX5PIz8MjVbWLnL1t9xXE5J4%3D")] bg-cover bg-center mt-[80px] relative'>
      <div
          className={`w-[150px] h-[150px] rounded-full flex items-center justify-center text-white absolute top-0 left-0 right-0 bottom-[-100%] m-auto text-[2.5rem] bg-gray-500`}
        >
          {/* {user?.displayName[0]} */}
          M
        </div>

      </div>


      {/* CIERRE FOTO BANNER */}

      <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}]`}>
        <div className={`${styles.boxWidth} text-white`}>
          <div className='flex justify-between items-center relative mt-[8rem] md:mt-[5rem] mb-[2rem]'>
            <div>
              <p className={`${styles.heading3}`}>MiduDev</p>
              <span className={`${styles.paragraph}`}>@midudev</span>
            </div>


            <div className='flex gap-[1rem]'>
              <Button className=' ' title='Seguir' />
              <Button className='flex items-center gap-[.5rem]' icono={<FiMessageSquare size={20} />} />
            </div>

          </div>
        </div>
      </section>

      <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}]`}>
        <div className={`${styles.boxWidth} text-white border-b border-[#3d3d3d]`}>
          <div className='md:flex my-[2rem]'>
            <div className='md:w-[25%]'>
              <h2 className={`text-[21px] font-[500]`}>Informacion de contacto</h2>


              <ul className='mt-[1.5rem]'>
                <li className='flex items-center gap-[.7rem] mb-[1rem]'><FiMail size={20} className='text-secondary' /> miduprog@gmail.com</li>
                <li className='flex items-center gap-[.7rem]'><FiPhone size={20} className='text-secondary' /> +57 313 123 4267</li>

              </ul>
            </div>

            <div className="md:w-[80%]">
              <CommunityChats />
            </div>

          </div>
        </div>
      </section>




      <footer>
        <Footer />
      </footer>

    </>
  )
}

export default Account