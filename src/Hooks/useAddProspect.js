import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModal } from "../redux/slices/modal";
import { openAlert } from "../redux/slices/Alert";

const useNewProspect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const queryclient = useQueryClient();

  const newProspect = useMutation(
    (newClient) =>
      fetch("https://crmventasback.onrender.com/api/prospects", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newClient),
      }).then((response) => response.json()),
    {
      onSuccess: () => {
        setIsLoading(false);
        dispatch(openAlert({ motivo: "Prospect creado", estado: "success" }));
        queryclient.invalidateQueries("prospects");
        navigate("/Actividades");
        dispatch(closeModal());
      },
    }
  );
  return { newProspect, isLoading, setIsLoading };
};

export default useNewProspect;
