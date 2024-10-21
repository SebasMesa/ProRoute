import React from 'react'
import styles from '@/styles'
import {Link} from 'react-router-dom'
import { LuBook } from "react-icons/lu";
import { TbCodeDots } from "react-icons/tb";
import { LuUser } from "react-icons/lu";
import CodeBlock from '@/components/ui/CodeBlock';


const DatabasesMain = () => {

    const exampleCode = `
    import React, { useState } from 'react';

    const Example = () => {
      const [count, setCount] = useState(0);
      
      return (
        <div>
          <p>Contador: {count}</p>
          <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
      );
    };

    export default Example;
  `;


    return (
        <div>
            <p className={`${styles.heading2} font-semibold`}>
                Databases 
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

            <div className="flex mt-[3rem]">
                <div
                    className={`${styles.paragraph} bg-glass px-[3rem] py-[2rem] rounded-lg col-span-2`}
                >
                    <h3 className={`${styles.heading3}`}>Información del Curso</h3>
                    <ul className="mt-[2rem]">
                        <li className="flex items-center">
                            <LuUser size={25} className="mr-[1rem] text-secondary" />
                            <p className="text-[19px]">
                                <span className="font-semibold text-white">
                                    Instructor:
                                </span>{" "}
                                Luis Fernando Velasquez
                            </p>
                        </li>

                        <li className="flex items-center mt-[.5rem]">
                            <LuBook size={25} className="mr-[1rem] text-secondary" />
                            <p className="text-[19px]">
                                <span className="font-semibold text-white">10</span>{" "}
                                Capítulos
                            </p>
                        </li>

                        <li className="flex items-center mt-[.5rem]">
                            <TbCodeDots
                                size={25}
                                className="mr-[1rem] text-secondary"
                            />
                            <p className="text-[19px]">
                                <span className="font-semibold text-white">2</span>{" "}
                                Pruebas Interactivas
                            </p>
                        </li>

                        <li className="flex items-center mt-[1rem]">
                            <p className="text-[19px] w-[80%]">
                                Este es un curso que incluye Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit. Cumque, eveniet? Lorem
                                ipsum dolor, sit amet consectetur adipisicing elit. Cum
                                eligendi adipisci ..
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        
            

            <CodeBlock code={exampleCode}/>


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

export default DatabasesMain