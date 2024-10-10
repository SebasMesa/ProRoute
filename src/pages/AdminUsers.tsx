import React from 'react'
import linksMain from '@/data/linksMain.json'
import styles from '@/styles'
import Navbar from '@/components/ui/Navbar'
import Banner from '@/components/ui/Banner'
import Footer from '@/components/ui/Footer'
import Button from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { TbMenuOrder } from "react-icons/tb";



const AdminUsers = () => {
    return (
        <>

            <Link to={'/dashboardadmin'} className='h-[100vh] w-full'>
                <Button title='Admin' className='fixed bottom-10 right-10 z-[999]'></Button>
            </Link>

            <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[101] bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
                </div>
            </header>

            <section className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative`}>
                <div className={`${styles.marginY}`}>
                    <Banner title='Admin Usuarios' />
                </div>
            </section>

            <main className={`bg-primary ${styles.paddingX} ${styles.flexCenter} pt-[3rem]`}>
                <div className={`${styles.boxWidth} grid md:grid-cols-3 gap-[1.5rem]`}>
                    <div className=' bg-glass p-[1.5rem] rounded-route'>
                        <h2 className={`${styles.heading2} `}>Usuarios</h2>
                        <span className={`${styles.paragraph}`}>Gestiona los usuarios</span>

                        <div className='mt-[2rem]'>
                            <Button title='Añadir usuario' className='' />
                        </div>
                    </div>

                    <div className='bg-glass p-[1.5rem] rounded-lg'>

                    </div>

                    <div className='bg-glass p-[1.5rem] rounded-lg'>

                    </div>

                </div>
            </main>

            <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter} `}>
                <div className={`${styles.boxWidth} ${styles.marginY}`}>
                    <div className="shadow-md rounded-lg">
                        <h2 className="text-2xl font-bold mb-2 text-gradient">Usuarios</h2>
                        <p className="text-dimWhite mb-4">Gestiona los usuarios</p>

                        <div className="overflow-x-hidden">
                            <table className="min-w-full border border-[#3d3d3d]">
                                <thead className=''>
                                    <tr className="border-b border-[#3d3d3d]">
                                        <th className="py-[1rem] px-6 text-left text-dimWhite font-medium">Nombre</th>
                                        <th className="py-[1rem] px-6 text-left text-dimWhite font-medium">Usuario</th>
                                        <th className="py-[1rem] px-6 text-left text-dimWhite font-medium">Correo</th>
                                        <th className="py-[1rem] px-6 text-left text-dimWhite font-medium">Rol</th>
                                        <th className="py-[1rem] px-6 text-left text-dimWhite font-medium"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-[#3d3d3d] py-[5rem]">
                                        <td className="py-[2rem] px-6 text-white">Luis Fernando</td>
                                        <td className="py-[2rem] px-6 text-white">@lefiamma</td>
                                        <td className="py-[2rem] px-6 text-white">correo@ejemplo.com</td>
                                        <td className="py-[2rem] px-6 text-white">Admin</td>
                                        <td className="py-[2rem] px-6 text-white"><TbMenuOrder size={20} /></td>

                                    </tr>

                                    <tr className="border-t border-[#3d3d3d] py-[5rem]">
                                        <td className="py-[2rem] px-6 text-white">Luis Fernando</td>
                                        <td className="py-[2rem] px-6 text-white">@lefiamma</td>
                                        <td className="py-[2rem] px-6 text-white">correo@ejemplo.com</td>
                                        <td className="py-[2rem] px-6 text-white">Admin</td>
                                        <td className="py-[2rem] px-6 text-white"><TbMenuOrder size={20} /></td>

                                    </tr>


                                    <tr className="border-t border-[#3d3d3d] py-[5rem]">
                                        <td className="py-[2rem] px-6 text-white">Luis Fernando</td>
                                        <td className="py-[2rem] px-6 text-white">@lefiamma</td>
                                        <td className="py-[2rem] px-6 text-white">correo@ejemplo.com</td>
                                        <td className="py-[2rem] px-6 text-white">Admin</td>
                                        <td className="py-[2rem] px-6 text-white"><TbMenuOrder size={20} /></td>

                                    </tr>

                                    {/* Puedes repetir más filas de usuario como esta */}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>



            <footer>
                <Footer></Footer>
            </footer>




        </>
    )
}

export default AdminUsers