/** @typedef {Object} SparePart
 * @property {string} slug
 * @property {string} name
 * @property {string|null} partNumber
 * @property {string|null} brandSlug Reference to brandsData.
 * @property {string[]} productSlugs Only confirmed associations; no inferred compatibility.
 * @property {string[]} compatibleEquipment Validated equipment names.
 * @property {string} category
 * @property {string|null} image
 * @property {string} description
 * @property {{label: string, source: string}|null} availability Publish only with a real source.
 */
/** @type {SparePart[]} */
export const spareParts = [];
