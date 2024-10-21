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

  const blogsFav = [
    {
      id: 1,
      title: 'Introducción a los Algoritmos: Fundamentos Esenciales',
      description: 'Los algoritmos son la base de la programación. Aprende cómo funcionan y cómo construir algoritmos efectivos para resolver problemas complejos.',
      date: 'Agosto 20, 2024',
      category: 'Fundamentos',
      // image: <AlgorithmBasics size={'200px'} color='#00ff76'/>
    },
    {
      id: 2,
      title: 'Optimización de Código: Mejores Prácticas',
      description: 'Descubre técnicas y estrategias para mejorar la eficiencia de tu código y reducir el tiempo de ejecución en tus proyectos.',
      date: 'Septiembre 1, 2024',
      category: 'Consejos',
      // image: <CodeOptimization size={'200px'} color='#ff0050'/>
    },
    {
      id: 3,
      title: 'Las Mejores Herramientas para Desarrolladores Principiantes',
      description: 'Una guía completa de las herramientas esenciales que todo desarrollador principiante debería dominar para mejorar su flujo de trabajo.',
      date: 'Septiembre 10, 2024',
      category: 'Guía',
      // image: <DeveloperTools size={'200px'} color='#f0e100'/>
    },
    // {
    //   id: 4,
    //   title: 'Cómo Colaborar en Equipos de Desarrollo de Software',
    //   description: 'Aprende las claves para trabajar de manera efectiva en equipos de desarrollo y cómo aprovechar herramientas de colaboración.',
    //   date: 'Septiembre 18, 2024',
    //   category: 'Colaboración',
    //   image: <Teamwork size={'200px'} color='#ff9800'/>
    // },
    // {
    //   id: 5,
    //   title: 'Tendencias Futuras en el Desarrollo de Software',
    //   description: 'Explora las tecnologías emergentes que están transformando la industria del desarrollo de software y lo que nos depara el futuro.',
    //   date: 'Septiembre 25, 2024',
    //   category: 'Tendencias',
    //   image: <FutureTrends size={'200px'} color='#76baff'/>
    // }
  ]


  return (
    <>
      <div className='grid md:grid-cols-3 gap-[2.5rem]'>
        <div className='bg-glass text-white transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 mb-[3rem] bg-cover bg-center bg-no-repeat bg-[url("https://www.telemundo.com/sites/nbcutelemundo/files/styles/nbcnews-fp-1200-630/public/images/promo/article/2017/11/09/ninos-armando-un-rompecabezas.jpg?ramen_itok=iqwQftIcTf")] items-end before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:to-transparent before:z-5 flex md:col-span-2 h-auto'>

          <div className={`p-[2rem] font-rubik relative z-15 `}>
            <p className='items-center flex flex-col bg-glass rounded-lg overflow-hidden p-2 md:flex-row md:w-fit md:bg-transparent'>
              <span className='text-gradient'>CiberSeguridad</span> <span className='hidden md:flex'>•</span> <span className='md:bg-glass rounded px-[0.5rem] py-[0.2rem]'>Septiembre 9, 2024</span>
              </p>

            <h2 className={`font-poppins text-[1.3rem] my-[1.3rem]`}>La Importancia del Pensamiento Lógico en la Programación</h2>

            <p className={`${styles.paragraph} w-[70%]`}>El pensamiento lógico es clave para resolver problemas de programación. Descubre cómo esta habilidad te ayuda a escribir código más eficiente y efectivo.</p>
          </div>
        </div>

        <div className='flex flex-col gap-[1rem] ss:mb-[3rem]'>
          {
            blogsFav.map((blog) => (
              <div className='bg-glass px-[1rem] py-[1rem] rounded-lg' key={blog.id}>
                <div className={`font-rubik text-white`}>
                  <p><span className='text-gradient'>{blog.category}</span> • <span className='bg-glass rounded px-[0.5rem] py-[0.2rem] text-dimWhite'>{blog.date}</span></p>

                  <h2 className={`font-poppins text-[1.3rem] mt-[1.3rem] text-white`}>{blog.title}</h2>

                  <p className={`${styles.paragraph}`}></p>
                </div>
              </div>
            ))
          }
        </div>


      </div>

      <div className='grid md:grid-cols-3 gap-[2rem] mt-[5rem] md:mt-0'>
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