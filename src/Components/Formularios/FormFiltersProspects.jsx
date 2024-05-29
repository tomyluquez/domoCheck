import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { dataAutocomplete } from "../../services/dataAutocomplete";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { estadosProspectos, intereses } from "./../../data/estados";
import { FormFilter } from "../../Styles/FormStyles";
import { ButtonCustom } from "../../Styles/ButtonStyles";
import {
  colorFondo,
  colorFondoHover,
  colorLetra,
  colorLogo,
} from "../../Styles/GeneralStyles";
import SelectCustom from "../SelectCustom";
import filterProspects from "../../services/filteredProscpets";
const FormFiltersProspects = ({ prospectos }) => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    nombreLocal: "",
    estado: "",
    interes: "",
  });
  const prospectosPorLocal = dataAutocomplete(prospectos);

  const handlerReset = () => {
    setData({
      nombreLocal: "",
      estado: "",
      interes: "",
    });
    dispatch(FormFiltersProspects(prospectos));
  };
  const handlerFilters = (e) => {
    e.preventDefault();
    filterProspects(
      prospectos,
      data.nombreLocal,
      data.estado,
      data.interes,
      dispatch
    );
  };

  return (
    <FormFilter onSubmit={handlerFilters}>
      <Autocomplete
        disablePortal
        onInputChange={(e, newValue) =>
          setData({ ...data, nombreLocal: newValue })
        }
        value={data.nombreLocal}
        freeSolo
        id="combo-box-demo"
        options={prospectosPorLocal}
        sx={{ width: "20%", bgcolor: "color.inputs" }}
        renderInput={(params) => (
          <TextField {...params} label="Por Nombre del Local" />
        )}
      />
      <SelectCustom
        w="20%"
        label="Por Estado"
        value={data.estado}
        setValue={(newValue) => setData({ ...data, estado: newValue })}
        opciones={estadosProspectos}
      />
      <SelectCustom
        w="20%"
        label="Por Interes"
        value={data.interes}
        setValue={(newValue) => setData({ ...data, interes: newValue })}
        opciones={intereses}
      />
      <ButtonCustom
        width="120px"
        height="50px"
        type="submit"
        fondo={darkMode ? colorLogo : colorLetra}
      >
        Filtrar
      </ButtonCustom>
      <ButtonCustom
        width="120px"
        height="50px"
        fondo={colorFondoHover}
        color={colorLetra}
        hfondo={darkMode ? "#404040" : colorFondo}
        borde={colorFondo}
        onClick={handlerReset}
      >
        Borrar Filtros
      </ButtonCustom>
    </FormFilter>
  );
};

export default FormFiltersProspects;
