import { assetUrl } from '../../utils/assetUrl';
import Icon from '../Icon';
import { Link } from 'react-router-dom';
export default function IndustryCard({ image, title, description, secondary, icon, href }) {
  return <Link to={href} className="industry-card"><img className="industry-background" src={assetUrl(image)} alt="" loading="lazy"/><div className="industry-content">{icon && <span className="icon-tile"><Icon name={icon}/></span>}<h3>{title}</h3><p>{description}</p>{secondary && <small>{secondary}</small>}</div></Link>;
}
