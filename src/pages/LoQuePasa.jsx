import { Link, useParams } from "react-router-dom";
import EditorialArticle from "../Components/EditorialArticle";
import { edicionActual } from "../data/ediciones";

const { anio, acontecimientos } = edicionActual;

export function LoQuePasaIndex() {
  return (
    <div className="section-page">
      <header className="page-intro page-intro-orange">
        <p className="eyebrow">Edición {anio} · Sección 02</p>
        <h1>Lo que pasa<br />en PROA</h1>
        <p>
          Proyectos, encuentros y actividades contados desde las experiencias
          que comparte la comunidad estudiantil.
        </p>
      </header>

      <div className="news-list">
        {acontecimientos.map((nota, index) => (
          <Link
            className="news-entry"
            key={nota.slug}
            to={`/lo-que-pasa-en-proa/${nota.slug}`}
          >
            <div className={`news-entry-art news-entry-art-${index + 1}`} aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>PROA<br />{anio}</span>
            </div>
            <div className="news-entry-copy">
              <p className="eyebrow">Experiencia estudiantil</p>
              <h2>{nota.titulo}</h2>
              <p>{nota.bajada}</p>
              <span className="text-link">Leer nota ↗</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function AcontecimientoDetalle() {
  const { slug } = useParams();
  const nota = acontecimientos.find((item) => item.slug === slug);

  if (!nota) {
    return <p className="route-message">No encontramos esta publicación.</p>;
  }

  return (
    <EditorialArticle
      seccion={`Lo que pasa en PROA · Edición ${anio}`}
      titulo={nota.titulo}
      bajada={nota.bajada}
      imagen={nota.imagen}
      parrafos={nota.parrafos}
      volver="/lo-que-pasa-en-proa"
      volverTexto="Lo que pasa en PROA"
    />
  );
}
