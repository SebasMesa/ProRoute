import React, { useState } from "react";
import styles from '@/styles'
import CommunityChats from '@/components/community/CommunityChats'
import Navbar from '@/components/ui/Navbar'
import Banner from '@/components/ui/Banner'
import Footer from '@/components/ui/Footer'
import linksMain from '@/data/linksMain.json'
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";
import Button from '@/components/ui/Button'





const Community = () => {

    const avatars = [
        "https://via.placeholder.com/40", 
        "https://via.placeholder.com/40",
        "https://via.placeholder.com/40",
        "https://via.placeholder.com/40",
        "https://via.placeholder.com/40",
    ];

    return (

        <>
            <header className={`${styles.paddingX} ${styles.flexStart} top-0 fixed w-full z-[101] bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
                </div>
            </header>


            <section className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative mt-[80px]`}>
                <div className={`my-[1.5rem]`}>
                    <Banner title='Comunidad' />
                </div>
            </section>

            <main className={`${styles.paddingX} ${styles.flexCenter} relative`}>
                <div className={`${styles.marginY} ${styles.boxWidth}`}>
                    <section className="flex gap-[1.5rem] font-rubik justify-between">


                        {/* ==========================              ========================== */}
                        {/* ========================== SIDEBAR LEFT ========================== */}
                        {/* ==========================              ========================== */}

                        <div className="h-fit rounded-lg p-[1rem] hidden md:block ">
                            <h2 className="font-poppins text-[1.4rem] text-dimWhite">Creadores</h2>

                            <Link to={"/account"} className="flex items-center my-[2rem] rounded-lg overflow-hidden bg-discount-gradient py-[.5rem] px-[1rem]">
                                <div className="bg-gray-500 w-[35px] h-[35px] rounded-full mr-[1rem] flex-shrink-0 flex items-center justify-center text-[17px]">
                                    L
                                </div>
                                <div className="text-white flex flex-col">
                                    LeFiamma
                                    <span className="text-dimWhite">@Lefiamma</span>
                                </div>

                            </Link>

                            <Link to={"/account"} className="flex items-center my-[2rem] rounded-lg overflow-hidden bg-discount-gradient py-[.5rem] px-[1rem]">
                                <div className="bg-gray-500 w-[35px] h-[35px] rounded-full mr-[1rem] flex-shrink-0 flex items-center justify-center text-[17px]">
                                    L
                                </div>
                                <div className="text-white flex flex-col">
                                    Luis
                                    <span className="text-dimWhite">@fernando_luis</span>
                                </div>

                            </Link>


                            <Link to={"/account"} className="flex items-center my-[2rem] rounded-lg overflow-hidden bg-discount-gradient py-[.5rem] px-[1rem]">
                                <div className="bg-gray-500 w-[35px] h-[35px] rounded-full mr-[1rem] flex-shrink-0 flex items-center justify-center text-[17px]">
                                    M
                                </div>
                                <div className="text-white flex flex-col">
                                    MiduDev
                                    <span className="text-dimWhite">@midudev</span>
                                </div>

                            </Link>


                            <Link to={"/account"} className="flex items-center my-[2rem] rounded-lg overflow-hidden bg-discount-gradient py-[.5rem] px-[1rem]">
                                <div className="bg-gray-500 w-[35px] h-[35px] rounded-full mr-[1rem] flex-shrink-0 flex items-center justify-center text-[17px]">
                                    P
                                </div>
                                <div className="text-white flex flex-col">
                                    Python LatinoAmerica
                                    <span className="text-dimWhite">12,345 miembros</span>
                                </div>

                            </Link>

                        </div>

                        {/* ==========================              ========================== */}
                        {/* ========================== MAIN CONTENT ========================== */}
                        {/* ==========================              ========================== */}


                        <div className="w-full hidden">
                            <form>
                                <input type="text" placeholder="Escribe algo a la comunidad!" className="w-full px-[2rem] pt-[1.5rem] pb-[2rem] bg-transparent border border-[#3d3d3d] rounded-lg mb-[2rem] text-white" />
                            </form>
                            <CommunityChats />
                        </div>

                        <section className="w-full">
                            <div className="bg-black-gradient-2 px-[1rem] py-[.5rem] flex items-center rounded-t-lg">
                                <FiArrowLeft size={20} className="text-white mr-[1rem]" />
                                <p className={`${styles.paragraph}`}>Python LatinoAmerica</p>
                            </div>
                            <div className="rounded-b-lg overflow-hidden">
                                <div className={`bg-[url('/src/assets/pythonLatam.jpeg')] bg-cover bg-center h-[250px]`}>

                                </div>

                                <div className="bg-black-gradient p-[2rem]">
                                    <h2 className={`${styles.heading2}`}>Python LatinoAmerica</h2>
                                    <p className={`${styles.paragraph} mt-[.5rem]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nesciunt tempore excepturi quos quo! Tempore saepe architecto voluptates recusandae ad minima expedita optio perspiciatis.!</p>

                                    <div className="md:flex mt-[1.5rem] items-center justify-between">
                                        <div className="flex items-center">
                                        {avatars.map((avatar, index) => (
                                            <div
                                                key={index}
                                                className={`w-[40px] h-[40px] rounded-full border-2 border-white -ml-4 first:ml-0`}
                                            >
                                                <img
                                                    src={avatar}
                                                    alt={`Avatar ${index + 1}`}
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            </div>
                                        ))}

                                        <div className="items-center justify-between">
                                            <p className={`${styles.paragraph}`}><span className="text-white font-[500] ml-[1rem]">200</span> Miembros</p>  
                                        </div>

                                        </div>

                                        <Button title="Unirse" className="mt-[2rem] md:mt-0"/>

                                    </div>
                                </div>
                            </div>
                            {/* <form>
                                <input type="text" placeholder="Escribe algo a la comunidad!" className="w-full px-[2rem] pt-[1.5rem] pb-[2rem] bg-transparent border border-[#3d3d3d] rounded-lg mb-[2rem] text-white" />
                            </form> */}
                            <CommunityChats />
                        </section>



                        {/* ==========================               ========================== */}
                        {/* ========================== SIDEBAR RIGHT ========================== */}
                        {/* ==========================               ========================== */}

                        <section className="w-[600px] hidden md:block">

                            <form className="w-full px-[2rem] py-[1rem] border border-[#3d3d3d] rounded-lg mb-[2rem] text-white flex items-center">
                                <IoIosSearch size={20} className="mr-[1rem]" />
                                <input type="text" placeholder="Buscar" className="bg-transparent" />
                            </form>


                            <div className="bg-glass-purple px-[2rem] py-[6rem] rounded-route md:w-full h-fit box-shadow mb-[1.5rem] relative overflow-hidden border border-[#5ce1e6]">
                                <div className="bg-gradient-to-br from-[#5ce1e6] to-[#33bbcf] absolute top-[-3.5rem] left-[-4rem] w-[50%] h-full rounded-full blur-[70px] opacity-[.8]"></div>
                                <div className="bg-gradient-to-br from-[#5ce1e6] to-[#33bbcf] absolute bottom-[-3.5] right-[-4rem] w-[50%] h-full rounded-full blur-[80px] opacity-[.8]"></div>



                            </div>

                            <div className="bg-glass px-[2rem] py-[2rem] rounded-lg md:w-full h-fit sticky top-[1.5rem] left-0 box-shadow">
                                <h2 className={`font-poppins font-[300] xs:text-[30px] text-[22px] text-white mb-[3rem]`}>Comunidades Recomendadas</h2>

                                <div className="bg-glass-purple flex items-center px-[1rem] py-[1rem] my-[1rem] rounded-lg overflow-hidden">
                                    <div className="bg-gray-500 w-[35px] h-[35px] rounded-full mr-[1rem] flex-shrink-0 flex items-center justify-center text-[17px]">
                                        P
                                    </div>
                                    <div className="text-white flex flex-col">
                                        Python LatinoAmerica
                                        <span className="text-dimWhite">12,345 miembros</span>
                                    </div>
                                </div>


                                <div className="bg-glass-purple flex items-center px-[1rem] py-[1rem] my-[1rem] rounded-lg overflow-hidden">
                                    <div className="bg-gray-500 w-[35px] h-[35px] rounded-full mr-[1rem] flex-shrink-0 flex items-center justify-center text-[17px]">
                                        P
                                    </div>
                                    <div className="text-white flex flex-col">
                                        Python LatinoAmerica
                                        <span className="text-dimWhite">12,345 miembros</span>
                                    </div>
                                </div>


                                <div className="bg-glass-purple flex items-center px-[1rem] py-[1rem] my-[1rem] rounded-lg overflow-hidden">
                                    <div className="bg-gray-500 w-[35px] h-[35px] rounded-full mr-[1rem] flex-shrink-0 flex items-center justify-center text-[17px]">
                                        P
                                    </div>
                                    <div className="text-white flex flex-col">
                                        Python LatinoAmerica
                                        <span className="text-dimWhite">12,345 miembros</span>
                                    </div>
                                </div>



                                <div className="bg-glass-purple flex items-center px-[1rem] py-[1rem] my-[1rem] rounded-lg overflow-hidden">
                                    <div className="bg-gray-500 w-[35px] h-[35px] rounded-full mr-[1rem] flex-shrink-0 flex items-center justify-center text-[17px]">
                                        P
                                    </div>
                                    <div className="text-white flex flex-col">
                                        Python LatinoAmerica
                                        <span className="text-dimWhite">12,345 miembros</span>
                                    </div>
                                </div>


                            </div>

                            {/* <div className="bg-glass px-[2rem] py-[2rem] rounded-lg md:w-full mx-[30px] h-fit mt-[1.5rem] \">

                            </div> */}

                        </section>

                    </section>
                </div>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </>

    );
}

export default Community

