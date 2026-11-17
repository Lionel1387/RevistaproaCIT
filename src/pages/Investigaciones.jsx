import { Link, useParams } from "react-router-dom";
import EditorialArticle from "../Components/EditorialArticle";
import { edicionActual } from "../data/ediciones";

const { anio, investigaciones } = edicionActual;

export function InvestigacionesIndex() {
  return (
    <div className="section-page">
      <header className="page-intro">
        <p className="eyebrow">Edición {anio} · Sección 01</p>
        <h1>Investigaciones</h1>
        <p>
          Ideas que nacen de una pregunta, se ponen a prueba y encuentran nuevas
          formas de entender el mundo.
        </p>
      </header>

      <div className="research-list">
        {investigaciones.map((articulo, index) => (
          <Link
            className={`research-entry research-entry-${index + 1}`}
            key={articulo.slug}
            to={`/investigaciones/${articulo.slug}`}
          >
            <div className="research-entry-art" aria-hidden="true">
              <span>{articulo.numero}</span>
              <span>{index === 0 ? "JUGAR / PENSAR" : "APRENDER / CREAR"}</span>
            </div>
            <div className="research-entry-copy">
              <p className="eyebrow">Investigación · {anio}</p>
              <h2>{articulo.titulo}</h2>
              <p>{articulo.bajada}</p>
              <span className="text-link">Leer artículo ↗</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function InvestigacionDetalle() {
  const { slug } = useParams();
  const articulo = investigaciones.find((item) => item.slug === slug);

  if (!articulo) {
    return <p className="route-message">No encontramos esta investigación.</p>;
  }

  return (
    <EditorialArticle
      seccion={`Investigación ${articulo.numero} · Edición ${anio}`}
      titulo={articulo.titulo}
      bajada={articulo.bajada}
      autor={articulo.autor}
      imagen={articulo.imagen}
      parrafos={articulo.parrafos}
      volver="/investigaciones"
      volverTexto="Investigaciones"
    />
  );
}
