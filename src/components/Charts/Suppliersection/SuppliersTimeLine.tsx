// src/components/Charts/Suppliersection/SuppliersTimeLine.tsx
import React, { Suspense } from 'react';
import type { SuppliersTimeLineProps } from '../../../data/dataCharts/Supplier/suppliersTypes';
import { suppliersLineChartData } from '../../../data/dataCharts/Supplier/suppliersChartsData';

const LineChartRecharts = React.lazy(() =>
    import('../../Charts/CustosDetalhados/LineChart')
);

export const SuppliersTimeLine: React.FC<SuppliersTimeLineProps> = ({ className }) => {
    return (
        <div
            className={`${className} p-4 rounded-b-lg shadow-md max-h-96 h-full overflow-y-auto flex items-center justify-center`}
        >
            <Suspense fallback={<div>Carregando gráfico de linha...</div>}>
                <LineChartRecharts
                    data={suppliersLineChartData}
                    title=""
                    showLegend={true}
                    sizeLegend={16}
                    sizeTitle={20}
                    height={300}
                    width={1250}
                    colors={['#8884d8', '#82ca9d', '#FFBB28']}
                    className='text-white w-full h-full'
                />
            </Suspense>
        </div>
    );
};
export default SuppliersTimeLine;   