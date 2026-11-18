export const paths = {
  home: '/',
  solutions: '/soluciones',
  industries: '/soluciones-industria',
  industry: (slug) => `/soluciones-industria/${slug}`,
  accessories: '/productos/accesorios-perifericos',
  legacyAccessories: '/accesorios-perifericos',
  brands: '/marcas',
  brand: slug => `/marcas/${slug}`,
  products: '/productos',
  product: slug => `/productos/${slug}`,
  spareParts: '/refacciones',
  sparePart: slug => `/refacciones/${slug}`,
  blog: '/blog',
  article: slug => '/blog/' + slug,
  about: '/#nosotros',
  contact: '/contacto',
  support: '/911-xvr',
  solution: (slug) => `/soluciones/${slug}`,
};

export const navigation = [
  { label: 'Inicio', to: paths.home },
  { label: 'Soluciones y Aplicaciones', to: paths.industries },
  { label: 'Universo Láser', to: paths.blog },
  { label: 'Contáctanos', to: paths.contact },
];
