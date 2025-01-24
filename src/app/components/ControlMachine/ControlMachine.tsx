'use client';

import Abrangencias from '@/app/FirstPage/component/Abrangências/Abrangencias';
import ProgramacaoInteligente from '@/app/FirstPage/component/periododeProgramacao';
import Card from '@/app/components/Card';
import Header from '@/app/components/Header';
import React from 'react';
import Visao from '@/app/components/ControlMachine/Components/Visao';

const ControlMachine = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 ">
      {/* Header */}
      <Header />

      {/* Cards Section */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {/* Primeiro Card */}
        <Card>
          <div className="flex flex-col items-center justify-center">
            <Visao />
          </div>
        </Card>

        {/* Segundo Card */}
        <Card>
          <div className="flex flex-col items-center justify-center">
            <ProgramacaoInteligente />
          </div>
        </Card>

        
        <Card>
          <div className="flex flex-col items-center justify-center">
            <Abrangencias />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ControlMachine;
