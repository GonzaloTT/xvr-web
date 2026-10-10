import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { industries } from '../../data/industriesData';
import './Header.css';
import { company } from '../../data/homeData';
import { navigation, paths } from '../../routes/paths';
import { assetUrl } from '../../utils/assetUrl';
import NavDropdown from './NavDropdown';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const closeNavigation = () => { setOpen(false); setOpenDropdown(null); };
  const toggle = useRef(null);
  const isActive = to => {
    const [pathname, hash] = to.split('#');
    if (hash) return location.pathname === pathname && location.hash === '#' + hash;
    return pathname === paths.home ? location.pathname === pathname && !location.hash
      : location.pathname === pathname || location.pathname.startsWith(pathname + '/');
  };
  useEffect(() => { setOpen(false); setOpenDropdown(null); }, [location]);
  const handleKeyDown = event => {
    if (event.key === 'Escape' && open) { setOpen(false); setOpenDropdown(null); toggle.current?.focus(); }
  };

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>● PRECISIÓN INDUSTRIAL LÁSER</span>
          <span>MÉXICO · USA · COSTA RICA</span>
          <span className="topbar-support">SOPORTE Y PROCESOS</span>
        </div>
      </div>

      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="XVR — Inicio">
          {company.logo ? (
            <img
              className="brand-image"
              src={assetUrl(company.logo)}
              alt="XVR"
            />
          ) : (
            <>
              <span
                className="brand-word"
                data-placeholder="Logotipo XVR pendiente"
              >
                XVR<span>●</span>
              </span>

              <span className="brand-caption">
                LASER SOLUTIONS
                <small>INDUSTRIAL PROCESSES</small>
              </span>
            </>
          )}
        </Link>

        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => { setOpen(!open); setOpenDropdown(null); }}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav
          id="main-navigation"
          aria-label="Navegación principal"
          className={`main-nav ${open ? 'is-open' : ''}`}
        >
          {navigation.map(item => {
            const links = item.to === paths.industries
              ? [{ title: 'Ver todas las industrias', href: paths.industries }, ...industries]
              : item.to === paths.products
                ? [{ title: 'Productos', href: paths.products }, { title: 'Refacciones', href: paths.spareParts }]
                : null;
            return links ? <NavDropdown key={item.to} id={item.to === paths.industries ? 'industry-navigation-links' : 'product-navigation-links'}
              label={item.label} to={item.to} links={links}
              active={isActive(item.to) || (item.to === paths.products && isActive(paths.spareParts))}
              open={openDropdown === item.to} onToggle={() => setOpenDropdown(current => current === item.to ? null : item.to)}
              onClose={() => setOpenDropdown(current => current === item.to ? null : current)} onNavigate={closeNavigation}/>
              : <Link key={item.to} to={item.to} aria-current={isActive(item.to) ? 'page' : undefined} onClick={closeNavigation}>{item.label}</Link>;
          })}
          <Link className="button button-dark header-cta" to={paths.contact} onClick={closeNavigation}>
            Hablar con un especialista <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}