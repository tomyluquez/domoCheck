import { filterByVendedorAndState } from "../services/filteredClients";
import { stateColors } from "./colors";

export const estados = [
  { value: "Pendiente", descripcion: "Pendiente" },
  { value: "No contesta", descripcion: "No contesta" },
  { value: "No lo quiere", descripcion: "No lo quiere" },
  { value: "Faltan datos", descripcion: "Faltan datos" },
  { value: "Integrado", descripcion: "Integrado" },
  { value: "Despachado", descripcion: "Despachado" },
  { value: "Testeo", descripcion: "Testeo" },
  { value: "Configuracion", descripcion: "Configuracion" },
];

export const StateDashVendedor = (clientes, vendedor) => {
  let stateDash = [
    {
      estado: "Pendiente",
      cantidad: filterByVendedorAndState(clientes, vendedor, "Pendiente")
        .length,
      clientes: filterByVendedorAndState(clientes, vendedor, "Pendiente"),
      color: stateColors["Pendiente"],
      fecha: "fechaSolicitud",
    },
    {
      estado: "Faltan datos",
      cantidad: filterByVendedorAndState(clientes, vendedor, "Faltan datos")
        .length,
      clientes: filterByVendedorAndState(clientes, vendedor, "Faltan datos"),
      color: stateColors["Faltan datos"],
      fecha: "fechaModificacion",
    },
    {
      estado: "Despachado",
      cantidad: filterByVendedorAndState(clientes, vendedor, "Despachado")
        .length,
      clientes: filterByVendedorAndState(clientes, vendedor, "Despachado"),
      color: stateColors["Despachado"],
      fecha: "fechaDespachado",
    },
    {
      estado: "No contesta",
      cantidad: filterByVendedorAndState(clientes, vendedor, "No contesta")
        .length,
      clientes: filterByVendedorAndState(clientes, vendedor, "No contesta"),
      color: stateColors["No contesta"],
      fecha: "fechaModificacion",
    },
    {
      estado: "No lo quiere",
      cantidad: filterByVendedorAndState(clientes, vendedor, "No lo quiere")
        .length,
      clientes: filterByVendedorAndState(clientes, vendedor, "No lo quiere"),
      color: stateColors["No lo quiere"],
      fecha: "fechaModificacion",
    },
    {
      estado: "Testeo",
      cantidad: filterByVendedorAndState(clientes, vendedor, "Testeo").length,
      clientes: filterByVendedorAndState(clientes, vendedor, "Testeo"),
      color: stateColors["Testeo"],
      fecha: "fechaTesteo",
    },
    {
      estado: "Configuracion",
      cantidad: filterByVendedorAndState(clientes, vendedor, "Configuracion")
        .length,
      clientes: filterByVendedorAndState(clientes, vendedor, "Configuracion"),
      color: stateColors["Configuracion"],
      fecha: "fechaConfiguracion",
    },
    {
      estado: "Integrado",
      cantidad: filterByVendedorAndState(clientes, vendedor, "Integrado")
        .length,
      clientes: filterByVendedorAndState(clientes, vendedor, "Integrado"),
      color: stateColors["Integrado"],
      fecha: "fechaIntegrado",
    },
  ];
  return stateDash;
};
