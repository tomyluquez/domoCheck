export const getDataProspect = (prospects) => {
  const states = ["Pendiente", "Acepto", "No lo quiere", "Seguimiento"];
  let data = [];

  states.forEach((state) => {
    const prospect = prospects.filter((prospect) => prospect.estado === state);
    return data.push({
      estado: state,
      data: prospect,
    });
  });

  const total = data.reduce((acc, data) => data.data.length + acc, 0);
  return { data, total };
};
