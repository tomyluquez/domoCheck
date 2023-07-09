import { useSelector } from "react-redux";
import FormLogin from "../../Components/Formularios/FormLogin";
import {
  DivBackground,
  DivLogin,
  DivContainer,
  ImgLogin,
} from "../../Styles/Pages/LoginStyles";
import { Navigate } from "react-router-dom";

const Login = () => {
  const roleUser = useSelector((state) => state.user.role);
  if (roleUser !== "") {
    return <Navigate to={"/Dashboard"} />;
  }
  return (
    <DivContainer>
      <DivBackground>
        <ImgLogin src="/fondoLogin.png" alt="" />
      </DivBackground>
      <DivLogin>
        <FormLogin />
      </DivLogin>
    </DivContainer>
  );
};

export default Login;
