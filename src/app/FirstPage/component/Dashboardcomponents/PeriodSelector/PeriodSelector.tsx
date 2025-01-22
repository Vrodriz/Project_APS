import React, { useState } from 'react';

interface PeriodSelectorProps {
  onDateChange: (startDate: string, endDate: string) => void;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDateChange = () => {
    onDateChange(startDate, endDate);
  };

  return (
    <div className="flex gap-4 items-center mb-4">
      <div>
        <label className="block text-sm font-medium">Data Inicial</label>
        <input
          type="date"
          className="border rounded px-2 py-1"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Data Final</label>
        <input
          type="date"
          className="border rounded px-2 py-1"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <button
        onClick={handleDateChange}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Gerar Calendário
      </button>
    </div>
  );
};

export default PeriodSelector;
