import { assetUrl } from '../../utils/assetUrl';
import { Link } from 'react-router-dom';
import { company, solutions } from '../../data/homeData';
import { paths } from '../../routes/paths';
export default function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Link to="/" className="brand-word" aria-label="XVR — Inicio">{company.logo ? <img className="brand-image" src={assetUrl(company.logo)} alt="XVR"/> : <span data-placeholder="Logotipo XVR pendiente">XVR</span>}</Link><p>Explora aplicaciones de manufactura láser y comparte con XVR los retos de tu proceso para conversar sobre las alternativas y el alcance de tu proyecto.</p></div><div><h2>Procesos Láser</h2><ul>{solutions.map(item => <li key={item.slug}><Link to={item.href}>{item.title}</Link></li>)}</ul></div><div><h2>Explorar XVR</h2><ul>{[
    ['Soluciones por industria', paths.industries], ['Productos', paths.products],
    ['Nuestras Marcas', paths.brands],
    ['Refacciones', paths.spareParts], ['Universo Láser', paths.blog], ['911 XVR', paths.contact],
  ].map(([label, href]) => <li key={href}><Link to={href}>{label}</Link></li>)}</ul></div><div><h2>Contacto y atención</h2><strong>Consulta tu proyecto</strong><Link className="footer-contact" to={paths.contact}>Hablar con un especialista →</Link><strong>Alcance de atención</strong><p>{company.regions || 'Consulta la cobertura y modalidad de atención para tu proyecto.'}</p><strong>Consultas</strong><p>Proyectos y soporte técnico</p></div></div></footer>;
}
