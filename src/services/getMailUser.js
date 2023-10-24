export const getUserEmail = (users, vendedor) => {
  const emailUser = users.filter((user) => user.vendedor === vendedor);
  return emailUser.email;
};
