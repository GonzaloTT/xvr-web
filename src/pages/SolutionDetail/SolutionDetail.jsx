import { Link } from 'react-router-dom';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import CTASection from '../../components/CTASection/CTASection';
import { processEditorialNotice } from '../../data/solutionsData';
import { paths } from '../../routes/paths';
import '../../styles/solutions.css';

export default function SolutionDetail({ solution }) {
  return <main id="contenido" className="solution-detail-page">
    <nav className="detail-breadcrumb" aria-label="Ruta de navegación">
      <div className="container">
        <Link to={paths.solutions}>← Procesos Láser</Link>
        <span aria-hidden="true">/</span><span aria-current="page">{solution.category}</span>
      </div>
    </nav>
    <HeroCarousel key={solution.slug} images={solution.heroImages} className="solution-detail-hero photo-hero" ariaLabel={solution.title}>
      <div className="hero-copy">
        <span className="hero-eyebrow">{solution.eyebrow}</span>
        <h1>{solution.title}</h1><p>{solution.description}</p>
        <Link className="button" to={paths.contact}>Hablar con XVR <span aria-hidden="true">→</span></Link>
      </div>
    </HeroCarousel>
    <section className="section detail-section detail-tinted" aria-labelledby="applications-title">
      <div className="container process-editorial-grid">
        <div><span className="eyebrow">PROBLEMA → APLICACIÓN</span><h2 id="applications-title">Necesidades y aplicaciones</h2><p className="section-intro">{solution.problem}</p></div>
        <div><h3>Aplicaciones a evaluar</h3><ul className="process-application-list">{solution.applications.map(item => <li key={item}>{item}</li>)}</ul></div>
      </div>
    </section>
    <section className="section detail-section" aria-labelledby="process-title">
      <div className="container"><span className="eyebrow">EL PROCESO</span><h2 id="process-title">Cómo funciona</h2><p className="section-intro">{solution.process}</p></div>
    </section>
    <section className="section detail-section detail-tinted" aria-labelledby="xvr-title">
      <div className="container"><span className="eyebrow">UNA SOLUCIÓN SEGÚN TU APLICACIÓN</span><h2 id="xvr-title">Cómo puede ayudar XVR</h2><p className="section-intro">{solution.help}</p><p className="process-editorial-note">{processEditorialNotice}</p></div>
    </section>
    <div className="detail-cta container"><CTASection {...solution.cta}/></div>
  </main>;
}
