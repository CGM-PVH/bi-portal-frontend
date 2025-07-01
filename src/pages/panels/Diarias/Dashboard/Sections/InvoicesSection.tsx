import React, { Suspense } from "react";

// Lazy loading dos componentes
const InvoicesBarChart = React.lazy(() => import("@/components/Charts/Invoices/InvoicesBarChart"));
const InvoicesPieChart = React.lazy(() => import("@/components/Charts/Invoices/InvoicesPieChart"));
const InvoicesTable = React.lazy(() => import("@/components/Charts/Invoices/InvoicesTable"));

export default function InvoicesSection() {
  return (
    <section className="w-full">
      <h2 className="text-xl font-semibold bg-lime-500 rounded-t-md p-2">
        Total Bruto x Total com Desconto
      </h2>
      <div className="bg-white p-4 rounded-b-md shadow-md mb-4">
        <Suspense fallback={<div>Carregando gráfico de barras...</div>}>
          <InvoicesBarChart />
        </Suspense>
      </div>

      <h2 className="text-xl font-semibold bg-lime-500 rounded-t-md p-2">
        % de OS com e sem desconto
      </h2>
      <div className="bg-white p-4 rounded-b-md shadow-md mb-4">
        <Suspense fallback={<div>Carregando gráfico de pizza...</div>}>
          <InvoicesPieChart />
        </Suspense>
      </div>

      <h2 className="text-xl font-semibold bg-lime-500 rounded-t-md p-2">
        OS sem Nota Fiscal (Peças ou MDO)
      </h2>
      <Suspense fallback={<div>Carregando tabela...</div>}>
        <InvoicesTable />
      </Suspense>
    </section>
  );
}
