import { Link, useParams } from 'react-router-dom';
import PartnerLogo from '../../components/PartnerLogo/PartnerLogo';
import { CatalogCTA, EmptyCatalog, MissingRecord, RelatedLinks } from '../../components/Catalog/Catalog';
import { brands, brandsNotice } from '../../data/brandsData';
import { products } from '../../data/productsData';
import { spareParts } from '../../data/sparePartsData';
import { accessories } from '../../data/accessoriesData';
import { paths } from '../../routes/paths';

export default function BrandDetail() {
  const { slug } = useParams();
  const brand = brands.find(item => item.slug === slug);
  if (!brand) return <MissingRecord to={paths.brands} label="Ver todas las marcas"/>;
  const relatedProducts = products.filter(item => item.brandSlug === slug);
  const relatedParts = spareParts.filter(item => item.brandSlug === slug || item.productSlugs?.some(productSlug => relatedProducts.some(product => product.slug === productSlug)));
  const relatedAccessories = accessories.filter(item => brand.accessoryIds.includes(item.id));
  return <main id="contenido" className="catalog-page">
    <section className="section container">
      <Link className="text-link" to={paths.brands}>← Todas las marcas</Link>
      <header className="catalog-detail-heading"><PartnerLogo {...brand}/><h1>{brand.name}</h1></header>
      <p className="catalog-note">{brandsNotice}</p>
      {brand.description ? <p className="section-intro">{brand.description}</p> : <EmptyCatalog>Descripción del fabricante pendiente de confirmación.</EmptyCatalog>}
      {brand.technologies.length > 0 && <section className="catalog-related"><h2>Tecnologías relacionadas</h2><ul>{brand.technologies.map(item => <li key={item}>{item}</li>)}</ul></section>}
      <RelatedLinks title="Productos asociados" items={relatedProducts.map(item => ({name:item.name,href:paths.product(item.slug)}))}/>
      <RelatedLinks title="Accesorios y periféricos" items={relatedAccessories.map(item => ({name:item.title,href:paths.accessories + '#accessory-' + item.id}))}/>
      <RelatedLinks title="Refacciones relacionadas" items={relatedParts.map(item => ({name:item.name,href:paths.sparePart(item.slug)}))}/>
      {(!brand.technologies.length || !relatedProducts.length || !relatedAccessories.length || !relatedParts.length) && <p className="catalog-note">Las asociaciones aún no publicadas de tecnologías, productos, accesorios o refacciones están pendientes de validación.</p>}
    </section><CatalogCTA/>
  </main>;
}
