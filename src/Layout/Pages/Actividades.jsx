import { Box, Tab, Typography } from "@mui/material";
import TableActGral from "../../Components/Actividades/TableActGral";
import OrdenActividades from "../../Components/Actividades/OrdenActividades";
import { useState } from "react";
import filterByAct from "../../services/filterByAct";
import ordenarActividades from "../../services/ordenarActividades";
import { useSelector } from "react-redux";
import { ordenAct, orderTypeAct } from "./../../data/ordenAct";
import FilterByDate from "../../Components/Actividades/FilterByDate";
import useGetUsers from "../../Hooks/useGetUsers";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Loading from "./../../Components/Loading";

const Actividades = () => {
  const { data, isLoading } = useGetUsers();
  const [orden, setOrden] = useState(1);
  const [ordenType, setOrdenType] = useState(0);
  const [ordenUserType, setOrdenUserType] = useState("Todos");
  const [value, setValue] = useState(1);
  const clientes = useSelector((state) => state.clientes.clientes);
  const prospectos = useSelector((state) => state.clientes.prospects);
  const user = useSelector((state) => state.user);
  const [dataActi, setData] = useState({
    dateStart: "",
    dateEnd: "",
    user: "Todos",
  });
  const { actividadesPendientes, actividadesCumplidas } = filterByAct(
    clientes,
    prospectos
  );
  const actividadesOrdenadasPend = ordenarActividades(
    actividadesPendientes,
    orden,
    ordenType,
    "Pendientes"
  );
  const actividadesCumplidasPend = ordenarActividades(
    actividadesCumplidas,
    dataActi,
    0,
    "Cumplidas"
  );
  const actividadesFiltradas =
    user.role === "vendedor"
      ? actividadesOrdenadasPend.filter(
          (act) => act.actividad.creador === user.vendedor
        )
      : actividadesOrdenadasPend;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div data-aos="fade-right" data-aos-duration="1200">
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                marginTop: "20px",
              }}
            >
              <TabList
                style={{
                  zIndex: 2,
                  width: "100%",
                }}
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab key={1} label="Pendientes" value={1} />
                {user.role === "admin" && (
                  <Tab key={2} label="Cumplidas" value={2} />
                )}
              </TabList>
            </Box>
            <TabPanel
              style={{ marginTop: "15px", overflow: "auto" }}
              value={1}
              key={1}
            >
              <>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  style={{ fontFamily: "poppins" }}
                >
                  Actividades Pendientes (
                  {actividadesFiltradas && actividadesFiltradas.length})
                </Typography>
                <OrdenActividades
                  orden={orden}
                  setOrden={setOrden}
                  ordenAct={ordenAct}
                  orderTypeAct={orderTypeAct}
                  ordenType={ordenType}
                  setOrdenType={setOrdenType}
                  usuario={ordenUserType}
                  usuarios={data}
                  setOrdenUserType={setOrdenUserType}
                />
                <TableActGral
                  key={`pendientes-${orden}`} // Agregar información adicional a la clave
                  tipoActividad={"Pendientes"}
                  actividades={actividadesFiltradas}
                />
              </>
            </TabPanel>
            <TabPanel
              style={{ marginTop: "15px", overflow: "auto" }}
              value={2}
              key={2}
            >
              <>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  style={{ fontFamily: "poppins" }}
                >
                  Actividades Cumplidas (
                  {actividadesCumplidasPend && actividadesCumplidasPend.length})
                </Typography>
                <FilterByDate
                  dataActi={dataActi}
                  setData={setData}
                  data={data.data}
                />
                <TableActGral
                  key={`cumplidas-${dataActi.dateStart}-${dataActi.dateEnd}`} // Agregar información adicional a la clave
                  tipoActividad={"Cumplidas"}
                  actividades={actividadesCumplidasPend}
                />
              </>
            </TabPanel>
          </TabContext>
        </div>
      )}
    </>
  );
};

export default Actividades;
