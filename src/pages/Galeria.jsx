import { Link } from "react-router-dom";

export default function Galeria() {
  return (
    <section className="story-page archive-empty">
      <Link className="back-link" to="/archivo/2025">
        ← Archivo · Edición 2025
      </Link>
      <p className="eyebrow">Archivo · Edición 2025</p>
      <h1>Galería</h1>
      <p className="story-lead">
        La sección se conserva en el archivo. La página original no tenía
        fotografías publicadas en su galería.
      </p>
    </section>
  );
}
