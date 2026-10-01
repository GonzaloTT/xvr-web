import { Link } from 'react-router-dom';
import Icon from '../Icon';

export default function AccessoryCard({ id, category, eyebrow, title, image, alt = '', description, highlights = [], metadata, cta }) {
  return (
    <article className="accessory-card" data-category={category} aria-labelledby={`accessory-${id}-title`}>
      <span className="accessory-card-eyebrow">{eyebrow || category}</span>
      <img className="accessory-card-image" src={image} alt={alt} loading="lazy" width="600" height="210" />
      <h3 id={`accessory-${id}-title`}>{title}</h3>
      <p className="accessory-card-description">{description}</p>
      {highlights.length > 0 && (
        <div className="accessory-highlights">
          <h4>ELEMENTOS A CONSIDERAR</h4>
          <ul>
            {highlights.map(item => (
              <li key={item.title}><Icon name="check" /><span><strong>{item.title}: </strong>{item.description}</span></li>
            ))}
          </ul>
        </div>
      )}
      <div className="accessory-card-footer">
        {metadata && <small>{metadata}</small>}
        {cta && <Link to={cta.href} aria-label={`${cta.label}: ${title}`}>{cta.label} <span aria-hidden="true">→</span></Link>}
      </div>
    </article>
  );
}
