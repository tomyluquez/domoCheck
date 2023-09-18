import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectCustom = ({ w, label, value, setValue, opciones, padding }) => {
  return (
    <Box
      sx={{
        minWidth: 180,
        width: w,
        paddingTop: padding,
        bgcolor: "color.inputs",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={(e) => setValue(e.target.value)}
          sx={{ bgcolor: "color.inputs" }}
        >
          {opciones &&
            opciones.map((opcion, index) => (
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
