import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assetUrl } from '../../utils/assetUrl';
import CTASection from '../CTASection/CTASection';
import { paths } from '../../routes/paths';
import '../../styles/catalog.css';

export function CatalogImage({ src, name }) {
  const [failed, setFailed] = useState(null);
  return src && src !== failed
    ? <img className="catalog-image" src={assetUrl(src)} alt={name} loading="lazy" onError={() => setFailed(src)}/>
    : <div className="catalog-image catalog-image-pending">Imagen pendiente</div>;
}
export function CatalogCard({ item, href }) {
  return <article className="catalog-card">
    <CatalogImage src={item.image} name={item.name}/>
    <h3><Link to={href}>{item.name}</Link></h3>
    {item.partNumber && <p>Número de parte: {item.partNumber}</p>}
    {item.description && <p>{item.description}</p>}
    <Link className="text-link" to={href} aria-label={`Ver información de ${item.name}`}>Ver información →</Link>
  </article>;
}
export function CatalogCTA({ title = '¿Necesitas orientación para tu aplicación?' }) {
  return <CTASection title={title} primaryButtonLabel="Solicitar información · 911 XVR" primaryButtonHref={paths.contact}/>;
}
export function EmptyCatalog({ children }) { return <p className="catalog-empty">{children}</p>; }
export function MissingRecord({ to, label }) {
  return <main id="contenido" className="section container catalog-page"><h1>Registro no disponible</h1><EmptyCatalog>Este registro no forma parte del catálogo publicado.</EmptyCatalog><Link className="text-link" to={to}>{label} →</Link></main>;
}
export function RelatedLinks({ title, items }) {
  if (!items.length) return null;
  return <section className="catalog-related"><h2>{title}</h2><ul>{items.map(item => <li key={item.href}><Link className="text-link" to={item.href}>{item.name}</Link></li>)}</ul></section>;
}
