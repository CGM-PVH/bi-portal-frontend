// FleetSection.tsx com lazy loading nos gráficos
import React, { Suspense } from "react";
import GenericTable from "../../../../../components/Table/GenericTable.tsx";

const BarChartRecharts = React.lazy(() => import("../../../../../components/Charts/BarChart.tsx"));
const LineChartRecharts = React.lazy(() => import("../../../../../components/Charts/LineChart.tsx"));
const PieChartRecharts = React.lazy(() => import("../../../../../components/Charts/PieChart.tsx"));

const FleetSection = ({
  isMobile,
  className,
}: {
  isMobile: boolean;
  className: string;
}) => {
  return (
    <>
      <h1
        className={`text-2xl font-bold bg-official-yellow rounded-md p-2 mb-4 text-left ${className}`}
      >
        VEÍCULOS E FROTA
      </h1>
      <h2 className="text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center">
        Veículos x Custo x Ordem de Serviço (OS)
      </h2>
      <FleetTable isMobile={isMobile} className="" />
      <div
        className={`mb-4 grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-3"
          }`}
      >
        <div className={isMobile ? "" : "col-span-1"}>
          <h2 className="text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center">
            Custo médio por marca/modelo/ano
          </h2>
          <FleetBars isMobile={isMobile} className="bg-white" />
        </div>
        <div className={isMobile ? "" : "col-span-1"}>
          <h2 className="text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center">
            Intervalos entre OS por placa
          </h2>
          <FleetLines isMobile={isMobile} className="bg-white" />
        </div>
        <div className={isMobile ? "" : "col-span-1"}>
          <h2 className="text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center">
            Proporção por tipo de frota
          </h2>
          <FleetPie isMobile={isMobile} className="bg-white" />
        </div>
      </div>
    </>
  );
};

const FleetTable = ({
  isMobile,
  className,
}: {
  isMobile: boolean;
  className?: string;
}) => {
  const sampleData = [
    { placa: "ABC-1234", modelo: "Fiat Uno", ano: 2015, os: 12, custo: 5200 },
    {
      placa: "XYZ-5678",
      modelo: "Chevrolet Onix",
      ano: 2018,
      os: 8,
      custo: 3400,
    },
    {
      placa: "DEF-9101",
      modelo: "Toyota Corolla",
      ano: 2020,
      os: 15,
      custo: 7800,
    },
    { placa: "GHI-1121", modelo: "Ford Ka", ano: 2016, os: 5, custo: 2100 },
  ];

  const anos = [...new Set(sampleData.map((d) => d.ano))];

  return (
    <GenericTable
      data={sampleData}
      columns={[
        { field: "placa" },
        { field: "modelo" },
        { field: "ano" },
        { field: "os", label: "Nº de OS" },
        { field: "custo", label: "Custo Total (R$)" },
      ]}
      filtersConfig={[
        { field: "modelo", label: "Modelo", type: "text" },
        { field: "ano", label: "Ano", type: "select", options: anos },
        { field: "custo", label: "Custo", type: "number" },
      ]}
      isMobile={isMobile}
      className={className}
    />
  );
};

const FleetBars = ({
  isMobile,
  className,
}: {
  isMobile: boolean;
  className: string;
}) => {
  const sampleDataBarChart = [
    { label: "Janeiro", vendas: 300, lucro: 240, margemErro: 20 },
    { label: "Fevereiro", vendas: 350, lucro: 221, margemErro: 40 },
    { label: "Março", vendas: 100, lucro: 29, margemErro: 200 },
    { label: "Março", vendas: 250, lucro: 129, margemErro: 70 },
    { label: "Março", vendas: 200, lucro: 246, margemErro: 120 },
  ];

  return (
    <Suspense fallback={<div>Carregando gráfico de barras...</div>}>
      <div
        className={`${className} p-4 rounded-b-lg shadow-md ${isMobile ? "max-h-72" : "max-h-96"
          } h-full overflow-y-auto flex items-center justify-center`}
      >
        <BarChartRecharts
          data={sampleDataBarChart}
          title={""}
          showLegend={true}
          sizeLegend={12}
          sizeTitle={20}
          height={230}
          width={350}
          colors={["#61dafb", "#dd1b16", "#FFBB28"]}
          className={`text-white w-full h-full ${isMobile ? "text-sm" : "text-base"
            }`}
        />
      </div>
    </Suspense>
  );
};

const FleetLines = ({
  isMobile,
  className,
}: {
  isMobile: boolean;
  className: string;
}) => {
  const sampleDataLineChart = [
    { label: "2022", uv: 4000, pv: 2400, amt: 2400 },
    { label: "2023", uv: 3000, pv: 1398, amt: 2210 },
    { label: "2024", uv: 2000, pv: 9800, amt: 2290 },
    { label: "2025", uv: 2780, pv: 3908, amt: 2000 },
  ];

  return (
    <Suspense fallback={<div>Carregando gráfico de linhas...</div>}>
      <div
        className={`${className} p-4 rounded-b-lg shadow-md ${isMobile ? "max-h-72" : "max-h-96"
          } h-full overflow-y-auto flex items-center justify-center`}
      >
        <LineChartRecharts
          data={sampleDataLineChart}
          title=""
          showLegend={true}
          sizeLegend={16}
          sizeTitle={20}
          height={500}
          width={1000}
          colors={["#8884d8", "#82ca9d", "#FFBB28"]}
          className="text-white w-full h-full"
        />
      </div>
    </Suspense>
  );
};

const FleetPie = ({
  isMobile,
  className,
}: {
  isMobile: boolean;
  className: string;
}) => {
  const sampleDataPieChart = [
    { label: "React", value: 40 },
    { label: "Vue", value: 30 },
    { label: "Angular", value: 20 },
    { label: "Svelte", value: 10 },
  ];

  return (
    <Suspense fallback={<div>Carregando gráfico de pizza...</div>}>
      <div
        className={`${className} p-4 rounded-b-lg shadow-md ${isMobile ? "max-h-72" : "max-h-96"
          } h-full overflow-y-auto flex items-center justify-center`}
      >
        <PieChartRecharts
          data={sampleDataPieChart}
          donut={false}
          title=""
          showLegend={true}
          sizeLegend={12}
          sizeTitle={24}
          chartHeight={isMobile ? 300 : 350}
          chartWidth={isMobile ? 125 : 350}
          colors={["#0088FE", "#00C49F", "#FFBB28", "#ff3e00"]}
          className="text-white w-full h-full"
        />
      </div>
    </Suspense>
  );
};

export default FleetSection;
