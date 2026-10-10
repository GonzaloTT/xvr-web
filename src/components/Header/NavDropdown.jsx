import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavDropdown({ id, label, to, links, active, open, onToggle, onClose, onNavigate }) {
  const group = useRef(null);
  const toggle = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => {
    if (!open) return;
    const closeOutside = event => { if (!group.current?.contains(event.target)) onClose(); };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, [open, onClose]);
  return <div className="nav-disclosure" ref={group}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) onClose(); }}
    onKeyDown={event => {
      if (event.key === 'Escape' && open) {
        event.preventDefault(); event.stopPropagation(); onClose(); toggle.current?.focus();
      }
    }}>
    <div className="nav-disclosure-label">
      <Link to={to} aria-current={active ? 'page' : undefined} onClick={onNavigate}>{label}</Link>
      <button ref={toggle} type="button" className="nav-disclosure-toggle" aria-label={`Mostrar u ocultar ${label.toLowerCase()}`} aria-expanded={open} aria-controls={id} onClick={onToggle}>
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
      </button>
    </div>
    <ul id={id} className="nav-disclosure-links" hidden={!open}>
      {links.map(item => <li key={item.href}><Link to={item.href} aria-current={pathname === item.href ? 'page' : undefined} onClick={onNavigate}>{item.title}</Link></li>)}
    </ul>
  </div>;
}
