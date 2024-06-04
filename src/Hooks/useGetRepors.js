const getReports = () => {
  return fetch(
    "https://alive-bernete-nucleo-b87ef71f.koyeb.app/api/reports"
  ).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
};

export default getReports;
