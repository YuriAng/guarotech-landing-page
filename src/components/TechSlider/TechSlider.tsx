export interface TechLogo {
  src: string;
  alt: string;
}

export interface TechSliderProps {
  logos?: TechLogo[];
}

const defaultLogos: TechLogo[] = [
  { src: '/assets/javascript.svg', alt: 'React' },
  { src: '/assets/cloudflare.svg', alt: 'Node.js' },
  { src: '/assets/digitalocean.svg', alt: 'JavaScript' },
  { src: '/assets/Figma.svg', alt: 'Sass' },
  { src: '/assets/wordpress.svg', alt: 'Figma' },
  { src: '/assets/react.svg', alt: 'Figma' },
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
