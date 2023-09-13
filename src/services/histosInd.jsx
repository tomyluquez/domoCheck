import FastfoodIcon from "@mui/icons-material/Fastfood";
import MapIcon from "@mui/icons-material/Map";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

export const hitosInd = (cliente, info) => {
  console.log(cliente);
  const hitosIndividual = cliente.actividades.filter((actividad) => {
    const tieneResultado =
      actividad.resultado !== undefined && actividad.resultado !== "";
    const coincideDato = info ? actividad.dato === info : true;
    const coincideSeguimiento = actividad.dato === `Seguimiento ${info}`;

    return (
      (tieneResultado && coincideDato) ||
      (tieneResultado && coincideSeguimiento)
    );
  });
  return hitosIndividual.reverse();
};

export const tipoHito = {
  "Seguimiento menu": <FastfoodIcon />,

  menu: <FastfoodIcon />,

  "Seguimiento mapa": <MapIcon />,

  mapa: <MapIcon />,

  "Seguimiento imgStore": <InsertPhotoIcon />,

  imgStore: <InsertPhotoIcon />,

  imgProd: <InsertPhotoIcon />,

  "Seguimiento imgProd": <InsertPhotoIcon />,

  "Seguimiento datos": <FilePresentIcon />,

  datos: <FilePresentIcon />,
};
