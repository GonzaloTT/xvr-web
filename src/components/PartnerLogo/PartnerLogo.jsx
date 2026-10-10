import { useState } from 'react';
import { assetUrl } from '../../utils/assetUrl';

export default function PartnerLogo({ name, logo, alt }) {
  const [failedLogo, setFailedLogo] = useState(null);
  return <div className="partner-logo">
    {logo && failedLogo !== logo
      ? <img src={assetUrl(logo)} alt={alt || name} loading="lazy" onError={() => setFailedLogo(logo)}/>
      : <span aria-label={`${name}, logotipo pendiente`}>{name}</span>}
  </div>;
}
