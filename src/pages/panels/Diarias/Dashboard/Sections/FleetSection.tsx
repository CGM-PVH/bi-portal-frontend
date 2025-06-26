// src/pages/panels/Fleet/FleetSection.tsx
import React, { Suspense } from "react";
import GenericTable from "../../../../../components/Table/GenericTable.tsx";

// Lazy loading dos gráficos
const BarChartRecharts = React.lazy(() => import("../../../../../components/Charts/BarChart.tsx"));
const LineChartRechartsComponent = React.lazy(() => import("../../../../../components/Charts/LineChart.tsx"));
const PieChartRecharts = React.lazy(() => import("../../../../../components/Charts/PieChart.tsx"));

// ============================
// Componente Principal
// ============================
const FleetSection = ({ isMobile, className }: { isMobile: boolean; className: string; }) => {
  return (
    <>
      <h1 className={`text-2xl font-bold bg-official-yellow rounded-t-sm p-2  text-left ${className}`}>
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

// ============================
// Componentes Auxiliares
// ============================

// Componente de Título + Container
const ChartCard = ({ title, children }: { title: string; children: React.ReactNode; }) => (
  <div>
    <h2 className="text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center">
      {title}
    </h2>
    {children}
  </div>
);

// ============================
// Tabela
// ============================
const FleetTable = ({ isMobile, className }: { isMobile: boolean; className?: string; }) => {
  const sampleData = [
    { placa: "ABC-1234", modelo: "Fiat Uno", ano: 2015, os: 12, custo: 5200 },
    { placa: "XYZ-5678", modelo: "Chevrolet Onix", ano: 2018, os: 8, custo: 3400 },
    { placa: "DEF-9101", modelo: "Toyota Corolla", ano: 2020, os: 15, custo: 7800 },
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

// ============================
// Gráfico de Barras
// ============================
const FleetBars = ({ isMobile, className }: { isMobile: boolean; className: string; }) => {
  const sampleData = [
    { label: "Janeiro", vendas: 300, lucro: 240, margemErro: 20 },
    { label: "Fevereiro", vendas: 350, lucro: 221, margemErro: 40 },
    { label: "Março", vendas: 100, lucro: 29, margemErro: 200 },
    { label: "Abril", vendas: 250, lucro: 129, margemErro: 70 },
    { label: "Maio", vendas: 200, lucro: 246, margemErro: 120 },
  ];

  return (
    <Suspense fallback={<div>Carregando gráfico de barras...</div>}>
      <ChartContainer isMobile={isMobile} className={className}>
        <BarChartRecharts
          data={sampleData}
          title=""
          showLegend={true}
          sizeLegend={12}
          sizeTitle={20}
          height={230}
          width={350}
          colors={["#61dafb", "#dd1b16", "#FFBB28"]}
          className={`text-white w-full h-full ${isMobile ? "text-sm" : "text-base"}`}
        />
      </ChartContainer>
    </Suspense>
  );
};

// ============================
// Gráfico de Linhas
// ============================
const FleetLines = ({ isMobile, className }: { isMobile: boolean; className: string; }) => {
  const sampleData = [
    { label: "2022", uv: 4000, pv: 2400, amt: 2400 },
    { label: "2023", uv: 3000, pv: 1398, amt: 2210 },
    { label: "2024", uv: 2000, pv: 9800, amt: 2290 },
    { label: "2025", uv: 2780, pv: 3908, amt: 2000 },
  ];

  return (
    <Suspense fallback={<div>Carregando gráfico de linhas...</div>}>
      <ChartContainer isMobile={isMobile} className={className}>
        <LineChartRechartsComponent
          data={sampleData}
          title=""
          showLegend={true}
          sizeLegend={16}
          sizeTitle={20}
          height={260}
          width={1000}
          colors={["#8884d8", "#82ca9d", "#FFBB28"]}
          className="text-white w-full h-full"
        />
      </ChartContainer>
    </Suspense>
  );
};

// ============================
// Gráfico de Pizza
// ============================
const FleetPie = ({ isMobile, className }: { isMobile: boolean; className: string; }) => {
  const sampleData = [
    { label: "React", value: 10 },
    { label: "Vue", value: 30 },
    { label: "Angular", value: 20 },
    { label: "Svelte", value: 20 },
  ];

  return (
    <Suspense fallback={<div>Carregando gráfico de pizza...</div>}>
      <ChartContainer isMobile={isMobile} className={className}>
        <PieChartRecharts
          data={sampleData}
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
      </ChartContainer>
    </Suspense>
  );
};

// ============================
// Container Padrão dos Gráficos
// ============================
const ChartContainer = ({ children, isMobile, className }: { children: React.ReactNode; isMobile: boolean; className: string; }) => (
  <div
    className={`${className} p-4 rounded-b-lg shadow-md ${isMobile ? "max-h-72" : "max-h-96"} h-full overflow-y-auto flex items-center justify-center`}
  >
    {children}
  </div>
);
