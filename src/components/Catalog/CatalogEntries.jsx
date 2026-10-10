import AccessoryCard from '../AccessoryCard/AccessoryCard';
import { CatalogCard, EmptyCatalog } from './Catalog';
import '../../styles/accessories.css';

export default function CatalogEntries({ entries, emptyMessage }) {
  if (!entries.length) return <EmptyCatalog>{emptyMessage}</EmptyCatalog>;
  return <div className="accessories-grid">{entries.map(entry => entry.source === 'accessory'
    ? <AccessoryCard key={entry.id} {...entry.item}/>
    : <CatalogCard key={entry.id} item={entry.item} href={entry.href}/>)}</div>;
}
