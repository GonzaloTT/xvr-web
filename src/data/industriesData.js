import { paths } from '../routes/paths';
import { homeIndustryImages } from './homeData';

// Technical content supplied by XVR for the presentation; not a certification
// or a guarantee of results for a particular material or production line.
export const industryEditorial = {
  introduction: 'Aquí encontrará las aplicaciones más comunes para distintas industrias.',
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
    introduction: 'La industria automotriz requiere innovación continua en diseño, materiales y métodos de manufactura sin perder la trazabilidad como parte del control de calidad. La tecnología, la cual está en innovación constante, trae novedades que permiten trabajar con eficiencia, menos residuos y gran flexibilidad. Se adapta a volúmenes y mezclas de producto dinámicas gracias a la combinación de electrónica, óptica y software.',
    applicationLinks: [application('Trazabilidad de componentes', 'marcado-laser'), application('Unión de metales y plásticos', 'soldadura-laser'), application('Corte de materiales diversos', 'corte-microprocesos')],
    blocks: [
      { id: 'necesidades', title: 'Necesidades y retos', items: [
        { title: 'Trazabilidad total', text: 'Conservar la identificación permanente de piezas y componentes de seguridad a lo largo de la producción.' },
        { title: 'Repetibilidad y cambios de modelo', text: 'Evaluar procesos estables y rápidos ante materiales diversos y estrictos estándares de calidad, tanto en producción continua de alto volumen como de bajo volumen y alta mezcla.' },
      ] },
      { id: 'aplicaciones', title: 'Aplicaciones y procesos láser', items: [
        process('Marcado - Identificación y trazabilidad', 'marcado-laser', 'Marcado de VIN, DataMatrix y QR. Identificación permanente en metales, plásticos y componentes de seguridad.'),
        process('Soldadura de plásticos', 'soldadura-laser', 'Sellado hermético sin contacto en sensores, housings electrónicos, iluminación y consolas.'),
        process('Soldadura de metales', 'soldadura-laser', 'Con o sin aporte, para Body & White, transmisiones y estructuras.'),
        process('Corte de materiales diversos', 'corte-microprocesos', 'Corte de precisión en estructuras, textiles o recubrimientos.'),
      ] },
      { id: 'tecnologias', title: 'Ventajas a evaluar', items: [
        { title: 'Estabilidad del proceso', text: 'Repetibilidad y rapidez.' },
        { title: 'Flexibilidad de manufactura', text: 'Adaptación ante cambios de modelo y nuevos materiales, así como baja generación de residuos.' },
      ] },
    ],
  },
  {
    slug: 'medica', icon: 'medical', title: 'Dispositivos Médicos',
    description: 'Identificación permanente y procesos de precisión para dispositivos y microcomponentes médicos.',
    headline: 'Precisión y trazabilidad para dispositivos médicos',
    introduction: 'La manufactura de dispositivos médicos requiere repetibilidad, precisión y escalabilidad sin comprometer la biocompatibilidad y la normativa. Son productos destinados a impactar positivamente en la vida de los pacientes. La tecnología láser permite fabricar equipo quirúrgico, prótesis y dispositivos médicos con precisión y eficacia.',
    applicationLinks: [application('Identificación UDI', 'marcado-laser'), application('Soldadura de dispositivos', 'soldadura-laser'), application('Corte de microcomponentes', 'corte-microprocesos')],
    blocks: [
      { id: 'necesidades', title: 'Necesidades y retos', items: [
        { title: 'Precisión y repetibilidad', text: 'Los procesos operan en el rango de los micrómetros y con poca tolerancia al error. El láser se convierte en la tecnología que ofrece precisión y repetibilidad hasta en geometrías complejas sin necesidad de contacto físico.' },
      ] },
      { id: 'aplicaciones', title: 'Aplicaciones y procesos láser', items: [
        process('Trazabilidad e identificación', 'marcado-laser', 'Marcado UDI conforme a normas e identificación permanente de dispositivos.'),
        process('Ablación', 'tratamiento-superficial', 'Remoción de recubrimientos en secciones reducidas y sin afectar la dimensionalidad.'),
        process('Corte y perforado', 'corte-microprocesos', 'Tubos metálicos o plásticos, alambres y placas.'),
        process('Soldadura', 'soldadura-laser', 'Soldadura de metales (acero y nitinol) y plásticos. Tanto en dispositivos quirúrgicos como en dispositivos de diagnóstico y prótesis.'),
      ] },
      { id: 'tecnologias', title: 'Ventajas a evaluar', items: [
        { title: 'Precisión y repetibilidad', text: 'Procesos limpios sin contacto.' },
        { title: 'Entornos controlados', text: 'Integración y facilidad para documentar validación IQ/OQ/PQ.' },
      ] },
    ],
  },
  {
    slug: 'food-beverage', icon: 'process', title: 'Food & Beverage',
    imageAlt: 'Imagen ilustrativa de marcado láser; fotografía específica de Food & Beverage pendiente.',
    description: 'Codificación permanente y procesamiento de empaques para líneas de alimentos y bebidas.',
    headline: 'Identificación y procesamiento de empaques',
    introduction: 'Food & Beverage requiere procesos confiables e higiénicos en entornos salubres de alta producción. El láser genera referencias de lotificación, trazabilidad y etiquetado permanente sin recurrir a químicos o mantenimientos constantes.',
    applicationLinks: [application('Fechado y codificación', 'marcado-laser'), application('Identificación de envases', 'marcado-laser'), application('Corte de films y laminados', 'corte-microprocesos')],
    blocks: [
      { id: 'necesidades', title: 'Necesidades y retos', items: [
        { title: 'Ambientes demandantes', text: 'Ajustar el proceso láser en ambientes demandantes: líneas de alta velocidad, apego a normas de salubridad, entornos con temperaturas extremas o información diversa según el mercado.' },
        { title: 'Identificación legible y permanente', text: 'La identificación de los productos debe ser legible y permanente. Reducción de químicos y versatilidad para trabajar con materiales diversos (plásticos, materiales orgánicos o vidrio).' },
      ] },
      { id: 'aplicaciones', title: 'Aplicaciones y procesos láser', items: [
        process('Fechado y codificación', 'marcado-laser', 'Fechado y codificación de empaques y marcado directo sobre envases sin consumibles de tinta.'),
        process('Materiales de empaque', 'corte-microprocesos', 'Corte de materiales de empaque y procesamiento de films y laminados.'),
      ] },
      { id: 'tecnologias', title: 'Ventajas para Food & Beverage', items: [
        { title: 'Identificación sin tinta', text: 'Identificación sin tinta.' },
        { title: 'Continuidad de producción', text: 'Alta disponibilidad.' },
      ] },
      { id: 'seguridad', title: 'Calidad y seguridad', items: [
        { title: 'Extracción y medición', text: 'Extracción y filtración de humos y equipos de medición de potencia.' },
      ] },
    ],
  },
  {
    slug: 'electronica', icon: 'chip', title: 'Electrónica y Semiconductores',
    description: 'Identificación y microprocesos para componentes sensibles, circuitos y ensambles electrónicos.',
    headline: 'Precisión para componentes electrónicos sensibles',
    introduction: 'La miniaturización y producción de alto volumen exigen precisión en componentes sensibles mediante procesos sin contacto y de bajo impacto térmico.',
    applicationLinks: [application('Trazabilidad de PCBs', 'marcado-laser'), application('Unión de microcomponentes', 'soldadura-laser'), application('Corte de circuitos flexibles', 'corte-microprocesos')],
    blocks: [
      { id: 'necesidades', title: 'Necesidades y retos', items: [
        { title: 'Microescala y sensibilidad', text: 'Trabajar con alta precisión y bajo impacto térmico preservando las propiedades de los materiales.' },
        { title: 'Volumen y flexibilidad', text: 'Mantener adaptabilidad ante cambios de diseño en líneas automatizadas.' },
      ] },
      { id: 'aplicaciones', title: 'Aplicaciones y procesos láser', items: [
        process('Identificación', 'marcado-laser', 'Identificación de PCBs y codificación de componentes electrónicos.'),
        process('Soldadura de plásticos', 'soldadura-laser', 'Soldadura láser para microcomponentes y encapsulado con sellado hermético.'),
        process('Soldering', 'soldadura-laser', 'Aplicaciones sobre circuitos flexibles o rígidos (con o sin aporte, preestañados) con cámara térmica o pirómetro.'),
        process('Corte y ablación', 'corte-microprocesos', 'Corte de circuitos flexibles y ablación de capas de precisión.'),
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
    introduction: 'La manufactura en la industria aeronáutica se apega a los más estrictos controles de calidad. Las tolerancias son muy cerradas. La manufactura se caracteriza por trabajar con pequeños lotes y alta mezcla. La tecnología láser permite cambios de modelo con agilidad manteniendo la estabilidad de los procesos.',
    applicationLinks: [application('Identificación de componentes', 'marcado-laser'), application('Uniones de precisión', 'soldadura-laser'), application('Corte y tratamientos superficiales', 'corte-microprocesos')],
    blocks: [
      { id: 'necesidades', title: 'Necesidades y retos', items: [
        { title: 'Material y desempeño', text: 'Preservar propiedades del material con alta estabilidad ante altos estándares.' },
        { title: 'Control documentable', text: 'Mantener trazabilidad y documentación de procesos sin contacto.' },
      ] },
      { id: 'aplicaciones', title: 'Aplicaciones y procesos láser', items: [
        process('Identificación permanente', 'marcado-laser', 'Marcado y trazabilidad de componentes industriales de alto valor.'),
        process('Corte y tratamientos superficiales', 'corte-microprocesos', 'Corte, microestructuras superficiales, limpieza de recubrimientos y fluidos y templado.'),
        process('Uniones de precisión', 'soldadura-laser', 'Soldadura de metales e impresión 3D.'),
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
