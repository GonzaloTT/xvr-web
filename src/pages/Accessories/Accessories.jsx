import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import CTASection from '../../components/CTASection/CTASection';
import Icon from '../../components/Icon';
import AccessoryCard from '../../components/AccessoryCard/AccessoryCard';
import { accessories, accessoryCategories, accessoriesPage } from '../../data/accessoriesData';
import { paths } from '../../routes/paths';
import '../../styles/accessories.css';

export default function Accessories() {
  const [activeCategory, setActiveCategory] = useState('all');
  const visibleAccessories = activeCategory === 'all'
    ? accessories
    : accessories.filter(item => item.category === activeCategory);
  const activeLabel = accessoryCategories.find(item => item.id === activeCategory).label;
  const { hero, integration, catalog, advantages, cta } = accessoriesPage;

  return (
    <main id="contenido" className="accessories-page">
      <HeroCarousel images={hero.images} className="accessories-hero" ariaLabel={hero.title}>
        <div className="hero-copy">
          <span className="hero-eyebrow">{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="button-row">
            <Link className="button" to="#categorias">Explorar categorías <span aria-hidden="true">↓</span></Link>
            <Link className="button button-outline" to={paths.contact}>Solicitar asesoría de compatibilidad <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </HeroCarousel>

      <section className="accessories-integration" aria-labelledby="accessories-integration-title">
        <div className="container">
          <span className="eyebrow">{integration.eyebrow}</span>
          <div className="accessories-integration-heading">
            <h2 id="accessories-integration-title">{integration.title}</h2>
            <p>{integration.description}</p>
          </div>
          <div className="accessories-three-grid">
            {integration.items.map(item => (
              <article className="accessories-integration-card" key={item.title}>
                <div className="accessories-concept-meta"><span className="icon-tile"><Icon name={item.icon}/></span><span>{item.category}</span></div>
                <h3>{item.title}</h3><p>{item.description}</p>
                <small>{item.note}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="categorias" className="accessories-catalog" aria-labelledby="accessories-catalog-title">
        <div className="container">
          <span className="eyebrow">{catalog.eyebrow}</span>
          <div className="accessories-catalog-heading">
            <h2 id="accessories-catalog-title">{catalog.title}</h2>
            <p className="accessories-result-count" role="status" aria-live="polite" aria-atomic="true">
              {visibleAccessories.length} {visibleAccessories.length === 1 ? 'categoría' : 'categorías'} · {activeLabel}
            </p>
          </div>
          <div className="accessories-filters" role="group" aria-label="Filtrar equipamiento por categoría">
            {accessoryCategories.map(category => (
              <button key={category.id} type="button" aria-pressed={activeCategory === category.id} aria-controls="accessories-results" onClick={() => setActiveCategory(category.id)}>
                {category.label}
              </button>
            ))}
          </div>
          <div id="accessories-results">
            <div className="accessories-grid" key={activeCategory}>
              {visibleAccessories.map(item => <AccessoryCard key={item.id} {...item} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="accessories-advantages" aria-labelledby="accessories-advantages-title">
        <div className="container">
          <span className="eyebrow">{advantages.eyebrow}</span>
          <h2 id="accessories-advantages-title">{advantages.title}</h2>
          <p className="section-intro">{advantages.description}</p>
          <div className="accessories-three-grid">
            {advantages.items.map(item => (
              <article className="accessories-advantage-card" key={item.title}>
                <span className="icon-tile"><Icon name={item.icon}/></span>
                <span className="eyebrow">{item.category}</span>
                <h3>{item.title}</h3><p>{item.description}</p>
                <small><span aria-hidden="true">✓</span> {item.note}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="accessories-cta"><div className="container"><CTASection {...cta}/></div></div>
    </main>
  );
}
