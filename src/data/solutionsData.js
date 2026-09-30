import { paths } from '../routes/paths';

// Phase 2 editorial prototype. Titles/categories follow the approved references.
// No numerical performance, certifications or laboratory capabilities are asserted.
// Replace descriptions and local image paths here after XVR editorial approval.
export const solutionsOverview = {
  eyebrow: 'PORTAFOLIO DE MANUFACTURA LÁSER',
  title: 'Tecnología láser aplicada a procesos industriales',
  description: 'Cada proceso requiere una solución distinta. Explore las aplicaciones de la tecnología láser y los aspectos a considerar para su integración en manufactura.',
  heroImages: [
    { src: '/images/hero/solutions/portafolio-placeholder.svg', label: 'Portafolio de manufactura' },
    { src: '/images/hero/solutions/procesos-placeholder.svg', label: 'Procesos industriales' },
  ],
  cta: {
    eyebrow: 'CONSULTORÍA DE APLICACIONES',
    title: '¿Necesitas definir el proceso adecuado para tu aplicación?',
    description: 'Cuéntanos sobre tus piezas y requerimientos de producción para revisar las alternativas de tu proceso.',
    primaryButtonLabel: 'Hablar con un especialista',
    primaryButtonHref: paths.contact,
  },
};

export const solutionPortfolio = [
  {
    slug: 'marcado-laser', navLabel: 'MARCADO INDUSTRIAL',
    title: 'Marcado Láser Industrial de Alta Velocidad',
    eyebrow: 'TRAZABILIDAD INDUSTRIAL Y DIRECT PART MARKING',
    description: 'Marcado de textos, logotipos y códigos para la identificación de piezas. La selección del proceso depende del material, el tipo de marca y los requisitos de lectura de cada aplicación.',
    image: '/images/solutions/marcado-laser-placeholder.svg',
    benefits: [
      { icon: 'check', title: 'Identificación y trazabilidad', description: 'Información sobre la pieza para acompañar su recorrido en producción.' },
      { icon: 'process', title: 'Marcado directo', description: 'Evaluación del material y del acabado requerido para la marca.' },
      { icon: 'precision', title: 'Integración al proceso', description: 'Configuración de estación o de línea según la aplicación.' },
    ],
  },
  {
    slug: 'soldadura-laser', navLabel: 'SOLDADURA ESTRUCTURAL',
    title: 'Soldadura Láser de Alta Resistencia y Precisión',
    eyebrow: 'UNIÓN METALÚRGICA Y ESTRUCTURAL',
    description: 'Aplicaciones de unión mediante energía láser. El diseño de la junta, la combinación de materiales y la preparación de las piezas orientan la selección del proceso.',
    image: '/images/solutions/soldadura-laser-placeholder.svg',
    benefits: [
      { icon: 'check', title: 'Diseño de la unión', description: 'Revisión de la geometría y los requisitos de la junta.' },
      { icon: 'process', title: 'Gestión del aporte térmico', description: 'Parámetros definidos según materiales y condiciones de ensamble.' },
      { icon: 'precision', title: 'Integración automatizada', description: 'Evaluación de sujeción, movimiento y secuencia de trabajo.' },
    ],
  },
  {
    slug: 'corte-microprocesos', navLabel: 'CORTE Y DINÁMICA',
    title: 'Corte Láser de Alta Dinámica para Manufactura',
    eyebrow: 'CORTE FINO Y GEOMETRÍAS COMPLEJAS',
    description: 'Procesos láser para corte y mecanizado de componentes. El material, el espesor y la geometría de la pieza determinan la configuración que debe evaluarse.',
    image: '/images/solutions/corte-microprocesos-placeholder.svg',
    benefits: [
      { icon: 'process', title: 'Definición del contorno', description: 'Revisión del diseño de pieza y del acabado esperado.' },
      { icon: 'bolt', title: 'Movimiento y trayectoria', description: 'Planeación de las secuencias de corte y posicionamiento.' },
      { icon: 'tool', title: 'Proceso óptico', description: 'Selección de la estrategia de trabajo según cada material.' },
    ],
  },
  {
    slug: 'tratamiento-superficial', navLabel: 'TRATAMIENTO Y LIMPIEZA',
    title: 'Tratamiento y Limpieza Superficial con Láser',
    eyebrow: 'PREPARACIÓN Y MODIFICACIÓN DE SUPERFICIES',
    description: 'Aplicaciones de limpieza y preparación de superficies mediante láser. Se revisan el sustrato, la capa a tratar y las condiciones del proceso posterior.',
    image: '/images/solutions/tratamiento-superficial-placeholder.svg',
    benefits: [
      { icon: 'process', title: 'Tratamiento localizado', description: 'Definición de las áreas y capas que requieren intervención.' },
      { icon: 'check', title: 'Evaluación del sustrato', description: 'Revisión del material base y del acabado requerido.' },
      { icon: 'precision', title: 'Preparación del proceso', description: 'Criterios de superficie alineados con la siguiente operación.' },
    ],
  },
];

