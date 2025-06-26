import FleetTable from "../../../../../components/Fleet/FleetTable";
import FleetBars from "../../../../../components/Fleet/FleetBars";
import FleetLines from "../../../../../components/Fleet/FleetLines";
import FleetPie from "../../../../../components/Fleet/FleetPie";
import ChartCard from "../../../../../components/Fleet/ChartCard"

const FleetSection = ({ isMobile, className }: { isMobile: boolean; className: string; }) => {
  return (
    <>
      <h1 className={`text-2xl font-bold bg-official-yellow rounded-t-sm p-2 text-left ${className}`}>
        VEÍCULOS E FROTA
      </h1>

      <h2 className="text-xl font-semibold bg-chart-title rounded-b-sm p-2 text-center">
        Veículos x Custo x Ordem de Serviço (OS)
      </h2>

      <FleetTable isMobile={isMobile} className="" />

      <div className={`mb-4 grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
        <ChartCard title="Custo médio por marca/modelo/ano">
          <FleetBars isMobile={isMobile} className="bg-white" />
        </ChartCard>

        <ChartCard title="Intervalos entre OS por placa">
          <FleetLines isMobile={isMobile} className="bg-white" />
        </ChartCard>

        <ChartCard title="Proporção por tipo de frota">
          <FleetPie isMobile={isMobile} className="bg-white" />
        </ChartCard>
      </div>
    </>
  );
};

export default FleetSection;