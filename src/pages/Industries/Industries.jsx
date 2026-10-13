import { Link } from 'react-router-dom';
import { industries, industryEditorial } from '../../data/industriesData';
import { photoImage } from '../../utils/photoImage';
import '../../styles/solutions.css';
import '../../styles/industries.css';

export default function Industries() {
  return <main id="contenido" className="industries-page">
    <header className="section container">
      <div className="industry-editorial"><span className="eyebrow">APLICACIONES INDUSTRIALES</span><h1>Soluciones por industria</h1><p className="section-intro">{industryEditorial.introduction}</p></div>
    </header>
    <div className="portfolio-section">
      <div className="container portfolio-list">
        {industries.map((industry, index) => <section key={industry.slug} className="portfolio-solution industry-portfolio" aria-labelledby={`${industry.slug}-title`}>
          <div className="portfolio-image"><img {...photoImage(industry.image, '(max-width: 900px) 100vw, 600px')} alt={`Imagen provisional de ${industry.title}`} loading="lazy" width="600" height="480"/><span>INDUSTRIA {String(index + 1).padStart(2, '0')}</span></div>
          <div className="portfolio-content">
            <h2 id={`${industry.slug}-title`}>{industry.title}</h2>
            <p>{industry.introduction}</p>
            <h3 className="portfolio-features-label">APLICACIONES A EVALUAR</h3>
            <ul className="industry-application-list">{industry.applications.map(application => <li key={application}>{application}</li>)}</ul>
            <Link className="button button-dark" to={industry.href} aria-label={`Conocer soluciones: ${industry.title}`}>Conocer soluciones <span aria-hidden="true">→</span></Link>
          </div>
        </section>)}
      </div>
    </div>
    <div className="container"><p className="industry-editorial-note">{industryEditorial.notice}</p></div>
  </main>;
}
