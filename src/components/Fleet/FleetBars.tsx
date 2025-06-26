import React, { Suspense } from "react";
import { fleetBarsData } from "../../data/fleet/FleetBarsData";
import ChartContainer from "./ChartContainer";

const BarChartRecharts = React.lazy(() => import("../Charts/BarChart"));

const FleetBars = ({ isMobile, className }: { isMobile: boolean; className: string; }) => {
    return (
        <Suspense fallback={<div>Carregando gráfico de barras...</div>}>
            <ChartContainer isMobile={isMobile} className={className}>
                <BarChartRecharts
                    data={fleetBarsData}
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

export default FleetBars;