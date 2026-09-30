import Icon from '../Icon';
export default function IndustryCard({ image, title, description, secondary, icon }) {
  return <article className="industry-card"><img className="industry-background" src={image} alt="" loading="lazy"/><div className="industry-content">{icon && <span className="icon-tile"><Icon name={icon}/></span>}<h3>{title}</h3><p>{description}</p>{secondary && <small>{secondary}</small>}</div></article>;
}
