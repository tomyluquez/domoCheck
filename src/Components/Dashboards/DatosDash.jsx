import { useEffect, useState } from "react";
import {
  CardsUp,
  DivContainerCardsUp,
  DivData,
  DivNumberData,
  NumberData,
  NumberDataAnterior,
} from "../../Styles/Pages/DashboardStyles";
import { dataDashAdmin } from "../../data/cardsDashAdmin";
import { compararData } from "../../data/comprarData";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "@mui/material";

const DatosDash = ({ clientes, vendedor, role, darkMode }) => {
  const [data, setData] = useState(false);
  const prospects = useSelector((state) => state.clientes.prospects);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const { dashVentas, dashIntegracion } = dataDashAdmin(
      clientes,
      vendedor,
      dispatch,
      prospects
    );
    setData(role === "comercial" ? dashIntegracion : dashVentas);
  }, [clientes, role, vendedor, dispatch, prospects]);

  const handleClick = (to, functionDash) => {
    if (vendedor) return;
    if (functionDash) {
      functionDash();
    }
    navigate(to);
  };
  return (
    <DivContainerCardsUp modo={darkMode ? "dark" : ""}>
      {data &&
        data.map((dash, i) => (
          <CardsUp
            key={i}
            hover={dash.hover}
            style={{
              backgroundColor: dash.fondo,
              cursor: dash.hover ? "pointer" : "default",
            }}
            onClick={() => handleClick(dash.to, dash.filters)}
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <DivData>
              <span style={{ color: dash.letra }}>{dash.title}</span>
              {dash.iconExtra && dash.data === 0 ? dash.iconExtra : dash.icon}
            </DivData>
            <DivNumberData style={{ color: dash.letra }} className="flex">
              {dash.dataAnterior !== undefined &&
                compararData(dash.data, dash.dataAnterior)}
              <NumberData>
                {dash.clientes ? (
                  <Tooltip
                    title={
                      <div className="flex" style={{ flexDirection: "column" }}>
                        {dash.clientes.map((cliente, index) => (
                          <span key={index}>
                            {cliente.nombreLocal} - ({cliente.vendedor})
                          </span>
                        ))}
                      </div>
                    }
                  >
                    {dash.data}
                  </Tooltip>
                ) : (
                  dash.data
                )}
              </NumberData>
              {dash.dataAnterior !== undefined && (
                <NumberDataAnterior>| {dash.dataAnterior}</NumberDataAnterior>
              )}
            </DivNumberData>
          </CardsUp>
        ))}
    </DivContainerCardsUp>
  );
};

export default DatosDash;
