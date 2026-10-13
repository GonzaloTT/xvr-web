import { Link } from 'react-router-dom';
import CTASection from '../../components/CTASection/CTASection';
import { industryEditorial } from '../../data/industriesData';
import { paths } from '../../routes/paths';
import { assetUrl } from '../../utils/assetUrl';
import '../../styles/industries.css';

export default function IndustryDetail({ industry }) {
  return <main id="contenido" className="industry-detail-page">
    <section className="section">
      <div className="container">
        <Link className="text-link" to={paths.industries}>← Todas las industrias</Link>
        <header className="industry-detail-heading">
          <div>
            <span className="eyebrow">{industry.title}</span>
            <h1>{industry.headline}</h1>
            <p className="section-intro">{industry.introduction}</p>
            <Link className="button" to={paths.contact}>Hablar con XVR <span aria-hidden="true">→</span></Link>
          </div>
          <img src={assetUrl(industry.image)} alt={`Imagen provisional de ${industry.title}`} />
        </header>
        <p className="industry-editorial-note">{industryEditorial.notice}</p>
        <div className="industry-blocks">
          {industry.blocks.map(block => <section className="industry-block" key={block.id} aria-labelledby={block.id}>
            <h2 id={block.id}>{block.title}</h2>
            <div className="industry-topics">
              {block.items.map(item => <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{Array.isArray(item.text) ? item.text.map((part, index) =>
                  typeof part === 'string' ? part : <Link className="text-link industry-process-link" key={index} to={paths.solution(part.processSlug)}>{part.label}</Link>
                ) : item.text}</p>
              </div>)}
            </div>
          </section>)}
        </div>
      </div>
    </section>
    <CTASection title={industryEditorial.ctaTitle} primaryButtonLabel="Hablar con XVR" primaryButtonHref={paths.contact}/>
  </main>;
}
