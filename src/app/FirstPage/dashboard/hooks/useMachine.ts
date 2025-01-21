import { useState } from "react";

interface Production {
  item: string;
  duration: number;
  turns: number[];
  date: string; // Nova propriedade para vincular a data
  color?: string;
}

interface Machine {
  name: string;
  productions: Production[];
}

const useMachines = (colors: string[]) => {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [colorIndex, setColorIndex] = useState(0);

  const addMachine = () => {
    setMachines((prev) => [
      ...prev,
      { name: `TF${prev.length + 1}`, productions: [] },
    ]);
  };

  const addProduction = (
    machineIndex: number,
    production: Omit<Production, "color"> // Excluímos `color` para adicionar dinamicamente
  ) => {
    if (machineIndex < 0 || machineIndex >= machines.length) {
      console.error("Índice de máquina inválido.");
      return;
    }

    setMachines((prev) => {
      const updatedMachines = prev.map((machine, index) => {
        if (index === machineIndex) {
          return {
            ...machine,
            productions: [
              ...machine.productions,
              {
                ...production,
                color: colors[colorIndex % colors.length], // Define a cor
              },
            ],
          };
        }
        return machine;
      });
      return updatedMachines;
    });

    setColorIndex((prev) => prev + 1);
  };

  return { machines, addMachine, addProduction };
};

export default useMachines;
