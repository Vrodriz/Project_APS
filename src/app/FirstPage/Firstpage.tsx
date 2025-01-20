'use client';

import Abrangencias from '@/app/FirstPage/component/Abrangências/Abrangencias';
import ProgramacaoInteligente from './component/periododeProgramacao';
import Card from '@/app/components/Card';
import { Button } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerated(true);
    console.log('Dados gerados!');
  };

  const handleSave = () => {
    console.log('Dados salvos!');
  };

  return (
    <div className="p-6 flex flex-col items-center">
      {/* Conteúdo */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Card Programação Inteligente */}
        <Card>
          <ProgramacaoInteligente />
        </Card>

        {/* Card Abrangências */}
        <Card>
          <Abrangencias />
        </Card>
      </div>

      {/* Botões */}
      <div className="flex justify-center gap-4 mt-6">
        <Button
          variant="contained"
          className="bg-customBrown text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
          onClick={handleGenerate}
        >
          Gerar
        </Button>
        <Button
          variant="contained"
          className="bg-customBrown text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
          onClick={handleSave}
        >
          Salvar
        </Button>
      </div>
    </div>
  );
}
