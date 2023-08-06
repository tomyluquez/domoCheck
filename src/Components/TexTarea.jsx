import { useSelector } from "react-redux";
import { StyledTextarea } from "../Styles/TexTareaStyles";

const TexTarea = ({ setObs, width }) => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const handleChange = (e) => {
    const value = e.target.value;
    setObs(value); // Utilizar la función de actualización del estado de setObs
  };

  return (
    <StyledTextarea
      aria-label="minimum height"
      minRows={3}
      placeholder="Observaciones"
      onChange={handleChange}
      width={width || "320px"}
      modo={darkMode ? "dark" : ""}
    />
  );
};

export default TexTarea;
