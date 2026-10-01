import { assetUrl } from '../../utils/assetUrl';
export default function PartnerLogo({ name, logo, alt }) { return <div className="partner-logo">{logo ? <img src={assetUrl(logo)} alt={alt || name} loading="lazy"/> : <span aria-label={`${name}, logotipo pendiente`}>{name}</span>}</div>; }
