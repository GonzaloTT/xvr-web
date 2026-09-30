export const paths = { home: '/', solutions: '/soluciones', accessories: '/accesorios-perifericos', contact: '/contacto', solution: (slug) => `/soluciones/${slug}` };
export const navigation = [
  { label: 'Inicio', to: '/' }, { label: 'Soluciones Láser', to: paths.solutions },
  { label: 'Accesorios y Periféricos', to: paths.accessories }, { label: 'Industrias', to: '/#industrias' },
  { label: 'Nosotros', to: '/#nosotros' }, { label: 'Contacto', to: paths.contact },
];
