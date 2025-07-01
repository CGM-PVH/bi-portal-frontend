// ==========================
// src/pages/panels/Diarias/Sections/OverView.tsx
// ==========================
import React, { Suspense } from "react";

// Lazy loading dos componentes locais
const OverViewHeader = React.lazy(() => import("@/components/Charts/OverView/OverViewHeader"));
const OverViewKpiCards = React.lazy(() => import("@/components/Charts/OverView/OverViewKpiCards"));
const OverViewTimeLine = React.lazy(() => import("@/components/Charts/OverView/OverViewTimeLine"));
const OverViewPizzaDistribution = React.lazy(() => import("@/components/Charts/OverView/OverViewPizzaDistribution"));

// Import dos tipos
import type { OverViewProps } from "@/interfaces/overview/overviewTypes";

// ==========================
// Componente Principal
// ==========================
export const OverView: React.FC<OverViewProps> = ({ isMobile }) => {
  const screenMode = ["bg-slate-800", "bg-white"];
  const currentTheme = 1; // Índice do tema atual
  const themeClass = screenMode[currentTheme];

  return (
    <>
      <Suspense fallback={<div>Carregando cabeçalho...</div>}>
        <OverViewHeader />
      </Suspense>

      <Suspense fallback={<div>Carregando KPIs...</div>}>
        <OverViewKpiCards
          className={themeClass === "bg-white" ? "bg-white text-black" : "bg-slate-800 text-white"}
          isMobile={isMobile}
        />
      </Suspense>

      <div className={`mb-4 grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-5"}`}>
        <div className={isMobile ? "" : "col-span-2"}>
          <Suspense fallback={<div>Carregando pizza...</div>}>
            <OverViewPizzaDistribution
              className={`${themeClass} min-w-fit`}
              isMobile={isMobile}
            />
          </Suspense>
        </div>

        <div className={isMobile ? "" : "col-span-3"}>
          <Suspense fallback={<div>Carregando linha do tempo...</div>}>
            <OverViewTimeLine className={themeClass} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default OverView;
