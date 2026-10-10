// Optional editorial references, not a database. Add only validated records.
// Industry -> application -> process -> product:
// applications: { id, name, industrySlugs: [], processSlugs: [] }
// Product.applicationIds links products to those applications.
// Process -> solution -> product:
// solutions: { id, name, processSlugs: [] }; Product.solutionIds links to them.
// Brand -> product -> spare part: Product.brandSlug and SparePart.productSlugs.
// Direct industry/process references also live on Product; no duplicate lists needed.
export const applications = [];
export const solutions = [];
