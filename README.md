# XVR — Prototipo web

Estado actual: **Fase 3** incorpora `/accesorios-perifericos`, con catálogo filtrable y componentes globales existentes. Ver [documentación y validación de Fase 3](docs/PHASE-3.md).

La [Fase 2](docs/PHASE-2.md) incluye `/soluciones`, el template de detalle y `/soluciones/marcado-laser`, además de Blog reservado, Header sticky y hover/focus de cards.

La documentación siguiente describe la base original de Fase 1; las rutas y cambios posteriores se detallan en los documentos enlazados.

## Base de Fase 1

Home en React + JavaScript, Vite, React Router y CSS tradicional. Proyecto inicializado directamente en XVR. No contiene backend, formularios, APIs, login ni las páginas de fases posteriores.

## Ejecución

Requiere Node.js 20.19+ o 22.12+ (validado con Node 24.11.1).

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

```text
src/
  components/
    CTASection/CTASection.jsx
    Footer/Footer.jsx
    Header/Header.jsx
    HeroCarousel/HeroCarousel.jsx
    IndustryCard/IndustryCard.jsx
    PartnerLogo/PartnerLogo.jsx
    SolutionCard/SolutionCard.jsx
    Icon.jsx
  data/homeData.js
  pages/Home/Home.jsx
  routes/paths.js
  styles/globals.css
  styles/variables.css
  App.jsx
  main.jsx
public/images/
  branding/
  hero/
  industries/
  partners/
  solutions/
index.html
package.json
package-lock.json
vite.config.js
```

## Alcance y navegación

- `/`: Home con las ocho secciones indicadas y Footer global.
- `/#industrias` y `/#nosotros`: anchors compatibles con regreso desde otras rutas.
- `/soluciones`, `/soluciones/:slug`, `/accesorios-perifericos` y `/contacto`: rutas reservadas que presentan el mismo aviso mínimo de próxima fase. No son páginas desarrolladas.
- Rutas desconocidas: aviso mínimo de página no encontrada.
- En despliegues futuros, configurar fallback de SPA a `index.html` para que funcionen las URLs directas de BrowserRouter.

## Componentes y estilos

Header y Footer se montan fuera de Routes. CTASection recibe textos y destinos por props; admite un segundo botón opcional y destinos internos o HTTP, mailto y tel. SolutionCard e IndustryCard admiten información secundaria opcional. PartnerLogo usa `{ name, logo, alt }`; con logo nulo muestra únicamente el nombre.

Los arrays viven en `src/data/homeData.js`; colores, ancho máximo, espacios y bordes repetidos en `variables.css`. Estilos comunes y responsive en `globals.css`, sin frameworks ni estilos inline. `Icon.jsx` contiene iconos de interfaz SVG, no logos.

HeroCarousel recibe `images` (`{ src, label }[]`), `interval` y contenido fijo como children. Intervalo predeterminado de 6.5 segundos, transición de opacidad de 1.3 segundos, selección manual y pausa. Reduce movimiento desactiva autoplay y transiciones. No avanza con el documento oculto y limpia sus temporizadores al desmontar.

## Assets provisionales — reemplazo pendiente

Todos los SVG de imágenes son placeholders geométricos locales, identificados dentro del archivo. No son fotos ni representaciones reales de instalaciones o equipos. No se descargó ningún asset externo.

| Carpeta | Archivos actuales | Sustituir por |
| --- | --- | --- |
| hero | proceso-laser-placeholder.svg, integracion-placeholder.svg, manufactura-placeholder.svg | Fotografías panorámicas de procesos e integración |
| solutions | marcado-laser-placeholder.svg, soldadura-laser-placeholder.svg, corte-microprocesos-placeholder.svg, tratamiento-superficial-placeholder.svg | Fotografía real de cada solución |
| industries | automotriz-placeholder.svg, medica-placeholder.svg, electronica-placeholder.svg, aeronautica-placeholder.svg | Fotografía de cada industria |
| branding | laboratorio-placeholder.svg | Fotografía del laboratorio de aplicaciones |
| branding | Sin archivo de logo | Logo oficial XVR |
| partners | Sin logos, solo .gitkeep | Logos oficiales de los ocho partners |

Para Hero, soluciones e industrias: agregar archivos y actualizar sus rutas en `homeData.js`. SolutionCard acepta `alt` opcional; dejar vacío si la imagen es decorativa y repite la información de la tarjeta. Para laboratorio, cambiar la ruta y alt en `Home.jsx`. Para logo XVR, agregar el archivo en branding y asignar `company.logo` en `homeData.js`; Header y Footer lo leen automáticamente. El texto XVR actual es un identificador temporal, no un logo oficial. Para partners, agregar los archivos en partners y asignar `logo` y `alt` en sus datos, sin tocar PartnerLogo.

## Diferencias deliberadas respecto a la referencia

- Fotografías pendientes: se mantiene su espacio con SVG provisionales. No se afirma fidelidad fotográfica hasta recibir assets originales.
- Hero usa carrusel, con controles discretos para poder pausarlo y elegir imagen.
- Industrias usan fondo de imagen y overlay oscuro conforme a la petición; esto cambia las tarjetas claras de la referencia y mantiene legibilidad.
- Partners muestran nombres en texto, sin dibujar ni descargar logos.
- Tipografía de sistema Arial; no se proporcionó la fuente original.
- El panel del Hero conserva la composición, pero sustituye cifras y parámetros de muestra por descriptores de proceso. No se publican +20 años, certificaciones ISO/ANSI, niveles de servicio 24/7, teléfono, razón social ni oferta de evaluación sin costo sin confirmar.
- No se crean enlaces legales ficticios. La fila inferior solo identifica XVR y el año actual. Los datos legales/contacto pendientes están señalados en `homeData.js`.
- Los textos corporativos, ubicaciones generales y nombres de partners se transcriben de la referencia como contenido editorial provisional; requieren validación comercial antes de publicar.

## Validación

Ver `VALIDATION.md`. No existe configuración previa de lint o tests. La validación de esta fase se centra en build y navegador real; no se añadieron dependencias de pruebas al producto.

Siguiente fase pendiente de autorización expresa. No se ejecutaron operaciones Git.

## GitHub Pages deployment

El sitio se despliega automáticamente desde `main` mediante GitHub Actions, con el workflow `.github/workflows/deploy-pages.yml`. También admite ejecución manual desde Actions.

En GitHub, configurar **Settings → Pages → Build and deployment → Source: GitHub Actions**. URL esperada: https://gonzalott.github.io/xvr-web/.

Este deployment usa HashRouter (por ejemplo, `/xvr-web/#/soluciones`), por lo que no requiere el fallback de BrowserRouter mencionado en la documentación histórica. Vite usa `/xvr-web/` al compilar y `/` durante desarrollo; las imágenes públicas se resuelven con `assetUrl` e `import.meta.env.BASE_URL`. `dist/` sigue ignorado y se publica únicamente como artifact.
