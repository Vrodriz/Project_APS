

/*'use client';
import React, { JSX, useState } from 'react';

const generateDates = (days: number) => {
  const today = new Date();
  const dates = [];
  for (let i = 0; i < days; i++) {
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + i);
    dates.push(newDate.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit' }));
  }
  return dates;
};

const colors = ["#FFD700", "#FF6347", "#90EE90", "#87CEEB", "#DDA0DD"];

type ModalData = { machineIndex: number } | null;

const App = () => {
  const [machines, setMachines] = useState<{ name: string; productions: { item: string; duration: number; turns: number[]; color: string }[] }[]>([]);
  const [modalData, setModalData] = useState<ModalData>(null);
  const [colorIndex, setColorIndex] = useState(0);
  const [days, setDays] = useState(30);
  const [page, setPage] = useState(0);
  const [daysPerPage] = useState(8);

  const dates = generateDates(days);

  const getDatesForPage = (page: number) => {
    const startIndex = page * daysPerPage;
    const endIndex = startIndex + daysPerPage;
    return dates.slice(startIndex, endIndex);
  };

  const handleAddMachine = () => {
    const newMachine = { name: `TF${machines.length + 1}`, productions: [] };
    setMachines((prev) => [...prev, newMachine]);
  };

  const handleAddProduction = (machineIndex: number) => {
    setModalData({ machineIndex });
  };

  const handleSaveProduction = (item: string, duration: number, turns: number[]): void => {
    if (!modalData) return;

    setMachines((prev) => {
      const updatedMachines = [...prev];
      const machine = updatedMachines[modalData.machineIndex];
      machine.productions.push({
        item,
        duration,
        turns,
        color: colors[colorIndex % colors.length],
      });
      return updatedMachines;
    });

    setColorIndex((prev) => prev + 1);
    setModalData(null);
  };

  const renderCell = (
    machine: { productions: { item: string; turns: number[]; color: string; duration: number }[] },
    turn: number,
    dateIndex: number
  ): JSX.Element => {
    for (const production of machine.productions) {
      if (production.turns.includes(turn) && dateIndex < production.duration) {
        return (
          <td
            key={`${turn}-${dateIndex}`}
            style={{ backgroundColor: production.color }}
            className="border border-gray-300 text-center"
          >
            {production.item}
          </td>
        );
      }
    }
    return <td key={`${turn}-${dateIndex}`} className="border border-gray-300"></td>;
  };

  const handleNextPage = () => {
    if ((page + 1) * daysPerPage < days) setPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-4">
        <label className="mr-2">Número de dias para visualizar:</label>
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
          min="1"
          className="border border-gray-300 p-2"
        />
      </div>

      <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">C. Recurso</th>
            <th className="border border-gray-300 px-4 py-2">Turno</th>
            {getDatesForPage(page).map((date, index) => (
              <th key={`header-${index}`} className="border border-gray-300 px-4 py-2">{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {machines.map((machine, machineIndex) => (
            <React.Fragment key={`machine-${machineIndex}`}>
              {[1, 2, 3].map((turn) => (
                <tr key={`machine-${machineIndex}-turn-${turn}`}>
                  {turn === 1 && (
                    <td
                      rowSpan={3}
                      className="border border-gray-300 px-4 py-2 text-center"
                    >
                      {machine.name}
                      <button
                        onClick={() => handleAddProduction(machineIndex)}
                        className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        +
                      </button>
                    </td>
                  )}
                  <td className="border border-gray-300 px-4 py-2">{turn} Turno</td>
                  {getDatesForPage(page).map((_, dateIndex) => renderCell(machine, turn, dateIndex))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePreviousPage}
          disabled={page === 0}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Página Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={(page + 1) * daysPerPage >= days}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Próxima Página
        </button>
      </div>

      <button
        onClick={handleAddMachine}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Adicionar Máquina
      </button>

      {modalData && (
        <Modal onSave={handleSaveProduction} onClose={() => setModalData(null)} />
      )}
    </div>
  );
};

const Modal = ({ onSave, onClose }: { onSave: (item: string, duration: number, turns: number[]) => void; onClose: () => void }) => {
  const [item, setItem] = useState('');
  const [duration, setDuration] = useState(1);
  const [turns, setTurns] = useState<number[]>([]);

  const handleTurnToggle = (turn: number) => {
    setTurns((prev) => (prev.includes(turn) ? prev.filter((t) => t !== turn) : [...prev, turn]));
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Adicionar Produção</h2>
        <div className="mb-4">
          <label className="block mb-2">Item:</label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Duração (dias):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Math.max(1, parseInt(e.target.value) || 1))}
            min="1"
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Turnos:</label>
          {[1, 2, 3].map((turn) => (
            <label key={`turn-${turn}`} className="block">
              <input
                type="checkbox"
                checked={turns.includes(turn)}
                onChange={() => handleTurnToggle(turn)}
                className="mr-2"
              />
              {turn} Turno
            </label>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => onSave(item, duration, turns)}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Salvar
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default App; 
