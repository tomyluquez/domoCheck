export const getStateProspects = (prospects) => {
  const states = ["Pendiente", "Acepto", "No lo quiere", "Seguimiento"];

  let data = [];
  states.forEach((state) => {
    const prospect = prospects.filter((prospect) => prospect.estado === state);
    return data.push({
      estado: state,
      data: prospect,
    });
  });

  return data;
};
