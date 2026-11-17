import { Link } from "react-router-dom";
import { edicionActual } from "../data/ediciones";

const secciones = [
  { numero: "01", titulo: "Investigaciones", enlace: "/investigaciones" },
  { numero: "02", titulo: "Lo que pasa en PROA", enlace: "/lo-que-pasa-en-proa" },
  { numero: "03", titulo: "Salidas y experiencias", enlace: "/salidas" },
  { numero: "04", titulo: "La escuela", enlace: "/la-escuela" },
];

export default function Portada2026() {
  const investigacion = edicionActual.investigaciones[0];
  const acontecimiento = edicionActual.acontecimientos[2];

  return (
    <div className="home-page">
      <section className="cover-2026">
        <div className="cover-copy">
          <p className="eyebrow">
            {edicionActual.titulo} · Edición {edicionActual.anio}
          </p>
          <h1>
            Lo que
            <br />
            pensamos,
            <br />
            <span>hacemos.</span>
          </h1>
          <p className="cover-intro">{edicionActual.presentacion}</p>
          <Link className="button-link button-light" to="/investigaciones">
            Entrar a la edición <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div
          className="cover-art"
          role="img"
          aria-label={`Composición tipográfica de la edición PROA ${edicionActual.anio}`}
        >
          <span className="cover-art-label">PROA · PUBLICACIÓN ESTUDIANTIL</span>
          <span className="cover-art-year">26</span>
          <span className="cover-art-word">IDEAS<br />EN MOVIMIENTO</span>
          <span className="cover-art-orbit orbit-one" />
          <span className="cover-art-orbit orbit-two" />
          <span className="cover-art-stamp">
            EDICIÓN<br />{edicionActual.anio}
          </span>
        </div>

        <a className="cover-scroll" href="#contenido">
          Deslizá para explorar <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="section-index page-section" id="contenido">
        <div className="section-heading">
          <p className="eyebrow">La edición</p>
          <h2>Un año, muchas<br />formas de mirar.</h2>
        </div>
        <nav
          className="section-list"
          aria-label={`Secciones de la edición ${edicionActual.anio}`}
        >
          {secciones.map((seccion) => (
            <Link className="section-list-item" key={seccion.numero} to={seccion.enlace}>
              <span className="section-number">{seccion.numero}</span>
              <span>{seccion.titulo}</span>
              <span className="section-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
      </section>

      <section className="home-feature page-section">
        <div className="feature-visual feature-visual-research" aria-hidden="true">
          <span className="feature-visual-number">01</span>
          <span className="feature-visual-title">JUGAR<br />TAMBIÉN<br />ES PENSAR</span>
          <span className="feature-visual-mark">INVESTIGACIÓN</span>
        </div>
        <div className="feature-copy">
          <p className="eyebrow">
            Investigación destacada · {edicionActual.anio}
          </p>
          <h2>{investigacion.titulo}</h2>
          <p>{investigacion.bajada}</p>
          <Link className="text-link" to={`/investigaciones/${investigacion.slug}`}>
            Leer investigación <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="home-event page-section">
        <div className="event-copy">
          <p className="eyebrow">
            Lo que pasa en PROA · {edicionActual.anio}
          </p>
          <h2>{acontecimiento.titulo}</h2>
          <p>{acontecimiento.bajada}</p>
          <Link className="text-link" to={`/lo-que-pasa-en-proa/${acontecimiento.slug}`}>
            Conocer el proyecto <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="event-visual">
          <span className="event-visual-mark">IDEAS<br />QUE SE<br />COMPARTEN</span>
          <span className="event-visual-caption">PROYECTOS · CIENCIA · ARTE</span>
        </div>
      </section>

      <section className="archive-invitation">
        <div>
          <p className="eyebrow">Memoria editorial</p>
          <h2>Una edición abre la puerta a la siguiente.</h2>
        </div>
        <Link className="button-link button-dark" to="/archivo/2025">
          Explorar Archivo 2025 <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </div>
  );
}
