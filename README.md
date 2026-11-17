# Revista digital PROA

Revista estudiantil realizada con React, React Router y Vite. La portada
presenta la edición actual y conserva las ediciones anteriores en rutas
independientes.

## Secciones

- `/`: portada de la edición actual.
- `/investigaciones` y `/investigaciones/:slug`: índice y lectura de artículos.
- `/lo-que-pasa-en-proa` y `/lo-que-pasa-en-proa/:slug`: noticias y proyectos.
- `/salidas`: experiencias organizadas por año escolar.
- `/la-escuela`: contexto breve sobre PROA.
- `/archivo/2025`: edición anterior y sus secciones.

Las investigaciones, acontecimientos y salidas se mantienen separadas de los
componentes visuales en `src/data/edicion2026.js`. `src/data/ediciones.js`
centraliza los metadatos de la edición actual y del archivo; una nueva edición
puede incorporarse como otro conjunto de datos con el mismo formato sin
reconstruir las vistas editoriales.

El documento de referencia editorial se conserva en `src/content/` y no se
publica como un recurso estático del sitio. Las fotografías de actividades que
no están disponibles se muestran como espacios por incorporar.

## Desarrollo

```sh
npm install
npm run dev
```

Para validar la aplicación:

```sh
npm run build
npm run lint
```

En Vercel, `vercel.json` redirige las rutas de React Router a la aplicación para
que también funcionen al recargar o abrir directamente una sección.
