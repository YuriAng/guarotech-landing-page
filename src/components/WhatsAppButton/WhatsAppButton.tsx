export interface WhatsAppButtonProps {
  /** Phone number in international format, no "+" or separators, e.g. "584125270850". */
  phone?: string;
  /** Prefilled message, sent unencoded (the component encodes it). */
  message?: string;
}

export function WhatsAppButton({
  phone = '584125270850',
  message = 'Hola Guarotech, quiero cotizar un proyecto',
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      title="Escríbenos por WhatsApp"
      className="whatsapp-fab"
    >
      <svg viewBox="0 0 32 32" width="32" height="32" fill="#fff" aria-hidden="true">
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.66 4.523 1.803 6.383L3 29l7.836-2.556A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.6c-1.94 0-3.75-.57-5.27-1.55l-.377-.23-4.65 1.516 1.53-4.53-.246-.39A9.55 9.55 0 0 1 5.4 15c0-5.85 4.76-10.6 10.604-10.6C21.85 4.4 26.6 9.15 26.6 15S21.85 24.6 16.004 24.6Zm5.8-7.94c-.317-.16-1.876-.926-2.167-1.032-.29-.106-.502-.16-.714.16-.21.318-.818 1.032-1.003 1.244-.185.212-.37.238-.687.08-.317-.16-1.34-.494-2.552-1.573-.943-.84-1.58-1.878-1.765-2.196-.185-.318-.02-.49.14-.65.144-.143.317-.37.476-.556.16-.185.212-.318.318-.53.106-.212.053-.397-.026-.556-.08-.16-.714-1.72-.978-2.356-.257-.617-.518-.534-.714-.544-.185-.01-.397-.012-.608-.012-.212 0-.556.08-.847.397-.29.318-1.11 1.085-1.11 2.646 0 1.56 1.137 3.068 1.296 3.28.16.212 2.24 3.42 5.43 4.797.759.328 1.352.524 1.814.67.762.242 1.456.208 2.005.126.612-.091 1.876-.767 2.14-1.508.265-.74.265-1.375.185-1.508-.08-.132-.29-.212-.608-.37Z" />
      </svg>
    </a>
  );
}
