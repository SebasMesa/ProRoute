import React, { createContext, useContext, useState } from 'react';

// Definimos el tipo para el curso
interface Course {
  id: string;
  name: string;
  // Puedes agregar más propiedades según tus necesidades
}

// Definimos el tipo del contexto
interface CourseContextType {
  courses: Course[];
  enrollInCourse: (course: Course) => void;
  // Puedes agregar más funciones si es necesario
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([]); // Inicializa el estado de cursos

  const enrollInCourse = (course: Course) => {
    setCourses((prevCourses) => [...prevCourses, course]);
  };

  return (
    <CourseContext.Provider value={{ courses, enrollInCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourseContext must be used within a CourseProvider");
  }
  return context;
};
