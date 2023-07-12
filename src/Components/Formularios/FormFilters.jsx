import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { dataAutocomplete } from "../../services/dataAutocomplete";
import { vendedores } from "../../data/vendedores";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { estados } from "./../../data/estados";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { FormFilter } from "../../Styles/FormStyles";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import {
  colorFondo,
  colorFondoHover,
  colorLetra,
} from "../../Styles/GeneralStyles";
import Filters from "../Clientes/Filters";
import filterClients from "./../../services/filteredClients";
import SelectCustom from "../SelectCustom";
const FormFilters = ({ clientes }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    nombreLocal: "",
    vendedor: "",
    estado: "",
    dateStart: "",
    dateEnd: "",
  });
  const clientesPorLocal = dataAutocomplete(clientes);

  const handlerReset = () => {
    setData({
      nombreLocal: "",
      vendedor: "",
      estado: "",
      dateStart: "",
      dateEnd: "",
    });
    dispatch(Filters(clientes));
  };

  const handlerFilters = (e) => {
    e.preventDefault();
    filterClients(
      clientes,
      data.vendedor,
      data.estado,
      data.nombreLocal,
      data.dateStart,
      data.dateEnd,
      dispatch
    );
  };

  return (
    <FormFilter onSubmit={handlerFilters}>
      <Autocomplete
        onChange={(e) =>
          setData({ ...data, nombreLocal: e.target.textContent })
        }
        disablePortal
        id="combo-box-demo"
        options={clientesPorLocal}
        sx={{ width: 300, background: "white" }}
        renderInput={(params) => (
          <TextField {...params} label="Por Nombre del Local" />
        )}
      />
      <SelectCustom
        w="20%"
        label="Por Vendedor"
        value={data.vendedor}
        setValue={(newValue) => setData({ ...data, vendedor: newValue })}
        opciones={vendedores}
      />
      <SelectCustom
        w="20%"
        label="Por Estado"
        value={data.estado}
        setValue={(newValue) => setData({ ...data, estado: newValue })}
        opciones={estados}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateRangePicker"]}>
          <DateRangePicker
            sx={{ background: "white" }}
            onChange={(e) =>
              setData({ ...data, dateStart: e[0].$d, dateEnd: e[1].$d })
            }
            localeText={{ start: "Desde", end: "Hasta" }}
          />
        </DemoContainer>
      </LocalizationProvider>
      <ButtonCustom width="120px" height="50px" type="submit">
        Filtrar
      </ButtonCustom>
      <ButtonCustom
        width="120px"
        height="50px"
        fondo={colorFondoHover}
        color={colorLetra}
        hfondo={colorFondo}
        borde={colorFondo}
        onClick={handlerReset}
      >
        Borrar Filtros
      </ButtonCustom>
    </FormFilter>
  );
};

export default FormFilters;
