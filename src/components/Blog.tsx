import React from 'react'
import BlogCard from './BlogCard'
import styles from '../styles'
import Button from './Button'
import { Link } from 'react-router-dom'
import { ThoughtProcess, CareerDevelopment } from 'undraw-react'

type Props = {
  id?: number
  title: string
  description: string
  date: string
  category: string
  image?: string | JSX.Element;
}

const Blog = () => {

  const blogs = [
    {
      id: 1,
      title: 'La Importancia del Pensamiento Lógico en la Programación',
      description: 'El pensamiento lógico es clave para resolver problemas de programación. Descubre cómo esta habilidad te ayuda a escribir código más eficiente y efectivo.',
      date: 'Agosto 12, 2024',
      category: 'Insight',
      // image: <ThoughtProcess size={'200px'} color='#00f6ff'/>,
    },
    {
      id: 2,
      title: 'Introducción a las Estructuras de Datos: El Camino hacia la Eficiencia',
      description: 'Las estructuras de datos son esenciales para optimizar tu código. Aprende sobre las más comunes y cómo pueden mejorar tus proyectos.',
      date: 'Agosto 12, 2024',
      category: 'Insight',
      // image: <CareerDevelopment size={'200px'} />,
    },
    {
      id: 3,
      title: 'Desarrollo Web Full Stack: Un Recorrido Completo por el Frontend y Backend',
      description: 'Ser Full Stack significa manejar tanto frontend como backend. Conoce las herramientas y lenguajes necesarios para crear aplicaciones completas.',
      date: 'Agosto 8, 2024',
      category: 'Insight',
      // image: <ThoughtProcess size={'200px'} />,
    },
  ]


  return (
    <div className={`${styles.marginY} grid md:grid-cols-3 gap-[2rem] `}>

      {
        blogs.map((blog) => (
          <BlogCard key={blog.id} image={blog.image} description={blog.description} title={blog.title} date={blog.date} category={blog.category}/>
        ))
      }

      

      <Link to={'/blog'}>
        <Button title='Ver más'></Button>
      </Link>
    </div>
  )
}

export default Blog