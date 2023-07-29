import { actTodayCump } from "../services/actividadesToday";

export const tabs = [
  {
    label: "Estado de integracion",
    value: "1",
  },
  {
    label: "Tiempos de integracion",
    value: "2",
  },
  {
    label: "Observaciones",
    value: "3",
  },
  {
    label: "Historial de Actividades",
    value: "4",
  },
  {
    label: "Hitos",
    value: "5",
  },
  {
    label: "Usuarios y Contraseñas",
    value: "6",
  },
];

export const generateTabsDashAdmin = (clientes, usuario) => {
  const { actCumplidasToday, actPendientesToday, actVencidas } = actTodayCump(
    clientes,
    usuario
  );

  return [
    {
      value: 1,
      array: actCumplidasToday,
      condicion: "cumplidor",
      label: `Cumplidas (${actCumplidasToday.length})`,
    },
    {
      value: 2,
      array: actPendientesToday,
      condicion: "creador",
      label: `Pendientes (${actPendientesToday.length})`,
    },
    {
      value: 3,
      array: actVencidas,
      condicion: "creador",
      label: `Vencidas (${actVencidas.length})`,
    },
  ];
};
