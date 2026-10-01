# XVR — Fase 3: Accesorios y Periféricos

Implementación sobre la base existente de React, JavaScript y CSS. No se añadieron dependencias ni se ejecutaron comandos Git. No incluye Contacto, Blog, detalles nuevos, formularios, backend, comercio electrónico ni Odoo.

## Archivos y arquitectura

```text
src/
  components/AccessoryCard/AccessoryCard.jsx
  data/accessoriesData.js
  pages/Accessories/Accessories.jsx
  styles/accessories.css
public/images/
  hero/accessories/
    integracion-placeholder.svg
    equipamiento-placeholder.svg
  accessories/
    safety/proteccion-laser-placeholder.svg
    extraction/filtracion-humos-placeholder.svg
    measurement/medicion-haz-placeholder.svg
    cooling/chiller-industrial-placeholder.svg
docs/PHASE-3.md
```

Archivos existentes modificados: App.jsx para conectar la ruta ya definida y actualizar su título; README.md para enlazar esta fase. No se requieren cambios en rutas/paths.js: Header, Footer y el enlace desde Marcado ya apuntan a `/accesorios-perifericos`.

Header y Footer se siguen montando una sola vez en App. HeroCarousel, CTASection e Icon se reutilizan sin cambios. Home, Soluciones y el template de detalle permanecen intactos. Los estilos nuevos usan clases específicas de Accesorios y reutilizan variables de Fase 1 y tokens de interacción de Fase 2.

AccessoryCard recibe id, category, eyebrow, title, image, alt, description, highlights, metadata opcional y cta. No introduce acciones sobre el artículo: el enlace inferior es la acción de consulta. Los bloques informativos no son botones ni tienen tabindex.

## Ruta y secciones

`/accesorios-perifericos`: Hero con carrusel, integración de ecosistemas (oscura), catálogo por categoría, razones para seleccionar periféricos a través de XVR y CTA final. Header sticky y Footer son globales.

El CTA Explorar categorías enlaza a `#categorias` mediante React Router y aprovecha el desplazamiento/compensación sticky existente. Las cuatro consultas, la asesoría del Hero y el CTA final apuntan a `/contacto`, que sigue reservado. Blog y los detalles de soluciones pendientes conservan su mecanismo anterior.

## Filtros

Un único useState local selecciona Todos, Seguridad Láser, Extracción y Filtración, Medición y Óptica o Enfriamiento Industrial. Se filtra el array por category sin recarga ni peticiones de red. Todos restaura las cuatro cards. No se persiste el filtro al abandonar la página.

Se usan botones HTML en un grupo identificado, con aria-pressed y aria-controls. Tab/Shift+Tab recorren los controles; Enter/Espacio activan el botón enfocado. El foco permanece en el filtro. El contador con role=status anuncia la cantidad y categoría activa, sin convertir todo el catálogo en una región de anuncios. No se usa role=tab porque son filtros de una colección, no paneles de navegación.

Los filtros hacen wrap en pantallas pequeñas. La colección usa una entrada de opacidad de 200 ms; el hover/focus de cards usa los tokens existentes, elevación de 3 px, sombra y borde. Con prefers-reduced-motion se desactivan la animación, la transición y el desplazamiento, conservando foco/borde/sombra.

## Datos y contenido provisional

accessoriesData.js centraliza textos de secciones, slides, filtros, categorías, imágenes, características, metadatos y CTA. El contenido describe criterios generales de selección; requiere validación editorial/comercial antes de publicación.

No se copiaron normas, certificaciones, porcentajes, potencias, rangos, tolerancias, eficiencias ni garantías de la referencia. Las referencias a stock/disponibilidad no se presentan como hechos.

Diferencias deliberadas:

- El Hero claro/estático se sustituye por HeroCarousel con fondo, overlay oscuro, texto fijo y controles existentes, según la instrucción prioritaria del proyecto.
- Se usan seis SVG geométricos locales identificados como provisionales. No son fotografías, logos ni representaciones técnicas de productos reales.
- Cero Deriva Térmica se presenta como Control de la Deriva Térmica, y Ambientes Libres de Emisiones como Gestión de Emisiones: se conserva el concepto sin afirmar resultados absolutos.
- Los tres motivos de compra usan los términos neutrales propuestos: Compatibilidad e integración, Consideración de requisitos normativos y Soporte y continuidad operativa.
- Los campos técnicos de la referencia se sustituyen por notas generales de selección; se omiten badges de certificación y teléfono no confirmados.
- Los controles de filtrado tienen altura mínima de 44 px y hacen wrap en móvil para facilitar el uso.
- Se conserva el sistema visual existente, incluida la fuente de sistema y el Footer; los textos neutrales pueden producir alturas diferentes a las de la imagen.

## Sustitución de imágenes

Reemplazar las dos imágenes del Hero por fotografías panorámicas de integración/equipamiento. Reemplazar las cuatro imágenes de categorías por fotografías reales de protección, extracción, medición y enfriamiento.

Agregar el archivo local y actualizar `accessoriesPage.hero.images[].src` o `accessories[].image` en accessoriesData.js. No es necesario modificar componentes. Las imágenes de categoría usan alt vacío mientras sean decorativas y repitan el contexto del título; el campo alt permite describir imágenes informativas reales. Los fondos del Hero son decorativos.

## Validación

- `npm run build`: correcto (Vite 7.3.6, 61 módulos). El primer intento encontró una restricción de ejecución de esbuild en el sandbox; la ejecución autorizada finalizó correctamente.
- Consola del navegador: sin errores ni warnings en las rutas revisadas.
- Accesorios, Home, Soluciones y Marcado: comprobados a 320, 390, 768, 1024, 1280 y 1440 px, sin desbordamiento horizontal. Inspección visual adicional del catálogo, Hero, CTA y navegación en desktop, tablet y móvil.
- Cada filtro muestra la categoría correspondiente; Todos restaura cuatro cards. Comprobados en desktop y a 320 px, incluyendo contador y estado aria-pressed.
- Enter y Espacio activan filtros; foco visible conservado. Tab desde el último filtro alcanza el enlace de la primera card. Hover de card confirmado con desplazamiento de -3 px; foco del enlace y contenedor visibles.
- Carrusel: selección manual, pausa/reanudación y avance automático de primera a segunda imagen después del intervalo de 6.5 segundos, con título fijo.
- Header sticky permanece en top 0 durante scroll. Menú móvil abre/cierra y navega; anchors a Nosotros y categorías quedan por debajo del Header. Industrias conserva su destino al Home.
- Los cuatro enlaces de cards, la asesoría y el CTA final apuntan a Contacto. Navegación real comprobada; Contacto mantiene la pantalla reservada.
- Las cuatro imágenes de categorías cargan correctamente. Las seis imágenes nuevas son SVG locales; no se descargaron fotografías.
- Comparación SHA-256 contra la lectura inicial: de los archivos existentes en src, sólo cambió App.jsx. Los paquetes, estilos globales, componentes compartidos y páginas anteriores conservan sus hashes.
- prefers-reduced-motion revisado en CSS y en el HeroCarousel reutilizado; no se emuló la preferencia del sistema en el navegador. No se realizó una auditoría completa de accesibilidad ni prueba en dispositivos físicos.

Capturas: `screenshots/phase-3-accessories-desktop.jpg`, `screenshots/phase-3-accessories-mobile.jpg` y `screenshots/phase-3-accessories-preview.jpg`.
