import { accessories } from './accessoriesData';
import { products } from './productsData';
import { spareParts } from './sparePartsData';
import { paths } from '../routes/paths';

export const catalogTypes = [{ id: 'product', label: 'Productos' }, { id: 'spare-part', label: 'Refacciones' }];
// Classify the record, not its technical category. Editorial families are not
// individual products: no stock, model or compatibility is inferred.
export const catalogEntries = [
  ...accessories.map(item => ({ id: 'accessory-' + item.id, type: item.catalogType, source: 'accessory', item })),
  ...products.map(item => ({ id: 'product-' + item.slug, type: 'product', item, href: paths.product(item.slug) })),
  ...spareParts.map(item => ({ id: 'part-' + item.slug, type: 'spare-part', item, href: paths.sparePart(item.slug) })),
];
