import { Box, LinearProgress, Tooltip } from "@mui/material";
import { Cards } from "../../../Styles/Pages/DashboardStyles";
import { dataDash } from "../../../data/infoDashIntegrador";
import { useEffect, useState } from "react";
import filterClients from "../../../services/filteredClients";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const DashIntegrador = ({ clientes, role, darkMode }) => {
  const [datos, setDatos] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setDatos(dataDash(clientes, role));
  }, [clientes, role]);

  const handlerClick = (click, busqueda) => {
    if (!click) return;
    filterClients(
      clientes,
      undefined,
      busqueda,
      undefined,
      undefined,
      undefined,
      dispatch
    );
    navigate("/Clientes");
  };

  return (
    <Cards
      style={{ marginTop: "20px", width: "50%" }}
      modo={darkMode ? "dark" : ""}
    >
      <h2 style={{ margin: 0 }} data-aos="fade-right" data-aos-duration="1200">
        Estado Clientes
      </h2>
      {datos &&
        datos.map((data, i) => (
          <Tooltip
            key={i}
            title={
              data.data?.length > 0 &&
              data.data.map((cliente) => (
                <div className="flex" key={cliente._id}>
                  {cliente.nombreLocal}
                </div>
              ))
            }
          >
            <Box
              sx={{
                width: "100%",
                justifyContent: "start",
              }}
              data-aos="fade-right"
              data-aos-duration="1200"
              className="flex"
              onClick={() => handlerClick(data.click, data.busqueda)}
            >
              <span
                style={{
                  cursor: data.click ? "pointer" : "default",
                  width: "40%",
                }}
              >
                {data.estado} - ({data.data?.length > 0 ? data.data.length : 0})
              </span>
              <LinearProgress
                variant="determinate"
                value={100}
                sx={{
                  width: (data.data?.length > 0 ? data.data.length : 0) * 30,
                  borderRadius: "20px",
                  height: "10px",
                }}
              />
            </Box>
          </Tooltip>
        ))}
    </Cards>
  );
};

export default DashIntegrador;
