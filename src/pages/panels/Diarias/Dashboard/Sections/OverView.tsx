// ==========================
// src/pages/panels/Diarias/Sections/OverView.tsx
// ==========================
import React from "react";

// Import dos componentes locais
import { OverViewHeader } from "../../../../../components/Charts/OverView/OverViewHeader";
import { OverViewKpiCards } from "../../../../../components/Charts/OverView/OverViewKpiCards";
import { OverViewTimeLine } from "../../../../../components/Charts/OverView/OverViewTimeLine";
import { OverViewPizzaDistribution } from "../../../../../components/Charts/OverView/OverViewPizzaDistribution";

// Import dos tipos
import type { OverViewProps } from "../../../../../interfaces/overview/overviewTypes";


// ==========================
// Componente Principal
// ==========================
export const OverView: React.FC<OverViewProps> = ({ isMobile }) => {
  const screenMode = ["bg-slate-800", "bg-white"];
  const currentTheme = 1; // Índice do tema atual
  const themeClass = screenMode[currentTheme];

  return (
    <>
      <OverViewHeader />

      <OverViewKpiCards
        className={themeClass === "bg-white" ? "bg-white text-black" : "bg-slate-800 text-white"}
        isMobile={isMobile}
      />

      <div className={`mb-4 grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-5"}`}>
        <div className={isMobile ? "" : "col-span-2"}>
          <OverViewPizzaDistribution
            className={`${themeClass} min-w-fit`}
            isMobile={isMobile}
          />
        </div>

        <div className={isMobile ? "" : "col-span-3"}>
          <OverViewTimeLine className={themeClass} />
        </div>
      </div>
    </>
  );
};

export default OverView;