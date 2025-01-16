import React from 'react';
import { FaCog } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-customBrown w-full py-6">
      <div className="container mx-auto flex justify-between items-center">
       
        <div className="flex items-center space-x-2">
          <FaCog className="animate-spin text-white text-2xl" />
          <h1 className="font-bold text-white text-xl">APS - PROGRAMAÇÃO DE PRODUÇÃO</h1>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 font-bold">
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition duration-300" 
            aria-label="Ir para Programação"
          >
            Programação
          </a>
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition duration-300" 
            aria-label="Ir para Consulta"
          >
            Consulta
          </a>
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition duration-300" 
            aria-label="Ir para Dashboard"
          >
            Dashboard
          </a>
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition duration-300" 
            aria-label="Sair"
          >
            Sair
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
