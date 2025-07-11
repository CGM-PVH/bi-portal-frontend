// src/components/Charts/Fleet/FleetPie.tsx
import { Suspense } from "react";
import ChartContainer from "./ChartContainer";
import { fleetPieData } from "../../../data/dataCharts/fleet/FleetPieData";
import PieChartRecharts from "../CustosDetalhados/PieChart";

const FleetPie = ({ isMobile, className }: { isMobile: boolean; className: string; }) => {
    return (
        <Suspense fallback={<div>Carregando gráfico de pizza...</div>}>
            <ChartContainer isMobile={isMobile} className={className}>
                <PieChartRecharts
                    data={fleetPieData}
                    donut={false}
                    title=""
                    showLegend={true}
                    sizeLegend={12}
                    sizeTitle={24}
                    chartHeight={isMobile ? 300 : 350}
                    chartWidth={isMobile ? 125 : 350}
                    colors={["#0088FE", "#00C49F", "#FFBB28", "#ff3e00"]}
                    className="text-white w-full h-full" />
            </ChartContainer>
        </Suspense>
    );
};

export default FleetPie;