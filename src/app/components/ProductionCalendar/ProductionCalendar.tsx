'use client'

import React, { useState, useEffect, JSX } from 'react';
import { MachineCalendar }  from './MachineCalendar';

const ProductionCalendar = () => {
  const [productionCalendar, setProductionCalendar] = useState([
    {
      c_recurso: "TF-1",
      dataProg: "2025-01-01",
      turno: 1,
    },
    {
      c_recurso: "TF-1",
      dataProg: "2025-01-01",
      turno: 2,
    },
    {
      c_recurso: "TF-1",
      dataProg: "2025-01-01",
      turno: 3,
    },
    {
      c_recurso: "TF-1",
      dataProg: "2025-01-02",
      turno: 1,
    },
    {
      c_recurso: "TF-1",
      dataProg: "2025-01-02",
      turno: 2,
    },
    {
      c_recurso: "TF-1",
      dataProg: "2025-01-02",
      turno: 3,
    },
  ]);

  const [iniper, setIniper] = useState(new Date(Date.UTC(2025, 0, 1)));
  const [fimper, setFimper] = useState(new Date(Date.UTC(2025, 0, 25)));
  const [headers, setHeaders] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateHeaders = (iniper: Date, fimper: Date) => {
      const headers = [];
      const week = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
      for (let data = new Date(iniper); data <= fimper; data.setUTCDate(data.getUTCDate() + 1)) {
        let day = data.getUTCDate() < 10 ? "0" + data.getUTCDate() : data.getUTCDate();
        let dayWeek = week[data.getUTCDay()];
        headers.push(<th key={data.toISOString()} className="border border-gray-300 px-4 py-2">{day+"/"+dayWeek}</th>);
      }
      return headers;
    };

    setHeaders(generateHeaders(iniper, fimper));
  }, [iniper, fimper]);

  return (
    <div className='w-auto'>
      <div className="overflow-auto p-10 space-x-0">
      <table className="border border-gray-300 text-center">
        <thead className="bg-customBrown text-white">
          <tr className=']'>
            <th className="border border-gray-300 px-4 py-2">C. Recurso</th>
            <th className="border border-gray-300 w-7 px-4 py-2 ">Turno</th>
            
          </tr>
        </thead>
        <tbody>
          
         
        </tbody>
      </table>
    </div>
    </div>
    
  );
};

export default ProductionCalendar;
