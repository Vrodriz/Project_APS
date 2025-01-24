import React from 'react';

const Visao = () => {
  return (
    <div>
      {/* Título */}
      <h1 className="text-lg font-sans font-bold py-1 text-center">Visão</h1>

      {/* Dropdown */}
      <select
  name="desempenho"
  id="desem"
  className="w-full py-2 px-4 rounded-[5px] bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-orange-900 focus:border-transparent transition-all ease-in-out"
>
  <option value="desempenho">Desempenho Máquina</option>
  <option value="eficiencia">Eficiência Produção</option>
</select>

    </div>
  );
};

export default Visao;
