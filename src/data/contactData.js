// Contenido editorial provisional. Confirmar canales y datos regionales con XVR.
// No publicar teléfonos, correos, direcciones ni horarios sin confirmación.
export const contactData = {
  introduction: 'Comparte tu aplicación, el proceso que deseas mejorar o la necesidad de tu empresa. Esta información ayudará a XVR a entender el proyecto y orientar los siguientes pasos.',
  direct: {
    title: 'Atención técnica y comercial',
    description: 'Cuéntanos sobre tu aplicación y nuestro equipo podrá orientarte sobre los siguientes pasos.',
    pending: 'Teléfono y correo de contacto pendientes de confirmación.',
  },
  regions: ['México', 'Estados Unidos', 'Costa Rica'].map(name => ({
    name,
    description: 'Información de contacto regional pendiente de confirmación con XVR.',
  })),
  attention: {
    title: 'Coordinación de atención',
    description: 'Indica el contexto de tu proyecto y cómo prefieres que te contacten. Los canales y horarios de atención se confirmarán con XVR.',
  },
  trust: [
    { icon: 'process', eyebrow: '01 / PROCESOS LÁSER', title: 'Experiencia en procesos láser', description: 'Una perspectiva industrial para comprender la aplicación y sus necesidades de manufactura.' },
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
  result: 'Formulario de demostración. El envío se habilitará durante la integración final. No se ha enviado ni guardado información.',
};
