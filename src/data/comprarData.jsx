import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
export const compararData = (data, dataAnterior) => {
  if (data < dataAnterior)
    return <ArrowDropDownIcon style={{ fontSize: "45px", color: "red" }} />;
  if (data > dataAnterior)
    return (
      <ArrowDropUpOutlinedIcon style={{ fontSize: "45px", color: "green" }} />
    );
  if (data === dataAnterior)
    return (
      <HorizontalRuleOutlinedIcon
        style={{ fontSize: "25px", color: "yellow" }}
      />
    );
};
