import { Link } from 'react-router-dom';
export default function CTASection({ eyebrow, title, description, primaryButtonLabel, primaryButtonHref, secondaryButtonLabel, secondaryButtonHref }) {
  const button = (label, href, secondary = false) => /^(https?:|mailto:|tel:)/.test(href) ? <a className={`button ${secondary ? 'button-outline' : ''}`} href={href}>{label}<span aria-hidden="true">→</span></a> : <Link className={`button ${secondary ? 'button-outline' : ''}`} to={href}>{label}<span aria-hidden="true">→</span></Link>;
  return <section className="cta-section"><div className="container cta-inner"><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{description && <p>{description}</p>}</div><div className="cta-actions">{button(primaryButtonLabel, primaryButtonHref)}{secondaryButtonLabel && secondaryButtonHref && button(secondaryButtonLabel, secondaryButtonHref, true)}</div></div></section>;
}
