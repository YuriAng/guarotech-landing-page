import type { CSSProperties } from 'react';
import { Button } from '../Button/Button';
import escuelaDeCaroUrl from '../../assets/portfolio-escuela-de-caro.webp';
import cosmetologaUrl from '../../assets/portfolio-cosmetologa-prototipo.webp';

export interface PortfolioProject {
  imageSrc: string;
  imageAlt: string;
  badgeLabel: string;
  /** "accent" (mint) for shipped work, "secondary" (cyan) for internal prototypes. */
  badgeVariant: 'accent' | 'secondary';
  title: string;
  description: string;
  /** Omit both to render the "no public link" note instead of a CTA. */
  ctaLabel?: string;
  ctaHref?: string;
  /** Shown only when there's no CTA, e.g. "Proyecto interno, sin enlace público". */
  note?: string;
}

export interface PortfolioProps {
  eyebrow?: string;
  heading?: string;
  /** Rendered after `heading`, gradient-clipped with --gradient-neon. */
  headingHighlight?: string;
  description?: string;
  projects?: PortfolioProject[];
}

const sectionStyle: CSSProperties = {
  background: 'var(--color-bg-2)',
  padding: '96px 24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '56px',
  position: 'relative',
};

const dividerStyle: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '1px',
  background: 'var(--gradient-neon)',
  opacity: 0.5,
};

const headerStyle: CSSProperties = {
  maxWidth: '640px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const eyebrowStyle: CSSProperties = {
  alignSelf: 'center',
  font: '600 11px var(--font-mono)',
  letterSpacing: '.08em',
  textTransform: 'uppercase',
  color: 'var(--color-accent)',
};

const headingStyle: CSSProperties = {
  margin: 0,
  fontFamily: 'var(--font-heading)',
  color: 'var(--color-text-primary)',
  fontSize: 'clamp(28px, 4vw, 40px)',
  fontWeight: 700,
};

const headingHighlightStyle: CSSProperties = {
  background: 'var(--gradient-neon)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
};

const descriptionStyle: CSSProperties = {
  margin: 0,
  color: 'var(--color-text-secondary)',
  fontSize: '17px',
  lineHeight: 1.6,
};

const gridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '32px',
  width: '100%',
  maxWidth: '1040px',
};

const cardStyle: CSSProperties = {
  background: 'var(--color-surface-1)',
  border: '1px solid var(--color-surface-2)',
  borderRadius: 'var(--radius)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  transition: 'var(--transition)',
};

const imageWrapStyle: CSSProperties = {
  width: '1004px',
  maxWidth: '100%',
  aspectRatio: '1004 / 445',
  margin: '0 auto',
  background: 'var(--color-surface-2)',
};

const imageStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  display: 'block',
};

const cardBodyStyle: CSSProperties = {
  padding: '28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  flex: 1,
};

const badgeBaseStyle: CSSProperties = {
  alignSelf: 'flex-start',
  font: '600 11px var(--font-mono)',
  letterSpacing: '.05em',
  textTransform: 'uppercase',
  padding: '4px 10px',
  borderRadius: '999px',
};

const badgeVariantStyles: Record<PortfolioProject['badgeVariant'], CSSProperties> = {
  accent: { color: 'var(--color-accent)', background: 'rgba(72, 233, 181, 0.1)' },
  secondary: { color: 'var(--color-secondary-1)', background: 'rgba(72, 233, 181, 0.08)' },
};

const cardTitleStyle: CSSProperties = {
  margin: 0,
  color: 'var(--color-text-primary)',
  fontFamily: 'var(--font-heading)',
  fontSize: '22px',
};

const cardCopyStyle: CSSProperties = {
  margin: 0,
  color: 'var(--color-text-secondary)',
  fontSize: '15px',
  lineHeight: 1.6,
  flex: 1,
};

const ctaWrapStyle: CSSProperties = {
  marginTop: '8px',
};

const noteStyle: CSSProperties = {
  margin: '8px 0 0',
  color: 'var(--color-text-muted)',
  fontSize: '13px',
  fontStyle: 'italic',
};

const defaultProjects: PortfolioProject[] = [
  {
    imageSrc: escuelaDeCaroUrl,
    imageAlt: 'Screenshot de laescueladecaro.com',
    badgeLabel: 'Sitio en producción',
    badgeVariant: 'accent',
    title: 'La Escuela de Caro',
    description:
      'Plataforma educativa enfocada en pastelería: enseña técnicas y recetas, además de estructuras de costos y otros temas de gestión para quienes quieren emprender en el área. En producción en laescueladecaro.com.',
    ctaLabel: 'Ver sitio',
    ctaHref: 'https://laescueladecaro.com/',
  },
  {
    imageSrc: cosmetologaUrl,
    imageAlt: 'Screenshot del prototipo de agenda para cosmetóloga',
    badgeLabel: 'Prototipo',
    badgeVariant: 'secondary',
    title: 'Diseño exploratorio para cosmetóloga',
    description:
      'Prototipo para una cosmetóloga que buscaba centralizar toda su agenda de citas en una sola página web.',
    note: 'Proyecto interno, sin enlace público',
  },
];

export function Portfolio({
  eyebrow = 'Trabajo realizado',
  heading = 'Nuestro',
  headingHighlight = 'Portafolio',
  description = 'Proyectos que hemos llevado a producción y prototipos con los que seguimos explorando nuevas ideas.',
  projects = defaultProjects,
}: PortfolioProps) {
  return (
    <section id="portafolio" style={sectionStyle}>
      <div style={dividerStyle} />
      <div style={headerStyle}>
        <span style={eyebrowStyle}>{eyebrow}</span>
        <h2 style={headingStyle}>
          {heading} <span style={headingHighlightStyle}>{headingHighlight}</span>
        </h2>
        <p style={descriptionStyle}>{description}</p>
      </div>

      <div style={gridStyle}>
        {projects.map((project) => (
          <div style={cardStyle} key={project.title}>
            <div style={imageWrapStyle}>
              <img src={project.imageSrc} alt={project.imageAlt} style={imageStyle} />
            </div>
            <div style={cardBodyStyle}>
              <span style={{ ...badgeBaseStyle, ...badgeVariantStyles[project.badgeVariant] }}>
                {project.badgeLabel}
              </span>
              <h3 style={cardTitleStyle}>{project.title}</h3>
              <p style={cardCopyStyle}>{project.description}</p>
              {project.ctaLabel && project.ctaHref && (
                <div style={ctaWrapStyle}>
                  <Button variant="secondary" href={project.ctaHref}>
                    {project.ctaLabel}
                  </Button>
                </div>
              )}
              {project.note && <p style={noteStyle}>{project.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
