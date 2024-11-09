// ErrorPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="text-3xl mt-2">Página Não Encontrada</h2>
      <p className="text-lg mt-4 mb-8">
        Ops! A página que você está procurando não existe.
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-200"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default ErrorPage;
