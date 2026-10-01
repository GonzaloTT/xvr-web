import { assetUrl } from '../../utils/assetUrl';
import { Link } from 'react-router-dom';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import CTASection from '../../components/CTASection/CTASection';
import Icon from '../../components/Icon';
import { paths } from '../../routes/paths';
import '../../styles/solutions.css';

// Template receives a complete solution data object; no marking-specific copy.
export default function SolutionDetail({ solution }) {
  const { process, applications, benefits, industries, ecosystem } = solution;

  return (
    <main id="contenido" className="solution-detail-page">
      <nav className="detail-breadcrumb" aria-label="Ruta de navegación">
        <div className="container">
          <Link to={paths.solutions}>← Soluciones láser industriales</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{solution.category}</span>
        </div>
      </nav>

      <HeroCarousel key={solution.slug} images={solution.heroImages} className="solution-detail-hero" ariaLabel={solution.title}>
        <div className="hero-copy">
          <span className="hero-eyebrow">{solution.eyebrow}</span>
          <h1>{solution.title}</h1>
          <p>{solution.description}</p>
          <Link className="button" to={paths.contact}>Hablar con un especialista <span aria-hidden="true">→</span></Link>
          <div className="detail-highlights">
            {solution.highlights.map(item => (
              <div key={item.title}><Icon name={item.icon} /><div><strong>{item.title}</strong><span>{item.description}</span></div></div>
            ))}
          </div>
        </div>
      </HeroCarousel>

      <section className="section detail-section detail-tinted" aria-labelledby="process-title">
        <div className="container">
          <span className="eyebrow">{process.eyebrow}</span>
          <h2 id="process-title">{process.title}</h2>
          <p className="section-intro">{process.description}</p>
          <div className="detail-grid-three">
            {process.items.map((item, index) => (
              <article key={item.title} className="process-card">
                <div className="process-card-meta"><span>MECANISMO {String(index + 1).padStart(2, '0')}</span><span>{item.category}</span></div>
                <h3>{item.title}</h3><p>{item.description}</p>
                {item.note && <p className="process-note">{item.note}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section detail-section" aria-labelledby="applications-title">
        <div className="container">
          <span className="eyebrow">{applications.eyebrow}</span>
          <h2 id="applications-title">{applications.title}</h2>
          <p className="section-intro">{applications.description}</p>
          <div className="grid-four">
            {applications.items.map(item => (
              <article key={item.title} className="detail-image-card">
                <div className="detail-card-image"><img src={assetUrl(item.image)} alt={item.alt || ''} loading="lazy" width="600" height="360" /><span>{item.category}</span></div>
                <div className="detail-card-body"><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section detail-section detail-tinted" aria-labelledby="benefits-title">
        <div className="container">
          <span className="eyebrow">{benefits.eyebrow}</span>
          <h2 id="benefits-title">{benefits.title}</h2>
          <p className="section-intro">{benefits.description}</p>
          <div className="detail-grid-three benefit-grid">
            {benefits.items.map(item => (
              <article key={item.title} className="detail-benefit"><span className="icon-tile"><Icon name={item.icon}/></span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section detail-section" aria-labelledby="detail-industries-title">
        <div className="container">
          <span className="eyebrow">{industries.eyebrow}</span>
          <h2 id="detail-industries-title">{industries.title}</h2>
          <p className="section-intro">{industries.description}</p>
          <div className="detail-industries-grid">
            {industries.items.map(item => (
              <article key={item.title} className="detail-industry"><Icon name={item.icon}/><h3>{item.title}</h3><p>{item.description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section detail-section detail-tinted" aria-labelledby="ecosystem-title">
        <div className="container">
          <span className="eyebrow">{ecosystem.eyebrow}</span>
          <div className="ecosystem-heading">
            <div><h2 id="ecosystem-title">{ecosystem.title}</h2><p className="section-intro">{ecosystem.description}</p></div>
            {ecosystem.linkHref && <Link className="text-link" to={ecosystem.linkHref}>{ecosystem.linkLabel} →</Link>}
          </div>
          <div className="detail-grid-three">
            {ecosystem.items.map((item, index) => (
              <article key={item.title} className="detail-image-card ecosystem-card">
                <img src={assetUrl(item.image)} alt={item.alt || ''} loading="lazy" width="600" height="320"/>
                <div className="process-card-meta"><span>{item.category}</span><span>PILAR {String(index + 1).padStart(2, '0')}</span></div>
                <h3>{item.title}</h3><p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="detail-cta container"><CTASection {...solution.cta}/></div>
    </main>
  );
}
