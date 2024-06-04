const getReports = () => {
  return fetch("https://domo-backend.onrender.com/api/reports").then(
    (response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    }
  );
};

export default getReports;
