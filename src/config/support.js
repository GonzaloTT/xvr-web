// DEVELOPMENT ONLY: replacement with an XVR-confirmed number is mandatory
// before final client delivery. This is not an official support channel.
export const supportWhatsApp = {
  phone: '524422337055',
  message: 'Hola, necesito asistencia de 911 XVR para reportar un problema con mi equipo.',
};

export const supportWhatsAppUrl = `https://wa.me/${supportWhatsApp.phone}?text=${encodeURIComponent(supportWhatsApp.message)}`;
