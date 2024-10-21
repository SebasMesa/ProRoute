import React from 'react'
import styles from '@/styles'
import  FaqsToggle from '@/components/ui/FaqsToggle'


const Faqs = () => {

  const faqProRoute = [
    {
      question: "¿Qué es ProRoute?",
      answer: "ProRoute es una plataforma diseñada para ayudarte a aprender programación de manera efectiva y estructurada, con retos, comunidades y recursos que potencian tu aprendizaje."
    },
    // {
    //   question: "¿Es ProRoute adecuado para principiantes?",
    //   answer: "Sí, ProRoute está diseñado tanto para principiantes como para programadores con experiencia. Ofrecemos contenido que se adapta a todos los niveles de habilidad."
    // },
    {
      question: "¿Cómo funcionan los retos semanales?",
      answer: "Cada semana lanzamos un reto de programación para que pongas en práctica lo que has aprendido. Puedes resolverlo y compartir tus soluciones con la comunidad para obtener feedback."
    },
    {
      question: "¿ProRoute es gratuito?",
      answer: "ProRoute ofrece una versión gratuita con acceso limitado a ciertos contenidos y funcionalidades. También contamos con una suscripción premium que desbloquea todos los recursos y herramientas."
    },
    {
      question: "¿Qué beneficios tiene unirme a la comunidad de ProRoute?",
      answer: "Unirte a la comunidad te permite conectarte con otros programadores, resolver dudas, participar en proyectos colaborativos y recibir apoyo en tu aprendizaje."
    },
    // {
    //   question: "¿Qué lenguajes de programación puedo aprender en ProRoute?",
    //   answer: "ProRoute ofrece cursos y retos en lenguajes como Python, JavaScript, Java, y más. Constantemente estamos ampliando nuestro catálogo de lenguajes."
    // },
    {
      question: "¿Puedo crear mis propios cursos en ProRoute?",
      answer: "Sí, los usuarios avanzados pueden colaborar creando y compartiendo sus propios cursos y retos para ayudar a otros miembros de la comunidad."
    },
    // {
    //   question: "¿Cómo puedo seguir mi progreso?",
    //   answer: "ProRoute tiene un sistema de seguimiento que te permite ver tu progreso en los cursos y retos, así como logros que desbloqueas conforme avanzas."
    // },
    // {
    //   question: "¿Qué sucede si me quedo atascado en un reto?",
    //   answer: "Puedes pedir ayuda en la comunidad, revisar soluciones de otros usuarios o acceder a recursos adicionales para ayudarte a superar los retos más difíciles."
    // },
    // {
    //   question: "¿Hay algún certificado al completar los cursos?",
    //   answer: "Sí, al completar ciertos cursos y niveles, recibirás certificados que puedes agregar a tu portafolio profesional o compartir en redes."
    // }
  ];
  

  return (
        <div className={`${styles.paddingY} flex-col w-full`}>
          <h2 className={`${styles.heading2} text-center mb-10`}>Preguntas Frecuentes</h2>

          {
          faqProRoute.map((faq) => (
            <FaqsToggle key={faq.question} title={faq.question} content={faq.answer} className='bg-glass border-0'/>
          ))
        }

        </div>
    )
}

export default Faqs