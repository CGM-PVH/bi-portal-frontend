// src/components/Charts/Suppliersection/SuppliersBarChart.tsx
import React, { Suspense } from 'react';
import { suppliersBarChartData } from '../../../data/dataCharts/Supplier/suppliersChartsData';
import type { SuppliersBarChartProps } from '../../../data/dataCharts/Supplier/suppliersTypes';

const VerticalBarChartRecharts = React.lazy(() =>
    import('../../Charts/CustosDetalhados/BarChart'));

export const SuppliersBarChart: React.FC<SuppliersBarChartProps> = ({ isMobile, className }) => {
    return (
        <div
            className={`${className} p-4 rounded-b-lg shadow-md ${isMobile ? 'max-h-72' : 'max-h-96'} h-full overflow-y-auto flex items-center justify-center`}
        >
            <Suspense fallback={<div>Carregando gráfico de barras...</div>}>
                <VerticalBarChartRecharts
                    data={suppliersBarChartData}
                    title=""
                    showLegend={true}
                    sizeLegend={12}
                    sizeTitle={20}
                    height={230}
                    width={350}
                    colors={['#61dafb', '#dd1b16', '#FFBB28']}
                    className={`text-white w-full h-full ${isMobile ? 'text-sm' : 'text-base'}`}
                />
            </Suspense>
        </div>
    );
};
export default SuppliersBarChart;   