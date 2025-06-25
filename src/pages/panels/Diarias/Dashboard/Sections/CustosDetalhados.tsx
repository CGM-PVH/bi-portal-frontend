// Funções dos Gráficos
import React, { Suspense } from "react";

const Dispersal = React.lazy(() => import("../../../../../components/Charts/DispersalChart.tsx"));
const HeatMap = React.lazy(() => import("../../../../../components/Charts/HeatMapChar.tsx"));
const StackedBar = React.lazy(() => import("../../../../../components/Charts/StackedChar.tsx"));
const VerticalBar = React.lazy(() => import("../../../../../components/Charts/VerticalChar.tsx"));

export default function CustosDetalhados() {

  return (
    <div className="mt-4 mb-4 space-y-10">
      {/* Barras verticais */}
      <div>
        <Suspense fallback={<div className="">Carregando gráfico de barras...</div>}>
          <VerticalBar />
        </Suspense>
      </div>

      {/* Barras empilhadas */}
      <div>
        <Suspense fallback={<div>Carregando gráfico de barras...</div>}>
          <StackedBar />
        </Suspense>
      </div>

      {/* Gráfico de Dispersão */}
      <div>
        <Suspense fallback={<div>Carregando gráfico de dispersão...</div>}>
          <Dispersal />
        </Suspense>
      </div>

      {/* Mapa de Calor */}
      <div>
        <Suspense fallback={<div>Carregando gráfico de mapa de calor...</div>}>
          <HeatMap />
        </Suspense>
      </div>
    </div>
  );
}
