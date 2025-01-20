'use client'
import React, { useState } from 'react';

const generateDates = (days: number) => {
  const today = new Date();
  const dates = [];

  for (let i = 0; i < days; i++) {
    const newDate = new Date();
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
  const [days, setDays] = useState(100); // Total de dias a serem exibidos
  const [page, setPage] = useState(0); // Página inicial
  const [daysPerPage] = useState(10); // Limite de dias por página

  // Gera as datas com base no número de dias
  const dates = generateDates(days);

  // Função para dividir as datas em páginas
  const getDatesForPage = (page: number) => {
    const startIndex = page * daysPerPage;
    const endIndex = startIndex + daysPerPage;
    return dates.slice(startIndex, endIndex);
  };

  const handleAddMachine = () => {
    const newMachine = {
      name: `TF${machines.length + 1}`,
      productions: []
    };
    setMachines([...machines, newMachine]);
  };

  const handleAddProduction = (machineIndex: number) => {
    setModalData({ machineIndex });
  };

  const handleSaveProduction = (item: string, duration: number, turns: number[]): void => {
    if (modalData === null) return;

    const updatedMachines = [...machines];
    const machine = updatedMachines[modalData.machineIndex];

    const newProduction = {
      item,
      duration,
      turns,
      color: colors[colorIndex % colors.length]
    };

    machine.productions.push(newProduction);
    setMachines(updatedMachines);
    setColorIndex(colorIndex + 1);
    setModalData(null);
  };

  const renderCell = (machine: { productions: { item: string; turns: number[]; color: string; duration: number }[] }, turn: number, dateIndex: number): JSX.Element => {
    for (const production of machine.productions) {
      if (production.turns.includes(turn)) {
        if (dateIndex < production.duration) {
          return (
            <td
              key={dateIndex}
              style={{ backgroundColor: production.color }}
              colSpan={dateIndex + 1 === production.duration ? 1 : 0}
            >
              {production.item}
            </td>
          );
        }
      }
    }
    return <td />;
  };

  const handleNextPage = () => {
    if ((page + 1) * daysPerPage < days) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="mb-4">
        <label className="mr-2">Número de dias para visualizar:</label>
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(Math.max(1, parseInt(e.target.value)))}
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
              <th key={index} className="border border-gray-300 px-4 py-2">
                {date}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {machines.map((machine, machineIndex) => (
            <React.Fragment key={machineIndex}>
              <tr>
                <td rowSpan="3" className="border border-gray-300 px-4 py-2 text-center">
                  {machine.name}
                  <button
                    onClick={() => handleAddProduction(machineIndex)}
                    className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">1 Turno</td>
                {getDatesForPage(page).map((_, dateIndex) => renderCell(machine, 1, dateIndex))}
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">2 Turno</td>
                {getDatesForPage(page).map((_, dateIndex) => renderCell(machine, 2, dateIndex))}
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">3 Turno</td>
                {getDatesForPage(page).map((_, dateIndex) => renderCell(machine, 3, dateIndex))}
              </tr>
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

const Modal = ({ onSave, onClose }) => {
  const [item, setItem] = useState('');
  const [duration, setDuration] = useState(1);
  const [turns, setTurns] = useState([]);

  const handleTurnToggle = (turn) => {
    if (turns.includes(turn)) {
      setTurns(turns.filter((t) => t !== turn));
    } else {
      setTurns([...turns, turn]);
    }
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
            onChange={(e) => setDuration(parseInt(e.target.value))}
            min="1"
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Turnos:</label>
          {[1, 2, 3].map((turn) => (
            <label key={turn} className="block">
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
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
