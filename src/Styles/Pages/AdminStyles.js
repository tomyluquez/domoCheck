import { styled } from "styled-components";
import { Cards } from "./DashboardStyles";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { stateColors, hoverColors } from "./../../data/colors";

export const DivContainerUsers = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const CardsAdmin = styled(Cards)`
  cursor: pointer;
`;

export const DivIcons = styled.div`
  display: flex;
  width: 100%;
`;

export const DivAvatar = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const DivIconsUser = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const EditIcon = styled(ModeEditOutlineOutlinedIcon)`
  cursor: pointer;
  font-size: 20px !important;
  color: ${stateColors["Despachado"]};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${hoverColors["Despachado"]};
  }
`;

export const DeleteIcon = styled(DeleteForeverOutlinedIcon)`
  cursor: pointer;
  font-size: 20px !important;
  color: ${stateColors["No lo quiere"]};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${hoverColors["No lo quiere"]};
  }
`;

export const ActividadesAdmin = styled(Cards)`
  width: 30% !important;
  @media screen and (max-width: 700px) {
    width: 100% !important;
  }
`;
