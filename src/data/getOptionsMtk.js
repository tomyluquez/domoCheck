export const optionsMtk = (cliente, datosMarketing) => {
  let options = datosMarketing.filter((dato) => {
    for (let i = 0; i < cliente.actividades.length; i++) {
      if (
        dato.value === cliente.actividades[i].dato ||
        cliente[dato.value].estado === "Ok"
      ) {
        return false;
      }
    }
    return true;
  });
  return options;
};
