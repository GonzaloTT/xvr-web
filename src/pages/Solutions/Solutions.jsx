import { assetUrl } from '../../utils/assetUrl';
import { Link } from 'react-router-dom';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import CTASection from '../../components/CTASection/CTASection';
import Icon from '../../components/Icon';
import { solutionPortfolio, solutionsOverview } from '../../data/solutionsData';
import { paths } from '../../routes/paths';
import '../../styles/solutions.css';

export default function Solutions() {
  return (
    <main id="contenido" className="solutions-page">
      <HeroCarousel images={solutionsOverview.heroImages} className="solutions-hero" ariaLabel="Portafolio de soluciones láser">
        <div className="hero-copy">
          <span className="hero-eyebrow">{solutionsOverview.eyebrow}</span>
          <h1>{solutionsOverview.title}</h1>
          <p>{solutionsOverview.description}</p>
          <div className="button-row">
            <Link className="button" to="#portafolio">Explorar soluciones <span aria-hidden="true">↓</span></Link>
            <Link className="button button-outline" to={paths.contact}>Hablar con un especialista <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </HeroCarousel>

      <nav className="solution-index" aria-label="Explorar por solución">
        <div className="container">
          {solutionPortfolio.map((solution, index) => (
            <Link key={solution.slug} to={`#${solution.slug}`}>
              <span aria-hidden="true">●</span> {String(index + 1).padStart(2, '0')}. {solution.navLabel}
            </Link>
          ))}
        </div>
      </nav>

      <div id="portafolio" className="portfolio-section">
        <div className="container portfolio-list">
          {solutionPortfolio.map((solution, index) => (
            <section key={solution.slug} id={solution.slug} className="portfolio-solution" aria-labelledby={`${solution.slug}-title`}>
              <div className="portfolio-image">
                <img src={assetUrl(solution.image)} alt={solution.alt || ''} loading="lazy" width="600" height="640" />
                <span>SOLUCIÓN {String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="portfolio-content">
                <span className="eyebrow">{solution.eyebrow}</span>
                <h2 id={`${solution.slug}-title`}>{solution.title}</h2>
                <p>{solution.description}</p>
                <h3 className="portfolio-features-label">ASPECTOS CLAVE DEL PROCESO</h3>
                <div className="portfolio-features">
                  {solution.benefits.map(benefit => (
                    <div key={benefit.title} className="portfolio-feature">
                      <Icon name={benefit.icon} />
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  ))}
                </div>
                <Link className="button button-dark" to={paths.solution(solution.slug)} aria-label={`Conocer solución: ${solution.title}`}>
                  Conocer solución <span aria-hidden="true">→</span>
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="portfolio-cta"><CTASection {...solutionsOverview.cta} /></div>
    </main>
  );
}
