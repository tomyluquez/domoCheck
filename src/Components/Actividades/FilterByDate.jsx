import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const FilterByDate = ({ data, setData }) => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateRangePicker"]}>
          <DateRangePicker
            sx={{ background: "white", width: "20%" }}
            onChange={(e) =>
              setData({ ...data, dateStart: e[0].$d, dateEnd: e[1].$d })
            }
            localeText={{ start: "Desde", end: "Hasta" }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default FilterByDate;
