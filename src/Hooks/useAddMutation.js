import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModal } from "../redux/slices/modal";
import { openAlert } from "../redux/slices/Alert";
import emailjs from "@emailjs/browser";

const useNewMutation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const queryclient = useQueryClient();

  const mutation = useMutation(
    (newClient) =>
      fetch("https://domo-backend.onrender.com/api/clientes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newClient),
      }).then((response) => response.json()),
    {
      onSuccess: (newClient) => {
        setIsLoading(false);
        dispatch(openAlert({ motivo: "Cliente creado", estado: "success" }));
        queryclient.invalidateQueries("clients");
        navigate("/Clientes");
        dispatch(closeModal());
        emailjs.send(
          "service_pp0fr8t",
          "template_ncoxq9t",
          {
            from_name: "Nuevo cliente check delivery",
            to_name: "Integraciones Nucleo it",
            message: `Soy ${newClient.data.vendedor}, acabo de cargar en el domo a ${newClient.data.nombreLocal}, por favor comunicarse lo antes posible con ${newClient.data.nombreCrm} al ${newClient.data.telContacto}`,
            user_email: "integraciones.nucleo.it@gmail.com",
            user_email_bcc: "luquez1431@gmail.com",
          },
          "yjnMEwyiByxM26fSg"
        );
      },
    }
  );
  return { mutation, isLoading, setIsLoading };
};

export default useNewMutation;
