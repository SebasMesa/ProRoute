import React, { useState, useEffect } from 'react';
import styles from '@/styles';
import { Link, Navigate } from 'react-router-dom';
import { LuBook } from 'react-icons/lu';
import { TbCodeDots } from 'react-icons/tb';
import { LuUser } from 'react-icons/lu';
import { useCourseContext } from '@/context/courseContext';

interface CourseInfo {
  title: string;
  instructor: string;
  chapters: number;
  tests: number;
  description: string;
  tags: string[];
}

const CourseIntroductionMain: React.FC = () => {
  const { enrollInCourse } = useCourseContext();
  const [course, setCourse] = useState<string>('');
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);
  const [courseInfo, setCourseInfo] = useState<CourseInfo | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const courseParam = params.get('course');

    if (!courseParam) {
      setShouldRedirect(true);
    } else {
      const paramLower = courseParam.toLowerCase();
      setCourse(paramLower);
      switch (paramLower) {
        case 'fundamentals':
          setCourseInfo({
            title: 'Fundamentos de la Programación',
            instructor: 'Luis Fernando Velasquez',
            chapters: 12,
            tests: 3,
            description: 'Este curso cubre los conceptos básicos de programación, estructuras de control y tipos de datos...',
            tags: ['Programación', 'Fundamentos', 'Lógica de Programación'],
          });
          break;
        case 'python':
          setCourseInfo({
            title: 'Python para Principiantes',
            instructor: 'Luis Fernando Velasquez',
            chapters: 15,
            tests: 2,
            description: 'Aprende los fundamentos de Python, el lenguaje más versátil y demandado...',
            tags: ['Python', 'Desarrollo Backend', 'Análisis de Datos'],
          });
          break;
        case 'database':
          setCourseInfo({
            title: 'Introducción a las Bases de Datos',
            instructor: 'Luis Fernando Velasquez',
            chapters: 8,
            tests: 1,
            description: 'Este curso te enseña los conceptos fundamentales sobre bases de datos relacionales y SQL...',
            tags: ['Bases de Datos', 'SQL', 'Modelado de Datos'],
          });
          break;
        default:
          setCourseInfo(null);
          break;
      }
    }
  }, []);

  if (shouldRedirect) {
    return <Navigate to="/" />;
  }

  if (!courseInfo) {
    return <p>No se ha encontrado información sobre este curso.</p>;
  }

  const handleEnroll = () => {
    if (courseInfo) {
      enrollInCourse({ id: course, name: courseInfo.title });
      alert(`Te has inscrito en el curso ${courseInfo.title}`);
    }
  };

  return (
    <div>
      <p className={`${styles.heading2} font-semibold`}>{courseInfo.title}</p>

      <div className="flex items-center mt-[2rem]">
        <div className="bg-gray-500 w-[45px] h-[45px] rounded-full mr-[1rem] flex-shrink-0 items-center justify-center text-[17px] hidden md:flex ">
          S
        </div>

        <div>
          <Link to={"/account"} className="text-dimWhite gap-[.3rem] hover:underline">
            <span className="text-gradient text-[18px] font-semibold">
              {courseInfo.instructor}
            </span>
            <p className="text-[18px]">Mentor de ProRoute</p>
          </Link>
        </div>
      </div>

      <div className="flex mt-[3rem]">
        <div className={`${styles.paragraph} bg-glass px-[3rem] py-[2rem] rounded-lg col-span-2`}>
          <h3 className={`${styles.heading3}`}>Información del Curso</h3>
          <ul className="mt-[2rem]">
            <li className="flex items-center">
              <LuUser size={25} className="mr-[1rem] text-secondary" />
              <p className="text-[19px]">
                <span className="font-semibold text-white">Instructor:</span>{' '}
                {courseInfo.instructor}
              </p>
            </li>

            <li className="flex items-center mt-[.5rem]">
              <LuBook size={25} className="mr-[1rem] text-secondary" />
              <p className="text-[19px]">
                <span className="font-semibold text-white">{courseInfo.chapters}</span>{' '}
                Capítulos
              </p>
            </li>

            <li className="flex items-center mt-[.5rem]">
              <TbCodeDots size={25} className="mr-[1rem] text-secondary" />
              <p className="text-[19px]">
                <span className="font-semibold text-white">{courseInfo.tests}</span>{' '}
                Pruebas Interactivas
              </p>
            </li>

            <li className="flex items-center mt-[1rem]">
              <p className="text-[19px] w-[80%]">{courseInfo.description}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-[1rem] mt-[1rem]">
        {courseInfo.tags.map((tag, index) => (
          <div key={index} className="px-3 py-[.5rem] bg-black-gradient rounded-lg">
            {tag}
          </div>
        ))}
      </div>

      <div className="mt-[2rem]">
        <button
          onClick={handleEnroll}
          className="px-5 py-2 bg-blue-500 text-white rounded-lg"
        >
          Iniciar Curso
        </button>
      </div>
    </div>
  );
};

export default CourseIntroductionMain;
