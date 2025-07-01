import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import getNavLinks from "../../../data/NavLinksData";
import type { NavLinkInterface } from "@/layouts/LayoutBase/navLinksInterface";

export default function NavBarMobile({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const navLinksData: NavLinkInterface[] = getNavLinks();
  const location = useLocation();

  // Extrair o grupo do pathname
  const match = location.pathname.match(/^\/painel\/([^/]+)/);
  const currentGroup = match?.[1] || null;

  // Filtrar links por grupo, se aplicável
  const filteredLinks = currentGroup
    ? navLinksData.filter(link => link.group === currentGroup)
    : navLinksData.filter(link => !link.group);

  return (
    <nav className="sticky top-0 z-50 bg-official-blue text-white shadow-lg">
      {/* Container principal com padding */}
      <div className="p-3">
        {/* Topo com título e botão */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Menu</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl transition-all duration-500 ease-in-out hover:scale-110"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menu suspenso com animação suave */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          {/* Scrollable area para menus grandes */}
          <div className="max-h-[70vh] overflow-y-auto">
            <ul className="mt-4 space-y-2 pb-2">
              {filteredLinks.map((link: NavLinkInterface) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    // Sem auto-close
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 py-3 transition-all duration-300 ease-in-out rounded-lg
                      ${isActive
                        ? "bg-official-blue-active text-white font-bold shadow-md"
                        : "hover:bg-official-yellow hover: hover:text-black font-bold hover:shadow-md"
                      }`
                    }
                  >
                    <span className="flex-shrink-0">
                      {link.icon}
                    </span>
                    <span className="truncate">
                      {link.title}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}