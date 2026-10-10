import { assetUrl } from '../../utils/assetUrl';
import { Link } from 'react-router-dom';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import IndustryCard from '../../components/IndustryCard/IndustryCard';
import PartnerLogo from '../../components/PartnerLogo/PartnerLogo';
import CTASection from '../../components/CTASection/CTASection';
import Icon from '../../components/Icon';
import { heroSlides, partners, accompaniment, companyHighlights } from '../../data/homeData';
import { industries } from '../../data/industriesData';
import { paths } from '../../routes/paths';
export default function Home() {
  return <main id="contenido">
    <HeroCarousel images={heroSlides} className="home-hero" ariaLabel="Cómo puede ayudarte XVR">
      {slide => <div className="hero-copy">
        <span className="hero-eyebrow">{slide.label}</span>
        <h1>{slide.title}</h1>
        <p>{slide.description}</p>
        <Link className="button" to={paths.contact}>Hablar con XVR <span aria-hidden="true">→</span></Link>
      </div>}
    </HeroCarousel>
    <section className="section partners-section"><div className="container">
      <span className="eyebrow">ECOSISTEMA TECNOLÓGICO</span><h2>Socios tecnológicos</h2>
      <p className="section-intro">Marcas de referencia para explorar opciones tecnológicas según cada aplicación.</p>
      <div className="partners-grid">{partners.map(partner => <PartnerLogo key={partner.name} {...partner}/>)}</div>
      <p className="partners-note">Listado provisional: relaciones comerciales y logotipos pendientes de confirmación.</p>
    </div></section>
    <section id="industrias" className="section industries-section"><div className="container">
      <span className="eyebrow">APLICACIONES INDUSTRIALES</span>
      <div className="section-heading"><h2>Soluciones por industria</h2></div>
      <div className="grid-four">{industries.map(item => <IndustryCard key={item.slug} {...item}/>)}</div>
    </div></section>
    <section id="nosotros" className="section about-section"><div className="container about-grid"><div><span className="eyebrow">QUIÉNES SOMOS</span><h2>Un partner tecnológico para la industria</h2><p className="section-intro">Conversa con XVR sobre identificación, unión, corte y preparación de superficies. Este prototipo presenta alternativas industriales; el alcance de los servicios y la cobertura se confirmarán para cada proyecto.</p><div className="about-highlights">{companyHighlights.map(item => <div key={item.title}><Icon name={item.icon}/><div><h3>{item.title}</h3><p>{item.description}</p></div></div>)}</div></div><div className="about-visual"><figure><img src={assetUrl("/images/branding/laboratorio-placeholder.svg")} alt="Ilustración provisional de una aplicación industrial" loading="lazy" width="600" height="320"/><figcaption><span>EVALUACIÓN DE APLICACIONES</span><p>Imagen ilustrativa · Instalaciones y capacidades por confirmar</p></figcaption></figure><div className="location-grid">{[['MÉXICO', 'Cobertura por confirmar'], ['EE. UU.', 'Cobertura por confirmar'], ['COSTA RICA', 'Cobertura por confirmar']].map(([country, label]) => <div key={country}><strong>{country}</strong><span>{label}</span></div>)}</div></div></div></section>
    <section className="section accompaniment-section"><div className="container"><span className="eyebrow">CONTINUIDAD DE OPERACIÓN</span><h2 className="title-limit">Acompañamiento durante todo el ciclo operativo</h2><p className="section-intro">Desde la definición de una aplicación hasta las necesidades de operación, estos temas ayudan a plantear una consulta. Los servicios y condiciones de atención están sujetos a confirmación con XVR.</p><div className="grid-four">{accompaniment.map(item => <article className="accompaniment-card" key={item.title}><span className="icon-tile"><Icon name={item.icon}/></span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
    <CTASection eyebrow="EVALUACIÓN TÉCNICA" title="¿Tu proceso láser está optimizado o solo está funcionando?" description="Comparte tu aplicación y los retos de producción para explorar alternativas acordes con tu proyecto." primaryButtonLabel="Hablar con un especialista" primaryButtonHref={paths.contact}/>
  </main>;
}
