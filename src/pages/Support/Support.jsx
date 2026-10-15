import { useState } from 'react';
import '../../styles/contact.css';
import './Support.css';

const fields = [
  ['name', 'Nombre del cliente', 'text', 'name'],
  ['company', 'Empresa', 'text', 'organization'],
  ['phone', 'Teléfono', 'tel', 'tel'],
  ['email', 'Correo electrónico', 'email', 'email'],
  ['equipment', 'Identificación o modelo del equipo', 'text', 'off'],
];

export default function Support() {
  const [result, setResult] = useState(false);
  const [fileError, setFileError] = useState('');
  function validatePhoto(event) {
    const input = event.currentTarget;
    const file = input.files?.[0];
    const error = file && (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024 || file.size === 0)
      ? 'Selecciona una imagen JPG, PNG o WebP válida de hasta 5 MB.' : '';
    input.setCustomValidity(error);
    setFileError(error);
  }
  function validateText(event) {
    const input = event.target;
    if (['text', 'tel'].includes(input.type) || input.tagName === 'TEXTAREA') {
      input.setCustomValidity(input.value.trim() ? '' : 'Completa este campo con un valor válido.');
    }
    setResult(false);
  }
  return <main id="contenido" className="contact-page support-page">
    <section className="container section">
      <span className="eyebrow">911 XVR · VISTA DEMOSTRATIVA</span>
      <h1>Asistencia técnica para tu equipo</h1>
      <p className="section-intro">Este concepto permite describir una incidencia e identificar el equipo para una futura atención técnica.</p>
      <p id="support-demo-notice" className="support-demo-notice">Demostración: la recepción real de incidencias todavía no está habilitada. Usa datos de ejemplo. No se envían ni se almacenan datos o fotografías.</p>
      <form className="contact-form contact-panel" aria-label="Demostración de asistencia 911 XVR" aria-describedby="support-demo-notice" onChange={() => setResult(false)} onInput={validateText}
        onSubmit={event => { event.preventDefault(); setResult(true); }}>
        <p className="contact-required-note">Todos los campos son obligatorios excepto la fotografía.</p>
        <div className="contact-fields">
          {fields.map(([id, label, type, autoComplete]) => <div className="contact-field" key={id}>
            <label htmlFor={`support-${id}`}>{label} *</label>
            <input id={`support-${id}`} name={id} type={type} autoComplete={autoComplete} required maxLength={id === 'email' ? 254 : 150}
              pattern={type === 'tel' ? '(?=(?:[^0-9]*[0-9]){7})[+0-9\\(\\) .\\-]{7,25}' : undefined} title={type === 'tel' ? 'Incluye al menos 7 dígitos; máximo 25 caracteres con +, espacios, paréntesis o guiones.' : undefined}/>
          </div>)}
          <div className="contact-field contact-field-wide">
            <label htmlFor="support-description">Descripción de la incidencia *</label>
            <textarea id="support-description" name="description" required minLength={10} maxLength={4000} rows={5}/>
          </div>
          <div className="contact-field contact-field-wide">
            <label htmlFor="support-photo">Fotografía del equipo o incidencia (opcional)</label>
            <input id="support-photo" name="photo" type="file" accept="image/jpeg,image/png,image/webp" onChange={validatePhoto} aria-describedby="support-photo-help support-photo-error" aria-invalid={fileError ? true : undefined}/>
            <p id="support-photo-help">JPG, PNG o WebP, hasta 5 MB. En dispositivos compatibles puedes elegir la cámara desde el selector de archivos.</p>
            <p id="support-photo-error" role="alert">{fileError}</p>
          </div>
        </div>
        <button className="button button-dark contact-submit" type="submit">Validar demostración</button>
        <div className="contact-form-status" role="status" aria-live="polite">{result && <p>Validación local completada. No se envió ningún reporte ni fotografía. La recepción real de incidencias aún no está habilitada.</p>}</div>
      </form>
    </section>
  </main>;
}