export const solutionDetails = {
  'marcado-laser': {
    slug: 'marcado-laser',
    title: 'Marcado Láser Industrial de Alta Precisión',
    eyebrow: 'SOLUCIÓN LÁSER INDUSTRIAL',
    category: 'TRAZABILIDAD Y MARCADO',
    description: 'Identificación, serialización y trazabilidad de piezas mediante marcado láser. Cada aplicación se evalúa de acuerdo con el material, la marca y las condiciones del proceso.',
    heroImages: [
      { src: '/images/hero/solutions/marking/identificacion-placeholder.svg', label: 'Identificación de piezas' },
      { src: '/images/hero/solutions/marking/trazabilidad-placeholder.svg', label: 'Trazabilidad industrial' },
    ],
    highlights: [
      { icon: 'process', title: 'Marcado directo', description: 'Información sobre la pieza' },
      { icon: 'check', title: 'Identificación', description: 'Textos, códigos y logotipos' },
      { icon: 'precision', title: 'Integración', description: 'Configuración según aplicación' },
    ],
    process: {
      eyebrow: 'FUNDAMENTACIÓN TÉCNICA INDUSTRIAL',
      title: 'Proceso de Marcado y Grabado Láser Industrial',
      description: 'El marcado láser utiliza energía focalizada para generar una marca sobre un material. El mecanismo y el resultado dependen del sustrato, su acabado y los parámetros seleccionados.',
      items: [
        { title: 'Recocido Térmico (Annealing)', category: 'TÉRMICO', description: 'Modificación de la apariencia superficial mediante la interacción térmica con el material.', note: 'Evaluación: material y acabado superficial.' },
        { title: 'Grabado por Ablación', category: 'REMOCIÓN', description: 'Remoción localizada de material para formar la marca o el grabado.', note: 'Evaluación: geometría y profundidad requerida.' },
        { title: 'Cambio de Color / Espumado', category: 'MODIFICACIÓN', description: 'Cambio de apariencia de determinados materiales como resultado de su interacción con el láser.', note: 'Evaluación: composición y contraste esperado.' },
      ],
    },
    applications: {
      eyebrow: 'APLICACIONES EN PRODUCCIÓN', title: 'Campos de Aplicación Primarios',
      description: 'Alternativas de identificación para distintas piezas, materiales y etapas de fabricación.',
      items: [
        { title: 'Heavy Duty / Trazabilidad VIN', category: 'AUTOMOTRIZ', description: 'Identificación de componentes y referencias de fabricación.', image: '/images/solutions/marking/applications/vin-placeholder.svg' },
        { title: 'Dispositivos Médicos / UDI', category: 'MÉDICO', description: 'Marcado de identificadores según los requisitos del dispositivo.', image: '/images/solutions/marking/applications/dispositivos-placeholder.svg' },
        { title: 'Códigos 2D Datamatrix & QR', category: 'IDENTIFICACIÓN DIGITAL', description: 'Códigos para vincular la pieza con información del proceso.', image: '/images/solutions/marking/applications/codigos-placeholder.svg' },
        { title: 'Placas y Calibración', category: 'FABRICACIÓN GENERAL', description: 'Textos, referencias y escalas sobre placas y componentes.', image: '/images/solutions/marking/applications/placas-placeholder.svg' },
      ],
    },
    benefits: {
      eyebrow: 'INGENIERÍA DIRIGIDA A RESULTADOS', title: 'Ventajas Técnicas Concretas del Marcado Láser',
      description: 'Aspectos del proceso a evaluar para cada aplicación. Los resultados deben validarse sobre el material y las condiciones de uso.',
      items: [
        { icon: 'process', title: 'Marcado sin tintas', description: 'Una alternativa al uso de tintas para la identificación directa.' },
        { icon: 'precision', title: 'Proceso sin contacto', description: 'Interacción óptica con la superficie, sin herramienta de marcado mecánica.' },
        { icon: 'check', title: 'Definición y contraste', description: 'Selección del tipo de marca según las necesidades de lectura.' },
        { icon: 'chip', title: 'Integración automatizada', description: 'Configuración del marcado dentro de la secuencia de producción.' },
        { icon: 'tool', title: 'Permanencia de la marca', description: 'Evaluación del comportamiento frente a las condiciones de uso.' },
        { icon: 'support', title: 'Continuidad del proceso', description: 'Planeación de operación, mantenimiento y seguimiento de la aplicación.' },
      ],
    },
    industries: {
      eyebrow: 'SECTORES ESPECIALIZADOS', title: 'Industrias que Operan con Marcado Láser XVR',
      description: 'Sectores de aplicación a explorar según sus necesidades de identificación y trazabilidad.',
      items: [
        { icon: 'car', title: 'Automotriz', description: 'Identificación de piezas y componentes de ensamble.' },
        { icon: 'medical', title: 'Dispositivos Médicos', description: 'Identificadores sobre instrumentos y dispositivos.' },
        { icon: 'chip', title: 'Electrónica', description: 'Marcado de componentes y referencias de fabricación.' },
        { icon: 'plane', title: 'Aeronáutica', description: 'Identificación de partes y seguimiento de componentes.' },
        { icon: 'tool', title: 'Herramental & Moldes', description: 'Referencias de herramientas, insertos y cavidades.' },
      ],
    },
    ecosystem: {
      eyebrow: 'ARQUITECTURA DE INTEGRACIÓN', title: 'Componentes del Ecosistema Tecnológico XVR',
      description: 'Elementos que se consideran al configurar una aplicación de marcado, desde la fuente hasta el entorno de operación.',
      linkLabel: 'Ver periféricos compatibles', linkHref: paths.accessories,
      items: [
        { title: 'Fuentes Láser', category: 'MÓDULO ÓPTICO', description: 'Selección de la fuente según el material y la interacción buscada.', image: '/images/solutions/marking/ecosystem/fuentes-placeholder.svg' },
        { title: 'Cabezales Galvanométricos', category: 'CINEMÁTICA Y ESCANEO', description: 'Direccionamiento del haz para definir el recorrido de marcado.', image: '/images/solutions/marking/ecosystem/cabezales-placeholder.svg' },
        { title: 'Enfriamiento y Extracción de Humos', category: 'SEGURIDAD Y PROCESO', description: 'Acondicionamiento del sistema y gestión de emisiones según la aplicación.', image: '/images/solutions/marking/ecosystem/extraccion-placeholder.svg' },
      ],
    },
    cta: {
      eyebrow: '¿Tienes una aplicación de marcado láser?',
      title: '¿Tienes una aplicación de marcado láser?',
      description: 'Cuéntanos sobre tu proceso y nuestro equipo podrá ayudarte a identificar la solución adecuada.',
      primaryButtonLabel: 'Contactar a XVR', primaryButtonHref: paths.contact,
    },
  },
};
