// routes/Router.tsx
import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import getNavLinks from "../data/NavLinksData";
import LayoutBase from "../layouts/LayoutBase/LayoutBase";
import HubPage from "../pages/Hub/Hub";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/panels/Manutencao/Home/Home";

function Router() {
  const navLinks = getNavLinks();

  return (
    <Suspense fallback={<div className=" text-center">Carregando página...</div>}>
      <Routes>
        {/* Redirecionamento raiz */}
        <Route path="/" element={<Navigate to="/hub" />} />

        {/* Página do hub - FORA DO LAYOUT */}
        <Route path="/hub" element={<HubPage />} />

        {/* Demais rotas COM layout base (com sidebar/navbar) */}
        <Route element={<LayoutBase />}>
          <Route path="/home" element={<Home />} />
          {navLinks
            .filter((link) => link.path.startsWith("/painel/"))
            .map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
        </Route>

        {/* Página 404 */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
