import { paths } from '../routes/paths';

// Editorial copy transcribed from the supplied reference. Technical figures,
// certifications, phone, legal identity and service guarantees require approval.

export const heroSlides = [
  {
    src: '/images/hero/proceso-laser-placeholder.svg',
    label: 'Proceso láser',
  },
  {
    src: '/images/hero/integracion-placeholder.svg',
    label: 'Integración industrial',
  },
  {
    src: '/images/hero/manufactura-placeholder.svg',
    label: 'Manufactura de precisión',
  },
];

export const valuePillars = [
  {
    icon: 'process',
    title: 'Definición de Proceso',
    description:
      'Validación de parámetros y factibilidad metalúrgica previa.',
    caption: 'LABORATORIO IN-HOUSE',
  },
  {
    icon: 'precision',
    title: 'Integración de Precisión',
    description:
      'Sistemas láser, óptica, automatización y seguridad integrados.',
    caption: 'INTEGRACIÓN DE SISTEMAS',
  },
  {
    icon: 'training',
    title: 'Acompañamiento en Planta',
    description:
      'Puesta a punto, calibración y capacitación operativa in situ.',
    caption: 'PUESTA EN MARCHA',
  },
  {
    icon: 'support',
    title: 'Soporte y Continuidad',
    description:
      'Disponibilidad de consumibles, refacciones y asistencia técnica local.',
    caption: 'CONTINUIDAD OPERATIVA',
  },
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
    slug: 'automotriz',
    icon: 'car',
    title: 'Automotriz & E-Mobility',
    description:
      'Trazabilidad de componentes críticos, soldadura de celdas de batería y texturizado de superficies para ensamble estructural.',
  },
  {
    slug: 'medica',
    icon: 'medical',
    title: 'Dispositivos Médicos',
    description:
      'Marcado microscópico anticorrosión, soldadura de instrumental quirúrgico e implantes cumpliendo normativas sanitarias.',
  },
  {
    slug: 'electronica',
    icon: 'chip',
    title: 'Electrónica & Semiconductores',
    description:
      'Microsoldadura de circuitos, desaislado láser y marcado de microchips sin inducción electrostática.',
  },
  {
    slug: 'aeronautica',
    icon: 'plane',
    title: 'Aeronáutica & Defensa',
    description:
      'Mecanizado de superaleaciones, perforación de orificios de enfriamiento en álabes y trazabilidad bajo estándares aeroespaciales.',
  },
].map((item) => ({
  ...item,
  image: `/images/industries/${item.slug}-placeholder.svg`,
}));

export const partners = [
  'COHERENT',
  'IPG Photonics',
  'SCANLAB',
  'LASERLINE',
  'LUXINAR',
  'BOFA',
  'laservision',
  'MACKEN',
].map((name) => ({
  name,
  logo: null,
  alt: name,
}));

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