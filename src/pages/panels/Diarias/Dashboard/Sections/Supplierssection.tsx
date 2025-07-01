// ==========================
// src/pages/panels/Diarias/Sections/SuppliersSection.tsx
// ==========================
import React, { Suspense } from 'react';

// Lazy loading dos componentes locais
const SuppliersHeader = React.lazy(() => import('@/components/Charts/Suppliersection/SuppliersHeader'));
const SuppliersTable = React.lazy(() => import('@/components/Charts/Suppliersection/SuppliersTable'));
const SuppliersBarChart = React.lazy(() => import('@/components/Charts/Suppliersection/SuppliersBarChart'));
const SuppliersTimeLine = React.lazy(() => import('@/components/Charts/Suppliersection/SuppliersTimeLine'));

// Import dos tipos
import type { SuppliersProps } from '@/data/dataCharts/Supplier/suppliersTypes';

// ==========================
// Componente Principal
// ==========================
const SuppliersSection: React.FC<SuppliersProps> = ({ isMobile }) => {
  return (
    <>
      <Suspense fallback={<div>Carregando cabeçalho...</div>}>
        <SuppliersHeader />
      </Suspense>

      <h2 className='text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center'>
        Estabelecimentos com mais Ordem de Serviço (OS)
      </h2>

      <Suspense fallback={<div>Carregando tabela...</div>}>
        <SuppliersTable isMobile={isMobile} />
      </Suspense>

      <div className={`mb-4 grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-4'}`}>
        <div className={isMobile ? '' : 'col-span-2'}>
          <h2 className='text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center'>
            Gasto Total por Estabelecimento
          </h2>
          <Suspense fallback={<div>Carregando gráfico de barras...</div>}>
            <SuppliersBarChart isMobile={isMobile} className='bg-white' />
          </Suspense>
        </div>

        <div className={isMobile ? '' : 'col-span-2'}>
          <h2 className='text-xl font-semibold bg-chart-title rounded-t-md p-2 text-center'>
            Evolução de custo por CNPJ
          </h2>
          <Suspense fallback={<div>Carregando gráfico de linha...</div>}>
            <SuppliersTimeLine className='bg-white' />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SuppliersSection;
