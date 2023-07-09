import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectCustom = ({ w, label, value, setValue, opciones }) => {
  return (
    <Box sx={{ minWidth: 180, width: w, backgroundColor: "white" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={(e) => setValue(e.target.value)}
        >
          {opciones.map((opcion, index) => (
            <MenuItem key={index} value={opcion.value}>
              {opcion.descripcion}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectCustom;
