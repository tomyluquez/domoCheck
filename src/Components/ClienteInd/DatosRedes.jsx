import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faMotorcycle,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";

const hasLinkIg = (link = null) => {
  if (!link) return null;

  const urlInstagram = link.includes("www.instagram.com")
    ? link
    : "https://instagram.com/" + link;
  return urlInstagram;
};

const DatosRedes = ({ cliente }) => {
  const urlInstagram = hasLinkIg(cliente.redes?.instagram);
  return (
    <div className="flex" style={{ justifyContent: "start", gap: "20px" }}>
      {cliente.redes && cliente.redes.instagram && (
        <a href={urlInstagram} target="blank" style={{ color: "inherit" }}>
          <Tooltip title="Instagram del cliente">
            <FontAwesomeIcon icon={faInstagram} />
          </Tooltip>
        </a>
      )}
      {cliente.redes && cliente.redes.seguidores && (
        <Tooltip title={`${cliente.redes.seguidores} seguidores`}>
          <FontAwesomeIcon icon={faPeopleArrows} />
        </Tooltip>
      )}
      {cliente.redes && cliente.redes.logistica === "si" && (
        <Tooltip title="Cliente tiene logistica propia">
          <FontAwesomeIcon icon={faMotorcycle} />
        </Tooltip>
      )}
    </div>
  );
};

export default DatosRedes;
