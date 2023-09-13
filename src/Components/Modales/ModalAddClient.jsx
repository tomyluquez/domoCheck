import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import FormAddClient from "../Formularios/FormAddClient";
import FormAddProspect from "../Formularios/FormAddProspect";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ModalAddClient = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Agregar Cliente" />
          <Tab label="Agregar Prospecto" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <FormAddClient />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <FormAddProspect />
      </CustomTabPanel>
    </Box>
  );
};

export default ModalAddClient;
