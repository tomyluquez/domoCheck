import { Box, CircularProgress, Typography } from "@mui/material";

const Progress = ({ value }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" value={Math.round(value)} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          style={{ fontFamily: "poppins" }}
        >
          {Math.round(value)}%
        </Typography>
      </Box>
    </Box>
  );
};

export default Progress;
