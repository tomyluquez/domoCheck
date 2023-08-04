import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faMotorcycle,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";

const DatosRedes = ({ cliente }) => {
  return (
    <div className="flex" style={{ justifyContent: "start", gap: "20px" }}>
      {cliente.redes && cliente.redes.instagram && (
        <a
          href={`https://www.instagram.com/${cliente.redes.instagram}`}
          target="blank"
        >
          <Tooltip title="Instagram del cliente">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "grey" }} />
          </Tooltip>
        </a>
      )}
      {cliente.redes && cliente.redes.seguidores && (
        <Tooltip title={`${cliente.redes.seguidores} seguidores`}>
          <FontAwesomeIcon icon={faPeopleArrows} style={{ color: "grey" }} />
        </Tooltip>
      )}
      {cliente.redes && cliente.redes.logistica === "si" && (
        <Tooltip title="Cliente tiene logistica propia">
          <FontAwesomeIcon icon={faMotorcycle} style={{ color: "grey" }} />
        </Tooltip>
      )}
    </div>
  );
};

export default DatosRedes;
