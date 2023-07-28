import { Box, LinearProgress, Tooltip } from "@mui/material";
import { colorFondo } from "../../../Styles/GeneralStyles";
import { Cards } from "../../../Styles/Pages/DashboardStyles";
import { dataDash } from "../../../data/infoDashIntegrador";
import { useEffect, useState } from "react";

const DashIntegrador = ({ clientes }) => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    setDatos(dataDash(clientes));
  }, [clientes]);

  return (
    <Cards style={{ marginTop: "20px", width: "50%" }}>
      <h2 style={{ margin: 0, color: colorFondo }}>Estado Clientes</h2>
      {datos &&
        datos.map((data, i) => (
          <Tooltip
            key={i}
            title={
              data.data &&
              data.data.map((cliente) => (
                <div className="flex" key={cliente._id}>
                  {cliente.nombreLocal}
                </div>
              ))
            }
          >
            <Box
              sx={{ width: "100%", justifyContent: "start" }}
              className="flex"
            >
              <span style={{ cursor: "default", width: "40%" }}>
                {data.estado} - ({data.data ? data.data.length : 0})
              </span>
              <LinearProgress
                variant="determinate"
                value={(data.data ? data.data.length : 0) * 10}
                sx={{ width: "50%" }}
              />
            </Box>
          </Tooltip>
        ))}
    </Cards>
  );
};

export default DashIntegrador;
