import { Link, useParams } from 'react-router-dom';
import { blogArticles } from '../../data/blogData';
import { paths } from '../../routes/paths';
import '../../styles/blog.css';

export default function BlogDetail() {
  const { slug } = useParams();
  const article = blogArticles.find(item => item.slug === slug);
  return <main id="contenido" className="section container blog-page blog-detail">
    <span className="eyebrow">UNIVERSO LÁSER</span>
    <h1>{article ? article.title : 'Artículo no encontrado'}</h1>
    <p className="section-intro">{article ? 'Contenido disponible próximamente' : 'Este artículo no forma parte de los temas publicados.'}</p>
    <Link className="button" to={paths.blog}>Volver a Universo Láser <span aria-hidden="true">→</span></Link>
  </main>;
}
