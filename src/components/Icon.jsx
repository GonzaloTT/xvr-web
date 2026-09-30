const icons = {
  process: 'M8 3h8M10 3v7l-4 7h12l-4-7V3M5 21h14M9 13h6',
  precision: 'M3 6h18M3 12h18M3 18h18M8 3v6M16 9v6M8 15v6',
  support: 'M4 13v-2a8 8 0 0 1 16 0v2M4 12H2v6h4v-6M20 12h2v6h-4v-6M18 18v3h-6',
  check: 'm7 12 3 3 7-7M12 2l9 4v6c0 5-9 10-9 10S3 17 3 12V6z',
  car: 'm4 10 2-6h12l2 6M3 10h18v9H3zM6 19v2M18 19v2M6 14h2M16 14h2',
  medical: 'M4 6h16v15H4zM9 6V3h6v3M12 10v7M8.5 13.5h7',
  chip: 'M6 6h12v12H6zM9 9h6v6H9zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4',
  plane: 'm12 2 2 8 7 5v2l-7-2v5l2 2-4-1-4 1 2-2v-5l-7 2v-2 7-5z',
  training: 'm2 8 10-5 10 5-10 5zM6 10v7l6 3 6-3v-7M22 8v8',
  bolt: 'm13 2-9 12h7l-1 8 10-13h-8z',
  tool: 'M14 3a6 6 0 0 0-7 7L2 15l7 7 5-5a6 6 0 0 0 7-7l-4 4-7-7z',
  globe: 'M2 12h20M12 2c-7 6-7 14 0 20 7-6 7-14 0-20M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20',
};
export default function Icon({ name = 'check' }) { return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={icons[name] || icons.check} /></svg>; }
