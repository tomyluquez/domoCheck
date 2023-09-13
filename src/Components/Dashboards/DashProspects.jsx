import { Box, LinearProgress } from "@mui/material";
import { getDataProspect } from "../../services/getDataProspects";
import { Cards } from "../../Styles/Pages/DashboardStyles";

const DashProspects = ({ prospects, darkMode, width }) => {
  const { data, total } = getDataProspect(prospects);
  return (
    <Cards modo={darkMode ? "dark" : ""} width={width}>
      <h4 style={{ margin: 0 }}>Prospectos</h4>
      <h6>Cantidad de prospectos cargados: {total}</h6>
      {data &&
        data.map((prospect, i) => (
          <Box
            key={i}
            sx={{
              width: "100%",
              justifyContent: "start",
            }}
            className="flex"
          >
            <span>
              {prospect.estado} - (
              {prospect.data?.length > 0 ? prospect.data.length : 0})
            </span>
            <LinearProgress
              variant="determinate"
              value={100}
              sx={{
                width:
                  (prospect.data?.length > 0 ? prospect.data.length : 0) * 30,
                borderRadius: "20px",
                height: "10px",
              }}
            />
          </Box>
        ))}
    </Cards>
  );
};

export default DashProspects;
