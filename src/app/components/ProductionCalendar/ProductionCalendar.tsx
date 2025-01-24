'use client'

import React, { useState, useEffect, JSX } from 'react';
import { MachineCalendar } from './MachineCalendar';

const ProductionCalendar = () => {
  const [productionCalendar, setProductionCalendar] = useState([
    { c_recurso: "TF-1", dataProg: "2025-01-01", turno: 1 },
    { c_recurso: "TF-1", dataProg: "2025-01-01", turno: 2 },
    { c_recurso: "TF-1", dataProg: "2025-01-01", turno: 3 },
    { c_recurso: "TF-1", dataProg: "2025-01-02", turno: 1 },
    { c_recurso: "TF-1", dataProg: "2025-01-02", turno: 2 },
    { c_recurso: "TF-1", dataProg: "2025-01-02", turno: 3 },
  ]);

  const [iniper, setIniper] = useState(new Date(Date.UTC(2025, 0, 1)));
  const [fimper, setFimper] = useState(new Date(Date.UTC(2025, 0, 25)));
  const [headers, setHeaders] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateHeaders = (iniper: Date, fimper: Date) => {
      const headers: JSX.Element[] = [];
      const week = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
      for (let data = new Date(iniper); data <= fimper; data.setUTCDate(data.getUTCDate() + 1)) {
        let day = data.getUTCDate() < 10 ? "0" + data.getUTCDate() : data.getUTCDate();
        let dayWeek = week[data.getUTCDay()];
        headers.push(
          <th key={data.toISOString()} className="border-b border-gray-300 p-2 w-[150px] text-xs sm:text-sm md:text-base">
            {day}/{dayWeek}
          </th>
        );
      }
      return headers;
    };

    setHeaders(generateHeaders(iniper, fimper));
  }, [iniper, fimper]);

  return (
    <div className='w-full p-4'>
      <div className="overflow-x-auto max-w-full max-h-[600px]">
        <table className="border border-gray-300 text-nowrap w-full border-collapse table-fixed">
          <thead className="bg-customBrown text-white">
            <tr>
              <th className="border-b  border-gray-300 p-2 text-sm w-[150px]">C. Recurso</th>
              <th className="border-b border-gray-300 p-2 text-sm w-[150px]">Turno</th>
              {headers}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {productionCalendar.map((production) => (
              <MachineCalendar
                key={`${production.c_recurso}-${production.dataProg}-${production.turno}`}
                machine={production.c_recurso}
                iniper={iniper}
                fimper={fimper}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductionCalendar;
