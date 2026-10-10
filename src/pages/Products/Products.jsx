import { Link } from 'react-router-dom';
import { CatalogCard, CatalogCTA, EmptyCatalog } from '../../components/Catalog/Catalog';
import { products, productCategories } from '../../data/productsData';
import { paths } from '../../routes/paths';

export default function Products() {
  return <main id="contenido" className="catalog-page">
    <section className="section container"><span className="eyebrow">CATÁLOGO INFORMATIVO</span><h1>Productos</h1><p className="section-intro">Explora las categorías disponibles y comparte con XVR las necesidades de tu aplicación.</p>
      <h2>Categorías</h2><div className="catalog-grid">{productCategories.map(category => <article className="catalog-card" key={category.id}><h3>{category.name}</h3>{category.description && <p>{category.description}</p>}{category.href && <Link className="text-link" to={category.href}>Explorar categoría →</Link>}</article>)}</div>
      <h2>Catálogo de productos</h2>
      {products.length ? <div className="catalog-grid">{products.map(item => <CatalogCard key={item.slug} item={item} href={paths.product(item.slug)}/>)}</div> : <EmptyCatalog>Catálogo pendiente de carga. Todavía no hay productos, modelos ni números de parte publicados. Puedes consultar el contenido de Accesorios y Periféricos.</EmptyCatalog>}
    </section><CatalogCTA/>
  </main>;
}
