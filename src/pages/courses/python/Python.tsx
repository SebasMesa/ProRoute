import React from "react";
import styles from "@/styles";
import Navbar from "@/components/ui/Navbar";
import Banner from "@/components/ui/Banner";
import Footer from "@/components/ui/Footer";
import linksMain from "@/data/linksMain.json";
import CourseIntroductionMain from "@/components/courses/CourseIntroductionMain";
import CoursesChapters from "@/components/courses/CoursesChapters";
import PythonMain from "./PythonMain";


const Python = () => {
  const chapters = [
    {
      title: "Capítulo 1",
      subtitle: "Introducción a la Programación",
      sections: ["¿Qué es la programación?", "¿Qué es un lenguaje de programación?", "Introducción a Python", "Instalación y Configuración", "Escribiendo tu primer programa", "Ejercicio práctico"]
    },
    {
      title: "Capitulo 2",
      subtitle: "Variables y Tipos de Datos",
      sections: ["¿Qué es una variable?", "Tipos de Datos", "Operaciones básicas con variables", "Ejercicio práctico"]
    },
    {
      title: "Capitulo 3",
      subtitle: "Estructuras de Control",
      sections: ["Condicionales", "Bucles", "Ejercicio práctico"]
    },
    {
      title: "Capitulo 4",
      subtitle: "Funciones",
      sections: ["¿Qué es una función?", "Funciones con parámetros", "Funciones con retorno de valores", "Ejercicio práctico"]
    },
    {
      title: "Capitulo 5",
      subtitle: "Listas y Bucles",
      sections: ["¿Qué es una lista? ", "Recorriendo listas con bucles", "Ejercicio práctico"]
    },
    {
        title: "Capitulo 6",
        subtitle: "Diccionarios y Bucles",
        sections: ["¿Qué es un diccionario?", "Recorriendo diccionarios con bucles", "Ejercicio práctico"]
    },
    {
        title: "Capitulo 7",
        subtitle: "Manejo de Archivos",
        sections: ["Abrir y leer archivos", "Escribir en archivos", "Ejercicio práctico"]
      }
  
  
  ];

  return (
    <>
      <header className={`${styles.paddingX} ${styles.flexStart} fixed w-full z-[1001] bg-primary top-0`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar links={linksMain.links} main={true} typeOfLink="Link" />
        </div>
      </header>

      <main className={` ${styles.paddingX} ${styles.flexCenter} relative z-[115] text-white mt-[5.5rem] font-rubik`}>
        <div className={`${styles.boxWidth} ${styles.marginY} grid grid-cols-[1fr] md:grid-cols-[3fr_1fr] gap-[2rem]`}>
          <PythonMain/>


          <div className="">
            <h3 className={`${styles.heading3} font-semibold mb-[2rem]`}>Capítulos</h3>
            <div className="rounded-lg overflow-hidden sticky top-[7rem] h-fit">
              {chapters.map((chapter, index) => (
                <CoursesChapters key={index} title={chapter.title} items={chapter} />
              ))}
            </div>
          </div>

          
        </div>
      </main>

      <footer className={`relative z-[115] mt-[2rem]`}>
        <Footer />
      </footer>
    </>
  );
};

export default Python;
