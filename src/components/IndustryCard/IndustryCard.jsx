import { photoImage } from '../../utils/photoImage';
import Icon from '../Icon';
import { Link } from 'react-router-dom';
export default function IndustryCard({ image, title, description, secondary, icon, href }) {
  return <Link to={href} className="industry-card"><img className="industry-background" {...photoImage(image, '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 400px')} alt="" loading="lazy"/><div className="industry-content">{icon && <span className="icon-tile"><Icon name={icon}/></span>}<h3>{title}</h3><p>{description}</p>{secondary && <small>{secondary}</small>}</div></Link>;
}
