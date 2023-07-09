import Navbar from "./Layout/Navbar";
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

function App() {
  const { data } = useGetClients();
  const dispatch = useDispatch();
  const { isOpen, reference, idClient, idAct } = useSelector(
    (state) => state.modal
  );
  const { alertOpen, motivo, estado } = useSelector((state) => state.alert);
  const role = useSelector((state) => state.user.role);

  useEffect(() => {
    dispatch(addClients(data));
  }, [dispatch, data]);

  if (role === "") {
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
                <Route element={<ProtectedRoute isAllowed={!!role} />}>
                  <Route exact path="/" element={<Dash />} />
                </Route>
                <Route
                  exact
                  path="/clientes/:id"
                  element={
                    <ProtectedRoute
                      isAllowed={
                        role === "admin" ||
                        role === "integrador" ||
                        role === "masDelivery"
                      }
                    >
                      <ClienteIdn />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/actividades"
                  element={
                    <ProtectedRoute
                      isAllowed={role === "admin" || role === "integrador"}
                    >
                      <Actividades />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/clientes"
                  element={
                    <ProtectedRoute
                      isAllowed={
                        role === "admin" ||
                        role === "integrador" ||
                        role === "masDelivery"
                      }
                    >
                      <Clientes />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/configuracion"
                  element={
                    <ProtectedRoute isAllowed={role === "admin"}>
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
