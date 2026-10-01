import { useState } from 'react';
import { contactDemo, contactFields, projectOptions } from '../../data/contactData';

export default function ContactForm() {
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  // Sustituir sólo este comportamiento al integrar el envío definitivo.
  // No se leen, registran ni persisten los valores del formulario.
  function handleDemoSubmit(event) {
    event.preventDefault();
    setDemoSubmitted(true);
  }

  return (
    <form className="contact-form contact-panel" onSubmit={handleDemoSubmit} aria-labelledby="contact-form-title" aria-describedby="contact-demo-notice">
      <span className="eyebrow">FORMULARIO DE CONTACTO</span>
      <h2 id="contact-form-title">Registro del Proyecto</h2>
      <p className="contact-form-intro">Comparte los datos esenciales de tu empresa y una descripción de la aplicación que deseas consultar.</p>
      <p className="contact-required-note">Los campos con <span aria-hidden="true">*</span> son obligatorios.</p>
      <div className="contact-fields">
        {contactFields.map(field => (
          <div className="contact-field" key={field.id}>
            <label htmlFor={`contact-${field.id}`}>{field.label}{field.required && <span className="contact-required" aria-hidden="true"> *</span>}</label>
            <input id={`contact-${field.id}`} name={field.name} type={field.type} autoComplete={field.autoComplete} required={field.required} />
          </div>
        ))}
        <div className="contact-field contact-field-wide">
          <label htmlFor="contact-application">Tipo de proyecto / aplicación</label>
          <select id="contact-application" name="application" defaultValue="">
            <option value="">Selecciona una aplicación</option>
            {projectOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
        <div className="contact-field contact-field-wide">
          <label htmlFor="contact-message">Mensaje o descripción del proceso<span className="contact-required" aria-hidden="true"> *</span></label>
          <textarea id="contact-message" name="message" required rows="5" placeholder="Describe tu aplicación, los materiales y el objetivo del proyecto." />
        </div>
      </div>
      <button className="button button-dark contact-submit" type="submit">Enviar solicitud <span aria-hidden="true">→</span></button>
      <p id="contact-demo-notice" className="contact-demo-notice">{contactDemo.notice}</p>
      <div className="contact-form-status" role="status" aria-live="polite" aria-atomic="true">{demoSubmitted && <p>{contactDemo.result}</p>}</div>
    </form>
  );
}
