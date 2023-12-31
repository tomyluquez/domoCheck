import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { BoxFicha } from "../Styles/Pages/ClientsIndStyles";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../redux/slices/value";
import tabPanels from "../data/TabPanel";

export default function Tabs({ cliente, hitos }) {
  const value = useSelector((state) => state.value.value);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    dispatch(changeValue(newValue));
  };

  return (
    <BoxFicha>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: "color.inputs",
          }}
        >
          <TabList
            style={{
              zIndex: 2,
              width: "100%",
            }}
            sx={{ bgcolor: "color.inputs" }}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            {tabPanels(cliente, hitos).map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
                sx={{ bgcolor: "color.inputs" }}
              />
            ))}
          </TabList>
        </Box>
        {tabPanels(cliente, hitos).map((tabPanel) => (
          <TabPanel
            style={{ overflow: "auto", height: "450px" }}
            value={tabPanel.value}
            key={tabPanel.value}
            sx={{ bgcolor: "color.inputs" }}
          >
            {tabPanel.componente}
          </TabPanel>
        ))}
      </TabContext>
    </BoxFicha>
  );
}
