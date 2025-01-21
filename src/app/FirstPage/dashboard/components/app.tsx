'use client';

import { useState, useMemo } from "react";
import Modal from "../components/modal";
import MachineTable from "../components/machine";
import { generateDates } from "../util/utils";
import useMachines from "../hooks/useMachine";

const App = () => {
  const colors = ["#FFD700", "#ADFF2F", "#87CEEB", "#FF69B4"];
  const { machines, addMachine, addProduction } = useMachines(colors);
  const [showModal, setShowModal] = useState(false);
  const [selectedMachineIndex, setSelectedMachineIndex] = useState<number | null>(null);

  const dates = useMemo(() => generateDates(30), []); // Gerar 30 dias uma única vez
  const daysPerPage = 7;
  const [page, setPage] = useState(0);
  const displayedDates = dates.slice(page * daysPerPage, (page + 1) * daysPerPage);

  const handleAddProduction = (machineIndex: number) => {
    setSelectedMachineIndex(machineIndex);
    setShowModal(true);
  };

  const handleSaveProduction = (item: string, duration: number, turns: number[]) => {
    if (selectedMachineIndex !== null) {
      addProduction(selectedMachineIndex, {
          item, duration, turns,
          date: ""
      });
    }
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-4">
      <header>
        <h1 className="text-xl font-bold mb-4">Controle de Produção</h1>
        <button
          onClick={addMachine}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Adicionar Máquina
        </button>
      </header>

      <MachineTable
        machines={machines}
        dates={displayedDates}
        page={page}
        daysPerPage={daysPerPage}
        handleAddProduction={handleAddProduction}
      />

      <PaginationControls
        page={page}
        setPage={setPage}
        daysPerPage={daysPerPage}
        totalDates={dates.length}
      />

      {showModal && (
        <Modal
          onSave={handleSaveProduction}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

type PaginationControlsProps = {
  page: number;
  setPage: (value: React.SetStateAction<number>) => void;
  daysPerPage: number;
  totalDates: number;
};

const PaginationControls: React.FC<PaginationControlsProps> = ({
  page,
  setPage,
  daysPerPage,
  totalDates,
}) => (
  <div className="flex justify-between mt-4">
    <button
      onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
      className="bg-gray-500 text-white px-4 py-2 rounded"
      aria-label="Página Anterior"
    >
      Página Anterior
    </button>
    <button
      onClick={() =>
        setPage((prev) => (prev + 1) * daysPerPage < totalDates ? prev + 1 : prev)
      }
      className="bg-gray-500 text-white px-4 py-2 rounded"
      aria-label="Próxima Página"
    >
      Próxima Página
    </button>
  </div>
);

export default App;
