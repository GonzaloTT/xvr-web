import { Link } from 'react-router-dom';
import { blogArticles } from '../../data/blogData';
import { paths } from '../../routes/paths';
import { assetUrl } from '../../utils/assetUrl';
import '../../styles/blog.css';

export default function Blog() {
  return <main id="contenido" className="section container blog-page">
    <span className="eyebrow">MANUFACTURA Y APLICACIONES</span>
    <h1>Universo Láser</h1>
    <p className="section-intro">Ideas para comprender los procesos láser y las decisiones que rodean su integración industrial. Temas demostrativos; los artículos completos se publicarán posteriormente.</p>
    <div className="blog-grid">{blogArticles.map(article => <article className="solution-card blog-card" key={article.slug}>
      <img src={assetUrl(article.image)} alt="Ilustración provisional del tema" width="600" height="375" loading="lazy"/>
      <div className="solution-body">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <Link to={paths.article(article.slug)} aria-label={'Leer artículo: ' + article.title}>Leer artículo <span aria-hidden="true">→</span></Link>
      </div>
    </article>)}</div>
  </main>;
}
