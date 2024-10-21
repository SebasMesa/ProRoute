import React, { useEffect, useState } from 'react'
import BlogCard from '@/components/ui/BlogCard'
import styles from '@/styles'
import Button from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { ThoughtProcess, CareerDevelopment } from 'undraw-react'
import { collection, getDocs, getFirestore, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase/firebase'

type Props = {
  id?: number
  title: string
  description: string
  date: string
  category: string
  image?: string | JSX.Element;
}

interface Item {
  id: string;
  titulo: string;
  descripcion: string;
}


const firestore = getFirestore();


const Blog = () => {

  const [blogs, setBlogs] = useState<Props[]>([]);

  useEffect(() => {
    const blogsRef = collection(firestore, "blog");

    getDocs(blogsRef)
      .then((resp) => {
        const blogsArray = resp.docs.map((doc) => ({
          ...doc.data(), id: doc.id
        }));
        setBlogs(blogsArray); // Almacena los blogs en el estado
      })
      .catch((error) => {
        console.error("Error al obtener los documentos: ", error);
      });
  }, []);
  // const blogs = [
  //   {
  //     id: 1,
  //     title: 'La Importancia del Pensamiento Lógico en la Programación',
  //     description: 'El pensamiento lógico es clave para resolver problemas de programación. Descubre cómo esta habilidad te ayuda a escribir código más eficiente y efectivo.',
  //     date: 'Agosto 12, 2024',
  //     category: 'Insight',
  //     // image: <ThoughtProcess size={'200px'} color='#00f6ff'/>,
  //   },
  //   {
  //     id: 2,
  //     title: 'Introducción a las Estructuras de Datos: El Camino hacia la Eficiencia',
  //     description: 'Las estructuras de datos son esenciales para optimizar tu código. Aprende sobre las más comunes y cómo pueden mejorar tus proyectos.',
  //     date: 'Agosto 12, 2024',
  //     category: 'Insight',
  //     // image: <CareerDevelopment size={'200px'} />,
  //   },
  //   {
  //     id: 3,
  //     title: 'Desarrollo Web Full Stack: Un Recorrido Completo por el Frontend y Backend',
  //     description: 'Ser Full Stack significa manejar tanto frontend como backend. Conoce las herramientas y lenguajes necesarios para crear aplicaciones completas.',
  //     date: 'Agosto 8, 2024',
  //     category: 'Insight',
  //     // image: <ThoughtProcess size={'200px'} />,
  //   },
  // ]


  return (
    <>
      <div className={`${styles.marginY} grid md:grid-cols-3 gap-[2rem] `}>

        {
          blogs.map((blog) => (
            <Link to={`{/blog?id=${blog.id}}`}>
            <BlogCard key={blog.id} description={blog.description} title={blog.title} date={blog.date} category={blog.category} />
            </Link>
          ))
        }

      </div>

      <Link to={'/blog'}>
        <Button title='Ver más'></Button>
      </Link>

    </>
  )
}

export default Blog