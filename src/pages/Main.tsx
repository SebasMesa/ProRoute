import React, { useState } from 'react'
import HeroMain from '@/components/HeroMain'
import styles from '@/styles'
import ContinuaCurso from '@/components/ContinuaCurso'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Retos from '@/components/Retos'
import { UserData } from '@/types/'
import Comunidades from '@/components/Comunidades'
import { Community } from 'undraw-react';
import { Link } from 'react-router-dom'
// import Modal from '@/components/Modal'
// import { Sidebar, SidebarBody, SidebarLink } from '../components/ui/SideBarAll';
// import {
//   IconArrowLeft,
//   IconBrandTabler,
//   IconSettings,
//   IconUserBolt,
// } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FaLaptopCode } from "react-icons/fa6";
import { BsChatSquare } from "react-icons/bs";
import { FiBook } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/NavbarMenu";






interface MainProps {
  userData: UserData;
}

// const Main: React.FC<MainProps> = ({ userData }) => {
//   const links = [
//     {
//       label: "Cursos",
//       href: "/cursos",
//       icon: (
//         <FiBook className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0'/>
//       ),
//     },
//     {
//       label: "Blog",
//       href: "/blog",
//       icon: (
//         <BsChatSquare className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//       ),
//     },
//     {
//       label: "Desafios",
//       href: "/retos",
//       icon: (
//         <FaCode className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//       ),
//     },
//     {
//       label: "Comunidad",
//       href: "/community",
//       icon: (
//         <HiUserGroup className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//       ),
//     },

//     {
//       label: "Cerrar Sesion",
//       href: "/logout",
//       icon: (
//         <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
//       ),
//     },
//   ];

//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       className={cn(
//         "rounded-md flex flex-col md:flex-row bg-glass-purple w-full flex-1 overflow-hidden",
//         "h-screen"
//       )}
//     >
//       <Sidebar open={open} setOpen={setOpen} animate={true}>
//         <SidebarBody className="justify-between gap-10">
//           <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
//             <>
//               <Logo />
//             </>
//             <div className="mt-8 flex flex-col gap-2">
//               {links.map((link, idx) => (
//                 <SidebarLink key={idx} link={link} className='bg-glass rounded-br-2xl rounded-tr-sm rounded-tl-2xl rounded-bl-sm ' />
//               ))}
//             </div>
//           </div>
//           <div>
//             <SidebarLink
//               link={{
//                 label: "Tian Mesa",
//                 href: "/account",
//                 icon: (
//                   <img
//                     src="src/assets/user.jpeg"
//                     className="h-7 w-7 flex-shrink-0 rounded-full"
//                     alt="Avatar"
//                   />
//                 ),
//               }}
//             />
//           </div>
//         </SidebarBody>
//       </Sidebar>
//       <Dashboard userData={userData} />
//     </div>
//   );
// }

// const Dashboard: React.FC<MainProps> = ({ userData }) => {
//   return (
//     <div className="rounded-tl-2xl bg-transparent w-full h-full overflow-hidden overflow-y-scroll">
//       <div className='bg-primary w-full relative overflow-hidden'>
//         {/* <div className='absolute w-[250px] h-[1400px] purple__gradient top-[-35rem] rotate-[45deg] z-[10] right-[2rem] hidden md:block'></div> */}
//         <div className='absolute w-[1000px] h-[1020px] blue__gradient top-[60rem] z-[10] opacity-[.2] right-[-10rem]'></div>
//         <div className='absolute w-[1500px] h-[1020px] blue__gradient top-[125rem] z-[10] opacity-[.2!important] left-[-10rem]'></div>
//         <div className='absolute w-[2000px] h-[1020px] purple__gradient top-[200rem] z-[10] opacity-[0.1!important]'></div>



//         {/* ---------------- Componente de Navbar ----------------------- */}


//         {/* <Modal /> */}

//         <AuroraBackground>
//           <div >

//             <main className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
//               <div className={`${styles.boxWidth}`}>
//                 <HeroMain userData={userData} />
//               </div>
//             </main>
//           </div>
//         </AuroraBackground>


//         <section className={`${styles.paddingX} ${styles.flexCenter}] relative z-[15]`}>
//           <div className={`${styles.boxWidth} ${styles.marginY}`}>
//             <ContinuaCurso />
//           </div>
//         </section>


//         <section className={`${styles.paddingX} ${styles.flexCenter} relative z-[10]`}>
//           <div className={`${styles.boxWidth}`}>
//             <div className={`${styles.marginY} bg-glass backdrop-blur-[300px] rounded-2xl md:flex`}>
//               <div className='md:w-[40%] p-[3rem] text-white font-rubik'>
//                 <h3 className='text-dimWhite'>Comunidad</h3>
//                 <h2 className={`${styles.heading2} my-[1rem]`}>Juntos <span className='text-gradient'>Construimos</span> el Futuro</h2>
//                 <p className={`${styles.paragraph} my-[1rem]`}>En ProRoute, creemos en el poder de la colaboración. Nuestro objetivo es apoyar a cada miembro de la comunidad mientras avanzamos juntos en el apasionante mundo de la programación.</p>

//                 {/* <div className='mt-[4rem]'>
//                 <span className='text-[#ffffff95]'>12/05/2023</span>
//               </div> */}

//               </div>

