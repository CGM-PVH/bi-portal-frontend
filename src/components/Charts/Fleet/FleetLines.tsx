import React, { Suspense } from "react";
import ChartContainer from "./ChartContainer";
import { fleetLinesData } from "../../../data/dataCharts/fleet/FleetLinesData";

const LineChartRechartsComponent = React.lazy(() => import("../CustosDetalhados/LineChart"));

const FleetLines = ({ isMobile, className }: { isMobile: boolean; className: string; }) => {
    return (
        <Suspense fallback={<div>Carregando gráfico de linhas...</div>}>
            <ChartContainer isMobile={isMobile} className={className}>
                <LineChartRechartsComponent
                    data={fleetLinesData}
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

export default FleetLines;