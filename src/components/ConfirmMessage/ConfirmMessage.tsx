import { Button } from '../Button/Button';

export interface ConfirmMessageProps {
  title?: string;
  subtitle?: string;
  returnHref?: string;
  returnLabel?: string;
}

export function ConfirmMessage({
  title = 'Gracias por enviarnos tu solicitud',
  subtitle = 'Te responderemos lo antes posible',
  returnHref = 'index.html',
  returnLabel = 'Regresar a Guarotech',
}: ConfirmMessageProps) {
  return (
    <section id="confirm" className="gradient-background-confirm">
      <div className="confirm">
        <h2 className="text-confirm">{title}</h2>
        <p className="text-confirm-p">{subtitle}</p>
        <Button variant="gradient" href={returnHref} innerClassName="btn-gradient-hero">
          {returnLabel}
        </Button>
      </div>
    </section>
  );
}
