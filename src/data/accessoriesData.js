import { paths } from '../routes/paths';

// Editorial prototype: general selection criteria, not confirmed specifications.
// Replace copy and image paths here after XVR approval. No standards, numerical
// performance, certifications, guarantees or stock availability are asserted.
export const accessoriesPage = {
  hero: {
    eyebrow: 'ECOSISTEMA DE INTEGRACIÓN LÁSER',
    title: 'Accesorios y periféricos para soluciones láser completas',
    description: 'Equipamiento para complementar, proteger y mantener los procesos de manufactura láser, seleccionado de acuerdo con las necesidades de cada instalación.',
    images: [
      { src: '/images/hero/accessories/integracion-placeholder.svg', label: 'Integración de periféricos' },
      { src: '/images/hero/accessories/equipamiento-placeholder.svg', label: 'Equipamiento industrial' },
    ],
  },
  integration: {
    eyebrow: 'ARQUITECTURA DE PROCESO INTEGRAL',
    title: 'Integración en ecosistemas láser completos',
    description: 'Óptica, control térmico y gestión de emisiones forman parte del entorno de operación de un sistema láser.',
    items: [
      { icon: 'precision', category: '01 / ÓPTICA', title: 'Óptica Calibrada', description: 'Selección y ajuste de elementos ópticos según la trayectoria del haz y los requisitos de la aplicación.', note: 'Enfoque: alineación y configuración óptica.' },
      { icon: 'process', category: '02 / TERMODINÁMICA', title: 'Control de la Deriva Térmica', description: 'Consideración de las condiciones de enfriamiento y de la carga térmica del sistema durante su operación.', note: 'Enfoque: gestión de temperatura.' },
      { icon: 'support', category: '03 / CALIDAD AMBIENTAL', title: 'Gestión de Emisiones', description: 'Evaluación de la extracción y filtración de humos y partículas generados por el proceso.', note: 'Enfoque: captación y filtración.' },
    ],
  },
  catalog: {
    eyebrow: 'CATÁLOGO INDUSTRIAL ESPECIALIZADO',
    title: 'Equipamiento Periférico por Categoría Operativa',
  },
  advantages: {
    eyebrow: 'VENTAJA OPERATIVA XVR',
    title: '¿Por qué equipar sus periféricos a través de XVR?',
    description: 'La selección de periféricos debe considerar tanto la aplicación como su integración, operación y mantenimiento.',
    items: [
      { icon: 'precision', category: '01 / INGENIERÍA ÓPTICA', title: 'Compatibilidad e integración', description: 'Revisión de las interfaces ópticas y mecánicas para orientar la selección de componentes adecuados al sistema.', note: 'Revisión de la configuración existente.' },
      { icon: 'check', category: '02 / REQUISITOS DE APLICACIÓN', title: 'Consideración de requisitos normativos', description: 'Identificación de los requisitos de seguridad y documentación que deben evaluarse para cada instalación.', note: 'Requisitos a validar según el proyecto.' },
      { icon: 'support', category: '03 / CONTINUIDAD OPERATIVA', title: 'Soporte y continuidad operativa', description: 'Planeación del mantenimiento y de las necesidades de consumibles para acompañar la operación del equipo.', note: 'Disponibilidad y alcance sujetos a consulta.' },
    ],
  },
  cta: {
    eyebrow: 'INGENIERÍA E INTEGRACIÓN XVR',
    title: '¿Necesitas complementar tu sistema láser?',
    description: 'Nuestro equipo puede orientarte en la selección de accesorios y periféricos adecuados para tu instalación.',
    primaryButtonLabel: 'Hablar con un especialista',
    primaryButtonHref: paths.contact,
  },
};

export const accessoryCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'safety', label: 'Seguridad Láser' },
  { id: 'extraction', label: 'Extracción y Filtración' },
  { id: 'measurement', label: 'Medición y Óptica' },
  { id: 'cooling', label: 'Enfriamiento Industrial' },
];

export const accessories = [
  {
    id: 'seguridad-laser', category: 'safety', eyebrow: 'CAT-01 / SEGURIDAD INDUSTRIAL',
    title: 'Seguridad Láser y Protección Radiológica',
    image: '/images/accessories/safety/proteccion-laser-placeholder.svg', alt: '',
    description: 'Elementos de protección y contención que se seleccionan según el sistema láser, el entorno de trabajo y la evaluación de riesgos de la instalación.',
    highlights: [
      { title: 'Envolventes y cabinas', description: 'Opciones de contención y acceso para integrar en la estación de trabajo.' },
      { title: 'Visores y protección óptica', description: 'Selección según la fuente y las condiciones de exposición evaluadas.' },
      { title: 'Interlocks y señalización', description: 'Elementos para considerar en la configuración de seguridad del sistema.' },
    ],
    metadata: 'Selección según aplicación',
    cta: { label: 'Consultar equipamiento', href: paths.contact },
  },
  {
    id: 'extraccion-filtracion', category: 'extraction', eyebrow: 'CAT-02 / GESTIÓN AMBIENTAL',
    title: 'Extracción y Filtración de Humos Industriales',
    image: '/images/accessories/extraction/filtracion-humos-placeholder.svg', alt: '',
    description: 'Equipos de captación y filtración para gestionar las emisiones del proceso, considerando el material trabajado y las condiciones del área de operación.',
    highlights: [
      { title: 'Captación en el proceso', description: 'Revisión de puntos de extracción y conexiones a la estación.' },
      { title: 'Etapas de filtración', description: 'Selección del medio filtrante según las emisiones identificadas.' },
      { title: 'Mantenimiento de filtros', description: 'Consideración del acceso, revisión y sustitución de consumibles.' },
    ],
    metadata: 'Configuración según proceso',
    cta: { label: 'Consultar equipamiento', href: paths.contact },
  },
  {
    id: 'medicion-optica', category: 'measurement', eyebrow: 'CAT-03 / METROLOGÍA Y CONTROL',
    title: 'Medición de Potencia, Perfil de Haz y Calibración',
    image: '/images/accessories/measurement/medicion-haz-placeholder.svg', alt: '',
    description: 'Instrumentos para observar y evaluar características del haz. Su selección depende de la fuente, la configuración óptica y las necesidades de medición.',
    highlights: [
      { title: 'Perfil de haz', description: 'Herramientas para examinar la distribución del haz en la aplicación.' },
      { title: 'Medición de potencia', description: 'Selección de sensores compatibles con el sistema a evaluar.' },
      { title: 'Revisión y calibración', description: 'Definición de procedimientos y documentación según el equipo.' },
    ],
    metadata: 'Instrumentación según fuente',
    cta: { label: 'Consultar equipamiento', href: paths.contact },
  },
  {
    id: 'enfriamiento-industrial', category: 'cooling', eyebrow: 'CAT-04 / TERMORREGULACIÓN',
    title: 'Enfriamiento y Termorregulación (Chillers)',
    image: '/images/accessories/cooling/chiller-industrial-placeholder.svg', alt: '',
    description: 'Sistemas de enfriamiento para acompañar la operación de fuentes y componentes láser, seleccionados a partir de sus requisitos térmicos y de instalación.',
    highlights: [
      { title: 'Control de temperatura', description: 'Configuración de la termorregulación según las necesidades del equipo.' },
      { title: 'Circuitos de enfriamiento', description: 'Revisión de conexiones y compatibilidad del fluido de trabajo.' },
      { title: 'Monitoreo operativo', description: 'Consideración de señales y condiciones de mantenimiento del sistema.' },
    ],
    metadata: 'Selección según carga térmica',
    cta: { label: 'Consultar equipamiento', href: paths.contact },
  },
];
