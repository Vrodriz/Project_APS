import React, { useState, useEffect, JSX } from 'react';

export const MachineCalendar = ({machine}:{machine:string}) => {
    return (
        <>
            <tr>
            <td className="border border-gray-300 px-4 py-2" rowSpan={3}>{machine}</td>
            <td className="border border-gray-300 px-4 py-2">1 Turno</td>
            {Array(10).fill(<td className="border border-gray-300 px-4 py-2"></td>)}
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">2 Turno</td>
            {Array(10).fill(<td className="border border-gray-300 px-4 py-2"></td>)}
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">3 Turno</td>
            {Array(10).fill(<td className="border border-gray-300 px-4 py-2"></td>)}
          </tr>
        </>
        
    );
}