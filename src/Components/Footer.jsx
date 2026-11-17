import { FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { archivo2025, edicionActual } from "../data/ediciones";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link className="footer-wordmark" to="/">
          PROA<span>REVISTA DIGITAL</span>
        </Link>
        <p>Una revista hecha por estudiantes.</p>
        <Link className="footer-archive-link" to="/archivo/2025">
          Archivo · Edición {archivo2025.anio} <span aria-hidden="true">↗</span>
        </Link>
        <div className="footer-socials" aria-label="Redes sociales">
          <a
            href="https://www.instagram.com/promoproa26/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de PROA"
          >
            <FaInstagram aria-hidden="true" size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@programacion.26?_t=ZM-8v447qgfHbq&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok de PROA"
          >
            <FaTiktok aria-hidden="true" size={20} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Edición {edicionActual.anio}</span>
        <span>Producción estudiantil · PROA</span>
      </div>
    </footer>
  );
}
