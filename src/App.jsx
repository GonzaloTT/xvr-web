import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { paths } from './routes/paths';

function ScrollToLocation() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash, key]);
  return null;
}
// Only a shared route boundary; future pages are intentionally not implemented.
function PendingRoute({ unknown = false }) {
  return <main id="contenido" className="container pending-route"><span className="eyebrow">XVR</span><h1>{unknown ? 'Página no encontrada' : 'Contenido disponible próximamente'}</h1><p>{unknown ? 'La dirección solicitada no existe.' : 'Esta sección está reservada para una próxima fase del sitio.'}</p><Link className="button" to="/">Volver al inicio <span aria-hidden="true">→</span></Link></main>;
}
export default function App() {
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><ScrollToLocation /><Header /><Routes><Route path="/" element={<Home />} />{[paths.solutions, `${paths.solutions}/:slug`, paths.accessories, paths.contact].map(path => <Route key={path} path={path} element={<PendingRoute />} />)}<Route path="*" element={<PendingRoute unknown />} /></Routes><Footer /></>;
}
