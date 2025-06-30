// ==========================
// src/pages/panels/Diarias/Sections/SuppliersSection.tsx
// ==========================
import React from 'react';

// Import dos componentes locais
import { SuppliersHeader } from '../../../../../components/Charts/Suppliersection/SuppliersHeader';
import { SuppliersTable } from '../../../../../components/Charts/Suppliersection/SuppliersTable';
import { SuppliersBarChart } from '../../../../../components/Charts/Suppliersection/SuppliersBarChart';
import { SuppliersTimeLine } from '../../../../../components/Charts/Suppliersection/SuppliersTimeLine';

// Import dos tipos
import type { SuppliersProps } from '../../../../../data/dataCharts/Supplier/suppliersTypes';

// ==========================
// Componente Principal
// ==========================
const SuppliersSection: React.FC<SuppliersProps> = ({ isMobile }) => {
  return (
    <>
      <SuppliersHeader />

      <h2 className='text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center'>
        Estabelecimentos com mais Ordem de Serviço (OS)
      </h2>

      <SuppliersTable isMobile={isMobile} />

      <div className={`mb-4 grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-4'}`}>
        <div className={isMobile ? '' : 'col-span-2'}>
          <h2 className='text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center'>
            Gasto Total por Estabelecimento
          </h2>
          <SuppliersBarChart isMobile={isMobile} className='bg-white' />
        </div>

        <div className={isMobile ? '' : 'col-span-2'}>
          <h2 className='text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center'>
            Evolução de custo por CNPJ
          </h2>
          <SuppliersTimeLine className='bg-white' />
        </div>
      </div>
    </>
  );
};

export default SuppliersSection;