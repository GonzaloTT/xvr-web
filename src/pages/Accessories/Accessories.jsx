import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import CTASection from '../../components/CTASection/CTASection';
import CatalogEntries from '../../components/Catalog/CatalogEntries';
import { catalogEntries, catalogTypes } from '../../data/catalogData';
import { accessoriesPage } from '../../data/accessoriesData';
import { paths } from '../../routes/paths';
import '../../styles/accessories.css';

export default function Accessories() {
  const [activeCategory, setActiveCategory] = useState('product');
  const visibleEntries = catalogEntries.filter(entry => entry.type === activeCategory);
  const activeLabel = catalogTypes.find(item => item.id === activeCategory).label;
  const { hero, catalog, cta } = accessoriesPage;

  return (
    <main id="contenido" className="accessories-page">
      <nav className="detail-breadcrumb" aria-label="Ruta de navegación"><div className="container"><Link to={paths.home}>← Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">Productos</span></div></nav>
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

      <section id="categorias" className="accessories-catalog" aria-labelledby="accessories-catalog-title">
        <div className="container">
          <span className="eyebrow">{catalog.eyebrow}</span>
          <div className="accessories-catalog-heading">
            <h2 id="accessories-catalog-title">{catalog.title}</h2>
            <p className="accessories-result-count" role="status" aria-live="polite" aria-atomic="true">
              {visibleEntries.length} {visibleEntries.length === 1 ? 'entrada' : 'entradas'} · {activeLabel}
            </p>
          </div>
          <div className="accessories-filters" role="group" aria-label="Filtrar catálogo por tipo">
            {catalogTypes.map(category => (
              <button key={category.id} type="button" aria-pressed={activeCategory === category.id} aria-controls="accessories-results" onClick={() => setActiveCategory(category.id)}>
                {category.label}
              </button>
            ))}
          </div>
          <p className="catalog-note">Las familias de equipamiento son orientativas; no representan modelos ni disponibilidad confirmados.</p>
          <div id="accessories-results">
            <CatalogEntries entries={visibleEntries} emptyMessage={activeCategory === 'spare-part' ? 'Catálogo pendiente de carga. Todavía no hay registros de refacciones ni números de parte publicados.' : 'Todavía no hay productos publicados.'}/>
          </div>
        </div>
      </section>

      <div className="accessories-cta"><div className="container"><CTASection {...cta}/></div></div>
    </main>
  );
}
