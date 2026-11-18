import { paths } from '../routes/paths';

// Editorial copy transcribed from the supplied reference. Technical figures,
// certifications, phone, legal identity and service guarantees require approval.

export const aboutImage = '/images/about/Nosotros.webp';

export const heroSlides = [
  {
    "src": "/images/hero/home/Home-Hero-01.webp",
    "label": "XVR 1",
    "title": "XVR desarrolla, implementa y da soporte a procesos de manufactura con láser en LatAm Norte, Centro América y Caribe."
  },
  {
    "src": "/images/hero/home/Home-Hero-02.webp",
    "label": "XVR 2",
    "title": "Representamos marcas líderes en su respectivo segmento. Generadores láser, óptica, extractores de humo y equipo de protección personal."
  },
  {
    "src": "/images/hero/home/Home-Hero-03.webp",
    "label": "XVR 3",
    "title": "Tenemos servicio técnico y logística propios."
  },
  {
    "src": "/images/hero/home/Home-Hero-04.webp",
    "label": "XVR 4",
    "title": "Tenemos oficinas en Estados Unidos, México y Costa Rica."
  }
];

// First image batch: Home cards only; interior industry images stay independent.
export const homeIndustryImages = {
  automotriz: '/images/hero/industrias/Industrias-Automotriz.webp',
  medica: '/images/hero/industrias/Industrias-Medicos.webp',
  // Temporary illustrative marking asset; dedicated Food & Beverage photo pending.
  'food-beverage': '/images/processes/Proceso-Marcado.webp',
  electronica: '/images/hero/industrias/Industrias-Electronica.webp',
  aeronautica: '/images/hero/industrias/Industrias-Aereonautica.webp',
};

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


// Marcas provisionales; relaciones y logotipos pendientes de confirmación.
import { brands } from './brandsData';

// BOFA and MACKEN retain text: Bank of America and MAKLEN are different brands.
const partnerLogos = {
  coherent: 'coherent-logo.png',
  'ipg-photonics': 'ipg-photonics-logo.png',
  scanlab: 'scanlab-logo.png',
  laserline: 'laserline-logo.png',
  luxinar: 'luxinar-logo.png',
  laservision: 'LaserVision_Logo.png',
};
export const partners = brands.map(brand => ({
  ...brand,
  logo: partnerLogos[brand.slug] ? `/images/partners/${partnerLogos[brand.slug]}` : null,
}));

export const accompaniment = [
  {
    icon: 'support',
    title: 'Orientación para tu proyecto',
    description:
      'Material, geometría y objetivo de producción: tres puntos de partida para conversar sobre tu aplicación.',
  },
  {
    icon: 'training',
    title: 'Necesidades de capacitación',
    description:
      'Identifica qué necesita conocer tu equipo para operar el proceso. El alcance de capacitación se debe acordar con XVR.',
  },
  {
    icon: 'bolt',
    title: 'Consulta de soporte técnico',
    description:
      'Describe el equipo y la situación observada para consultar opciones de atención, sin anticipar tiempos ni disponibilidad.',
  },
  {
    icon: 'tool',
    title: 'Planificación del mantenimiento',
    description:
      'Reúne el historial del equipo y las recomendaciones del fabricante para definir qué atención conviene evaluar.',
  },
];

export const companyHighlights = [
  {
    icon: 'check',
    title: 'La aplicación como punto de partida',
    description:
      'Define qué pieza necesitas procesar y qué resultado esperas obtener.',
  },
  {
    icon: 'process',
    title: 'Criterios para evaluar alternativas',
    description:
      'Materiales, geometría y condiciones de uso ayudan a orientar la selección de tecnología.',
  },
  {
    icon: 'precision',
    title: 'Alcance acordado para cada proyecto',
    description:
      'Los servicios, recursos y condiciones de atención deben confirmarse con XVR.',
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
  regions: null, // Publish coverage only after XVR confirmation.
};
