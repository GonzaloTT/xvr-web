import { assetUrl } from '../../utils/assetUrl';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation, paths } from '../../routes/paths';
import { company } from '../../data/homeData';
export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggle = useRef(null);
  useEffect(() => { setOpen(false); }, [location]);
  return <header className="site-header" onKeyDown={event => { if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } }}>
    <div className="topbar"><div className="container topbar-inner"><span>● PRECISIÓN INDUSTRIAL LÁSER</span><span>MÉXICO · USA · COSTA RICA</span><span className="topbar-support">SOPORTE Y PROCESOS</span></div></div>
    <div className="container header-inner"><Link to="/" className="brand" aria-label="XVR — Inicio">{company.logo ? <img className="brand-image" src={assetUrl(company.logo)} alt="XVR"/> : <><span className="brand-word" data-placeholder="Logotipo XVR pendiente">XVR<span>●</span></span><span className="brand-caption">LASER SOLUTIONS<small>INDUSTRIAL PROCESSES</small></span></>}</Link>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
    <nav id="main-navigation" aria-label="Navegación principal" className={`main-nav ${open ? 'is-open' : ''}`}>{navigation.map(item => <Link key={item.to} to={item.to} aria-current={`${location.pathname}${location.hash}` === item.to ? 'page' : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link className="button button-dark header-cta" to={paths.contact}>Hablar con un especialista <span aria-hidden="true">→</span></Link></nav></div>
  </header>;
}
