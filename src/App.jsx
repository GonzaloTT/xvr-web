import { useEffect } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Solutions from './pages/Solutions/Solutions';
import SolutionDetail from './pages/SolutionDetail/SolutionDetail';
import Accessories from './pages/Accessories/Accessories';
import Contact from './pages/Contact/Contact';
import { solutionDetails } from './data/solutionsData';
import { paths } from './routes/paths';
import { industries } from './data/industriesData';
import Industries from './pages/Industries/Industries';
import IndustryDetail from './pages/IndustryDetail/IndustryDetail';
import Brands from './pages/Brands/Brands';
import BrandDetail from './pages/Brands/BrandDetail';

import ProductDetail from './pages/Products/ProductDetail';
import SpareParts from './pages/SpareParts/SpareParts';
import SparePartDetail from './pages/SpareParts/SparePartDetail';
import { brands } from './data/brandsData';
import { products } from './data/productsData';
import { spareParts } from './data/sparePartsData';
import Blog from './pages/Blog/Blog';
import BlogDetail from './pages/Blog/BlogDetail';
import { blogArticles } from './data/blogData';

function decodeFragment(hash) {
  try {
    return decodeURIComponent(hash.slice(1));
  } catch {
    return null;
  }
}

function skipToContent(event) {
  const content = document.getElementById('contenido');
  if (!content) return;
  event.preventDefault();
  content.setAttribute('tabindex', '-1');
  content.focus({ preventScroll: true });
  content.scrollIntoView();
}

function ScrollToLocation({ fragment }) {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const detail = Object.values(solutionDetails).find(solution => paths.solution(solution.slug) === pathname);
    const industry = industries.find(item => item.href === pathname);
    const catalogRecord = brands.find(item => paths.brand(item.slug) === pathname)
      || products.find(item => paths.product(item.slug) === pathname)
      || spareParts.find(item => paths.sparePart(item.slug) === pathname);
    const article = blogArticles.find(item => paths.article(item.slug) === pathname);
    const title = article?.title || catalogRecord?.name || detail?.title || industry?.title || ({
      [paths.home]: 'Inicio',
      [paths.solutions]: 'Soluciones Láser',
      [paths.blog]: 'Universo Láser',
      [paths.brands]: 'Nuestras Marcas',
      [paths.products]: 'Productos',
      [paths.spareParts]: 'Refacciones',
      [paths.accessories]: 'Accesorios y Periféricos',
      [paths.contact]: '911 XVR',
      [paths.industries]: 'Soluciones por industria',
    })[pathname] || 'XVR';
    document.title = `${title} | XVR Soluciones Láser Industriales`;
  }, [pathname]);
  useEffect(() => {
    if (hash && fragment !== null) document.getElementById(fragment)?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash, key, fragment]);
  return null;
}
// Only a shared route boundary; future pages are intentionally not implemented.
function PendingRoute({ unknown = false, title }) {
  return <main id="contenido" className="container pending-route"><span className="eyebrow">XVR</span><h1>{unknown ? 'Página no encontrada' : title || 'Contenido disponible próximamente'}</h1><p>{unknown ? 'La dirección solicitada no existe.' : 'Esta sección está reservada para una próxima fase del sitio.'}</p><Link className="button" to="/">Volver al inicio <span aria-hidden="true">→</span></Link></main>;
}
export default function App() {
  const location = useLocation();
  const fragment = decodeFragment(location.hash);
  return (
    <>
      <Link className="skip-link" onClick={skipToContent} to={{ pathname: location.pathname, search: location.search, hash: '#contenido' }}>Saltar al contenido</Link>
      <ScrollToLocation fragment={fragment} />
      <Header />
      {fragment === null ? <PendingRoute unknown /> : <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.solutions} element={<Solutions />} />
        <Route path={paths.accessories} element={<Navigate replace to={{ pathname: paths.products, search: location.search, hash: location.hash }} />} />
        <Route path={paths.legacyAccessories} element={<Navigate replace to={{ pathname: paths.products, search: location.search, hash: location.hash }} />} />
        <Route path={paths.brands} element={<Brands />} />
        <Route path={paths.brand(':slug')} element={<BrandDetail />} />
        <Route path={paths.products} element={<Accessories />} />
        <Route path={paths.product(':slug')} element={<ProductDetail />} />
        <Route path={paths.spareParts} element={<SpareParts />} />
        <Route path={paths.sparePart(':slug')} element={<SparePartDetail />} />
        <Route path={paths.contact} element={<Contact />} />
        <Route path={paths.industries} element={<Industries />} />
        {industries.map(industry => (
          <Route key={industry.slug} path={industry.href} element={<IndustryDetail industry={industry} />} />
        ))}
        {Object.values(solutionDetails).map(solution => (
          <Route key={solution.slug} path={paths.solution(solution.slug)} element={<SolutionDetail solution={solution} />} />
        ))}
        <Route path={`${paths.solutions}/:slug`} element={<PendingRoute unknown />} />
        <Route path={paths.blog} element={<Blog />} />
        <Route path={paths.article(':slug')} element={<BlogDetail />} />
        <Route path="*" element={<PendingRoute unknown />} />
      </Routes>}
      <Footer />
    </>
  );
}
