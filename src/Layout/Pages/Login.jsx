import { useSelector } from "react-redux";
import FormLogin from "../../Components/Formularios/FormLogin";
import { DivContainer } from "../../Styles/Pages/LoginStyles";
import { Navigate } from "react-router-dom";
import { colorLetra } from "../../Styles/GeneralStyles";

const Login = () => {
  const roleUser = useSelector((state) => state.user.role);
  if (roleUser !== "") {
    return <Navigate to={"/"} />;
  }
  return (
    <DivContainer>
      <img src="/fondoLog.png" alt="" />
      <FormLogin />
      <span style={{ color: colorLetra }}>Nucleo IT - Mas Delivery</span>
    </DivContainer>
  );
};

export default Login;
