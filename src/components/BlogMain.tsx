import React from 'react'
import BlogCard from '@/components/BlogCard'
import styles from '@/styles'

const BlogMain = () => {
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
    <>
    <h2 className={`${styles.heading2} my-[4rem]`}>Nuestro Blog</h2>
    <div className='flex flex-col gap-[2rem]'>
        {
            blogs.map((blog) => (
                <BlogCard key={blog.id} description={blog.description} title={blog.title} date={blog.date} category={blog.category}/>
            ))
        }
    </div>
    </>
  )
}

export default BlogMain