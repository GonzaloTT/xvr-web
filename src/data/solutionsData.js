import { paths } from '../routes/paths';

// Contenido editorial provisional; validar el alcance del acompañamiento con XVR.
// Las aplicaciones descritas no acreditan servicios, equipamiento ni resultados.
export const processEditorialNotice = 'Aplicaciones orientativas, pendientes de validación con XVR. La viabilidad y el alcance de una solución dependen del material y los requisitos del proyecto.';

export const solutionsOverview = {
  "eyebrow": "PROCESOS LÁSER",
  "title": "Un proceso para cada reto de manufactura",
  "description": "Identificar, unir, dar forma o preparar una superficie son necesidades distintas. Explora qué proceso láser podría encajar en tu aplicación.",
  "heroImages": [
    {
      "src": "/images/hero/processes/Hero-Procesos-01.webp",
      "label": "Portafolio de manufactura"
    },
    {
      "src": "/images/hero/processes/Hero-Procesos-02.webp",
      "label": "Procesos industriales"
    }
  ],
  "cta": {
    "eyebrow": "CONSULTORÍA DE APLICACIONES",
    "title": "¿Necesitas definir el proceso adecuado para tu aplicación?",
    "description": "Cuéntanos sobre tus piezas y requerimientos de producción para revisar las alternativas de tu proceso.",
    "primaryButtonLabel": "Hablar con un especialista",
    "primaryButtonHref": paths.contact
  }
};

export const solutionPortfolio = [
  {
    "slug": "marcado-laser",
    "navLabel": "MARCADO LÁSER",
    "title": "Identifica tus piezas a lo largo de la producción",
    "eyebrow": "IDENTIFICACIÓN Y TRAZABILIDAD",
    "description": "Cuando una pieza pierde su identificación, seguir su recorrido se vuelve difícil. El marcado láser es una opción a evaluar según el material y las necesidades de lectura.",
    "image": "/images/processes/Proceso-Marcado.webp",
    "benefits": [
      {
        "icon": "check",
        "title": "Identificación de piezas",
        "description": "Define qué información debe acompañar al componente."
      },
      {
        "icon": "process",
        "title": "Lectura de la marca",
        "description": "Considera el material, el espacio y las condiciones de lectura."
      },
      {
        "icon": "precision",
        "title": "Flujo de producción",
        "description": "Revisa en qué etapa conviene incorporar el marcado."
      }
    ]
  },
  {
    "slug": "soldadura-laser",
    "navLabel": "SOLDADURA LÁSER",
    "title": "Evalúa cómo unir los componentes de tu producto",
    "eyebrow": "UNIÓN DE COMPONENTES",
    "description": "La forma de unir dos piezas condiciona su ensamble. La soldadura láser puede ser una alternativa según los materiales, la geometría y la función de la unión.",
    "image": "/images/processes/Proceso-Soldadura.webp",
    "benefits": [
      {
        "icon": "check",
        "title": "Función de la unión",
        "description": "Define qué necesita cumplir el ensamble."
      },
      {
        "icon": "process",
        "title": "Compatibilidad de piezas",
        "description": "Revisa materiales, geometría y preparación."
      },
      {
        "icon": "precision",
        "title": "Secuencia de ensamble",
        "description": "Considera acceso, sujeción y movimiento."
      }
    ]
  },
  {
    "slug": "corte-microprocesos",
    "navLabel": "CORTE Y MICROPROCESOS",
    "title": "Da forma a las geometrías que necesita tu componente",
    "eyebrow": "FABRICACIÓN Y PROCESAMIENTO DE GEOMETRÍAS",
    "description": "Fabricar contornos, aberturas o pequeños detalles plantea retos de acceso y acabado. El corte y los microprocesos láser son opciones a evaluar según la pieza.",
    "image": "/images/processes/Proceso-Corte.webp",
    "benefits": [
      {
        "icon": "process",
        "title": "Forma del componente",
        "description": "Identifica los contornos y detalles necesarios."
      },
      {
        "icon": "bolt",
        "title": "Acabado esperado",
        "description": "Define qué condiciones debe cumplir la pieza."
      },
      {
        "icon": "tool",
        "title": "Ruta de fabricación",
        "description": "Evalúa cómo incorporar la operación al proceso."
      }
    ]
  },
  {
    "slug": "tratamiento-superficial",
    "navLabel": "TRATAMIENTO SUPERFICIAL",
    "title": "Prepara la superficie para el siguiente paso",
    "eyebrow": "LIMPIEZA Y MODIFICACIÓN DE SUPERFICIES",
    "description": "Los residuos, recubrimientos o el estado de una superficie pueden dificultar la siguiente operación. El tratamiento láser es una alternativa a evaluar para limpiar, preparar o modificar zonas concretas.",
    "image": "/images/processes/Proceso-Tratamiento.webp",
    "benefits": [
      {
        "icon": "process",
        "title": "Estado de la superficie",
        "description": "Identifica las capas o zonas que requieren atención."
      },
      {
        "icon": "check",
        "title": "Material de base",
        "description": "Considera qué características deben conservarse."
      },
      {
        "icon": "precision",
        "title": "Siguiente operación",
        "description": "Define el acabado necesario para continuar."
      }
    ]
  }
];

