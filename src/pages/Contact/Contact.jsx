import ContactForm from '../../components/ContactForm/ContactForm';
import Icon from '../../components/Icon';
import { contactData } from '../../data/contactData';
import '../../styles/contact.css';

export default function Contact() {
  return (
    <main id="contenido" className="contact-page">
      <section className="contact-introduction" aria-labelledby="contact-title">
        <div className="container contact-layout">
          <div>
            <span className="eyebrow">CONTACTO · INGENIERÍA Y APLICACIONES</span>
            <h1 id="contact-title">Hablemos de tu proceso</h1>
            <p className="contact-introduction-copy">{contactData.introduction}</p>
            <div className="contact-intro-notes">
              <div><span>APLICACIÓN</span><strong>Comparte tu necesidad</strong></div>
              <div><span>CONTEXTO</span><strong>Describe tu proceso</strong></div>
              <div><span>PROYECTO</span><strong>Cuéntanos tu objetivo</strong></div>
            </div>
          </div>
          <aside className="contact-direct" aria-labelledby="contact-direct-title">
            <span className="eyebrow">CANAL DE CONTACTO XVR</span>
            <h2 id="contact-direct-title">{contactData.direct.title}</h2>
            <p>{contactData.direct.description}</p>
            <div className="contact-pending"><Icon name="support"/><span>{contactData.direct.pending}</span></div>
          </aside>
        </div>
      </section>

      <section className="contact-registration" aria-label="Registro del proyecto y presencia regional">
        <div className="container contact-layout">
          <ContactForm />
          <div className="contact-sidebar">
            <section className="contact-panel contact-regions" aria-labelledby="contact-regions-title">
              <h2 id="contact-regions-title"><Icon name="globe"/> Presencia regional</h2>
              <div className="contact-region-list">
                {contactData.regions.map(region => <article className="contact-region" key={region.name}><h3><span aria-hidden="true">●</span> {region.name}</h3><p>{region.description}</p><small>Datos regionales por confirmar</small></article>)}
              </div>
            </section>
            <aside className="contact-attention"><Icon name="support"/><div><h3>{contactData.attention.title}</h3><p>{contactData.attention.description}</p></div></aside>
          </div>
        </div>
      </section>

      <section className="contact-trust" aria-labelledby="contact-trust-title">
        <div className="container">
          <span className="eyebrow">METODOLOGÍA Y ENFOQUE INDUSTRIAL</span>
          <h2 id="contact-trust-title">¿Por qué confiar en XVR?</h2>
          <p className="section-intro">Un enfoque centrado en comprender el proceso y acompañar la selección e integración de la solución.</p>
          <div className="contact-trust-grid">
            {contactData.trust.map(item => <article className="contact-trust-card" key={item.title}><span className="icon-tile"><Icon name={item.icon}/></span><span className="eyebrow">{item.eyebrow}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
        </div>
      </section>
    </main>
  );
}
