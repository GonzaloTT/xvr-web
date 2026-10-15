import { assetUrl } from './assetUrl';
import { photoAssets } from '../data/photoAssets';

// Every candidate uses the deployment base, including responsive variants.
export function photoImage(src, sizes = '100vw') {
  const photo = photoAssets[src];
  return {
    src: assetUrl(src),
    ...(photo?.small && {
      srcSet: `${assetUrl(photo.small)} 800w, ${assetUrl(src)} ${photo.width}w`,
      sizes,
    }),
    decoding: 'async',
  };
}
