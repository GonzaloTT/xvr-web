// Public assets are relative to Vite's deployment base, not the domain root.
export function assetUrl(path) {
  if (!path || /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL;
  if (base !== '/' && path.startsWith(base)) return path;
  return `${base}${path.replace(/^\/+/, '')}`;
}
