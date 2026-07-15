import javascriptUrl from '../../assets/javascript.svg';
import cloudflareUrl from '../../assets/cloudflare.svg';
import digitaloceanUrl from '../../assets/digitalocean.svg';
import figmaUrl from '../../assets/Figma.svg';
import wordpressUrl from '../../assets/wordpress.svg';
import reactUrl from '../../assets/react.svg';

export interface TechLogo {
  src: string;
  alt: string;
}

export interface TechSliderProps {
  logos?: TechLogo[];
}

const defaultLogos: TechLogo[] = [
  { src: javascriptUrl, alt: 'React' },
  { src: cloudflareUrl, alt: 'Node.js' },
  { src: digitaloceanUrl, alt: 'JavaScript' },
  { src: figmaUrl, alt: 'Sass' },
  { src: wordpressUrl, alt: 'Figma' },
  { src: reactUrl, alt: 'Figma' },
];

export function TechSlider({ logos = defaultLogos }: TechSliderProps) {
  return (
    <section id="aliados" className="aliados">
      <div className="slider-container">
        <div className="slider-track">
          {logos.map((logo, index) => (
            <div className="slide" key={`${logo.src}-${index}`}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
