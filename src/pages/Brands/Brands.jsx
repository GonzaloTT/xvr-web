import { Link } from 'react-router-dom';
import PartnerLogo from '../../components/PartnerLogo/PartnerLogo';
import { CatalogCTA } from '../../components/Catalog/Catalog';
import { brands, brandsNotice } from '../../data/brandsData';
import { paths } from '../../routes/paths';

export default function Brands() {
  return <main id="contenido" className="catalog-page">
    <section className="section container"><span className="eyebrow">ECOSISTEMA TECNOLÓGICO</span><h1>Nuestras Marcas</h1>
      <p className="section-intro">La selección de tecnología requiere conocer las opciones de los fabricantes y las posibilidades de colaboración para cada aplicación.</p>
      <p className="catalog-note">{brandsNotice}</p>
      <div className="catalog-grid brands-grid">{brands.map(brand => <Link className="catalog-card brand-card" key={brand.slug} to={paths.brand(brand.slug)} aria-label={`Conocer ${brand.name}`}><PartnerLogo {...brand}/>{brand.description && <p>{brand.description}</p>}<span className="text-link">Conocer marca →</span></Link>)}</div>
    </section><CatalogCTA title="Conversemos sobre las opciones para tu proyecto"/>
  </main>;
}
