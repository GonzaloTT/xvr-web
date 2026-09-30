import { useEffect, useState } from 'react';
export default function HeroCarousel({ images = [], interval = 6500, className = '', ariaLabel = 'Soluciones láser industriales', children }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => { const media = window.matchMedia('(prefers-reduced-motion: reduce)'); const update = () => setReduced(media.matches); media.addEventListener('change', update); return () => media.removeEventListener('change', update); }, []);
  useEffect(() => { if (paused || reduced || images.length < 2) return; const timer = window.setInterval(() => { if (!document.hidden) setActive(current => (current + 1) % images.length); }, interval); return () => window.clearInterval(timer); }, [images.length, interval, paused, reduced]);
  const selected = active % Math.max(images.length, 1);
  return <section className={`hero${className ? ` ${className}` : ''}`} aria-label={ariaLabel}><div className="hero-slides" aria-hidden="true">{images.map((image, index) => <img key={image.src} className={`hero-slide ${index === selected ? 'is-active' : ''}`} src={image.src} alt="" fetchPriority={index === 0 ? 'high' : 'auto'} />)}</div><div className="hero-shade" /><div className="container hero-content">{children}</div>{images.length > 1 && <div className="hero-controls container"><div role="group" aria-label="Imágenes del hero">{images.map((image, index) => <button key={image.src} className="slide-dot" aria-label={`Mostrar imagen ${index + 1}: ${image.label}`} aria-pressed={selected === index} onClick={() => setActive(index)} />)}</div>{!reduced && <button className="carousel-pause" onClick={() => setPaused(!paused)} aria-label={paused ? 'Reanudar carrusel' : 'Pausar carrusel'}>{paused ? 'Reanudar' : 'Pausar'}</button>}</div>}</section>;
}
