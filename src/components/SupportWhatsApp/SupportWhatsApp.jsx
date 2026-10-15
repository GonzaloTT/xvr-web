import { supportWhatsAppUrl } from '../../config/support';
import './SupportWhatsApp.css';

export default function SupportWhatsApp() {
  return <a className="support-whatsapp" href={supportWhatsAppUrl} target="_blank" rel="noopener noreferrer"
    aria-label="911 XVR por WhatsApp — número provisional de desarrollo, no oficial; abre otra pestaña">
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="currentColor">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.4-1.7a12 12 0 0 0 5.7 1.5h.1C18.7 23.8 24 18.5 24 12c0-3.2-1.2-6.2-3.5-8.5ZM12.1 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.3-.4A9.8 9.8 0 0 1 2.2 12C2.2 6.5 6.6 2 12.1 2S22 6.5 22 12s-4.4 9.8-9.9 9.8Zm5.4-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2l-1 1.2c-.2.2-.4.2-.7.1-1.7-.8-2.8-1.5-3.9-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.6L9 7c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.4 1.8.8 2.5.9 3.4.7.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"/>
    </svg>
    <span>911 XVR<small>Número provisional</small></span>
  </a>;
}
