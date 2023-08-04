import Sidebar from "./Layout/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Flex } from "./Styles/GeneralStyles";
import { ContainerPpal } from "./Styles/Pages/SidebarStyles";
import { addClients } from "./redux/slices/clientes";
import { Suspense, lazy, useEffect } from "react";
import useGetClients from "./Hooks/useGetClients";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Components/Modales/Modal";
import ClienteIdn from "./Layout/Pages/ClienteIdn";
import AlertToast from "./Components/Alert";
import Loading from "./Components/Loading";
import Login from "./Layout/Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";

const Dash = lazy(() => import("./Layout/Pages/Dash"));
const Clientes = lazy(() => import("./Layout/Pages/Clientes"));
const Actividades = lazy(() => import("./Layout/Pages/Actividades"));
const Config = lazy(() => import("./Layout/Pages/Config"));
const Navbar = lazy(() => import("./Layout/Navbar"));

function App() {
  const { data } = useGetClients();
  const dispatch = useDispatch();
  const { isOpen, reference, idClient, idAct } = useSelector(
    (state) => state.modal
  );
  const { alertOpen, motivo, estado } = useSelector((state) => state.alert);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(addClients(data));
  }, [dispatch, data]);

  if (user.role === "") {
    return (
      <>
        <Login />
        {alertOpen && (
          <AlertToast alertOpen={alertOpen} motivo={motivo} estado={estado} />
        )}
      </>
    );
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          {isOpen && (
            <Modal
              isOpen={isOpen}
              reference={reference}
              idClient={idClient}
              idAct={idAct}
            />
          )}
          <Flex>
            <Sidebar />
            <ContainerPpal>
              <Navbar />
              <Routes>
                <Route element={<ProtectedRoute isAllowed={!!user.role} />}>
                  <Route exact path="/" element={<Dash />} />
                </Route>
                <Route
                  exact
                  path="/clientes/:id"
                  element={
                    <ProtectedRoute
                      isAllowed={
                        user.role === "admin" ||
                        user.role === "integrador" ||
                        user.role === "masDelivery" ||
                        user.role === "comercial" ||
                        user.role === "marketing"
                      }
                    >
                      <ClienteIdn />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/Actividades"
                  element={
                    <ProtectedRoute
                      isAllowed={
                        user.role === "admin" ||
                        user.role === "integrador" ||
                        user.role === "comercial"
                      }
                    >
                      <Actividades />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/Clientes"
                  element={
                    <ProtectedRoute
                      isAllowed={
                        user.role === "admin" ||
                        user.role === "integrador" ||
                        user.role === "masDelivery" ||
                        user.role === "comercial" ||
                        user.role === "marketing"
                      }
                    >
                      <Clientes />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/Configuracion"
                  element={
                    <ProtectedRoute isAllowed={user.role === "admin"}>
                      <Config />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </ContainerPpal>
          </Flex>
        </Router>
      </Suspense>
      {alertOpen && (
        <AlertToast alertOpen={alertOpen} motivo={motivo} estado={estado} />
      )}
    </>
  );
}

export default App;
