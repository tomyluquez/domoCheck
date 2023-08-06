import { useState } from "react";
import { MenuHamburguer, NavbarStyles } from "../Styles/Pages/NavbarStyles";
import SidebarMobile from "../Components/SidebarMobile";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, FormControlLabel, Switch } from "@mui/material";
import Notifications from "../Components/Header/Notifications";
import useGetNotifications from "./../Hooks/useGetNotifications";
import { changeMode } from "../redux/slices/mode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const darkMode = useSelector((state) => state.mode.darkMode);
  const { data: notifications } = useGetNotifications(user.id);
  const [checked, setChecked] = useState(darkMode);
  const dispatch = useDispatch();

  const handlerMode = (e) => {
    setChecked(e.target.checked);
    dispatch(changeMode(e.target.checked));
  };

  return (
    <NavbarStyles>
      <MenuHamburguer onClick={() => setSidebarOpen(true)} />
      {sidebarOpen && <SidebarMobile setSidebarOpen={setSidebarOpen} />}
      <div className="flexBet">
        <FormControlLabel
          control={<Switch defaultChecked />}
          label={checked ? <WbSunnyIcon /> : <DarkModeIcon />}
          checked={checked}
          onChange={(e) => handlerMode(e)}
        />
        <div className="flex">
          <span>
            Hola {user.name.toUpperCase()} !{" "}
            <span style={{ fontSize: "25px" }}>👋</span>
          </span>
          <Avatar sx={{ color: "color.primary", bgcolor: "color.secondary" }}>
            {user.name.split("")[0].toUpperCase()}
          </Avatar>
          <Notifications notifications={notifications} user={user} />
        </div>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
