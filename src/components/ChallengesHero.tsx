import React from 'react'
import RetosCard from '@/components/RetosCard'
import styles from '@/styles'

const ChallengesHero = () => {
  const items = [
    { id: 1, titulo: 'Calculadora Básica', descripcion: 'Crea una calculadora básica que pueda realizar las operaciones aritméticas fundamentales', difficulty: 'Fácil', date: '10/08/2024', puntaje: 10 },

    { id: 2, titulo: 'Juego del Ahorcado', descripcion: 'Desarrolla un juego del ahorcado donde el usuario pueda adivinar una palabra letra por letra. ', difficulty: 'Medio', date: '10/08/2024', puntaje: 20 },

    { id: 3, titulo: 'Ordenamiento de Números', descripcion: 'Implementa diferentes algoritmos de ordenamiento (burbuja, selección, inserción) ', difficulty: 'Medio', date: '10/08/2024', puntaje: 25 },

    { id: 4, titulo: 'Generador de Contraseñas Seguras', descripcion: 'Diseña un generador de contraseñas que permita a los usuarios crear contraseñas seguras.', difficulty: 'Fácil', date: '10/08/2024', puntaje: 15 },

    { id: 5, titulo: 'Conversor de Monedas', descripcion: 'Crea una aplicación que permita convertir entre diferentes monedas utilizando tasas de cambio actuales.', difficulty: 'Difícil', date: '10/08/2024', puntaje: 30 },
  ];

  return (
    <>
      <h2 className={`${styles.heading2} my-[2.5rem]`}>Retos de programacion</h2>

      <div className='grid md:grid-cols-3 gap-[2rem]'>
        {items.map(item => <RetosCard key={item.id} title={item.titulo} id={item.id} description={item.descripcion} difficulty={item.difficulty} date={item.date} puntaje={item.puntaje} classNameDificultad='flex-col' />)}
      </div>
    </>
  )
}

export default ChallengesHero