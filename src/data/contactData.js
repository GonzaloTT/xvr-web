// Contenido editorial provisional. Confirmar canales y datos regionales con XVR.
// No publicar teléfonos, correos, direcciones ni horarios sin confirmación.
export const contactData = {
  introduction: 'Para un proyecto nuevo, describe la pieza, el material y el objetivo. Para una consulta de soporte, explica qué equipo utilizas y qué situación observas. Este formulario es una demostración: no envía solicitudes reales ni guarda datos.',
  direct: {
    title: 'Atención técnica y comercial',
    description: 'Una consulta útil empieza con el contexto: qué buscas fabricar, qué proceso utilizas o qué dificultad necesitas revisar.',
    pending: 'Los canales directos se publicarán tras su validación con XVR. Esta página todavía no recibe solicitudes.',
  },
  regions: ['México', 'Estados Unidos', 'Costa Rica'].map(name => ({
    name,
    description: `Para un proyecto en ${name}, indica dónde se realiza el proceso y el tipo de atención que necesitas evaluar.`,
  })),
  attention: {
    title: 'Coordinación de atención',
    description: 'Prepara una descripción del proyecto o incidencia y la ubicación del equipo. Cobertura, modalidad de atención y horarios requieren confirmación; la demostración no genera seguimiento.',
  },
  trust: [
    { icon: 'process', eyebrow: '01 / PROCESOS LÁSER', title: 'Contexto de la aplicación', description: 'Una perspectiva industrial para comprender la aplicación y sus necesidades de manufactura.' },
    { icon: 'training', eyebrow: '02 / DIÁLOGO TÉCNICO', title: 'Enfoque consultivo', description: 'El punto de partida es conocer el proceso, los materiales y los objetivos del proyecto.' },
    { icon: 'precision', eyebrow: '03 / INTEGRACIÓN', title: 'Integración de soluciones', description: 'Selección de tecnología y componentes considerando su papel dentro del proceso.' },
    { icon: 'support', eyebrow: '04 / ACOMPAÑAMIENTO', title: 'Acompañamiento del proyecto', description: 'Orientación a lo largo de la definición e integración de la solución.' },
  ],
};

export const contactFields = [
  { id: 'name', name: 'name', label: 'Nombre completo', type: 'text', autoComplete: 'name', required: true },
  { id: 'company', name: 'company', label: 'Empresa', type: 'text', autoComplete: 'organization', required: true },
  { id: 'email', name: 'email', label: 'Correo electrónico profesional', type: 'email', autoComplete: 'email', required: true },
  { id: 'phone', name: 'phone', label: 'Teléfono de contacto', type: 'tel', autoComplete: 'tel', required: false },
];
export const projectOptions = ['Marcado láser', 'Soldadura láser', 'Corte y microprocesos', 'Tratamiento superficial', 'Accesorios y periféricos', 'Otra aplicación / Por definir'];
export const contactDemo = {
  notice: 'Modo demostración: este formulario todavía no envía ni guarda información.',
  result: 'Demostración completada. No se ha enviado ni guardado información y no se ha generado una solicitud de atención.',
};
