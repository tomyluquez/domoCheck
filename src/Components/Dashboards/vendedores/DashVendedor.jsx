import {
  CardVendedores,
  DivContainerCardsVendedores,
} from "../../../Styles/Pages/DashboardStyles";
import { stateColors } from "../../../data/colors";
import { filterByVendedor } from "../../../services/filteredClients";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { DivContainerState } from "../../../Styles/TableStyles";
import { Tooltip } from "@mui/material";
import formatDate from "./../../../services/formatDate";

const DashVendedor = ({ clientes, user }) => {
  const clientesVendedor = filterByVendedor(clientes, user.vendedor);
  return (
    <DivContainerCardsVendedores data-aos="fade-right" data-aos-duration="1200">
      {clientesVendedor.map((cliente) => (
        <Tooltip
          key={cliente._id}
          title={`Ultimo Contacto - ${
            formatDate(cliente.modificacion?.fechaModificacion) ||
            formatDate(cliente.fechaModificacion) ||
            formatDate(cliente.fechaContacto)
          } - ${cliente.modificacion?.user || ""}`}
        >
          <CardVendedores estado={cliente.estado}>
            <span style={{ fontWeight: "bold" }}>{cliente.nombreLocal}</span>
            <DivContainerState>
              <FiberManualRecordIcon
                style={{
                  color: stateColors[cliente.estado],
                }}
              />
              <span>{cliente.estado}</span>
            </DivContainerState>
          </CardVendedores>
        </Tooltip>
      ))}
    </DivContainerCardsVendedores>
  );
};

export default DashVendedor;
