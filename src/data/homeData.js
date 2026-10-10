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


// Marcas provisionales; relaciones y logotipos pendientes de confirmación.
export { brands as partners } from './brandsData';

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
  regions: 'México · USA · Costa Rica',
};