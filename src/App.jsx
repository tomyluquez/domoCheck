import Sidebar from "./Layout/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Flex } from "./Styles/GeneralStyles";
import { ContainerPpal } from "./Styles/Pages/SidebarStyles";
import { addClients, addProspects } from "./redux/slices/clientes";
import { Suspense, lazy, useEffect } from "react";
import useGetClients from "./Hooks/useGetClients";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Components/Modales/Modal";
import ClienteIdn from "./Layout/Pages/ClienteIdn";
import AlertToast from "./Components/Alert";
import Loading from "./Components/Loading";
import Login from "./Layout/Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { theme, darkTheme } from "./Styles/theme.js";
import useGetProspects from "./Hooks/useGetProspects";

const Dash = lazy(() => import("./Layout/Pages/Dash"));
const Clientes = lazy(() => import("./Layout/Pages/Clientes"));
const Actividades = lazy(() => import("./Layout/Pages/Actividades"));
const Config = lazy(() => import("./Layout/Pages/Config"));
const Navbar = lazy(() => import("./Layout/Navbar"));

function App() {
  const { data } = useGetClients();
  const { prospects } = useGetProspects();
  const dispatch = useDispatch();
  const { isOpen, reference, idClient, idAct } = useSelector(
    (state) => state.modal
  );
  const { alertOpen, motivo, estado } = useSelector((state) => state.alert);
  const darkMode = useSelector((state) => state.mode.darkMode);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(addClients(data));
    dispatch(addProspects(prospects));
  }, [dispatch, data, prospects]);

  if (user.role === "") {
    return (
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <Login />
        {alertOpen && (
          <AlertToast alertOpen={alertOpen} motivo={motivo} estado={estado} />
        )}
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
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
          <Paper
            sx={{ bgcolor: "background.default" }}
            style={{ minHeight: "100vh" }}
          >
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
                      <ProtectedRoute isAllowed={user.role !== "vendedor"}>
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
                          user.role !== "marketing" ||
                          user.role !== "masDelivery"
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
                      <ProtectedRoute isAllowed={user.role !== "vendedor"}>
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
          </Paper>
        </Router>
      </Suspense>
      {alertOpen && (
        <AlertToast alertOpen={alertOpen} motivo={motivo} estado={estado} />
      )}
    </ThemeProvider>
  );
}

export default App;
