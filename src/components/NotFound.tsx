import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles';

const NotFound = () => {
  return (
    <div className={`${styles.padding} flex flex-col items-center justify-center min-h-screen bg-primary text-white`}>
      <h1 className="text-9xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
        404
      </h1>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
        Página no encontrada
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl mb-8 text-center">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link
        to="/"
        className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-blue-500 transition-all duration-300"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
