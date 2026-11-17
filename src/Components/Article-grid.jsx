import { Link } from "react-router-dom";

export default function ArticleGrid() {
  const articles = [
    {
      id: 1,
      category: "Juegos Olimpicos",
      title: "Los juegos olimpicos: Historia, Ciencia y Futuro ",
      excerpt: "Un recorrido por el origen, la evolución y el presente de los Juegos Olímpicos, su relación con la ciencia y la tecnología, la participación argentina y una entrevista exclusiva a un referente del pádel.",
      image: "/banner_olimpicos.webp",
      link: "/archivo/2025/juegos-olimpicos",
    },
    {
      id: 2,
      category: "Entrevistas",
      title: "Entrevistas",
      excerpt: "Exploramos entrevistas exclusivas con expertos, innovadores y referentes de distintos campos, donde comparten sus experiencias, conocimientos y consejos. Una mirada única que conecta al lector con la ciencia, la tecnología y la cultura.",
      image: "/banner-entrevista.webp",
      link: "/archivo/2025/entrevistas",
    },
    {
      id: 3,
      category: "Cocina",
      title: "Innovación en la cocina",
      excerpt: "Descubrí cómo la gastronomía se transformó con la ciencia y la tecnología, desde utensilios tradicionales hasta técnicas avanzadas como cocina molecular, impresión 3D de alimentos y fermentación. Además, conocerás la visión de chefs y expertos sobre cómo la innovación revoluciona la experiencia gastronómica y el aprendizaje culinario.",
      image: "/cocina-banner.webp",
      link: "/archivo/2025/cocina",
    },
    {
      id: 4,
      category: "Videojuegos",
      title: "Videojuegos: Sentimientos, Cultura e Innovación",
      excerpt: "Los videojuegos no son solo entretenimiento: son un lenguaje único que combina imágenes, música e interacción para transmitir emociones, contar historias y conectar personas. En esta sección exploramos la historia del gaming, la industria argentina, avances tecnológicos, la educación y la cultura gamer. Además, incluimos entrevistas con programadores y jugadores que muestran cómo los videojuegos impactan la creatividad, la enseñanza y la vida cotidiana.",
      image: "/Juegos.jpg",
      link: "/archivo/2025/videojuegos",
    },
  ];

  return (
    <section className="archive-highlights" aria-labelledby="archive-highlights-title">
      <div className="archive-highlights-heading">
        <div>
          <p className="eyebrow">Edición 2025</p>
          <h2 id="archive-highlights-title">Artículos destacados</h2>
        </div>
        <span>01 — 04</span>
      </div>

      <div className="archive-article-list">
        {articles.map((article, index) => (
          <article className="archive-article" key={article.id}>
            <Link className="archive-article-link" to={article.link}>
              <span className="archive-article-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <img src={article.image} alt="" loading="lazy" />
              <div className="archive-article-copy">
                <p className="eyebrow">{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <span className="text-link">Abrir artículo ↗</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
