export const getOptionUsers = (data) => {
  const optionsUsers = [
    {
      value: "Todos",
      descripcion: "Todos",
    },
  ];
  for (let i = 0; i < data.length; i++) {
    optionsUsers.push({
      value: data[i].name,
      descripcion: data[i].name,
    });
  }
  return optionsUsers;
};
