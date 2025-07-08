import { useOutletContext } from "react-router-dom";
import React, { Suspense } from "react";

// Lazy loading de todas as seções
const OverView = React.lazy(() => import("./Sections/OverView"));
const CustosDetalhados = React.lazy(() => import("./Sections/CustosDetalhados"));
const InvoicesSection = React.lazy(() => import("./Sections/InvoicesSection"));
const FleetSection = React.lazy(() => import("./Sections/FleetSection"));
const SuppliersSection = React.lazy(() => import("./Sections/Supplierssection"));

export default function Dashboard() {
  const isMobile = useOutletContext<boolean>();
  const render = true;
  const showQuemFez = false;

  return (
    <div >
      {QuemFez("Jhonatan", showQuemFez)}

      <Suspense fallback={<div>Carregando visão geral...</div>}>
        <OverView isMobile={isMobile} />
      </Suspense>

      {QuemFez("Filipe Farias", showQuemFez)}

      {!render ? (
        ""
      ) : (
        <Suspense fallback={<div>Carregando custos detalhados...</div>}>
          <CustosDetalhados />
        </Suspense>
      )}

      {QuemFez("Filipe Farias", showQuemFez)}

      {!render ? (
        ""
      ) : (
        <Suspense fallback={<div>Carregando faturas...</div>}>
          <InvoicesSection />
        </Suspense>
      )}

      {QuemFez("Jhonatan", showQuemFez)}

      {!render ? (
        ""
      ) : (
        <Suspense fallback={<div>Carregando frota...</div>}>
          <FleetSection isMobile={isMobile} className={""} />
        </Suspense>
      )}

      {QuemFez("Jhonatan", showQuemFez)}

      {!render ? (
        ""
      ) : (
        <Suspense fallback={<div>Carregando fornecedores...</div>}>
          <SuppliersSection isMobile={isMobile} />
        </Suspense>
      )}
    </div>
  );
}

const QuemFez = (text: string, show: boolean) => {
  return (
    <>
      {show ? (
        <h1 className="bg-rose-200 rounded-md my-5 p-2 justify-center font-bold">
          {`Seção desenvolvida por ${text}`}
        </h1>
      ) : (
        ""
      )}
    </>
  );
};
