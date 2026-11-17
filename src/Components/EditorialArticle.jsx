import { Link } from "react-router-dom";
import { edicionActual } from "../data/ediciones";

export default function EditorialArticle({
  seccion,
  titulo,
  bajada,
  autor,
  imagen,
  parrafos,
  volver,
  volverTexto,
}) {
  return (
    <article className="story-page">
      <Link className="back-link" to={volver}>
        ← {volverTexto}
      </Link>

      <header className="story-heading">
        <p className="eyebrow">{seccion}</p>
        <h1>{titulo}</h1>
        <p className="story-lead">{bajada}</p>
        {autor && <p className="story-byline">{autor}</p>}
      </header>

      <figure className="content-placeholder">
        <span className="placeholder-index">PROA / {edicionActual.anio}</span>
        <span className="placeholder-caption">{imagen}</span>
        <span className="placeholder-note">Fotografía por incorporar</span>
      </figure>

      <div className="story-copy">
        {parrafos.map((parrafo) => (
          <p key={parrafo}>{parrafo}</p>
        ))}
      </div>
    </article>
  );
}
