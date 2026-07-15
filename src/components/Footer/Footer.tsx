export interface FooterProps {
  logoSrc?: string;
  logoAlt?: string;
  homeHref?: string;
  phone?: string;
  email?: string;
  year?: number;
}

export function Footer({
  logoSrc = '/assets/Logo.png',
  logoAlt = 'Guarotech Future Logo',
  homeHref = '#',
  phone = '+58 412-5270850',
  email = 'guarotech@gmail.com',
  year = 2025,
}: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-image"></div>
      <div className="footer-logo-container">
        <a href={homeHref} className="footer-logo">
          <img src={logoSrc} width={200} alt={logoAlt} />
        </a>
        <div className="footer-logo-text">
          <p>Contáctanos</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
      </div>
      <div className="footer-content-container">
        <hr className="footer-hr" />
        <div className="footer-links">
          <a href="#">&copy;{year} Guarotech. Todos los derechos reservados</a>
        </div>
      </div>
    </footer>
  );
}