export const solutionDetails = {
  "marcado-laser": {
    "slug": "marcado-laser",
    "title": "Identifica tus piezas a lo largo de la producción",
    "eyebrow": "IDENTIFICACIÓN Y TRAZABILIDAD",
    "category": "TRAZABILIDAD Y MARCADO",
    "description": "Cuando una pieza pierde su identificación, seguir su recorrido se vuelve difícil. El marcado láser es una opción a evaluar según el material y las necesidades de lectura.",
    "heroImages": [
      {
        "src": "/images/hero/marking/Hero-Proceso-Marcado-01.webp",
        "label": "Identificación de piezas"
      },
      {
        "src": "/images/hero/marking/Hero-Proceso-Marcado-02.webp",
        "label": "Trazabilidad industrial"
      }
    ],
    "problem": "Marcas poco legibles, espacio limitado o identificadores que no acompañan a la pieza motivan la búsqueda de otras formas de identificación.",
    "applications": [
      "Códigos para vincular piezas con información de producción.",
      "Referencias y números de serie en componentes.",
      "Textos y escalas sobre placas e instrumental."
    ],
    "process": "El láser actúa sobre una zona de la superficie para formar un texto, código o dibujo. El tipo de marca depende del material y su acabado. La legibilidad y el comportamiento durante el uso deben evaluarse para cada pieza.",
    "help": "Comparte con XVR qué necesitas identificar y cómo se leerá la marca. El acompañamiento a definir puede incluir la evaluación de la aplicación, la selección de tecnología y su integración en una estación o línea.",
    "cta": {
      "title": "¿Necesitas identificar tus piezas durante la producción?",
      "description": "Cuéntanos sobre tu aplicación para conversar sobre las opciones a evaluar.",
      "primaryButtonLabel": "Hablar con XVR",
      "primaryButtonHref": paths.contact
    }
  },
  "soldadura-laser": {
    "slug": "soldadura-laser",
    "title": "Evalúa cómo unir los componentes de tu producto",
    "eyebrow": "UNIÓN DE COMPONENTES",
    "category": "UNIÓN Y ENSAMBLE",
    "description": "La forma de unir dos piezas condiciona su ensamble. La soldadura láser puede ser una alternativa según los materiales, la geometría y la función de la unión.",
    "heroImages": [
      {
        "src": "/images/hero/weilding/Hero-Proceso-Soldadura-01.webp",
        "label": "UNIÓN Y ENSAMBLE"
      },
      {
        "src": "/images/hero/weilding/Hero-Proceso-Soldadura-02.webp",
        "label": "Integración · UNIÓN Y ENSAMBLE"
      }
    ],
    "problem": "El acceso a la junta, la sujeción de las piezas y la combinación de materiales pueden dificultar el ensamble y requieren una revisión conjunta.",
    "applications": [
      "Unión de contactos y conectores.",
      "Ensamble de carcasas y pequeños conjuntos.",
      "Unión de componentes para sistemas de baterías."
    ],
    "process": "El láser concentra calor en la zona donde se busca unir las piezas. Al enfriarse, el material de esa zona forma la unión. La compatibilidad de los materiales y la preparación de la junta orientan la evaluación del proceso.",
    "help": "Conversa con XVR sobre las piezas, su ensamble y los requisitos de la unión. A partir de ese contexto se puede definir el alcance de una evaluación, la selección tecnológica y una posible integración.",
    "cta": {
      "title": "¿Tienes una unión que necesitas resolver?",
      "description": "Cuéntanos sobre tu aplicación para conversar sobre las opciones a evaluar.",
      "primaryButtonLabel": "Hablar con XVR",
      "primaryButtonHref": paths.contact
    }
  },
  "corte-microprocesos": {
    "slug": "corte-microprocesos",
    "title": "Da forma a las geometrías que necesita tu componente",
    "eyebrow": "FABRICACIÓN Y PROCESAMIENTO DE GEOMETRÍAS",
    "category": "CORTE Y MICROPROCESOS",
    "description": "Fabricar contornos, aberturas o pequeños detalles plantea retos de acceso y acabado. El corte y los microprocesos láser son opciones a evaluar según la pieza.",
    "heroImages": [
      {
        "src": "/images/hero/cutting/Hero-Proceso-Corte-01.webp",
        "label": "CORTE Y MICROPROCESOS"
      },
      {
        "src": "/images/hero/cutting/Hero-Proceso-Corte-02.webp",
        "label": "Integración · CORTE Y MICROPROCESOS"
      }
    ],
    "problem": "Las geometrías pequeñas o de difícil acceso pueden complicar la fabricación. El material y el acabado esperado ayudan a decidir si un proceso láser resulta adecuado.",
    "applications": [
      "Corte de contornos en componentes.",
      "Perforación de aberturas pequeñas.",
      "Procesamiento localizado de detalles geométricos."
    ],
    "process": "El láser recorre una trayectoria y retira material en las zonas seleccionadas. Así puede separar un contorno o formar detalles sobre la pieza. El resultado depende del material, la geometría y la estrategia de trabajo.",
    "help": "Comparte con XVR el diseño y las necesidades de fabricación de tu componente. La conversación puede orientar la evaluación de la aplicación, las alternativas tecnológicas y la integración que convendría estudiar.",
    "cta": {
      "title": "¿Necesitas fabricar una geometría específica?",
      "description": "Cuéntanos sobre tu aplicación para conversar sobre las opciones a evaluar.",
      "primaryButtonLabel": "Hablar con XVR",
      "primaryButtonHref": paths.contact
    }
  },
  "tratamiento-superficial": {
    "slug": "tratamiento-superficial",
    "title": "Prepara la superficie para el siguiente paso",
    "eyebrow": "LIMPIEZA Y MODIFICACIÓN DE SUPERFICIES",
    "category": "TRATAMIENTO Y LIMPIEZA",
    "description": "Los residuos, recubrimientos o el estado de una superficie pueden dificultar la siguiente operación. El tratamiento láser es una alternativa a evaluar para limpiar, preparar o modificar zonas concretas.",
    "heroImages": [
      {
        "src": "/images/hero/surface-treatment/Hero-Proceso-Tratamiento-01.webp",
        "label": "TRATAMIENTO Y LIMPIEZA"
      },
      {
        "src": "/images/hero/surface-treatment/Hero-Proceso-Tratamiento-02.webp",
        "label": "Integración · TRATAMIENTO Y LIMPIEZA"
      }
    ],
    "problem": "Antes de unir, recubrir o ensamblar una pieza puede ser necesario retirar capas o cambiar el estado de su superficie sin comprometer los requisitos del componente.",
    "applications": [
      "Limpieza localizada de residuos o capas superficiales.",
      "Preparación de zonas antes de unión o recubrimiento.",
      "Modificación de textura en áreas definidas."
    ],
    "process": "El láser actúa sobre una zona seleccionada para retirar una capa o modificar su superficie. La respuesta depende tanto de esa capa como del material de base. Por eso es necesario definir el estado final que requiere la siguiente operación.",
    "help": "Explica a XVR qué superficie necesitas tratar y qué operación viene después. El alcance a definir puede contemplar la evaluación del material, la selección de tecnología y su posible integración en el flujo de fabricación.",
    "cta": {
      "title": "¿Qué necesita tu superficie antes del siguiente proceso?",
      "description": "Cuéntanos sobre tu aplicación para conversar sobre las opciones a evaluar.",
      "primaryButtonLabel": "Hablar con XVR",
      "primaryButtonHref": paths.contact
    }
  }
};
