import TablaProspectos from "../../Components/Prospectos/TablaProspectos";
import Filters from "../../Components/Clientes/Filters";
import { useSelector } from "react-redux";

const Prospectos = () => {
  const { prospects, filteredProspects } = useSelector(
    (state) => state.clientes
  );

  console.log(prospects);
  console.log(filteredProspects);

  return (
    <>
      <Filters clientes={prospects} clientesActivos={filteredProspects} />{" "}
      <TablaProspectos prospectos={filteredProspects} />
    </>
  );
};

export default Prospectos;
