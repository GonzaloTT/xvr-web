import { Link, useParams } from 'react-router-dom';
import { CatalogImage, CatalogCTA, MissingRecord, RelatedLinks } from '../../components/Catalog/Catalog';
import { spareParts } from '../../data/sparePartsData';
import { products } from '../../data/productsData';
import { brands } from '../../data/brandsData';
import { paths } from '../../routes/paths';

export default function SparePartDetail() {
  const { slug } = useParams();
  const part = spareParts.find(item => item.slug === slug);
  if (!part) return <MissingRecord to={paths.spareParts} label="Volver a Refacciones"/>;
  const brand = brands.find(item => item.slug === part.brandSlug);
  return <main id="contenido" className="catalog-page"><section className="section container">
    <Link className="text-link" to={paths.spareParts}>← Refacciones</Link>
    <div className="catalog-detail-grid"><CatalogImage src={part.image} name={part.name}/><div><span className="eyebrow">{part.category}</span><h1>{part.name}</h1>{brand && <Link className="text-link" to={paths.brand(brand.slug)}>{brand.name}</Link>}<p className="section-intro">{part.description}</p>{part.partNumber && <p>Número de parte: {part.partNumber}</p>}</div></div>
    {part.compatibleEquipment?.length > 0 && <section className="catalog-related"><h2>Equipo compatible</h2><ul>{part.compatibleEquipment.map(item => <li key={item}>{item}</li>)}</ul></section>}
    {part.availability?.label && part.availability?.source && <section className="catalog-related"><h2>Disponibilidad informada</h2><p>{part.availability.label}</p><p className="catalog-note">Fuente: {part.availability.source}</p></section>}
    <RelatedLinks title="Productos relacionados" items={products.filter(item => part.productSlugs?.includes(item.slug)).map(item => ({name:item.name,href:paths.product(item.slug)}))}/>
    </section><CatalogCTA title="Consulta esta refacción con XVR"/></main>;
}
