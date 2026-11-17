import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const images = [
    { src: "/banner_olimpicos.webp", alt: "Juegos Olímpicos" },
    { src: "/banner-entrevista.webp", alt: "Entrevistas" },
    { src: "/cocina-banner.webp", alt: "Innovación en la cocina" },
    { src: "/Juegos.jpg", alt: "Videojuegos" },
  ];

  const handleGoToGaleria = () => {
    navigate("/archivo/2025/galeria");
  };

  return (
    <aside className="space-y-6">
      {/* Caja de Imágenes */}
      <div
        onClick={handleGoToGaleria}
        className="bg-white p-4 rounded-lg border border-gray-200 cursor-pointer hover:shadow-lg transition"
      >
        <h3 className="text-xl font-bold mb-4" style={{ color: "#15274b" }}>
          📸Galería
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="h-24 w-full object-cover rounded-lg"
            />
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-3">
          Haz clic para ver más fotos y momentos
        </p>
      </div>

      {/* Espacio Publicitario */}
      <div className="bg-gray-100 rounded-lg text-center relative overflow-hidden">
        <img 
          src="/EspacioPublicitario.jpg" 
          alt="Espacio Publicitario" 
          className="w-full max-h-48 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-10 rounded-lg pointer-events-none"></div>
      </div>
    </aside>
  );
}
