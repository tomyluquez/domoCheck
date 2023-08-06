import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { getOptionUsers } from "../../services/getOptionUsers";
import SelectCustom from "../SelectCustom";

const FilterByDate = ({ dataActi, setData, data }) => {
  const optionsUsers = getOptionUsers(data);

  return (
    <div className="flex" style={{ gap: "50px", marginBottom: "20px" }}>
      <SelectCustom
        w="20%"
        label="Usuario"
        value={dataActi.user}
        setValue={(newValue) => setData({ ...dataActi, user: newValue })}
        opciones={optionsUsers}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["DateRangePicker"]}
          sx={{ paddingTop: "0" }}
        >
          <DateRangePicker
            sx={{ background: "white", width: "80%", bgcolor: "color.inputs" }}
            onChange={(e) =>
              setData({ ...dataActi, dateStart: e[0].$d, dateEnd: e[1].$d })
            }
            localeText={{ start: "Desde", end: "Hasta" }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default FilterByDate;
