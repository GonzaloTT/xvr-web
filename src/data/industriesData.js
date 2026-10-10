import { paths } from '../routes/paths';

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
  image: `/images/industries/${item.slug}-placeholder.svg`,
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
            "text": "Retos a revisar con XVR: marcas difíciles de leer, acceso a la zona de unión y variaciones entre componentes."
          }
        ]
      },
      {
        "id": "aplicaciones",
        "title": "Aplicaciones y procesos",
        "items": [
          {
            "title": "Aplicaciones a evaluar",
            "applications": ["Códigos en piezas","Unión de contactos","Preparación de superficies para ensamble"]
          },
          {
            "title": "Procesos posibles",
            "text": "Marcado, soldadura, corte o limpieza láser, según geometría, material y secuencia de fabricación."
          }
        ]
      },
      {
        "id": "tecnologias",
        "title": "Tecnologías y soluciones",
        "items": [
          {
            "title": "Opciones tecnológicas",
            "text": "Fuentes láser, óptica y sistemas de posicionamiento son opciones a evaluar; su selección depende de la pieza."
          },
          {
            "title": "Soluciones por definir",
            "text": "Soluciones posibles según el proceso: una estación de trabajo o integración en línea, sujetas a revisión con XVR."
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
            "text": "Retos a revisar con XVR: espacio de marcado limitado, geometrías delicadas y efectos del proceso sobre el material."
          }
        ]
      },
      {
        "id": "aplicaciones",
        "title": "Aplicaciones y procesos",
        "items": [
          {
            "title": "Aplicaciones a evaluar",
            "applications": ["Identificación de instrumental","Corte de pequeños componentes","Unión de piezas"]
          },
          {
            "title": "Procesos posibles",
            "text": "Marcado, micromecanizado o soldadura láser, sujetos a evaluación del material y los requisitos del proyecto."
          }
        ]
      },
      {
        "id": "tecnologias",
        "title": "Tecnologías y soluciones",
        "items": [
          {
            "title": "Opciones tecnológicas",
            "text": "Láseres pulsados, óptica de enfoque y posicionamiento son alternativas a estudiar según la aplicación."
          },
          {
            "title": "Soluciones por definir",
            "text": "Soluciones posibles según el proceso: estaciones para piezas pequeñas y sujeciones adaptadas, por definir con XVR."
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
            "text": "Retos a revisar con XVR: áreas de trabajo reducidas, proximidad de elementos sensibles y combinación de materiales."
          }
        ]
      },
      {
        "id": "aplicaciones",
        "title": "Aplicaciones y procesos",
        "items": [
          {
            "title": "Aplicaciones a evaluar",
            "applications": ["Códigos en componentes","Unión de contactos","Retirada localizada de recubrimientos"]
          },
          {
            "title": "Procesos posibles",
            "text": "Marcado, microsoldadura y microprocesamiento láser, según las características del conjunto."
          }
        ]
      },
      {
        "id": "tecnologias",
        "title": "Tecnologías y soluciones",
        "items": [
          {
            "title": "Opciones tecnológicas",
            "text": "Fuentes pulsadas, óptica de enfoque y visión para posicionamiento son opciones cuya compatibilidad debe evaluarse."
          },
          {
            "title": "Soluciones por definir",
            "text": "Soluciones posibles según el proceso: estaciones de identificación o procesamiento localizado, sujetas a revisión con XVR."
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
            "text": "Retos a revisar con XVR: superficies complejas, acceso a zonas de trabajo y conservación de la identificación entre etapas."
          }
        ]
      },
      {
        "id": "aplicaciones",
        "title": "Aplicaciones y procesos",
        "items": [
          {
            "title": "Aplicaciones a evaluar",
            "applications": ["Identificación de piezas","Preparación de superficies","Procesamiento de geometrías específicas"]
          },
          {
            "title": "Procesos posibles",
            "text": "Marcado, corte, perforación o tratamiento superficial láser, sujetos a evaluación del proyecto."
          }
        ]
      },
      {
        "id": "tecnologias",
        "title": "Tecnologías y soluciones",
        "items": [
          {
            "title": "Opciones tecnológicas",
            "text": "Fuentes láser, sistemas de posicionamiento y herramientas de seguimiento del proceso son alternativas a estudiar."
          },
          {
            "title": "Soluciones por definir",
            "text": "Soluciones posibles según el proceso: estaciones adaptadas al componente o integración de operaciones, por definir con XVR."
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
