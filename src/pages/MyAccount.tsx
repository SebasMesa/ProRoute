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


const MyAccount = () => {
  return (
    <>
      <header className={`${styles.paddingX} ${styles.flexStart} fixed top-0 w-full z-[101] bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
        </div>
      </header>

      {/* FOTO DE BANNER */}

      <div className='bg-[#2F4F4F] h-[35vh] bg-[url("https://i.pinimg.com/originals/92/1e/41/921e416b732f173786e9e4a97b39c0f6.jpg")] bg-cover bg-center mt-[80px]'></div>

      {/* CIERRE FOTO BANNER */}

      <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}]`}>
        <div className={`${styles.boxWidth} text-white`}>
          <div className='flex justify-between items-center relative h-[calc(25vh-80px)]'>
            <div>
              <p className={`${styles.heading3}`}>Sebastian Mesa</p>
              <span className={`${styles.paragraph}`}>@sebasmesa</span>
            </div>

            <div className='w-[150px] h-[150px] bg-gray-500 rounded-full flex items-center justify-center text-white absolute top-[-100%] left-0 right-0 bottom-0 m-auto text-[2.5rem]'>
              S
            </div>


            <div className='flex gap-[1rem]'>
              <Button className=' ' title='Editar Perfil' />
              <Button className='flex items-center gap-[.5rem]' icono={<FiMessageSquare size={20} />} />
            </div>

          </div>
        </div>
      </section>

      <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}]`}>
        <div className={`${styles.boxWidth} text-white border-b border-[#3d3d3d]`}>
          <div className='flex my-[2rem]'>
            <div className='w-[25%]'>
              <h2 className={`text-[21px] font-[500]`}>Informacion de contacto</h2>


              <ul className='mt-[1.5rem]'>
                <li className='flex items-center gap-[.7rem] mb-[1rem]'><FiMail size={20} className='text-secondary' /> lefiamma@gmail.com</li>
                <li className='flex items-center gap-[.7rem]'><FiPhone size={20} className='text-secondary' /> +57 313 123 4567</li>

              </ul>
            </div>

            <div className="w-[80%]">
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

export default MyAccount