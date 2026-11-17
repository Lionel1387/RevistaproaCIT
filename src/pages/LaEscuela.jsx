import { Link } from "react-router-dom";

export default function LaEscuela() {
  return (
    <div className="school-page">
      <section className="school-intro">
        <p className="eyebrow">Un contexto para las ideas</p>
        <h1>La escuela</h1>
        <p className="school-lead">
          PROA es una propuesta educativa orientada a la innovación y la
          tecnología. A través de proyectos, programación, investigación y
          trabajo colaborativo, sus estudiantes desarrollan herramientas para
          comprender y transformar el mundo que los rodea.
        </p>
        <Link className="text-link" to="/archivo/2025">
          Volver a la revista <span aria-hidden="true">↗</span>
        </Link>
      </section>
      <div className="school-mark" aria-hidden="true">
        <span>PROA</span>
        <span>PRODUCCIÓN<br />ESTUDIANTIL</span>
      </div>
    </div>
  );
}
