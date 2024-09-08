import styles from '@/styles';
import Button from '@/components/ui/Button';


type RetosCard = {
  title: string;
  description: string;
  difficulty: string;
  date: string;
  id: number;
  puntaje: number
  classNameDificultad?: string
}

const RetosCard = ({ title, description, difficulty, date, id, puntaje, classNameDificultad } : RetosCard) => {
  return (
    <div className='text-white font-rubik rounded-[15px] overflow-hidden'>
      <div className={`${styles.paddingX} py-[1.5rem] bg-glass flex justify-between items-center`}>
        <h2 className={`${styles.heading2} font-[400] text-gradient`}>Desafio #{id}</h2>

        <span className='bg-glass px-[.8rem] py-[.3rem] rounded-lg h-fit'>
          {date}
        </span>
      </div>

      <div className={`${styles.paddingX} bg-glass-purple py-[1.5rem]`}>
        <h3 className='xs:text-[28px] text-[25px]'>{title}</h3>

        <p className={`${styles.paragraph} my-[1.5rem]`}>{description}</p>

        <div className={`${styles.paragraph} md:flex gap-[2.5rem] ${classNameDificultad}`}>
          <p className='mb-[1.5rem] md:mb-0'>Dificultad: <span className={`${difficultyColor(difficulty)} px-[.8rem] py-[.3rem] rounded-lg`}>{difficulty}</span></p>

          <p>Puntaje: <span className='bg-glass-green px-[.8rem] py-[.3rem] rounded-lg'>{puntaje} pts</span></p>
        </div>

        <div className='mt-[2rem] flex justify-end'>
          <Button title='Iniciar'></Button>
        </div>
      </div>
    </div>
  );
};

function quitarTildes(cadena : String) {
  return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
// Función para asignar color según el nivel de dificultad
const difficultyColor = (difficulty : string) => {
  switch (quitarTildes(difficulty.toLowerCase())) {
    case 'facil':
      return 'bg-glass-green';
    case 'medio':
      return 'bg-glass-yellow';
    case 'dificil':
      return 'bg-glass-red';
    default:
      return 'bg-glass';
  }
};

export default RetosCard;