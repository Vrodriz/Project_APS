import React from 'react';

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-6">
      <h1 className="font-bold text-white text-xl">APS - PROGRAMAÇÃO DE PRODUÇÃO</h1>
      <nav className="flex space-x-6 font-bold">
        <a href="#" className="text-white hover:text-gray-300 transition duration-300" aria-label="Ir para Programação">Programação</a>
        <a href="#" className="text-white hover:text-gray-300 transition duration-300" aria-label="Ir para Consulta">Consulta</a>
        <a href="#" className="text-white hover:text-gray-300 transition duration-300" aria-label="Ir para Dashboard">Dashboard</a>
        <a href="#" className="text-white hover:text-gray-300 transition duration-300" aria-label="Sair">Sair</a>
      </nav>
    </div>
  );
}

export default Header;
