import { paths } from '../routes/paths';

/** @typedef {Object} Product
 * @property {string} slug Unique; 'accesorios-perifericos' is reserved for the category route.
 * @property {string} name
 * @property {string} category Category ID from productCategories.
 * @property {string|null} brandSlug Reference to brandsData.
 * @property {string|null} image Local public path, rendered with assetUrl.
 * @property {string} description
 * @property {string[]} applications Short validated application descriptions.
 * @property {string[]} applicationIds Optional references to contentRelations applications.
 * @property {string[]} industrySlugs
 * @property {string[]} processSlugs
 * @property {string[]} solutionIds Optional references to contentRelations solutions.
 * @property {string|null} partNumber
 * @property {{label: string, value: string}[]} technicalInfo Validated facts only.
 */
/** @type {Product[]} Real records only; no example products in the public catalog. */
export const products = [];

// The only category with existing editorial content; add confirmed categories here.
export const productCategories = [
  { id: 'accesorios-perifericos', name: 'Accesorios y Periféricos', href: paths.accessories, description: 'Explora las categorías y criterios de selección de periféricos para procesos láser.' },
];
