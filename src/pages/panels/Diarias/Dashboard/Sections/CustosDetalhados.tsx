// Funções dos Gráficos
import React, { Suspense } from "react";

const Dispersal = React.lazy(() => import("@/components/Charts/CustosDetalhados/DispersalChart"));
const HeatMap = React.lazy(() => import("@/components/Charts/CustosDetalhados/HeatMapChar"));
const StackedBar = React.lazy(() => import("@/components/Charts/CustosDetalhados/StackedChar"));
const VerticalBar = React.lazy(() => import("@/components/Charts/CustosDetalhados/VerticalChar"));

export default function CustosDetalhados() {

  return (
    <div className="mt-4 mb-4 space-y-10">
      {/* Barras verticais */}
      <div>
        <Suspense fallback={<div className="mb-0">Carregando gráfico de barras...</div>}>
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
