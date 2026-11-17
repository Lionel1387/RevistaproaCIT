import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Archivo2025 from "./pages/Archivo2025";
import {
  InvestigacionDetalle,
  InvestigacionesIndex,
} from "./pages/Investigaciones";
import LaEscuela from "./pages/LaEscuela";
import {
  AcontecimientoDetalle,
  LoQuePasaIndex,
} from "./pages/LoQuePasa";
import Portada2026 from "./pages/Portada2026";
import Salidas from "./pages/Salidas";
import Cocina from "./pages/Cocina";
import Entrevista from "./pages/Entrevista";
import Galeria from "./pages/Galeria";
import JuegosOlimpicos from "./pages/JuegosOlimpicos";
import SobreLaRevista from "./pages/SobreLaRevista";
import Videojuegos from "./pages/Videojuegos";

function NoEncontrado() {
  return (
    <section className="not-found">
      <p className="eyebrow">404 · Página no encontrada</p>
      <h1>Esta página no está en la edición.</h1>
      <Link className="text-link" to="/">
        Volver a la portada <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <div className="site-shell">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Portada2026 />} />
            <Route path="/investigaciones" element={<InvestigacionesIndex />} />
            <Route path="/investigaciones/:slug" element={<InvestigacionDetalle />} />
            <Route path="/lo-que-pasa-en-proa" element={<LoQuePasaIndex />} />
            <Route
              path="/lo-que-pasa-en-proa/:slug"
              element={<AcontecimientoDetalle />}
            />
            <Route path="/salidas" element={<Salidas />} />
            <Route path="/la-escuela" element={<LaEscuela />} />
            <Route path="/archivo/2025" element={<Archivo2025 />} />
            <Route
              path="/archivo/2025/juegos-olimpicos"
              element={<JuegosOlimpicos />}
            />
            <Route path="/archivo/2025/cocina" element={<Cocina />} />
            <Route path="/archivo/2025/videojuegos" element={<Videojuegos />} />
            <Route
              path="/archivo/2025/sobre-la-revista"
              element={<SobreLaRevista />}
            />
            <Route path="/archivo/2025/entrevistas" element={<Entrevista />} />
            <Route path="/archivo/2025/galeria" element={<Galeria />} />
            <Route
              path="/juegos-olimpicos"
              element={<Navigate to="/archivo/2025/juegos-olimpicos" replace />}
            />
            <Route
              path="/cocina"
              element={<Navigate to="/archivo/2025/cocina" replace />}
            />
            <Route
              path="/videojuegos"
              element={<Navigate to="/archivo/2025/videojuegos" replace />}
            />
            <Route
              path="/sobre-la-revista"
              element={<Navigate to="/archivo/2025/sobre-la-revista" replace />}
            />
            <Route
              path="/Entrevista"
              element={<Navigate to="/archivo/2025/entrevistas" replace />}
            />
            <Route
              path="/entrevista"
              element={<Navigate to="/archivo/2025/entrevistas" replace />}
            />
            <Route
              path="/galeria"
              element={<Navigate to="/archivo/2025/galeria" replace />}
            />
            <Route path="*" element={<NoEncontrado />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}
