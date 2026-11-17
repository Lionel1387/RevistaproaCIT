import { Link } from "react-router-dom";
import ArticleGrid from "../Components/Article-grid";
import { archivo2025, edicionActual } from "../data/ediciones";

const secciones = [
  { titulo: "Sobre la revista", enlace: "/archivo/2025/sobre-la-revista" },
  { titulo: "Entrevistas", enlace: "/archivo/2025/entrevistas" },
  { titulo: "Galería", enlace: "/archivo/2025/galeria" },
];

export default function Archivo2025() {
  return (
    <div className="archive-page">
      <section className="archive-cover">
        <img src="/imgHeroArticle.jpg" alt="Panorama urbano nocturno" />
        <div className="archive-cover-shade" />
        <div className="archive-cover-copy">
          <p className="eyebrow">Archivo · Edición {archivo2025.anio}</p>
          <h1>Revista<br />ProA</h1>
          <p>
            Explorá, leé y disfrutá del contenido que preparamos especialmente
            para tu visita. Esto no es solo una revista, es un espacio para
            soñar, experimentar y compartir. Aquí los jóvenes dan vida a sus
            descubrimientos y contagian su pasión por la ciencia y la tecnología.
          </p>
        </div>
        <span className="archive-cover-year">{archivo2025.anio}</span>
      </section>

      <section className="archive-content">
        <div className="archive-heading">
          <div>
            <p className="eyebrow">Edición anterior</p>
            <h2>El archivo<br />permanece abierto.</h2>
          </div>
          <p>
            La edición 2025 se conserva en su propio espacio. Sus artículos,
            imágenes y secciones no se mezclan con las publicaciones de{" "}
            {edicionActual.anio}.
          </p>
        </div>

        <ArticleGrid />

        <div className="archive-other-sections">
          <p className="eyebrow">Otras secciones de la edición</p>
          <div className="archive-other-links">
            {secciones.map((seccion, index) => (
              <Link to={seccion.enlace} key={seccion.enlace}>
                <span>0{index + 1}</span>
                <span>{seccion.titulo}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
        <p className="archive-signoff">© 2025 Revista ProA · Compilando conocimiento</p>
      </section>
    </div>
  );
}
