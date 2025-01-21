import React from "react";

interface Production {
  turns: number[];
  duration: number;
  color: string;
  item: string;
}

interface Machine {
  name: string;
  productions: Production[];
}

interface MachineTableProps {
  machines: Machine[];
  dates: string[];
  handleAddProduction: (machineIndex: number) => void;
}

const MachineTable: React.FC<MachineTableProps> = ({ machines, dates, handleAddProduction }) => {
  const renderCell = (machine: Machine, turn: number, dateIndex: number) => {
    const production = machine.productions.find(
      (prod) => prod.turns.includes(turn) && dateIndex < prod.duration
    );

    return (
      <td
        key={`${turn}-${dateIndex}`}
        className={`border border-gray-300 text-center ${
          production ? `bg-[${production.color}]` : ''
        }`}
      >
        {production?.item || ''}
      </td>
    );
  };

  const renderTurnRows = (machine: Machine, machineIndex: number) =>
    [1, 2, 3].map((turn) => (
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
        {dates.map((_, dateIndex) => renderCell(machine, turn, dateIndex))}
      </tr>
    ));

  return (
    <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">C. Recurso</th>
          <th className="border border-gray-300 px-4 py-2">Turno</th>
          {dates.map((date, index) => (
            <th
              key={`header-${index}`}
              className="border border-gray-300 px-4 py-2"
            >
              {date}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {machines.map((machine, machineIndex) => (
          <React.Fragment key={`machine-${machineIndex}`}>
            {renderTurnRows(machine, machineIndex)}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default MachineTable;