import { useEffect, useState } from 'react'
import Carousel from 'next-elastic-carousel';
import Card from './ui/RetosCard'
import styles from '../styles';


const Retos = () => {

const items = [
    { id: 1, titulo: 'Calculadora Básica', descripcion: 'Crea una calculadora básica que pueda realizar las operaciones aritméticas fundamentales: suma, resta, multiplicación y división. La interfaz debe ser intuitiva y permitir al usuario ingresar números y seleccionar la operación a realizar.', difficulty: 'Fácil', date: '10/08/2024', puntaje: 10  },

    { id: 2, titulo: 'Juego del Ahorcado', descripcion: 'Desarrolla un juego del ahorcado donde el usuario pueda adivinar una palabra letra por letra. Muestra un gráfico o indicador del progreso del usuario, y permite reiniciar el juego una vez que la palabra ha sido adivinada o el usuario ha fallado.', difficulty: 'Medio', date: '10/08/2024', puntaje: 20 },

    { id: 3, titulo: 'Ordenamiento de Números', descripcion: 'Implementa diferentes algoritmos de ordenamiento (burbuja, selección, inserción) y permite al usuario seleccionar un conjunto de números desordenados. Muestra los pasos del algoritmo y el resultado final en la interfaz.', difficulty: 'Medio', date: '10/08/2024', puntaje: 25 },

    { id: 4, titulo: 'Generador de Contraseñas Seguras', descripcion: 'Diseña un generador de contraseñas que permita a los usuarios crear contraseñas seguras. La aplicación debe ofrecer opciones para incluir letras, números, y caracteres especiales, así como definir la longitud de la contraseña.', difficulty: 'Fácil', date: '10/08/2024', puntaje: 15 },

    { id: 5, titulo: 'Conversor de Monedas', descripcion: 'Crea una aplicación que permita convertir entre diferentes monedas utilizando tasas de cambio actuales. El usuario debe poder seleccionar las monedas de origen y destino, e ingresar la cantidad a convertir. Usa una API para obtener las tasas de cambio en tiempo real.', difficulty: 'Difícil', date: '10/08/2024', puntaje: 30 },
  ];

  const [itemsToShow, setItemsToShow] = useState(1);
  const [ArrowsShow, setArrowsShow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setArrowsShow(true);
        setItemsToShow(1);
      }
      else {
        setItemsToShow(1);
        setArrowsShow(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <h1 className={`${styles.heading} text-center mb-[2rem]`}>Retos Semanales</h1>
      <Carousel itemsToShow={itemsToShow} itemsToScroll={itemsToShow} showArrows={ArrowsShow} className='relative z-[100]'>
        {items.map(item => (
          <div key={item.id} className='w-[90%]'>
            <Card title={item.titulo} id={item.id} description={item.descripcion} difficulty={item.difficulty} date={item.date} puntaje={item.puntaje} />
          </div>
        ))}
      </Carousel>
    </div> 
  )

}

export default Retos