import { Link, useParams } from 'react-router-dom';
import { CatalogImage, CatalogCTA, MissingRecord, RelatedLinks } from '../../components/Catalog/Catalog';
import { products, productCategories } from '../../data/productsData';
import { brands } from '../../data/brandsData';
import { spareParts } from '../../data/sparePartsData';
import { industries } from '../../data/industriesData';
import { solutionDetails } from '../../data/solutionsData';
import { paths } from '../../routes/paths';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(item => item.slug === slug);
  if (!product) return <MissingRecord to={paths.products} label="Volver a Productos"/>;
  const brand = brands.find(item => item.slug === product.brandSlug);
  const category = productCategories.find(item => item.id === product.category);
  return <main id="contenido" className="catalog-page">
    <section className="section container"><Link className="text-link" to={paths.products}>← Productos</Link>
      <div className="catalog-detail-grid"><CatalogImage src={product.image} name={product.name}/><div>{category && <span className="eyebrow">{category.name}</span>}<h1>{product.name}</h1>{brand && <Link className="text-link" to={paths.brand(brand.slug)}>{brand.name}</Link>}<p className="section-intro">{product.description}</p>{product.partNumber && <p>Número de parte: {product.partNumber}</p>}</div></div>
      {product.applications?.length > 0 && <section className="catalog-related"><h2>Aplicaciones</h2><ul>{product.applications.map(item => <li key={item}>{item}</li>)}</ul></section>}
      {product.technicalInfo?.length > 0 && <section className="catalog-related"><h2>Información técnica</h2><dl>{product.technicalInfo.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl></section>}
      <RelatedLinks title="Industrias relacionadas" items={industries.filter(item => product.industrySlugs?.includes(item.slug)).map(item => ({name:item.title,href:item.href}))}/>
      <RelatedLinks title="Procesos relacionados" items={Object.values(solutionDetails).filter(item => product.processSlugs?.includes(item.slug)).map(item => ({name:item.category,href:paths.solution(item.slug)}))}/>
      <RelatedLinks title="Refacciones relacionadas" items={spareParts.filter(item => item.productSlugs?.includes(slug)).map(item => ({name:item.name,href:paths.sparePart(item.slug)}))}/>
    </section><CatalogCTA title="Solicita información sobre este producto"/>
  </main>;
}
