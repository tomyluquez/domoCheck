import emailjs from "@emailjs/browser";

export const sendEmailMarketing = (vendedor, user, cliente, mailVendedor) => {
  emailjs.send(
    "service_pp0fr8t",
    "template_ncoxq9t",
    {
      from_name: "Nueva actividad Domo",
      to_name: `${vendedor}`,
      message: `Soy ${user}, acabo de pasarte una actividad por Domo para que te contactes con ${cliente.nombreLocal}, ya que no esta dando respuesta a los pedidos de marketing`,
      user_email: `${mailVendedor}`,
      user_email_bcc: "luquez1431@gmail.com",
    },
    "yjnMEwyiByxM26fSg"
  );
};
