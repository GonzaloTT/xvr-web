import { paths } from '../routes/paths';

// Editorial copy transcribed from the supplied reference. Technical figures,
// certifications, phone, legal identity and service guarantees require approval.

export const heroSlides = [
  {
    "src": "/images/hero/home-problemas-placeholder.svg",
    "label": "Problemas industriales",
    "title": "Tu reto de producción, nuestro punto de partida",
    "description": "Cuéntanos qué necesitas mejorar en tu proceso para explorar una solución adecuada."
  },
  {
    "src": "/images/hero/home-aplicaciones-placeholder.svg",
    "label": "Aplicaciones industriales",
    "title": "Tecnología para lo que tu industria necesita",
    "description": "Exploremos aplicaciones de identificación, unión y procesamiento de componentes."
  },
  {
    "src": "/images/hero/home-manufactura-laser-placeholder.svg",
    "label": "Manufactura con láser",
    "title": "Encuentra el lugar del láser en tu manufactura",
    "description": "Conoce opciones de marcado, soldadura, corte y tratamiento superficial para tu proyecto."
  },
  {
    "src": "/images/hero/home-capacidad-tecnica-placeholder.svg",
    "label": "Capacidad técnica y experiencia",
    "title": "Criterio técnico para decidir el siguiente paso",
    "description": "Conversemos sobre materiales, proceso e integración para orientar tu proyecto."
  },
  {
    "src": "/images/hero/home-partners-placeholder.svg",
    "label": "Marcas y partners tecnológicos",
    "title": "La tecnología adecuada empieza con una buena selección",
    "description": "Revisemos opciones de fabricantes y componentes según las necesidades de tu aplicación."
  }
];

export const solutions = [
  {
    slug: 'marcado-laser',
    title: 'Marcado láser',
    description:
      'Identificación permanente, serialización trazable y grabado de alta precisión en metales y polímeros de grado industrial.',
  },
  {
    slug: 'soldadura-laser',
    title: 'Soldadura láser',
    description:
      'Uniones estructurales herméticas de alta penetración con mínima afectación térmica y distorsión controlada.',
  },
  {
    slug: 'corte-microprocesos',
    title: 'Corte y microprocesos',
    description:
      'Corte de geometrías complejas, micromecanizado y perforación con pulsos ultracortos para componentes críticos.',
  },
  {
    slug: 'tratamiento-superficial',
    title: 'Tratamiento superficial',
    description:
      'Limpieza técnica selectiva de óxidos y aceites, despasivado y texturizado para adherencia sin químicos.',
  },
].map((item) => ({
  ...item,
  image: `/images/solutions/${item.slug}-placeholder.svg`,
  href: paths.solution(item.slug),
}));

export const industries = [
  {
    "slug": "automotriz",
    "icon": "car",
    "title": "Automotriz y E-Mobility",
    "description": "Identificación y unión de componentes para vehículos y baterías."
  },
  {
    "slug": "medica",
    "icon": "medical",
    "title": "Dispositivos Médicos",
    "description": "Marcado y ensamble de instrumental y componentes médicos."
  },
  {
    "slug": "electronica",
    "icon": "chip",
    "title": "Electrónica y Semiconductores",
    "description": "Identificación y procesamiento de pequeños componentes electrónicos."
  },
  {
    "slug": "aeronautica",
    "icon": "plane",
    "title": "Aeronáutica y Defensa",
    "description": "Identificación y trabajo de superficies en componentes aeronáuticos y de defensa."
  }
].map(item => ({
  ...item,
  image: `/images/industries/${item.slug}-placeholder.svg`,
  href: paths.industry(item.slug),
}));

// Marcas provisionales; relaciones y logotipos pendientes de confirmación.
export const partners = [
  {
    "name": "COHERENT",
    "logo": "/images/partners/coherent.svg",
    "alt": "COHERENT"
  },
  {
    "name": "IPG Photonics",
    "logo": "/images/partners/ipg-photonics.svg",
    "alt": "IPG Photonics"
  },
  {
    "name": "SCANLAB",
    "logo": "/images/partners/scanlab.svg",
    "alt": "SCANLAB"
  },
  {
    "name": "LASERLINE",
    "logo": "/images/partners/laserline.svg",
    "alt": "LASERLINE"
  },
  {
    "name": "LUXINAR",
    "logo": "/images/partners/luxinar.svg",
    "alt": "LUXINAR"
  },
  {
    "name": "BOFA",
    "logo": "/images/partners/bofa.svg",
    "alt": "BOFA"
  },
  {
    "name": "laservision",
    "logo": "/images/partners/laservision.svg",
    "alt": "laservision"
  },
  {
    "name": "MACKEN",
    "logo": "/images/partners/macken.svg",
    "alt": "MACKEN"
  }
];

export const accompaniment = [
  {
    icon: 'support',
    title: 'Atención personalizada y consultoría',
    description:
      'Asesoría técnica y análisis de proyectos desde la primera llamada, con ingenieros dedicados a optimizar el rendimiento.',
  },
  {
    icon: 'training',
    title: 'Capacitación técnica especializada',
    description:
      'Transferencia profunda de conocimiento y mejores prácticas para operadores, técnicos de mantenimiento e ingenieros.',
  },
  {
    icon: 'bolt',
    title: 'Soporte técnico y respuesta ágil',
    description:
      'Diagnóstico remoto y tiempos de respuesta ágiles en planta para resolución de incidencias con stock local de partes críticas.',
  },
  {
    icon: 'tool',
    title: 'Reparación y mantenimiento',
    description:
      'Programas preventivos calibrados, alineación de haces, limpieza de óptica de precisión y verificación metrológica continua.',
  },
];

export const companyHighlights = [
  {
    icon: 'check',
    title: 'Ingeniería de aplicaciones in-house',
    description:
      'Desarrollo a la medida de recetas ópticas y parámetros optimizados para tus materiales.',
  },
  {
    icon: 'process',
    title: 'Laboratorio de pruebas y factibilidad técnica en Querétaro',
    description:
      'Análisis metalúrgico, micrografías, ensayos de tracción y hermeticidad previos a la inversión.',
  },
  {
    icon: 'precision',
    title: 'Soporte multirregional con base local',
    description:
      'Ingenieros de servicio con capacidad de respuesta técnica inmediata en planta.',
  },
];

// Unconfirmed contact/legal data deliberately omitted; populate after approval.
export const company = {
  name: 'XVR',
  logo: '/images/branding/xvr-logo.jpg',
  phone: null,
  address: null,
  legalName: null,
  certifications: [],
  regions: 'México · USA · Costa Rica',
};