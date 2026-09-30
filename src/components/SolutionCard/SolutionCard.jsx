import { Link } from 'react-router-dom';
export default function SolutionCard({ image, alt = '', title, description, secondary, href, cta = 'Conocer solución' }) {
  return <article className="solution-card"><img src={image} alt={alt} loading="lazy" width="600" height="360"/><div className="solution-body"><h3>{title}</h3><p>{description}</p>{secondary && <small>{secondary}</small>}<Link to={href} aria-label={`${cta}: ${title}`}>{cta}<span aria-hidden="true">›</span></Link></div></article>;
}
