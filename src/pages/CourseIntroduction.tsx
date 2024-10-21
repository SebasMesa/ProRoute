import React, {useState, useEffect} from "react";
import styles from "@/styles";
import Navbar from "@/components/ui/Navbar";
import Banner from "@/components/ui/Banner";
import Footer from "@/components/ui/Footer";
import linksMain from "@/data/linksMain.json";
import CourseIntroductionMain from "@/components/courses/CourseIntroductionMain";
import CoursesChapters from "@/components/courses/CoursesChapters";


const CourseIntroduction = () => {
  const chapters = [
    {
      title: "Capitulo 1",
      subtitle: "Introduccion al Desarrollo Web",
      sections: ["Introduccion al curso", "Fundamentos", "Tipos de datos", "Variables", "Funciones", "Operaciones"]
    },
    {
      title: "Capitulo 2",
      subtitle: "Buenas practicas",
      sections: ["Introduccion al curso", "Fundamentos", "Tipos de datos", "Variables", "Funciones", "Operaciones"]
    },
    {
      title: "Capitulo 3",
      subtitle: "Buenas practicas",
      sections: ["Introduccion al curso", "Fundamentos", "Tipos de datos", "Variables", "Funciones", "Operaciones"]
    },
    {
      title: "Capitulo 4",
      subtitle: "Buenas practicas",
      sections: ["Introduccion al curso", "Fundamentos", "Tipos de datos", "Variables", "Funciones", "Operaciones"]
    },
    {
      title: "Capitulo 5",
      subtitle: "Buenas practicas",
      sections: ["Introduccion al curso", "Fundamentos", "Tipos de datos", "Variables", "Funciones", "Operaciones"]
    }
  ];

  const [course, setCourse] = useState<string>('');
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);
  const [courseInfo, setCourseInfo] = useState<CourseInfo | null>(null);


  return (
    <>
      <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[1001] bg-primary top-0`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar links={linksMain.links} main={true} typeOfLink="Link" />
        </div>
      </header>

      <main className={` ${styles.paddingX} ${styles.flexCenter} relative z-[115] text-white mt-[5.5rem] font-rubik`}>
        <div className={`${styles.boxWidth} ${styles.marginY} flex gap-[2rem]`}>
          <CourseIntroductionMain />


          {/* <div className="w-[45%]">
            <h3 className={`${styles.heading3} font-semibold`}>Capítulos</h3>
            <div className="rounded-lg overflow-hidden">
              {chapters.map((chapter, index) => (
                <CoursesChapters key={index} title={chapter.title} items={chapter} />
              ))}
            </div>
          </div> */}

          
        </div>
      </main>

      <footer className={`relative z-[115] mt-[2rem]`}>
        <Footer />
      </footer>
    </>
  );
};

export default CourseIntroduction;
