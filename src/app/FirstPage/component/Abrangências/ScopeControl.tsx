import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Button, Box } from "@mui/material";

interface ScopeControlProps {
  label: string;
  options: string[];
}

function ScopeControl({ label, options }: ScopeControlProps) {
  const [isScopeVisible, setIsScopeVisible] = useState(false);
  const [value, setValue] = useState<string[]>([]);

  const toggleScope = () => setIsScopeVisible((prev) => !prev);

  return (
    <Box className="relative">
      {/* Custom Button */}
      <Button
        onMouseDown={toggleScope}
        variant="outlined"
        sx={{
          backgroundColor: "white",
          color: "#6B4F35", // Cor customBrown
          fontWeight: "bold",
          fontSize: "0.875rem", // Tamanho da fonte menor
          padding: "4px 12px", // Botão menor
          borderRadius: "6px",
          textTransform: "none",
          border: "1px solid #6B4F35", // Borda customBrown
          "&:hover": {
            backgroundColor: "#f7f7f7",
          },
          "& span": {
            marginLeft: "6px",
            color: "#6B4F35", // Cor do contador
            fontWeight: "bold",
          },
        }}
      >
        {label} <span>{value.length}</span>
      </Button>

      {/* Autocomplete Dropdown */}
      {isScopeVisible && (
        <Box
          className="absolute z-10"
          sx={{
            minWidth: "220px",
            maxWidth: "300px",
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            marginTop: "8px",
            padding: "12px",
          }}
        >
          <Autocomplete
            multiple
            id="tags-outlined"
            options={options}
            value={value}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            onChange={(event, newValue: string[]) => setValue(newValue)}
            onClose={() => setIsScopeVisible(false)}
            renderInput={(params) => (
              <TextField
                {...params}
                label={`Selecione ${label}`}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "6px",
                  },
                }}
              />
            )}
          />
        </Box>
      )}
    </Box>
  );
}

export default ScopeControl;
