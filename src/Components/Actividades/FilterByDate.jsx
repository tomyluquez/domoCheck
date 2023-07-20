import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { getOptionUsers } from "../../services/getOptionUsers";
import SelectCustom from "../SelectCustom";
import { ButtonCustom } from "../../Styles/ButtonStyles";

const FilterByDate = ({ dataUsers, setData, data }) => {
  const optionsUsers = getOptionUsers(data);

  const handleToday = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    setData({
      ...dataUsers,
      dateStart: today,
      dateEnd: tomorrow,
      user: "Todos",
    });
  };

  return (
    <div className="flex" style={{ gap: "50px", marginBottom: "20px" }}>
      <ButtonCustom width="150px" onClick={handleToday}>
        Hoy
      </ButtonCustom>
      <SelectCustom
        w="20%"
        label="Usuario"
        value={dataUsers.user}
        setValue={(newValue) => setData({ ...dataUsers, user: newValue })}
        opciones={optionsUsers}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["DateRangePicker"]}
          sx={{ paddingTop: "0" }}
        >
          <DateRangePicker
            sx={{ background: "white", width: "80%" }}
            onChange={(e) =>
              setData({ ...dataUsers, dateStart: e[0].$d, dateEnd: e[1].$d })
            }
            localeText={{ start: "Desde", end: "Hasta" }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default FilterByDate;
