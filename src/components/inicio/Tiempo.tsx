import React from 'react'
import styles, {layout} from '@/styles'
import Button from '@/components/ui/Button'
import RelojImg from '@/assets/Relojs.webp'
import { FiUsers } from "react-icons/fi";
import CommunityChatsCards from '../ui/CommunityChatsCards';
import { LuSparkle } from "react-icons/lu";

const Tiempo = () => {

    const chat = {
        id: 1,
        name: 'Ana Gómez',
        message: 'ProRoute fue la mejor decision',
        likes: 1430,
        img: null,
        user: '@ana_dev',
        time: 1,
        className: 'chat-card-react',
      };

  return (
    <div className={`mt-[5rem]`}>

        <section className='w-full text-center'>
            <h2 className={`${styles.heading2} font-semibold capitalize`}>Únete a la Mejor Comunidad</h2>
            <p className={`${styles.paragraph} w-[60%] mx-auto`}>Aprende, crece y colabora con una red global de programadores. Comparte ideas, resuelve dudas y avanza más rápido con el apoyo de nuestra comunidad.</p>

            <div className='grid md:grid-cols-2 gap-[2.5rem] mt-[2rem]'>
                <div className='bg-glass p-[2rem] rounded-xl flex relative overflow-hidden'>

                <div className='absolute w-[250px] h-[250px] blue__gradient top-[10rem] opacity-[.8]'></div>



                    <div className='bg-glass w-fit p-[.5rem] rounded-md mr-[2rem] h-fit'>
                        <FiUsers size={30} className='text-secondary'/>
                    </div>

                    <div className='text-start'>
                        <h2 className={`font-poppins text-white text-[20px] mb-[.5rem]`}>Comunidad de apoyo</h2>
                        <p className={`${styles.paragraph}`}>Conéctate con otros programadores para resolver dudas, compartir ideas y avanzar juntos.</p>

                        <div className='z-[999]'>   
                            <CommunityChatsCards name={chat.name} message={chat.message} likes={chat.likes} user={chat.user} time={chat.time} className={'bg-glass box-shadow border-none'}/>
                        </div>
                    </div>
                </div>

                <div className='bg-glass px-[1.5rem] py-[2rem] rounded-xl flex relative overflow-hidden'>
                <div className='absolute w-[250px] h-[250px] blue__gradient top-[10rem] opacity-[.8] right-1'></div>

                <div className='bg-glass w-fit p-[.5rem] rounded-md mr-[2rem] h-fit'>
                        <FiUsers size={30} className='text-secondary'/>
                    </div>

                    <div className='text-start'>
                        <h2 className={`font-poppins text-white text-[20px] mb-[.5rem]`}>Comunidad de Desafíos</h2>
                        <p className={`${styles.paragraph}`}>Comparte tus logros, encuentra nuevas formas de resolver problemas y colabora con otros programadores.</p>


                        <ul className={`${styles.paragraph} mt-[2rem] flex flex-col gap-[1rem]`}>
                            <li className='text-white flex items-center text-[20px]'>
                                <LuSparkle size={23} className='text-secondary mr-4'/>
                                <span>Reta tus habilidades</span>
                                {/* <p>Mejora con cada desafío y enfrenta problemas del mundo real. Recibe retroalimentación y soluciones de otros miembros de la comunidad.</p> */}
                            </li>

                            <li className='text-white flex items-center text-[20px]'>
                                <LuSparkle size={23} className='text-secondary mr-4'/>
                                <span>Colabora y Comparte</span>
                                {/* <p>Mejora con cada desafío y enfrenta problemas del mundo real. Recibe retroalimentación y soluciones de otros miembros de la comunidad.</p> */}
                            </li>

                            <li className='text-white flex items-center text-[20px]'>
                                <LuSparkle size={23} className='text-secondary mr-4'/>
                                <span>Desafíos Semanales</span>
                                {/* <p>Mejora con cada desafío y enfrenta problemas del mundo real. Recibe retroalimentación y soluciones de otros miembros de la comunidad.</p> */}
                            </li>

                        </ul>
                    </div>

                </div>
            </div>

        </section>


        
    </div>
  )
}

export default Tiempo