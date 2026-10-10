export const paths = {
  home: '/',
  solutions: '/soluciones',
  industries: '/soluciones-industria',
  industry: (slug) => `/soluciones-industria/${slug}`,
  accessories: '/accesorios-perifericos',
  blog: '/blog',
  contact: '/contacto',
  solution: (slug) => `/soluciones/${slug}`,
};

export const navigation = [
  {
    label: 'Inicio',
    to: paths.home,
  },
  {
    label: 'Soluciones',
    to: paths.solutions,
  },
  {
    label: 'Accesorios y Periféricos',
    to: paths.accessories,
  },
  {
    label: 'Industrias',
    to: '/#industrias',
  },
  {
    label: 'Nosotros',
    to: '/#nosotros',
  },
  {
    label: 'Blog',
    to: paths.blog,
  },
  {
    label: '911 XVR',
    to: paths.contact,
  },
];