import { edicionActual } from "../data/ediciones";

const { anio, salidas } = edicionActual;
const anios = [1, 2, 3, 4, 5, 6];

function ImagenPendiente({ texto }) {
  return (
    <div className="experience-image" role="img" aria-label={texto}>
      <span className="experience-image-mark">
        PROA<br />{anio}
      </span>
      <span className="experience-image-caption">Fotografía por incorporar</span>
    </div>
  );
}

function Experiencia({ experiencia }) {
  return (
    <article className="experience-entry">
      <ImagenPendiente texto={experiencia.imagen} />
      <div className="experience-copy">
        {experiencia.compartida && (
          <p className="eyebrow">
            {experiencia.anios.length === 2
              ? `${experiencia.anios[0]}.º y ${experiencia.anios[1]}.º año`
              : `${experiencia.anios[0]}.º, ${experiencia.anios[1]}.º y ${experiencia.anios[2]}.º año`}
          </p>
        )}
        <h3>{experiencia.titulo}</h3>
        <p>{experiencia.texto}</p>
      </div>
    </article>
  );
}

export default function Salidas() {
  const compartidas = salidas.filter((salida) => salida.compartida);

  return (
    <div className="section-page experiences-page">
      <header className="page-intro page-intro-ink">
        <p className="eyebrow">Edición {anio} · Sección 03</p>
        <h1>Salidas y<br />experiencias</h1>
        <p>
          Aprender también sucede fuera del aula. Un recorrido por las salidas
          educativas, organizado por año escolar.
        </p>
      </header>

      <nav className="year-nav" aria-label="Años escolares">
        {anios.map((anio) => (
          <a key={anio} href={`#anio-${anio}`}>
            {anio}.º año
          </a>
        ))}
      </nav>

      {anios.map((anio) => {
        const experiencias = salidas.filter(
          (salida) => !salida.compartida && salida.anios.includes(anio),
        );

        return (
          <section className="year-section" id={`anio-${anio}`} key={anio}>
            <div className="year-heading">
              <span className="year-number">{String(anio).padStart(2, "0")}</span>
              <h2>{anio}.º año</h2>
            </div>
            {experiencias.length ? (
              <div className="experience-list">
                {experiencias.map((experiencia) => (
                  <Experiencia experiencia={experiencia} key={experiencia.titulo} />
                ))}
              </div>
            ) : (
              <p className="empty-year">Aún no hay experiencias publicadas para este año.</p>
            )}
          </section>
        );
      })}

      <section className="shared-experiences">
        <p className="eyebrow">Experiencias compartidas</p>
        <h2>Entre varios cursos</h2>
        {compartidas.map((experiencia) => (
          <Experiencia experiencia={experiencia} key={experiencia.titulo} />
        ))}
      </section>
    </div>
  );
}
