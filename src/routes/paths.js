export const paths = {
  home: '/',
  solutions: '/soluciones',
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
    label: 'Contacto',
    to: paths.contact,
  },
];