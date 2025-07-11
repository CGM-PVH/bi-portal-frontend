// src/components/Charts/OverView/OverViewPizzaDistribution.tsx
import React, { Suspense } from "react";
import { sampleDataPieChart } from "../../../data/dataCharts/OverView/overviewChartsData";
import type { PizzaDistributionProps } from "../../../interfaces/overview/overviewTypes";

const PieChartRecharts = React.lazy(() => import("../CustosDetalhados/PieChart"));

export const OverViewPizzaDistribution: React.FC<PizzaDistributionProps> = ({
    className,
    isMobile
}) => {
    return (
        <>
            <h2 className="text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center">
                Proporção por Tipo de OS
            </h2>

            <div className={`${className} p-4 rounded-b-lg shadow-md ${isMobile ? "max-h-72" : "max-h-96"} h-full overflow-y-auto flex items-center justify-center`}>
                <Suspense fallback={<div>Carregando gráfico de pizza...</div>}>
                    <PieChartRecharts
                        data={sampleDataPieChart}
                        donut={true}
                        title=""
                        showLegend={true}
                        sizeLegend={12}
                        sizeTitle={24}
                        chartHeight={isMobile ? 300 : 350}
                        chartWidth={isMobile ? 125 : 350}
                        colors={["#0088FE", "#00C49F", "#FFBB28", "#ff3e00"]}
                        className="text-white w-full h-full"
                    />
                </Suspense>
            </div>
        </>
    );
};

export default OverViewPizzaDistribution;   