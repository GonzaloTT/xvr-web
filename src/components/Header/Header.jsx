import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { industries } from '../../data/industriesData';
import './Header.css';
import { company } from '../../data/homeData';
import { navigation, paths } from '../../routes/paths';
import { assetUrl } from '../../utils/assetUrl';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const industryGroup = useRef(null);
  const industryToggle = useRef(null);
  const location = useLocation();
  const closeNavigation = () => { setOpen(false); setIndustriesOpen(false); };
  const toggle = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if (!industriesOpen) return;
    const closeOutside = event => {
      if (!industryGroup.current?.contains(event.target)) setIndustriesOpen(false);
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, [industriesOpen]);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && industriesOpen) {
      event.preventDefault();
      setIndustriesOpen(false);
      industryToggle.current?.focus();
      return;
    }
    if (event.key === 'Escape' && open) {
      setOpen(false);
      toggle.current?.focus();
    }
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
          onClick={() => { setOpen(!open); setIndustriesOpen(false); }}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav
          id="main-navigation"
          aria-label="Navegación principal"
          className={`main-nav ${open ? 'is-open' : ''}`}
        >
          {navigation.map((item) => item.to === paths.industries ? (
            <div key={item.to} className="industry-navigation" ref={industryGroup} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setIndustriesOpen(false); }}>
              <div className="industry-navigation-label">
                <Link to={item.to} aria-current={location.pathname === item.to || location.pathname.startsWith(`${item.to}/`) ? 'page' : undefined} onClick={closeNavigation}>{item.label}</Link>
                <button ref={industryToggle} type="button" className="industry-navigation-toggle" aria-label="Mostrar u ocultar industrias" aria-expanded={industriesOpen} aria-controls="industry-navigation-links" onClick={() => setIndustriesOpen(value => !value)}>
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
                </button>
              </div>
              <ul id="industry-navigation-links" className="industry-navigation-links" hidden={!industriesOpen}>
                {[{ title: 'Ver todas las industrias', href: paths.industries }, ...industries].map(industry => <li key={industry.href}><Link to={industry.href} aria-current={location.pathname === industry.href ? 'page' : undefined} onClick={closeNavigation}>{industry.title}</Link></li>)}
              </ul>
            </div>
          ) : (
            <Link
              key={item.to}
              to={item.to}
              aria-current={
                (location.pathname === item.to || (item.to !== paths.home && location.pathname.startsWith(`${item.to}/`)))
                  ? 'page'
                  : undefined
              }
              onClick={closeNavigation}
            >
              {item.label}
            </Link>
          ))}
          <Link className="button button-dark header-cta" to={paths.contact} onClick={closeNavigation}>
            Hablar con un especialista <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}