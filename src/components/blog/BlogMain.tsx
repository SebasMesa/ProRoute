import React from 'react'
import BlogCard from '@/components/ui/BlogCard'
import styles from '@/styles'
import { BsStarFill } from "react-icons/bs";

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
      <div className='grid grid-cols-3 gap-[2.5rem]'>
        <div className='bg-glass text-white transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 mb-[3rem] bg-cover bg-center bg-no-repeat bg-[url("https://www.telemundo.com/sites/nbcutelemundo/files/styles/nbcnews-fp-1200-630/public/images/promo/article/2017/11/09/ninos-armando-un-rompecabezas.jpg?ramen_itok=iqwQftIcTf")] h-[50vh] flex items-end before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:to-transparent before:z-5 grid col-span-2'>
          <div className={`p-[2rem] font-rubik relative z-15 `}>
            <p><span className='text-gradient'>CiberSeguridad</span> • <span className='bg-glass rounded px-[0.5rem] py-[0.2rem]'>Septiembre 9, 2024</span></p>

            <h2 className={`font-poppins text-[1.3rem] my-[1.3rem]`}>La Importancia del Pensamiento Lógico en la Programación</h2>

            <p className={`${styles.paragraph} w-[70%]`}>El pensamiento lógico es clave para resolver problemas de programación. Descubre cómo esta habilidad te ayuda a escribir código más eficiente y efectivo.</p>
          </div>
        </div>

        <div className=''>
            <h3 className={`font-rubik ${styles.heading2} flex items-center`}><BsStarFill size={30} className='mr-[1rem]'/> Los favoritos</h3>

            <div>
              
            </div>
        </div>

      </div>

      <div className='grid grid-cols-3 gap-[2rem]'>
        {
          blogs.map((blog) => (
            <BlogCard key={blog.id} description={blog.description} title={blog.title} date={blog.date} category={blog.category} />
          ))
        }
      </div>
    </>
  )
}

export default BlogMain