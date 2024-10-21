import React from 'react'
import styles from '@/styles'
import { Link } from 'react-router-dom'
import { LuBook } from "react-icons/lu";
import { TbCodeDots } from "react-icons/tb";
import { LuUser } from "react-icons/lu";


const FundamentalsMain = () => {
    return (
        <div>
            <p className={`${styles.heading2} font-semibold`}>
            Introducción a la Programación con Python
            </p>
            <div className="flex items-center mt-[2rem]">
                <div className="bg-gray-500 w-[45px] h-[45px] rounded-full mr-[1rem] flex-shrink-0 items-center justify-center text-[17px] hidden md:flex ">
                    S
                </div>

                <div>
                    <Link
                        to={"/account"}
                        className="text-dimWhite gap-[.3rem] hover:underline"
                    >
                        <span className="text-gradient text-[18px] font-semibold">
                            Sebastian Mesa Garcia
                        </span>
                        <p className="text-[18px]">Mentor y CEO de ProRoute</p>
                    </Link>
                </div>
            </div>


            <div className="flex mt-[3rem] ">

                <div
                    className={`${styles.paragraph} bg-glass px-[3rem] py-[1rem] rounded-lg col-span-2 relative`}
                >
                    <div className='absolute px-[1rem] top-[-15%] right-0 bg-black-gradient rounded-lg z-[999] text-white'>
                        <p>Resumen</p>
                    </div>


                    <p>Este es un curso completo que introduce a los estudiantes a la programación desde cero, guiándolos paso a paso por cada concepto fundamental en Python. Puedes expandirlo aún más con temas avanzados como la programación orientada a objetos (POO), manejo de excepciones, y módulos avanzados. Cada capítulo incluye explicaciones detalladas, ejemplos prácticos, y ejercicios para que el alumno practique y refuerce lo aprendido.</p>
                </div>
            </div>


            <div className="flex items-center gap-[1rem] mt-[1rem]">
                <div className="px-3 py-[.5rem] bg-black-gradient rounded-lg">
                    JavaScript
                </div>

                <div className="px-3 py-[.5rem] bg-black-gradient rounded-lg">
                    ES6+
                </div>

                <div className="px-3 py-[.5rem] bg-black-gradient rounded-lg w-fit">
                    Programación Web
                </div>
            </div>

        </div>
    )
}

export default FundamentalsMain