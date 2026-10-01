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
  // Contenido general provisional. Pendiente de aprobación por XVR; sin especificaciones confirmadas.
  "soldadura-laser": {
    "slug": "soldadura-laser",
    "title": "Soldadura Láser de Alta Resistencia y Precisión",
    "eyebrow": "SOLUCIÓN LÁSER INDUSTRIAL",
    "category": "UNIÓN Y ENSAMBLE",
    "description": "Unión de componentes mediante energía láser localizada. Los materiales, el diseño de junta y las condiciones de ensamble orientan la selección del proceso.",
    "heroImages": [
      {
        "src": "/images/hero/solutions/welding/proceso-placeholder.svg",
        "label": "UNIÓN Y ENSAMBLE"
      },
      {
        "src": "/images/hero/solutions/welding/integracion-placeholder.svg",
        "label": "Integración · UNIÓN Y ENSAMBLE"
      }
    ],
    "highlights": [
      {
        "icon": "precision",
        "title": "Precisión localizada",
        "description": "Concentración de energía en la zona de unión."
      },
      {
        "icon": "check",
        "title": "Repetibilidad",
        "description": "Definición de condiciones reproducibles y verificables."
      },
      {
        "icon": "chip",
        "title": "Integración automatizada",
        "description": "Coordinación con movimiento y sujeción."
      }
    ],
    "process": {
      "eyebrow": "FUNDAMENTACIÓN TÉCNICA INDUSTRIAL",
      "title": "Proceso de Soldadura Láser Industrial",
      "description": "La energía focalizada aporta calor a la zona de unión. Su aplicación localizada permite evaluar una menor extensión térmica frente a procesos de aporte más amplio; el resultado depende del material y de la configuración.",
      "items": [
        {
          "title": "Aporte localizado de energía",
          "category": "FOCALIZACIÓN",
          "description": "El haz dirige energía hacia la zona de unión.",
          "note": "Revisión: materiales y acceso a la junta."
        },
        {
          "title": "Formación de la unión",
          "category": "ENSAMBLE",
          "description": "La interacción térmica permite unir componentes bajo condiciones definidas para cada aplicación.",
          "note": "Revisión: geometría y preparación de piezas."
        },
        {
          "title": "Control e integración",
          "category": "AUTOMATIZACIÓN",
          "description": "La sujeción, el movimiento y la secuencia se coordinan para ejecutar la unión.",
          "note": "Revisión: posicionamiento y seguimiento."
        }
      ]
    },
    "applications": {
      "eyebrow": "APLICACIONES EN PRODUCCIÓN",
      "title": "Campos de Aplicación Primarios",
      "description": "Ejemplos a evaluar según material, geometría y contexto de producción.",
      "items": [
        {
          "title": "Componentes metálicos",
          "category": "MANUFACTURA",
          "description": "Unión de piezas según su combinación de materiales y diseño.",
          "image": "/images/solutions/welding/applications/metales-placeholder.svg"
        },
        {
          "title": "Ensambles de precisión",
          "category": "ENSAMBLE",
          "description": "Juntas localizadas en conjuntos que requieren controlar el posicionamiento.",
          "image": "/images/solutions/welding/applications/ensambles-placeholder.svg"
        },
        {
          "title": "Componentes automotrices",
          "category": "AUTOMOTRIZ",
          "description": "Evaluación de uniones dentro de secuencias de fabricación.",
          "image": "/images/solutions/welding/applications/automotriz-placeholder.svg"
        },
        {
          "title": "Componentes técnicos",
          "category": "APLICACIONES TÉCNICAS",
          "description": "Uniones en dispositivos y conjuntos con requisitos particulares.",
          "image": "/images/solutions/welding/applications/componentes-placeholder.svg"
        }
      ]
    },
    "benefits": {
      "eyebrow": "INGENIERÍA DIRIGIDA A RESULTADOS",
      "title": "Ventajas del proceso",
      "description": "Aspectos generales a evaluar. Los resultados dependen del material y las condiciones de operación; requieren validación para cada aplicación.",
      "items": [
        {
          "icon": "precision",
          "title": "Precisión localizada",
          "description": "Concentración de energía en la zona de unión."
        },
        {
          "icon": "check",
          "title": "Repetibilidad",
          "description": "Definición de condiciones reproducibles y verificables."
        },
        {
          "icon": "chip",
          "title": "Integración automatizada",
          "description": "Coordinación con movimiento y sujeción."
        },
        {
          "icon": "process",
          "title": "Control del proceso",
          "description": "Selección y seguimiento de las condiciones de unión."
        },
        {
          "icon": "bolt",
          "title": "Gestión térmica localizada",
          "description": "Posibilidad de limitar la zona afectada térmicamente según material y configuración."
        },
        {
          "icon": "tool",
          "title": "Adaptación al ensamble",
          "description": "Evaluación de la estrategia según la geometría de las piezas."
        }
      ]
    },
    "industries": {
      "eyebrow": "SECTORES ESPECIALIZADOS",
      "title": "Industrias relacionadas",
      "description": "Sectores con posibles aplicaciones, sujetos a evaluación de los requisitos de cada proyecto.",
      "items": [
        {
          "icon": "car",
          "title": "Automotriz",
          "description": "Unión de componentes y conjuntos."
        },
        {
          "icon": "medical",
          "title": "Dispositivos médicos",
          "description": "Evaluación de ensambles según requisitos del dispositivo."
        },
        {
          "icon": "chip",
          "title": "Electrónica",
          "description": "Uniones localizadas en componentes técnicos."
        },
        {
          "icon": "plane",
          "title": "Aeroespacial",
          "description": "Evaluación de juntas y condiciones de fabricación."
        },
        {
          "icon": "tool",
          "title": "Manufactura industrial",
          "description": "Integración de uniones en producción."
        }
      ]
    },
    "ecosystem": {
      "eyebrow": "ARQUITECTURA DE INTEGRACIÓN",
      "title": "Componentes del Ecosistema Tecnológico XVR",
      "description": "Categorías de componentes a considerar al definir la configuración de la solución.",
      "linkLabel": "Ver accesorios y periféricos",
      "linkHref": "/accesorios-perifericos",
      "items": [
        {
          "title": "Fuente láser",
          "category": "GENERACIÓN DE ENERGÍA",
          "description": "Selección según materiales e interacción requerida.",
          "image": "/images/solutions/welding/ecosystem/fuente-placeholder.svg"
        },
        {
          "title": "Óptica y cabezal",
          "category": "DIRECCIONAMIENTO",
          "description": "Configuración del haz y acceso a la zona de unión.",
          "image": "/images/solutions/welding/ecosystem/cabezal-placeholder.svg"
        },
        {
          "title": "Movimiento y automatización",
          "category": "INTEGRACIÓN",
          "description": "Sujeción y coordinación de la secuencia de ensamble.",
          "image": "/images/solutions/welding/ecosystem/automatizacion-placeholder.svg"
        }
      ]
    },
    "cta": {
      "eyebrow": "CONSULTORÍA DE APLICACIONES",
      "title": "¿Tienes una aplicación de soldadura láser?",
      "description": "Comparte los materiales y el tipo de unión para revisar las alternativas de tu proceso.",
      "primaryButtonLabel": "Contactar a XVR",
      "primaryButtonHref": "/contacto"
    }
  },
  "corte-microprocesos": {
    "slug": "corte-microprocesos",
    "title": "Corte Láser de Alta Dinámica para Manufactura",
    "eyebrow": "SOLUCIÓN LÁSER INDUSTRIAL",
    "category": "CORTE Y MICROPROCESOS",
    "description": "Corte de materiales mediante energía láser focalizada. La geometría, el material y el acabado esperado guían la estrategia de trabajo.",
    "heroImages": [
      {
        "src": "/images/hero/solutions/cutting/proceso-placeholder.svg",
        "label": "CORTE Y MICROPROCESOS"
      },
      {
        "src": "/images/hero/solutions/cutting/integracion-placeholder.svg",
        "label": "Integración · CORTE Y MICROPROCESOS"
      }
    ],
    "highlights": [
      {
        "icon": "precision",
        "title": "Precisión de corte",
        "description": "Definición de trayectorias según los requisitos de la pieza."
      },
      {
        "icon": "check",
        "title": "Repetibilidad",
        "description": "Reutilización de recorridos y condiciones evaluadas."
      },
      {
        "icon": "tool",
        "title": "Flexibilidad geométrica",
        "description": "Adaptación del recorrido a distintos contornos."
      }
    ],
    "process": {
      "eyebrow": "FUNDAMENTACIÓN TÉCNICA INDUSTRIAL",
      "title": "Proceso de Corte Láser Industrial",
      "description": "El láser concentra energía para separar el material a lo largo de una trayectoria. La configuración óptica y el movimiento se coordinan según el contorno y las necesidades de fabricación.",
      "items": [
        {
          "title": "Focalización de energía",
          "category": "INTERACCIÓN ÓPTICA",
          "description": "El haz concentra energía sobre la zona de corte.",
          "note": "Revisión: material e interacción."
        },
        {
          "title": "Separación controlada del material",
          "category": "CORTE",
          "description": "La interacción con el material permite desarrollar el contorno previsto.",
          "note": "Revisión: geometría y acabado."
        },
        {
          "title": "Movimiento y trayectoria",
          "category": "CONTROL",
          "description": "La programación define el recorrido y la secuencia de separación.",
          "note": "Revisión: posicionamiento y recorrido."
        }
      ]
    },
    "applications": {
      "eyebrow": "APLICACIONES EN PRODUCCIÓN",
      "title": "Campos de Aplicación Primarios",
      "description": "Ejemplos a evaluar según material, geometría y contexto de producción.",
      "items": [
        {
          "title": "Lámina y componentes metálicos",
          "category": "METALMECÁNICA",
          "description": "Definición de contornos según las necesidades de la pieza.",
          "image": "/images/solutions/cutting/applications/lamina-placeholder.svg"
        },
        {
          "title": "Geometrías complejas",
          "category": "DISEÑO",
          "description": "Formas que requieren una trayectoria programada.",
          "image": "/images/solutions/cutting/applications/geometrias-placeholder.svg"
        },
        {
          "title": "Componentes industriales",
          "category": "MANUFACTURA",
          "description": "Corte de elementos destinados a ensambles industriales.",
          "image": "/images/solutions/cutting/applications/componentes-placeholder.svg"
        },
        {
          "title": "Fabricación de piezas",
          "category": "PRODUCCIÓN",
          "description": "Preparación de piezas a partir de diseños y secuencias de corte.",
          "image": "/images/solutions/cutting/applications/piezas-placeholder.svg"
        }
      ]
    },
    "benefits": {
      "eyebrow": "INGENIERÍA DIRIGIDA A RESULTADOS",
      "title": "Ventajas del proceso",
      "description": "Aspectos generales a evaluar. Los resultados dependen del material y las condiciones de operación; requieren validación para cada aplicación.",
      "items": [
        {
          "icon": "precision",
          "title": "Precisión de corte",
          "description": "Definición de trayectorias según los requisitos de la pieza."
        },
        {
          "icon": "check",
          "title": "Repetibilidad",
          "description": "Reutilización de recorridos y condiciones evaluadas."
        },
        {
          "icon": "tool",
          "title": "Flexibilidad geométrica",
          "description": "Adaptación del recorrido a distintos contornos."
        },
        {
          "icon": "chip",
          "title": "Integración automatizada",
          "description": "Coordinación del corte con movimiento y manejo de piezas."
        },
        {
          "icon": "process",
          "title": "Acabado según aplicación",
          "description": "Posible reducción de operaciones manuales posteriores cuando el resultado lo permita."
        },
        {
          "icon": "bolt",
          "title": "Control de trayectoria",
          "description": "Organización del posicionamiento y la secuencia de fabricación."
        }
      ]
    },
    "industries": {
      "eyebrow": "SECTORES ESPECIALIZADOS",
      "title": "Industrias relacionadas",
      "description": "Sectores con posibles aplicaciones, sujetos a evaluación de los requisitos de cada proyecto.",
      "items": [
        {
          "icon": "car",
          "title": "Automotriz",
          "description": "Preparación de componentes para ensamble."
        },
        {
          "icon": "chip",
          "title": "Electrónica",
          "description": "Corte de componentes técnicos."
        },
        {
          "icon": "plane",
          "title": "Aeroespacial",
          "description": "Evaluación de geometrías para fabricación."
        },
        {
          "icon": "tool",
          "title": "Manufactura",
          "description": "Producción de piezas con contornos definidos."
        },
        {
          "icon": "precision",
          "title": "Metalmecánica",
          "description": "Corte de componentes metálicos."
        }
      ]
    },
    "ecosystem": {
      "eyebrow": "ARQUITECTURA DE INTEGRACIÓN",
      "title": "Componentes del Ecosistema Tecnológico XVR",
      "description": "Categorías de componentes a considerar al definir la configuración de la solución.",
      "linkLabel": "Ver accesorios y periféricos",
      "linkHref": "/accesorios-perifericos",
      "items": [
        {
          "title": "Fuente láser",
          "category": "GENERACIÓN DE ENERGÍA",
          "description": "Selección según el material y la separación requerida.",
          "image": "/images/solutions/cutting/ecosystem/fuente-placeholder.svg"
        },
        {
          "title": "Sistema óptico y cabezal",
          "category": "FOCALIZACIÓN",
          "description": "Direccionamiento del haz sobre el recorrido de corte.",
          "image": "/images/solutions/cutting/ecosystem/cabezal-placeholder.svg"
        },
        {
          "title": "Movimiento y control",
          "category": "TRAYECTORIA",
          "description": "Coordinación de posicionamiento y secuencias.",
          "image": "/images/solutions/cutting/ecosystem/control-placeholder.svg"
        }
      ]
    },
    "cta": {
      "eyebrow": "CONSULTORÍA DE APLICACIONES",
      "title": "¿Tienes una aplicación de corte láser?",
      "description": "Cuéntanos sobre el material, la geometría y el acabado que requiere tu pieza.",
      "primaryButtonLabel": "Contactar a XVR",
      "primaryButtonHref": "/contacto"
    }
  },
  "tratamiento-superficial": {
    "slug": "tratamiento-superficial",
    "title": "Tratamiento y Limpieza Superficial con Láser",
    "eyebrow": "SOLUCIÓN LÁSER INDUSTRIAL",
    "category": "TRATAMIENTO Y LIMPIEZA",
    "description": "Limpieza o modificación localizada de superficies mediante láser. Se evalúan el sustrato, la capa a tratar y las necesidades de la siguiente operación.",
    "heroImages": [
      {
        "src": "/images/hero/solutions/surface-treatment/proceso-placeholder.svg",
        "label": "TRATAMIENTO Y LIMPIEZA"
      },
      {
        "src": "/images/hero/solutions/surface-treatment/integracion-placeholder.svg",
        "label": "Integración · TRATAMIENTO Y LIMPIEZA"
      }
    ],
    "highlights": [
      {
        "icon": "precision",
        "title": "Proceso localizado",
        "description": "Definición de áreas que requieren intervención."
      },
      {
        "icon": "process",
        "title": "Control del tratamiento",
        "description": "Ajuste de condiciones según superficie y objetivo."
      },
      {
        "icon": "chip",
        "title": "Automatización",
        "description": "Coordinación del recorrido con sistemas de movimiento."
      }
    ],
    "process": {
      "eyebrow": "FUNDAMENTACIÓN TÉCNICA INDUSTRIAL",
      "title": "Proceso de Tratamiento y Limpieza Láser",
      "description": "La interacción del láser con una superficie puede utilizarse para remover capas o modificar áreas seleccionadas. La compatibilidad del material y las condiciones deben evaluarse para cada aplicación.",
      "items": [
        {
          "title": "Interacción láser-superficie",
          "category": "EVALUACIÓN",
          "description": "El material base y la capa superficial responden a la energía aplicada.",
          "note": "Revisión: sustrato y composición."
        },
        {
          "title": "Remoción o modificación localizada",
          "category": "TRATAMIENTO",
          "description": "El recorrido se concentra en zonas que requieren limpieza o preparación.",
          "note": "Revisión: área y resultado esperado."
        },
        {
          "title": "Control del proceso",
          "category": "INTEGRACIÓN",
          "description": "La trayectoria y las condiciones se coordinan con el entorno de operación.",
          "note": "Revisión: seguimiento y gestión de emisiones."
        }
      ]
    },
    "applications": {
      "eyebrow": "APLICACIONES EN PRODUCCIÓN",
      "title": "Campos de Aplicación Primarios",
      "description": "Ejemplos a evaluar según material, geometría y contexto de producción.",
      "items": [
        {
          "title": "Limpieza de superficies",
          "category": "LIMPIEZA",
          "description": "Remoción de contaminantes en materiales compatibles, sujeta a evaluación.",
          "image": "/images/solutions/surface-treatment/applications/limpieza-placeholder.svg"
        },
        {
          "title": "Preparación de superficies",
          "category": "PROCESOS POSTERIORES",
          "description": "Acondicionamiento según requisitos de la siguiente operación.",
          "image": "/images/solutions/surface-treatment/applications/preparacion-placeholder.svg"
        },
        {
          "title": "Residuos y recubrimientos",
          "category": "REMOCIÓN SELECTIVA",
          "description": "Tratamiento de capas sujeto a compatibilidad con el sustrato.",
          "image": "/images/solutions/surface-treatment/applications/recubrimientos-placeholder.svg"
        },
        {
          "title": "Tratamiento de componentes",
          "category": "PROCESO LOCALIZADO",
          "description": "Intervención en áreas específicas de una pieza.",
          "image": "/images/solutions/surface-treatment/applications/componentes-placeholder.svg"
        }
      ]
    },
    "benefits": {
      "eyebrow": "INGENIERÍA DIRIGIDA A RESULTADOS",
      "title": "Ventajas del proceso",
      "description": "Aspectos generales a evaluar. Los resultados dependen del material y las condiciones de operación; requieren validación para cada aplicación.",
      "items": [
        {
          "icon": "precision",
          "title": "Proceso localizado",
          "description": "Definición de áreas que requieren intervención."
        },
        {
          "icon": "process",
          "title": "Control del tratamiento",
          "description": "Ajuste de condiciones según superficie y objetivo."
        },
        {
          "icon": "chip",
          "title": "Automatización",
          "description": "Coordinación del recorrido con sistemas de movimiento."
        },
        {
          "icon": "check",
          "title": "Repetibilidad",
          "description": "Reproducción y verificación de condiciones evaluadas."
        },
        {
          "icon": "tool",
          "title": "Alternativa a operaciones mecánicas",
          "description": "Menor dependencia de herramientas mecánicas en aplicaciones compatibles."
        },
        {
          "icon": "bolt",
          "title": "Preparación para otras operaciones",
          "description": "Evaluación del acabado requerido por el proceso posterior."
        }
      ]
    },
    "industries": {
      "eyebrow": "SECTORES ESPECIALIZADOS",
      "title": "Industrias relacionadas",
      "description": "Sectores con posibles aplicaciones, sujetos a evaluación de los requisitos de cada proyecto.",
      "items": [
        {
          "icon": "car",
          "title": "Automotriz",
          "description": "Preparación de superficies de componentes."
        },
        {
          "icon": "plane",
          "title": "Aeroespacial",
          "description": "Evaluación de tratamientos localizados."
        },
        {
          "icon": "precision",
          "title": "Metalmecánica",
          "description": "Limpieza de superficies metálicas."
        },
        {
          "icon": "tool",
          "title": "Manufactura",
          "description": "Integración en secuencias productivas."
        },
        {
          "icon": "support",
          "title": "Mantenimiento industrial",
          "description": "Evaluación de limpieza durante el mantenimiento."
        }
      ]
    },
    "ecosystem": {
      "eyebrow": "ARQUITECTURA DE INTEGRACIÓN",
      "title": "Componentes del Ecosistema Tecnológico XVR",
      "description": "Categorías de componentes a considerar al definir la configuración de la solución.",
      "linkLabel": "Ver accesorios y periféricos",
      "linkHref": "/accesorios-perifericos",
      "items": [
        {
          "title": "Fuente láser",
          "category": "INTERACCIÓN SUPERFICIAL",
          "description": "Selección según sustrato, capa y objetivo.",
          "image": "/images/solutions/surface-treatment/ecosystem/fuente-placeholder.svg"
        },
        {
          "title": "Sistema de escaneo",
          "category": "DIRECCIONAMIENTO",
          "description": "Definición del recorrido sobre zonas a tratar.",
          "image": "/images/solutions/surface-treatment/ecosystem/escaneo-placeholder.svg"
        },
        {
          "title": "Extracción e integración periférica",
          "category": "ENTORNO DE OPERACIÓN",
          "description": "Gestión de emisiones y coordinación con periféricos según la aplicación.",
          "image": "/images/solutions/surface-treatment/ecosystem/extraccion-placeholder.svg"
        }
      ]
    },
    "cta": {
      "eyebrow": "CONSULTORÍA DE APLICACIONES",
      "title": "¿Necesitas evaluar un proceso de tratamiento o limpieza láser?",
      "description": "Comparte el material, la superficie y el resultado que buscas para revisar tu aplicación.",
      "primaryButtonLabel": "Contactar a XVR",
      "primaryButtonHref": "/contacto"
    }
  }

};
