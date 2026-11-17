import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const enlaces = [
  { texto: "Portada", ruta: "/", end: true },
  { texto: "Investigaciones", ruta: "/investigaciones" },
  { texto: "Lo que pasa", ruta: "/lo-que-pasa-en-proa" },
  { texto: "Salidas", ruta: "/salidas" },
  { texto: "La escuela", ruta: "/la-escuela" },
  { texto: "Archivo 2025", ruta: "/archivo/2025" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="wordmark" to="/" onClick={() => setIsMenuOpen(false)}>
          <span>PROA</span>
          <span className="wordmark-caption">REVISTA DIGITAL</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`site-nav${isMenuOpen ? " site-nav-open" : ""}`}
          id="primary-navigation"
          aria-label="Navegación principal"
        >
          {enlaces.map((enlace) => (
            <NavLink
              key={enlace.ruta}
              to={enlace.ruta}
              end={enlace.end}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `site-nav-link${isActive ? " site-nav-link-active" : ""}`
              }
            >
              {enlace.texto}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
