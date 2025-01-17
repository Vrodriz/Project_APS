'use client';


import Abrangencias from '@/app/FirstPage/component/Abrangências/Abrangencias';
import ProgramacaoInteligente from './component/periododeProgramacao';

export default function Home() {
  return (
    <div className="py-[2px]">
      <div className="grid  sm:grid-cols-1 lg:grid-cols-2">
        {/* Card Programação Inteligente */}
        <div className="flex flex-col items-center justify-center text-white rounded-lg ">
          <ProgramacaoInteligente />
        </div>

        {/* Card Abrangências */}
        <div className="flex flex-col items-center justify-center text-white rounded-lg">
          <Abrangencias />
        </div>
      </div>
    </div>
  );
}
