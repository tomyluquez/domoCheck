export const filterById = (users, userName, destino, vendedor) => {
  let idUsers = [];

  if (vendedor) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].role === "vendedor" && users[i].vendedor === vendedor) {
        idUsers.push(users[i]._id);
      }
      if (
        users[i].role !== "vendedor" &&
        destino.includes(users[i].role) &&
        users[i].name !== userName
      ) {
        idUsers.push(users[i]._id);
      }
    }
  } else {
    for (let i = 0; i < users.length; i++) {
      if (destino.includes(users[i].role) && users[i].name !== userName) {
        idUsers.push(users[i]._id);
      }
    }
  }

  return idUsers;
};
