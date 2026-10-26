import { paths } from '../routes/paths';
import { homeIndustryImages } from './homeData';

// Technical content supplied by XVR for the presentation; not a certification
// or a guarantee of results for a particular material or production line.
export const industryEditorial = {
  introduction: 'Encuentra tu industria, identifica una necesidad y explora los procesos láser relacionados. Cada aplicación requiere evaluar el material, la geometría y las condiciones de producción.',
  notice: 'La selección del proceso y sus ventajas dependen del material, la geometría y la validación del proyecto con XVR. Estas aplicaciones no acreditan certificaciones ni garantizan resultados específicos.',
  ctaTitle: '¿Tienes un reto de manufactura en esta industria?',
};

const processLabels = {
  'marcado-laser': 'Marcado láser',
  'soldadura-laser': 'Soldadura láser',
  'corte-microprocesos': 'Corte y microprocesos',
  'tratamiento-superficial': 'Tratamiento superficial',
};
const application = (label, processSlug) => ({ label, processSlug, processLabel: processLabels[processSlug] });
const process = (title, processSlug, text) => ({
  title,
  processSlug,
  text,
});

const records = [
  {
    slug: 'automotriz', icon: 'car', title: 'Automotriz y E-Mobility',
    description: 'Trazabilidad y uniones repetibles para vehículos, sensores y componentes de movilidad.',
    headline: 'Trazabilidad y flexibilidad para la manufactura automotriz',
    introduction: 'La industria automotriz impulsa la innovación en manufactura láser con nuevos materiales y procesos. La producción de alto volumen y alta mezcla demanda estabilidad, rapidez y flexibilidad ante cambios de modelo.',
    applicationLinks: [application('Trazabilidad de componentes', 'marcado-laser'), application('Unión de metales y plásticos', 'soldadura-laser'), application('Corte fino de componentes', 'corte-microprocesos')],
    blocks: [
      { id: 'necesidades', title: 'Necesidades y retos', items: [
        { title: 'Trazabilidad total', text: 'Conservar la identificación permanente de piezas y componentes de seguridad a lo largo de la producción.' },
        { title: 'Repetibilidad y cambios de modelo', text: 'Evaluar procesos estables y rápidos ante materiales diversos y estrictos estándares de calidad, tanto en producción continua de alto volumen como de bajo volumen y alta mezcla.' },
      ] },
      { id: 'aplicaciones', title: 'Aplicaciones y procesos láser', items: [
        process('Identificación y trazabilidad', 'marcado-laser', 'Marcado de VIN, DataMatrix y QR; identificación permanente en metales, plásticos y componentes de seguridad.'),
        process('Uniones metálicas', 'soldadura-laser', 'Soldadura láser de metales, con o sin aporte, para Body & White, elementos de transmisión, soportes y estructuras.'),
        process('Sellado de plásticos', 'soldadura-laser', 'Sellado hermético sin contacto en sensores de presión o ADAS, housings electrónicos, iluminación, módulos de conectividad y consolas de entretenimiento.'),
        process('Corte y preparación de superficies', 'corte-microprocesos', 'Corte fino de componentes metálicos y ablación. La preparación de superficies y el endurecimiento se evalúan según el material.'),
      ] },
      { id: 'tecnologias', title: 'Ventajas a evaluar', items: [
        { title: 'Estabilidad del proceso', text: 'Repetibilidad y rapidez para acompañar la producción de alto volumen y alta mezcla.' },
        { title: 'Flexibilidad de manufactura', text: 'Adaptación ante cambios de modelo y nuevos materiales. La estandarización permite mantener los tiempos muertos bajo control y reducir las variables que deben ajustarse; la preparación y el endurecimiento se evalúan dentro de estos procesos.' },
      ] },
    ],
  },
  {
    slug: 'medica', icon: 'medical', title: 'Dispositivos Médicos',
    description: 'Identificación permanente y procesos de precisión para dispositivos y microcomponentes médicos.',
    headline: 'Precisión y trazabilidad para dispositivos médicos',
    introduction: 'La manufactura médica requiere procesos controlados, repetibles y documentables. La tecnología láser de precisión y sin contacto permite evaluar aplicaciones con requisitos estrictos de trazabilidad y validación.',
    applicationLinks: [application('Identificación UDI', 'marcado-laser'), application('Sellado de dispositivos', 'soldadura-laser'), application('Corte de microcomponentes', 'corte-microprocesos')],
    blocks: [
      { id: 'necesidades', title: 'Necesidades y retos', items: [
        { title: 'Identificación y material', text: 'Conseguir una identificación permanente sin dañar el material, considerando acero inoxidable, polímeros médicos y titanio.' },
        { title: 'Validación documentable', text: 'Definir criterios de aceptación y trazabilidad conforme a las normativas aplicables. No se atribuyen certificaciones específicas a XVR.' },
      ] },
      { id: 'aplicaciones', title: 'Aplicaciones y procesos láser', items: [
        process('Trazabilidad UDI', 'marcado-laser', 'Marcado UDI conforme a las normativas aplicables e identificación permanente de dispositivos y componentes.'),
        process('Uniones limpias', 'soldadura-laser', 'Soldadura de plásticos médicos y sellado hermético de dispositivos, con uniones sin adhesivos.'),
        process('Microcomponentes y superficies', 'corte-microprocesos', 'Corte de tubos y microcomponentes, ablación de recubrimientos y texturizado superficial funcional.'),
      ] },
      { id: 'tecnologias', title: 'Ventajas a evaluar', items: [
        { title: 'Precisión y repetibilidad', text: 'Procesos limpios y sin contacto, con trazabilidad permanente y posibilidades de reducir la variabilidad y el scrap.' },
        { title: 'Entornos controlados', text: 'Integración en entornos controlados y facilidad para documentar la validación IQ/OQ/PQ, sujeta al proceso y sus requisitos.' },
      ] },
    ],
  },
  {
    slug: 'food-beverage', icon: 'process', title: 'Food & Beverage',
    imageAlt: 'Imagen ilustrativa de marcado láser; fotografía específica de Food & Beverage pendiente.',
    description: 'Codificación permanente y procesamiento de empaques para líneas de alimentos y bebidas.',
    headline: 'Identificación y procesamiento de empaques',
    introduction: 'Food & Beverage requiere procesos confiables e higiénicos en entornos de alta producción y limpieza frecuente. El láser permite evaluar la identificación permanente y la reducción de tintas y consumibles.',
    applicationLinks: [application('Fechado y codificación', 'marcado-laser'), application('Identificación de envases', 'marcado-laser'), application('Corte de films y laminados', 'corte-microprocesos')],
    blocks: [
      { id: 'necesidades', title: 'Necesidades y retos', items: [
        { title: 'Producción y limpieza', text: 'Integrar la operación en líneas de alta producción y ambientes agresivos con lavados frecuentes, evaluando la robustez necesaria y manteniendo procesos higiénicos.' },
        { title: 'Identificación legible', text: 'Mantener información permanente sobre empaques y envases y reducir el uso de tintas y consumibles.' },
      ] },
      { id: 'aplicaciones', title: 'Aplicaciones y procesos láser', items: [
        process('Fechado y codificación de envases', 'marcado-laser', 'Fechado y codificación de empaques, así como marcado directo sobre envases sin consumibles de tinta.'),
        process('Materiales de empaque', 'corte-microprocesos', 'Corte de materiales de empaque y procesamiento de films y laminados, según su composición y aplicación.'),
      ] },
      { id: 'tecnologias', title: 'Ventajas para Food & Beverage', items: [
        { title: 'Identificación sin tinta', text: 'Marcado permanente y legible, eliminación de consumibles de tinta y procesos higiénicos.' },
        { title: 'Continuidad de producción', text: 'Alta disponibilidad, menor mantenimiento e integración en líneas existentes como ventajas a evaluar en las condiciones del proyecto.' },
      ] },
      { id: 'seguridad', title: 'Calidad y seguridad', items: [
        { title: 'Extracción y medición', text: 'Considerar sistemas de extracción de humo y equipos de medición de potencia.' },
        { title: 'Protección láser', text: 'Evaluar ventanas de protección láser y equipo de protección personal para la aplicación.' },
      ] },
    ],
  },
  {
    slug: 'electronica', icon: 'chip', title: 'Electrónica y Semiconductores',
    description: 'Identificación y microprocesos para componentes sensibles, circuitos y ensambles electrónicos.',
    headline: 'Precisión para componentes electrónicos sensibles',
    introduction: 'La miniaturización, la complejidad funcional y la producción de alto volumen exigen precisión en componentes sensibles. Los procesos sin contacto y de bajo impacto térmico se evalúan según los materiales y el diseño del ensamble.',
    applicationLinks: [application('Trazabilidad de PCBs', 'marcado-laser'), application('Unión de microcomponentes', 'soldadura-laser'), application('Corte de circuitos flexibles', 'corte-microprocesos')],
    blocks: [
      { id: 'necesidades', title: 'Necesidades y retos', items: [
        { title: 'Microescala y sensibilidad', text: 'Trabajar con alta precisión y bajo impacto térmico, preservando componentes sensibles en áreas reducidas.' },
        { title: 'Volumen y cambios de diseño', text: 'Mantener flexibilidad ante cambios de diseño e integración en líneas automatizadas de alto volumen.' },
      ] },
      { id: 'aplicaciones', title: 'Aplicaciones y procesos láser', items: [
        process('Identificación de componentes', 'marcado-laser', 'Identificación de PCBs, marcado de componentes electrónicos y codificación para trazabilidad.'),
        process('Soldering', 'soldadura-laser', 'Aplicaciones sobre materiales flexibles o rígidos, con o sin aporte, incluido el trabajo con materiales preestañados (pre-tinned). El lazo cerrado puede incorporar cámara térmica o pirómetro; la configuración requiere evaluación.'),
        process('Soldadura de plásticos', 'soldadura-laser', 'Soldadura láser de plásticos para microcomponentes y encapsulado láser, con sellado hermético sin contacto y procesos térmicamente controlados.'),
        process('Corte y ablación', 'corte-microprocesos', 'Corte de circuitos flexibles, ablación de capas y ajustes de precisión.'),
      ] },
      { id: 'tecnologias', title: 'Ventajas a evaluar', items: [
        { title: 'Control a microescala', text: 'Alta precisión, procesos sin contacto y reducción de daños por choque térmico.' },
        { title: 'Flexibilidad e integración', text: 'Adaptación a cambios de diseño e integración de procesos en líneas automatizadas.' },
      ] },
      { id: 'seguridad', title: 'Calidad y seguridad', items: [
        { title: 'Extracción y medición', text: 'Considerar extracción de humo y medición de potencia para el proceso.' },
        { title: 'Protección láser', text: 'Evaluar ventanas de protección y equipo de protección personal.' },
      ] },
    ],
  },
  {
    slug: 'aeronautica', icon: 'plane', title: 'Aeronáutica y Defensa',
    description: 'Trazabilidad y procesos controlados para componentes aeronáuticos y de defensa.',
    headline: 'Control y trazabilidad para componentes especializados',
    introduction: 'La manufactura aeronáutica y de defensa requiere procesos controlados, repetibles y documentables. La precisión y la estabilidad deben acompañar la preservación de las propiedades del material y los requisitos de desempeño y seguridad.',
    applicationLinks: [application('Identificación de componentes', 'marcado-laser'), application('Uniones de precisión', 'soldadura-laser'), application('Ablación de recubrimientos', 'corte-microprocesos')],
    blocks: [
      { id: 'necesidades', title: 'Necesidades y retos', items: [
        { title: 'Material y desempeño', text: 'Preservar las propiedades del material con alta precisión y estabilidad, frente a requisitos estrictos de desempeño y seguridad.' },
        { title: 'Control documentable', text: 'Mantener trazabilidad y documentación de procesos sin contacto, con criterios de aceptación y validación definidos para el proyecto.' },
      ] },
      { id: 'aplicaciones', title: 'Aplicaciones y procesos láser', items: [
        process('Identificación permanente', 'marcado-laser', 'Marcado e identificación de componentes para mantener su trazabilidad.'),
        process('Uniones de precisión', 'soldadura-laser', 'Soldadura y uniones de precisión con control térmico del proceso.'),
        process('Corte y superficies funcionales', 'corte-microprocesos', 'Corte y microprocesos, ablación de recubrimientos y texturizado superficial funcional.'),
      ] },
      { id: 'tecnologias', title: 'Ventajas a evaluar', items: [
        { title: 'Precisión y control térmico', text: 'Alta precisión dimensional y control térmico para reducir reprocesos, variabilidad y scrap.' },
        { title: 'Trazabilidad y documentación', text: 'Trazabilidad permanente y documentación. La integración en procesos certificados se evalúa cuando corresponda, sin atribuir certificaciones a XVR.' },
      ] },
      { id: 'seguridad', title: 'Calidad y seguridad', items: [
        { title: 'Extracción y medición', text: 'Considerar extracción de humo y equipos de medición de potencia.' },
        { title: 'Protección láser', text: 'Evaluar ventanas de protección y equipo de protección personal.' },
      ] },
    ],
  },
];

export const industries = records.map(industry => ({
  ...industry,
  image: homeIndustryImages[industry.slug],
  href: paths.industry(industry.slug),
  applications: industry.applicationLinks.map(item => item.label),
  secondary: industry.applicationLinks.map(item => item.label).join(' · '),
}));
