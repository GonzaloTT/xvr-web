import { useState } from 'react';
import { CatalogCTA, EmptyCatalog } from '../../components/Catalog/Catalog';
import { catalogEntries } from '../../data/catalogData';
import CatalogEntries from '../../components/Catalog/CatalogEntries';
const parts = catalogEntries.filter(entry => entry.type === 'spare-part');

const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
export default function SpareParts() {
  const [query, setQuery] = useState('');
  const results = parts.filter(({ item }) => normalize(item.name || item.title).includes(normalize(query)) || normalize(item.partNumber).includes(normalize(query)));
  return <main id="contenido" className="catalog-page">
    <section className="section container"><span className="eyebrow">COMPONENTES Y REFACCIONES</span><h1>Refacciones</h1><p className="section-intro">Consulta por nombre o número de parte. La información de compatibilidad y disponibilidad se publicará cuando esté confirmada.</p>
      <div className="catalog-search" role="search"><label htmlFor="spare-part-search">Buscar por nombre o número de parte</label><input id="spare-part-search" type="search" value={query} onChange={event => setQuery(event.target.value)} aria-controls="spare-part-results"/></div>
      <div id="spare-part-results"><p role="status" aria-live="polite">{parts.length ? results.length + ' resultados' : 'Catálogo pendiente de carga.'}</p>
        {!parts.length ? <EmptyCatalog>Todavía no hay registros de refacciones ni números de parte publicados.</EmptyCatalog> : !results.length ? <EmptyCatalog>No se encontraron coincidencias. Puedes consultar tu necesidad con 911 XVR.</EmptyCatalog> : <CatalogEntries entries={results}/>}
      </div>
    </section><CatalogCTA title="¿Necesitas consultar una refacción?"/>
  </main>;
}
