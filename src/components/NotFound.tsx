import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/styles';
import Button from '@/components/ui/Button';

const NotFound = () => {
  return (
    <div className={`${styles.padding} flex flex-col items-center justify-center min-h-screen bg-primary text-white`}>
      <h1 className="text-9xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text text-gradient animate-pulse">
        404
      </h1>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-center font-poppins">
        Página no encontrada
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl mb-8 text-center font-rubik">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link
        to="/"
      >
        <Button title={'Volver al inicio'}/>
      </Link>
    </div>
  );
};

export default NotFound;