//               <div className='md:w-[60%] md:h-auto rounded-2xl overflow-hidden bg-glass-purple flex justify-center items-center py-[2rem]'>
//                 {/* <Welcome color="blue" size={200} style={{ marginTop: '20px' }} /> */}
//                 {/* <UndrawIllustration name="Welcome" color="green" size={450} style={{ }} /> */}
//                 {/* <WebsiteBuilder /> */}
//                 <Community color="#00f6ff" size={450} style={{}} />
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className={` ${styles.paddingX} ${styles.flexCenter} relative z-[15]`}>
//           <div className={`${styles.boxWidth} ${styles.marginY}`}>
//             <h2 className={`${styles.heading2} text-center text-white`}>Nuestro Blog</h2>
//             <Blog />
//           </div>
//         </section>

//         <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
//           <div className={`${styles.boxWidth} ${styles.marginY}`}>
//             <Retos />
//           </div>
//         </section>

//         <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
//           <div className={`${styles.boxWidth} ${styles.marginY}`}>
//             <Comunidades />
//           </div>
//         </section>


//         <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
//           <div className={`${styles.boxWidth} ${styles.marginY}`}>
//             <Newsletter />
//           </div>
//         </section>


//         <footer>
//           <Footer />
//         </footer>




//       </div>


//     </div>
//   );
// };

// export default Main

// export const Logo = () => {
//   return (
//     <Link
//       to={'/main'}
//       className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20 w-fit"
//     >
//       <div className="h-6 w-7 bg-blue-gradient rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0 ">

//       </div>
//       <motion.span
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="font-medium text-black dark:text-white whitespace-pre"
//       >
//         <h2 className='text-white uppercase text-2xl font-anurati'>Pro<span className='text-secondary'>route</span></h2>
//       </motion.span>
//     </Link>
//   );
// };
// // export const LogoIcon = () => {
// //   return (
// //     <Link
// //       to={'/account'}
// //       className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
// //     >
// //       <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
// //     </Link>
// //   );
// // };

const Main: React.FC<MainProps> = ({ userData }) => {
  return (
        <div className="rounded-tl-2xl bg-transparent w-full h-full overflow-hidden">
      <div className='bg-primary w-full relative overflow-hidden'>
        {/* <div className='absolute w-[250px] h-[1400px] purple__gradient top-[-35rem] rotate-[45deg] z-[10] right-[2rem] hidden md:block'></div> */}
        <div className='absolute w-[1000px] h-[1020px] blue__gradient top-[60rem] z-[10] opacity-[.2] right-[-10rem]'></div>
        <div className='absolute w-[1500px] h-[1020px] blue__gradient top-[125rem] z-[10] opacity-[.2!important] left-[-10rem]'></div>
        <div className='absolute w-[2000px] h-[1020px] purple__gradient top-[200rem] z-[10] opacity-[0.1!important]'></div>


       
            <Navbar className='z-[1000]'/>          


        {/* ---------------- Componente de Navbar ----------------------- */}


        {/* <Modal /> */}

        <AuroraBackground>
          <div >

            <main className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <HeroMain userData={userData} />
              </div>
            </main>
          </div>
        </AuroraBackground>


        <section className={`${styles.paddingX} ${styles.flexCenter}] relative z-[15]`}>
          <div className={`${styles.boxWidth} ${styles.marginY}`}>
            <ContinuaCurso />
          </div>
        </section>


        <section className={`${styles.paddingX} ${styles.flexCenter} relative z-[10]`}>
          <div className={`${styles.boxWidth}`}>
            <div className={`${styles.marginY} bg-glass backdrop-blur-[300px] rounded-2xl md:flex`}>
              <div className='md:w-[40%] p-[3rem] text-white font-rubik'>
                <h3 className='text-dimWhite'>Comunidad</h3>
                <h2 className={`${styles.heading2} my-[1rem]`}>Juntos <span className='text-gradient'>Construimos</span> el Futuro</h2>
                <p className={`${styles.paragraph} my-[1rem]`}>En ProRoute, creemos en el poder de la colaboración. Nuestro objetivo es apoyar a cada miembro de la comunidad mientras avanzamos juntos en el apasionante mundo de la programación.</p>

                {/* <div className='mt-[4rem]'>
                <span className='text-[#ffffff95]'>12/05/2023</span>
              </div> */}

              </div>

              <div className='md:w-[60%] md:h-auto rounded-2xl overflow-hidden bg-glass-purple flex justify-center items-center py-[2rem]'>
                {/* <Welcome color="blue" size={200} style={{ marginTop: '20px' }} /> */}
                {/* <UndrawIllustration name="Welcome" color="green" size={450} style={{ }} /> */}
                {/* <WebsiteBuilder /> */}
                <Community color="#00f6ff" size={450} style={{}} />
              </div>
            </div>
          </div>
        </section>

        <section className={` ${styles.paddingX} ${styles.flexCenter} relative z-[15]`}>
          <div className={`${styles.boxWidth} ${styles.marginY}`}>
            <h2 className={`${styles.heading2} text-center text-white`}>Nuestro Blog</h2>
            <Blog />
          </div>
        </section>

        <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.marginY}`}>
            <Retos />
          </div>
        </section>

        <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.marginY}`}>
            <Comunidades />
          </div>
        </section>


        <section className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.marginY}`}>
            <Newsletter />
          </div>
        </section>


        <footer>
          <Footer />
        </footer>




      </div>


    </div>

  )
}

export default Main

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Cursos">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blog">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Comunidades">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Desafios">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Cuenta" >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>


      </Menu>
    </div>
  );
}