import { useState, useRef, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function ScopeControl({ label }: { label: string }) {
  const [isScopeVisible, setIsScopeVisible] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  const scopeElement = useRef<HTMLDivElement | null>(null);

  const clickOut = (event: MouseEvent) => {
    const autoCompleteElement = document.querySelector(".MuiAutocomplete-popper");
    if (scopeElement.current && !scopeElement.current?.contains(event.target as Node) && !autoCompleteElement?.contains(event.target as Node)) {
      setIsScopeVisible(false); 
    }
  };

  useEffect(() => {
    if (isScopeVisible) {
      document.addEventListener("mousedown", clickOut);
    }
    // Cleanup ao desmontar
    return () => {
      document.removeEventListener("mousedown", clickOut);
    };
  }, [isScopeVisible]);

  const showScope = () => !isScopeVisible ? setIsScopeVisible(true) : null;

  const listOptions = [
    "TF-1",
    'TF-2', 
    'TF-3',
    'TF-4', 
    'TF-5',
    "TF-7",
    'TF-8', 
  ];

  return (
    <div className="relative">
      {/* Custom Button */}
      <Button 
        onMouseDown={showScope} 
        variant="outlined" 
        sx={{
          backgroundColor: '#fff',
          color: '#6A4E23', // Marrom escuro
          fontWeight: 'bold', 
          fontSize: '0.975rem', 
          padding: '8px 16px',
          borderRadius: '8px',
          border: '2px solid #6A4E23', // Cor de borda marrom
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#f5f5f5', // Creme claro ao passar o mouse
          },
        }}
      >
        {label} <span className="ml-2 text-customBrown font-bold">{value.length}</span>
      </Button>

      {/* Autocomplete Dropdown */}
      {isScopeVisible && (
        <div ref={scopeElement} className="absolute z-10 mt-2 min-w-[220px] max-w-[300px] bg-white border border-gray-300 rounded-lg shadow-xl">
          <Autocomplete
            multiple
            id="tags-outlined"
            options={listOptions}
            value={value}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            onChange={(event, newValue: string[]) => setValue(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label={`Selecione ${label}`}
                variant="outlined"
                sx={{
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
                }}
              />
            )}
          />
        </div>
      )}
    </div>
  );
}

export default ScopeControl;
