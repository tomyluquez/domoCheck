import emailjs from "@emailjs/browser";
import { openAlert } from "../redux/slices/Alert";

export const sendEmail = (data, user, dispatch) => {
  const reporte = data.map((usuario) => {
    return ` - ${usuario.usuario.toUpperCase()}: 
           ${usuario.actividadesDiarias
             .map(
               (dia) =>
                 ` . ${dia.fecha}: Actividades para cumplir: ${dia.pendientes} - Cumplidas: ${dia.cumplidas}`
             )
             .join("\n")}
           Total: Actividades para cumplir: ${
             usuario.cantDeActividades
           } - Cumplidas: ${usuario.cumplidas}\n`;
  });

  emailjs
    .send(
      "service_pp0fr8t",
      "template_ncoxq9t",
      {
        from_name: "Reporte Semanal de Actividades",
        to_name: `${user.name}`,
        message: `Reporte semanal de activiades\n ${reporte.join("\n")} `,
        user_email: `${user.email}`,
        user_email_bcc: "luquez1431@gmail.com",
      },
      "yjnMEwyiByxM26fSg"
    )
    .then(
      (result) => {
        if (result.text === "OK") {
          dispatch(
            openAlert({
              motivo: "Reporte enviado con exito",
              estado: "success",
            })
          );
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
};
