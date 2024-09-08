import React, { useState } from "react";
import styles from '@/styles'
import CommunityChats from '@/components/community/CommunityChats'
import Navbar from '@/components/ui/Navbar'
import Banner from '@/components/ui/Banner'
import Footer from '@/components/ui/Footer'
import linksMain from '@/data/linksMain.json'




const Community = () => {


    return (

        <>
            <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[101] bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar links={linksMain.links} main={true} typeOfLink='Link' />
                </div>
            </header>


            <section className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative`}>
                <div className={`${styles.marginY}`}>
                    <Banner title='Comunidad' />
                </div>
            </section>

            <main className={`${styles.paddingX} ${styles.flexCenter} relative`}>
                <div className={`${styles.marginY} ${styles.boxWidth}`}>
                    <section className="grid md:grid-cols-[2.5fr_1fr] gap-[2rem]">
                        <div>
                            <CommunityChats />
                        </div>

                        <div className="bg-glass px-[2rem] py-[2rem] rounded-lg md:w-full mx-[30px] h-fit sticky top-[1.5rem] left-0 box-shadow">
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

