// src/data/navLinks.tsx
import { lazy } from "react";
import { BarChart2, BarChart3, Database, House, FingerprintIcon } from "lucide-react";
import type { NavLinkInterface } from "../layouts/LayoutBase/navLinksInterface";
import HubPage from "@/pages/Hub/Hub";

// Lazy loading das páginas
const Dashboard = lazy(() => import('../pages/panels/Manutencao/Dashboard/Dashboard'));
const DataSource = lazy(() => import('../pages/panels/Manutencao/DataSource/DataSource'));
const Home = lazy(() => import('../pages/panels/Manutencao/Home/Home'));

const DashboardDiarias = lazy(() => import('../pages/panels/Diarias/Dashboard/Dashboard'));
const DataSourceDiarias = lazy(() => import('../pages/panels/Diarias/DataSource/DataSource'));
const HomeDiarias = lazy(() => import('../pages/panels/Diarias/Home/Home'));

const navLinks: NavLinkInterface[] = [

  //----------------------------------------------------
  // ------------------ Manutenção ---------------------
  //----------------------------------------------------

  {
    title: "Início",
    path: "/painel/manutencao/home",
    icon: <House size={18} />,
    element: <Home />,
    group: "manutencao",
  },
  {
    title: "Painel",
    path: "/painel/manutencao/dashboard",
    icon: <BarChart3 size={18} />,
    element: <Dashboard />,
    group: "manutencao",
  },
  {
    title: "Fonte de Dados",
    path: "/painel/manutencao/datasource",
    icon: <Database size={18} />,
    element: <DataSource />,
    group: "manutencao",
  },

  //----------------------------------------------------
  // ------------------ Diarias ------------------------
  //----------------------------------------------------
  {
    title: "Início",
    path: "/painel/diarias/home",
    icon: <FingerprintIcon size={18} />,
    element: <HomeDiarias />,
    group: "diarias",
  },
  {
    title: "Painel",
    path: "/painel/diarias/dashboard",
    icon: <BarChart2 size={18} />,
    element: <DashboardDiarias />,
    group: "diarias",
  },
  {
    title: "Fonte de Dados",
    path: "/painel/diarias/datasource",
    icon: <Database size={18} />,
    element: <DataSourceDiarias />,
    group: "diarias",
  },

  {
    title: "Hub",
    path: "/",
    icon: <House size={18} />,
    element: <HubPage />,
    group: "diarias",
  }
];


export default function getNavLinks() {
  return navLinks;
}
