// Funções dos Gráficos
import React, { Suspense } from "react";

const Dispersal = React.lazy(() => import("../../../../../components/Charts/CustosDetalhados/DispersalChart.tsx"));
const HeatMap = React.lazy(() => import("../../../../../components/Charts/CustosDetalhados/HeatMapChar.tsx"));
const StackedBar = React.lazy(() => import("../../../../../components/Charts/CustosDetalhados/StackedChar.tsx"));
const VerticalBar = React.lazy(() => import("../../../../../components/Charts/CustosDetalhados/VerticalChar.tsx"));

export default function CustosDetalhados() {

  return (
    <div className="mt-4 mb-4 space-y-10">
      {/* Barras verticais */}
      <Suspense fallback={<div>Carregando gráfico de barras...</div>}>
        <VerticalBar />
      </Suspense>

      {/* Barras empilhadas */}
      <Suspense fallback={<div>Carregando gráfico de barras...</div>}>
        <StackedBar />
      </Suspense>

      {/* Gráfico de Dispersão */}
      <Suspense fallback={<div>Carregando gráfico de dispersão...</div>}>
        <Dispersal />
      </Suspense>

      {/* Mapa de Calor */}
      <Suspense fallback={<div>Carregando gráfico de mapa de calor...</div>}>
        <HeatMap />
      </Suspense>
    </div>
  );
}
