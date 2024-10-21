import React from "react";
import styles from "@/styles";
import Navbar from "@/components/ui/Navbar";
import Banner from "@/components/ui/Banner";
import Footer from "@/components/ui/Footer";
import linksMain from "@/data/linksMain.json";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <header
        className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[1001] bg-primary top-0`}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar links={linksMain.links} main={true} typeOfLink="Link" />
        </div>
      </header>

      {/* <main className={`bg-app ${styles.paddingX} ${styles.flexCenter} relative`}>
                <div className={`${styles.marginY}`}>
                    <Banner title='Cursos' />
                </div>
            </main>
 */}

      <div
        className={` ${styles.paddingX} ${styles.flexCenter} relative z-[115] text-white mt-[5.5rem]`}
      >
        <div className={`${styles.boxWidth} ${styles.marginY}`}>
          <p className={`${styles.heading2} font-semibold`}>
            Introduccion al Desarrollo Web
          </p>

          <div className="flex items-center font-rubik mt-[2rem]">
            <div className="bg-gray-500 w-[45px] h-[45px] rounded-full mr-[1rem] flex-shrink-0 items-center justify-center text-[17px] hidden md:flex ">
              S
            </div>

            <div>
              <Link
                to={"/account"}
                className="text-dimWhite gap-[.3rem] hover:underline"
              >
                <span className="text-gradient text-[18px] font-semibold">
                  Luis Fernando
                </span>
                <p className="text-[18px]">Mentor de ProRoute</p>
              </Link>
            </div>
          </div>

          <div className="bg-glass px-[1rem] py-[1rem] rounded-lg mt-[3rem] img h-full ">
            <p className={`${styles.paragraph}`}>
              Este es un curso que incluye Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Cumque, eveniet? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Cum eligendi adipisci quod,
              nisi reprehenderit blanditiis omnis unde accusamus dolorem
              aperiam?
            </p>
          </div>
        </div>
      </div>

      <main
        className={`${styles.paddingX} ${styles.flexCenter} relative pb-[5rem]`}
      >
        <div
          className={`${styles.marginY} ${styles.boxWidth} ${styles.paragraph}`}
        ></div>
      </main>

      <footer className={`relative z-[115] mt-[2rem]`}>
        <Footer />
      </footer>
    </>
  );
};

export default Course;
