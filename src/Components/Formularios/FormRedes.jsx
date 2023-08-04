import { TextField } from "@mui/material";

const FormRedes = ({ data, setData }) => {
  return (
    <div className="flex">
      <TextField
        sx={{ minWidth: 180, width: "55%", backgroundColor: "#fafafa" }}
        value={data.email}
        id="outlined-basic"
        label="Instagram (solo nombre)"
        variant="outlined"
        onChange={(e) => setData({ ...data, instagram: e.target.value })}
      />
      <TextField
        sx={{ minWidth: 180, width: "55%", backgroundColor: "#fafafa" }}
        value={data.name}
        id="outlined-basic"
        label="Seguidores (solo numeros)"
        type="number"
        variant="outlined"
        onChange={(e) => setData({ ...data, seguidores: e.target.value })}
      />
      <TextField
        sx={{ minWidth: 180, width: "55%", backgroundColor: "#fafafa" }}
        value={data.name}
        id="outlined-basic"
        label="Logistica Propia (Si o No)"
        variant="outlined"
        onChange={(e) =>
          setData({ ...data, logistica: e.target.value.toLowerCase() })
        }
      />
    </div>
  );
};

export default FormRedes;
