import { Button } from '../Button/Button';
import { TechSlider, type TechLogo } from '../TechSlider/TechSlider';
import heroImgUrl from '../../assets/hero-img.webp';

export interface HeroProps {
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  techLogos?: TechLogo[];
}

export function Hero({
  titlePrefix = 'Transformamos tu visión en una',
  titleHighlight = 'realidad digital',
  subtitle = 'Desarrollamos páginas web profesionales, modernas y optimizadas que impulsan tu negocio en el mundo digital',
  primaryCtaLabel = 'Solicita tu cotización',
  primaryCtaHref = '#contacto',
  secondaryCtaLabel = 'Ver Portafolio',
  secondaryCtaHref = '#portafolio',
  imageSrc = heroImgUrl,
  imageAlt = 'Futuristic Web Design',
  techLogos,
}: HeroProps) {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-content-container">
            <h1 className="hero-title">
              {titlePrefix}
              <br />
              <span className="gradient-text">{titleHighlight}</span>
            </h1>
            <p className="hero-subtitle">{subtitle}</p>
          </div>
          <div className="hero-cta">
            <Button variant="primary" href={primaryCtaHref}>
              {primaryCtaLabel}
            </Button>
            <Button variant="gradient" href={secondaryCtaHref} innerClassName="btn-gradient-hero">
              {secondaryCtaLabel}
            </Button>
          </div>
        </div>
        <div className="hero-image">
          <img src={imageSrc} width={500} alt={imageAlt} />
        </div>
      </div>
      <TechSlider logos={techLogos} />
    </section>
  );
}
