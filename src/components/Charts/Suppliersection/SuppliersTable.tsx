// src/components/Charts/Suppliersection/SuppliersTable.tsx
import React, { Suspense } from 'react';
import { suppliersTableData } from '../../../data/dataCharts/Supplier/mockSuppliersData';
import type { SuppliersTableProps } from '../../../data/dataCharts/Supplier/suppliersTypes';

const GenericTable = React.lazy(() => import('../../Table/GenericTable'));

export const SuppliersTable: React.FC<SuppliersTableProps> = ({ isMobile, className }) => {
    const anos = [...new Set(suppliersTableData.map((d) => d.ano))];

    return (
        <Suspense fallback={<div>Carregando tabela...</div>}>
            <GenericTable
                data={suppliersTableData}
                columns={[
                    { field: 'placa' },
                    { field: 'modelo' },
                    { field: 'ano' },
                    { field: 'os', label: 'Nº de OS' },
                    { field: 'custo', label: 'Custo Total (R$)' },
                ]}
                filtersConfig={[
                    { field: 'modelo', label: 'Modelo', type: 'text' },
                    { field: 'ano', label: 'Ano', type: 'select', options: anos },
                    { field: 'custo', label: 'Custo', type: 'number' },
                ]}
                isMobile={isMobile}
                className={className}
            />
        </Suspense>
    );
};
export default SuppliersTable;  