import React, { Suspense } from "react";
import { sampleDataLineChart } from "../../../data/dataCharts/OverView/overviewChartsData";
import type { ChartContainerProps } from "../../../interfaces/overview/overviewTypes";

const LineChartRecharts = React.lazy(() => import("../CustosDetalhados/LineChart"));

export const OverViewTimeLine: React.FC<ChartContainerProps> = ({ className }) => {
    return (
        <>
            <h2 className="text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center">
                Linha do Tempo
            </h2>

            <div className={`${className} p-4 rounded-b-lg shadow-md max-h-96 h-full overflow-y-auto flex items-center justify-center`}>
                <Suspense fallback={<div>Carregando gráfico de linha...</div>}>
                    <LineChartRecharts
                        data={sampleDataLineChart}
                        title=""
                        showLegend={true}
                        sizeLegend={16}
                        sizeTitle={20}
                        height={300}
                        width={1250}
                        colors={["#8884d8", "#82ca9d", "#FFBB28"]}
                        className="text-white w-full h-full"
                    />
                </Suspense>
            </div>
        </>
    );
};

export default OverViewTimeLine;        