# Validación — Fase 1

Fecha: 30 de septiembre de 2026.

## Resultados

- `npm install`: correcto, 69 paquetes agregados; auditoría npm: 0 vulnerabilidades en esa ejecución.
- `npm run build`: compilación de producción correcta con Vite 7.3.6.
- Instalación y ejecución de esbuild requirieron autorización fuera del sandbox: el primer intento encontró restricciones de caché/red y el primer build recibió `spawn EPERM`. No eran errores del código.
- Navegador local: sin mensajes de nivel error o warn en las interacciones comprobadas.
- Desktop 1280 px y móvil 390 px: revisión visual de página completa. Tablet 768 px: revisión de cabecera, Hero y adaptación de columnas.
- Sin overflow horizontal a 320, 390, 768, 1024, 1101, 1280 y 1440 px: `documentElement.scrollWidth <= documentElement.clientWidth` en todos los casos.
- Sin imágenes cargadas rotas en los anchos comprobados.
- Menú móvil: abre, cierra con Escape y devuelve el foco al botón; elegir Industrias cierra el menú y navega a `/#industrias`.
- Rutas reservadas Soluciones, Accesorios, Contacto y detalle de Marcado: muestran el aviso compartido y conservan Header y Footer.
- Inicio retorna a `/`. Desde Contacto, Nosotros vuelve a `/#nosotros` con la sección disponible.
- Carrusel: se observó avance automático; la selección manual cambió a la segunda imagen y el botón de pausa cambió a Reanudar.
- Revisión de código: intervalo limpio al desmontar, tratamiento de cero/una imagen, documento oculto y escucha de `prefers-reduced-motion`; CSS desactiva transiciones y scroll suave con movimiento reducido.
- CTASection no depende de Home: textos, destinos y segundo botón son props. Footer se monta en el layout global fuera de Routes.

## Límites

- No se ejecutó emulación de movimiento reducido en navegador: se verificó su implementación en código.
- No se realizó una auditoría completa con lector de pantalla ni pruebas entre múltiples motores de navegador.
- La revisión visual usa assets geométricos provisionales; falta comparar nuevamente al recibir fotografías, logos y fuente oficial.
- Contenido editorial de referencia requiere aprobación comercial. No se ha publicado ni desplegado el sitio.
- No existía suite de tests ni lint; no se agregaron herramientas de validación como dependencias permanentes.
- No se ejecutaron comandos Git.
