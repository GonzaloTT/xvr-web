# Revisión de textos XVR para revisión del responsable

Fuente: XVR_Revision_Textos_Branding_ImpulsaMas - Pedro - 20261106.docx, leído íntegramente (secciones 1–7). Se utiliza como fuente de contenido; las instrucciones de implementación proceden de la solicitud del responsable.

## Matriz de correspondencia preparada antes de editar

| Documento | Archivo | Componente o destino | Acción |
| --- | --- | --- | --- |
| 1 Header | src/routes/paths.js | Header / NavDropdown | Cambiar etiqueta; conservar rutas y CTA a /contacto |
| 2 Slides 1–4 | src/data/homeData.js | Home / HeroCarousel | Conservar slide 1; actualizar 2–4 |
| 2 Socios | src/pages/Home/Home.jsx | Home / PartnerLogo | Actualizar introducción sin agregar fichas ni logos |
| 3A Vista general | src/data/industriesData.js | Industries | Aplicar descripción |
| 3B–F Industrias | src/data/industriesData.js | Industries / IndustryDetail / IndustryCard | Actualizar introducciones, bloques y aplicaciones |
| 4 Ecosistema | src/data/accessoriesData.js | Accessories / Catalog | Aplicar descripciones; conservar filtros |
| 4 Refacciones | src/data/sparePartsData.js | SpareParts | Verificar estado pendiente; sin registros nuevos |
| 5 Universo Láser | src/data/blogData.js; src/pages/Blog/BlogDetail.jsx | Blog / BlogDetail | Coincide; conservar seis temas y estado próximo |
| 6 Contacto | src/data/contactData.js | Contact / ContactForm | Aplicar contexto del canal demostrativo |
| 6 Aviso | src/data/brandsData.js | Brands / BrandDetail | Aplicar nota legal |
| 6 911 XVR | src/pages/Support/Support.jsx | Support | Conservar comportamiento demostrativo |
| 7 Marcas | src/data/brandsData.js | Brands / BrandDetail / Home | Aplicar ocho descripciones |

## Pendientes y decisiones

- Logotipo actualizado XVR y logos oficiales de socios: pendientes de entrega; recursos conservados.
- Retos automotrices: «Sostenibilidad: Medi Eficiencia: Calidad» está incompleto y en proceso. Se conserva el bloque funcional existente completo, sin inventar su continuación.
- Home menciona Coherent, Bystronic ROFIN, Precitec, Laserline, Luxinar, BOFA, laservision, Macken y PUREX. Se refleja como texto; no se crean fichas, logos ni afirmaciones de representación. IPG Photonics y SCANLAB conservan sus fichas porque están documentados en la sección 7.
- Se conserva «Body & White» como término técnico del documento; requiere confirmación técnica por XVR.
- Catálogos de productos y refacciones sin registros; artículos completos pendientes; canales reales de contacto y recepción de incidencias pendientes.
- Diferencias sustanciales en filas OK: las ventajas médicas existentes incluían reducción de scrap y trazabilidad; se usa la redacción aprobada sobre precisión, repetibilidad e IQ/OQ/PQ. Slide 1 coincide.

## Correcciones editoriales

«oficinas oficinas» → «oficinas»; «Sodadura» → «Soldadura»; «extrictos» → «estrictos»; «Lo s» → «Los»; «C on» → «Con»; «afectar en la dimensionalidad» → «afectar la dimensionalidad»; «entornos de alta producción y salubres» → «entornos salubres de alta producción»; normalización de espacios, puntuación y BOFA duplicado. Se conservan nombres, alcance y términos industriales.

## Cambios por sección y commits locales

| Sección | Cambio | Commit |
| --- | --- | --- |
| Header | Soluciones y Aplicaciones; CTA existente confirmado hacia /contacto | ab98268 |
| Home | Slides 2–4 y texto de socios; cuatro slides y recursos conservados | 6d55e1b |
| Industrias | Vista general, cinco introducciones, necesidades, aplicaciones, ventajas y etiquetas auxiliares relacionadas | ef6ac25 |
| Ecosistema | Tres descripciones aprobadas de extracción, metrología y enfriamiento | 73156ff |
| Contacto | Contexto del canal demostrativo; comportamiento conservado | 8761655 |
| Marcas | Ocho descripciones y aviso legal documentado | 2ebb1dc |
| Universo Láser | Coincide; seis artículos próximos conservados, sin commit de contenido | — |
| Footer y 911 XVR | Sin nueva redacción específica que exija cambiar el footer; demostración 911 conservada | — |

Archivos de implementación modificados: `src/routes/paths.js`, `src/data/homeData.js`, `src/pages/Home/Home.jsx`, `src/data/industriesData.js`, `src/data/accessoriesData.js`, `src/data/contactData.js`, `src/data/brandsData.js`. Este reporte es el octavo archivo añadido.

## Validación realizada

- `npm ci` con el lockfile existente: completado, sin cambiar dependencias ni lockfile. El primer intento falló por DNS del sandbox; se resolvió con ejecución autorizada fuera del sandbox.
- `npm run build`: correcto, Vite 7.3.6, 93 módulos transformados. Compilación de producción revisada mediante `npm run preview`.
- No hay script de lint en `package.json`. `git diff --check` y comprobación sintáctica de datos: correctos.
- Navegador: 13 rutas principales a 390 × 844, 768 × 1024 y 1440 × 900 (39 combinaciones), con encabezados presentes y sin desbordamiento horizontal del documento. Inspección visual de Home en móvil y escritorio e industrias en móvil y tablet; no se necesitó modificar CSS.
- Carrusel: selección manual de los cuatro slides, textos correspondientes y pausa comprobados.
- Menú: desplegable con todas las industrias y sus cinco rutas, tanto en escritorio como en móvil; apertura del menú móvil comprobada.
- CTA: enlaces «Hablar con un especialista» verificados hacia `#/contacto` en las 39 combinaciones. Clic desde Home en escritorio y menú móvil; formulario de contacto presente. Se conserva HashRouter.
- Contacto: prueba con datos ficticios completada; resultado explícito sin envío, guardado ni solicitud real.
- Productos: filtro Refacciones muestra el catálogo pendiente y filtro Productos vuelve a mostrar las tres familias de equipo.
- Universo Láser: las seis rutas de detalle muestran «Contenido disponible próximamente», sin desbordamiento en móvil.
- Marcas: ocho fichas de detalle accesibles, sin desbordamiento en móvil.
- 911 XVR: validación local con datos ficticios completada, sin enviar reporte ni fotografía. La carga de fotografía no se ejercitó; su código no cambió.
- Consola del navegador: sin errores ni advertencias capturadas durante las comprobaciones.

## Problemas y límites de la revisión

- El botón flotante existente de WhatsApp muestra un número provisional de desarrollo. Se conserva por estar fuera del cambio de comportamiento solicitado; no se abrió ni se envió mensaje. El CTA «Hablar con un especialista» utiliza Contacto.
- El catálogo y los canales reales siguen pendientes; la actualización textual no habilita ventas, recepción de contactos ni tickets.
- La revisión responsive combina medición del DOM y muestras visuales; no constituye una prueba visual exhaustiva de cada sección a cada resolución.
- La aprobación comercial y técnica final queda a cargo del responsable y XVR, especialmente los pendientes anteriores.

Estado de entrega previsto: rama `feat/client-content-update`, árbol limpio tras el commit de este reporte. No se ejecutó push, PR, merge, publicación, cambios de remotos, modificaciones de main ni eliminación de ramas.
