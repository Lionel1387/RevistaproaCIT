import { Link } from "react-router-dom";

export default function Entrevista() {
  return (
    <section className="story-page archive-empty">
      <Link className="back-link" to="/archivo/2025">
        ← Archivo · Edición 2025
      </Link>
      <p className="eyebrow">Archivo · Edición 2025</p>
      <h1>Entrevistas</h1>
      <p className="story-lead">
        La edición original incluía esta sección, pero no tenía una entrevista
        cargada en su página.
      </p>
    </section>
  );
}
