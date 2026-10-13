import { paths } from '../routes/paths';
import { homeIndustryImages } from './homeData';

// Contenido editorial provisional: no acredita capacidades, servicios ni equipamiento de XVR.
export const industryEditorial = {
  introduction: 'Cada industria plantea retos distintos de identificación, unión y procesamiento de componentes. Explora aplicaciones que pueden evaluarse según tus necesidades de manufactura.',
  notice: 'Contenido provisional, pendiente de validación por XVR. La selección depende del material y los requisitos del proyecto; estas opciones no confirman servicios ni equipamiento disponible.',
  ctaTitle: '¿Tienes un reto de manufactura en esta industria?',
};

const industrySummaries = [
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
  image: homeIndustryImages[item.slug],
  href: paths.industry(item.slug),
}));


const industryDetails = {
  "automotriz": {
    "headline": "Identifica y une componentes a lo largo de la fabricación",
    "introduction": "Desde piezas individuales hasta conjuntos para movilidad eléctrica, cada etapa plantea retos de identificación y ensamble. Las aplicaciones deben evaluarse según el material y la función del componente.",
    "blocks": [
      {
        "id": "necesidades",
        "title": "Necesidades y retos",
        "items": [
          {
            "title": "Necesidades de manufactura",
            "text": "Mantener la identificación de piezas y definir uniones durante el ensamble de vehículos y baterías."
          },
          {
            "title": "Retos a evaluar con XVR",
            "text": "marcas difíciles de leer, acceso a la zona de unión y variaciones entre componentes."
          }
        ]
      },
      {
        "id": "aplicaciones",
        "title": "Aplicaciones y procesos",
        "items": [
          {
            "title": "Aplicaciones a evaluar",
            "applications": ["Códigos de identificación en carcasas","Unión de contactos de batería","Preparación de zonas de ensamble"]
          },
          {
            "title": "Procesos posibles",
            "text": [
              { label: 'Marcado', processSlug: 'marcado-laser' }, ', ',
              { label: 'soldadura', processSlug: 'soldadura-laser' }, ', ',
              { label: 'corte', processSlug: 'corte-microprocesos' }, ' o ',
              { label: 'limpieza láser', processSlug: 'tratamiento-superficial' },
              ', según geometría, material y secuencia de fabricación.'
            ]
          }
        ]
      },
      {
        "id": "tecnologias",
        "title": "Tecnologías y soluciones",
        "items": [
          {
            "title": "Opciones tecnológicas",
            "text": "El escaneo del haz permite plantear marcas en distintas zonas; el posicionamiento y la sujeción ayudan a estudiar el acceso a una unión."
          },
          {
            "title": "Integración a evaluar",
            "text": "Una estación de marcado o una operación de unión en línea son ejemplos de configuración; su viabilidad y el alcance de XVR deben evaluarse."
          }
        ]
      }
    ]
  },
  "medica": {
    "headline": "Procesa e identifica componentes con atención al detalle",
    "introduction": "El tamaño, el material y la función de cada componente médico condicionan su fabricación. Conviene revisar la identificación y el procesamiento sin dar por supuesta la compatibilidad del láser.",
    "blocks": [
      {
        "id": "necesidades",
        "title": "Necesidades y retos",
        "items": [
          {
            "title": "Necesidades de manufactura",
            "text": "Identificar instrumental y procesar componentes pequeños conservando las características requeridas por su uso."
          },
          {
            "title": "Retos a evaluar con XVR",
            "text": "espacio de marcado limitado, geometrías delicadas y efectos del proceso sobre el material."
          }
        ]
      },
      {
        "id": "aplicaciones",
        "title": "Aplicaciones y procesos",
        "items": [
          {
            "title": "Aplicaciones a evaluar",
            "applications": ["Identificación de instrumental","Corte de pequeños tubos y láminas","Unión de componentes de dispositivos"]
          },
          {
            "title": "Procesos posibles",
            "text": [
              { label: 'Marcado', processSlug: 'marcado-laser' }, ', ',
              { label: 'micromecanizado', processSlug: 'corte-microprocesos' }, ' o ',
              { label: 'soldadura láser', processSlug: 'soldadura-laser' },
              ', sujetos a evaluación del material y los requisitos del proyecto.'
            ]
          }
        ]
      },
      {
        "id": "tecnologias",
        "title": "Tecnologías y soluciones",
        "items": [
          {
            "title": "Opciones tecnológicas",
            "text": "La óptica de enfoque y las sujeciones para piezas pequeñas son elementos a considerar al estudiar una marca, un corte o una unión."
          },
          {
            "title": "Integración a evaluar",
            "text": "Una estación con sujeción adaptada puede ser un punto de partida. El uso previsto del dispositivo y el alcance de XVR requieren revisión."
          }
        ]
      }
    ]
  },
  "electronica": {
    "headline": "Trabaja con componentes compactos y zonas de difícil acceso",
    "introduction": "La fabricación electrónica combina poco espacio disponible y materiales distintos en una misma pieza. Cada aplicación requiere evaluar dónde identificar, unir o retirar material.",
    "blocks": [
      {
        "id": "necesidades",
        "title": "Necesidades y retos",
        "items": [
          {
            "title": "Necesidades de manufactura",
            "text": "Identificar componentes compactos y realizar uniones o procesamiento en zonas delimitadas."
          },
          {
            "title": "Retos a evaluar con XVR",
            "text": "áreas de trabajo reducidas, proximidad de elementos sensibles y combinación de materiales."
          }
        ]
      },
      {
        "id": "aplicaciones",
        "title": "Aplicaciones y procesos",
        "items": [
          {
            "title": "Aplicaciones a evaluar",
            "applications": ["Códigos en encapsulados electrónicos","Unión de contactos y terminales","Retirada localizada de recubrimientos"]
          },
          {
            "title": "Procesos posibles",
            "text": [
              { label: 'Marcado', processSlug: 'marcado-laser' }, ', ',
              { label: 'microsoldadura', processSlug: 'soldadura-laser' }, ' y ',
              { label: 'microprocesamiento láser', processSlug: 'corte-microprocesos' },
              ', según las características del conjunto.'
            ]
          }
        ]
      },
      {
        "id": "tecnologias",
        "title": "Tecnologías y soluciones",
        "items": [
          {
            "title": "Opciones tecnológicas",
            "text": "La visión para localizar piezas y el control de la trayectoria del haz son opciones a evaluar cuando el área de trabajo es reducida."
          },
          {
            "title": "Integración a evaluar",
            "text": "Una estación de identificación o retirada localizada de recubrimientos puede estudiarse junto con la secuencia de ensamble. XVR debe confirmar el alcance."
          }
        ]
      }
    ]
  },
  "aeronautica": {
    "headline": "Define procesos de fabricación para componentes especializados",
    "introduction": "La trazabilidad y el control del proceso son parte del contexto de fabricación aeronáutica y de defensa. Las opciones láser deben revisarse frente al material, la geometría y los requisitos de cada proyecto.",
    "blocks": [
      {
        "id": "necesidades",
        "title": "Necesidades y retos",
        "items": [
          {
            "title": "Necesidades de manufactura",
            "text": "Mantener la identificación de componentes y definir operaciones de fabricación con criterios de aceptación claros."
          },
          {
            "title": "Retos a evaluar con XVR",
            "text": "superficies complejas, acceso a zonas de trabajo y conservación de la identificación entre etapas."
          }
        ]
      },
      {
        "id": "aplicaciones",
        "title": "Aplicaciones y procesos",
        "items": [
          {
            "title": "Aplicaciones a evaluar",
            "applications": ["Identificación de soportes y carcasas","Preparación de zonas de unión","Corte de contornos y perforaciones"]
          },
          {
            "title": "Procesos posibles",
            "text": [
              { label: 'Marcado', processSlug: 'marcado-laser' }, ', ',
              { label: 'corte, perforación', processSlug: 'corte-microprocesos' }, ' o ',
              { label: 'tratamiento superficial láser', processSlug: 'tratamiento-superficial' },
              ', sujetos a evaluación del proyecto.'
            ]
          }
        ]
      },
      {
        "id": "tecnologias",
        "title": "Tecnologías y soluciones",
        "items": [
          {
            "title": "Opciones tecnológicas",
            "text": "El posicionamiento de piezas y el seguimiento del proceso pueden ayudar a definir recorridos sobre geometrías complejas."
          },
          {
            "title": "Integración a evaluar",
            "text": "Una estación adaptada a la pieza permite plantear operaciones delimitadas. Los criterios de aceptación y el alcance de XVR deben acordarse."
          }
        ]
      }
    ]
  }
};

export const industries = industrySummaries.map(industry => {
  const detail = industryDetails[industry.slug];
  const applications = detail.blocks.find(block => block.id === 'aplicaciones').items[0].applications;
  return {
    ...industry,
    ...detail,
    applications,
    blocks: detail.blocks.map(block => ({
      ...block,
      items: block.items.map(item => item.applications
        ? { title: item.title, text: item.applications.join('; ') + '.' }
        : item),
    })),
  };
});
