import React from "react";
import Card from "@/app/components/Card";
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';

export default function DateRangePickerValue() {
  // Estado para armazenar as datas de início e fim
  const [startDate, setStartDate] = React.useState<Dayjs | null>(null);
  const [endDate, setEndDate] = React.useState<Dayjs | null>(null);

  // Função para validar se as duas datas foram selecionadas
  const handleSubmit = () => {
    if (!startDate || !endDate) {
      alert('Por favor, selecione um período de programação válido.');
    } else {
      // Lógica para usar o intervalo de datas
      alert(`Período selecionado: ${startDate.format('DD/MM/YYYY')} até ${endDate.format('DD/MM/YYYY')}`);
    }
  };

  return (
    <Card title="Período de Programação">
      <div className="flex flex-col sm:flex-row gap-4 py-2 justify-center items-center">
        {/* Componente DatePicker para selecionar a data de início */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Início"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)} // Atualiza o estado com a nova data de início
            slotProps={{
              textField: {
                variant: "outlined",
                sx: {
                  width: '100%',
                  maxWidth: '160px', // Limita a largura máxima
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px", // Borda arredondada
                    backgroundColor: '#fafafa', // Creme suave
                    border: '1px solid #6A4E23', // Cor da borda marrom
                  },
                  "& .MuiInputLabel-root": {
                    color: '#6A4E23', // Cor do label em marrom
                  },
                  "& .MuiAutocomplete-inputRoot": {
                    padding: '8px 12px', // Padding para melhorar o layout
                  },
                }
              }
            }}
          />
        </LocalizationProvider>

        {/* Componente DatePicker para selecionar a data de fim */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Fim"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)} // Atualiza o estado com a nova data de fim
            slotProps={{
              textField: {
                variant: "outlined",
                sx: {
                  width: '100%',
                  maxWidth: '160px', // Limita a largura máxima
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px", // Borda arredondada
                    backgroundColor: '#fafafa', // Creme suave
                    border: '1px solid #6A4E23', // Cor da borda marrom
                  },
                  "& .MuiInputLabel-root": {
                    color: '#6A4E23', // Cor do label em marrom
                  },
                  "& .MuiAutocomplete-inputRoot": {
                    padding: '8px 12px', // Padding para melhorar o layout
                  },
                }
              }
            }}
          />
        </LocalizationProvider>

        {/* Botão para submeter o intervalo de datas selecionado */}
        <Button
          variant="outlined"
          sx={{
            backgroundColor: '#fff',
            color: '#6A4E23', // Marrom escuro
            fontWeight: 'bold',
            fontSize: '0.975rem', 
            padding: '10px 16px',
            borderRadius: '8px',
            border: '2px solid #6A4E23', // Cor da borda marrom
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#f5f5f5', // Creme claro ao passar o mouse
            },
          }}
          onClick={handleSubmit} // Chama a função de validação e envio do período
        >
          Confirmar Período
        </Button>
      </div>
    </Card>
  );
}
