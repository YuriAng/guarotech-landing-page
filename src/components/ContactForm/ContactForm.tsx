import { useEffect, useRef } from 'react';
import type { CSSProperties, FormEvent } from 'react';
import { Button } from '../Button/Button';

export interface ContactFormProps {
  actionUrl?: string;
  recaptchaSiteKey?: string;
}

const DEFAULT_ACTION_URL =
  'https://6c395740.sibforms.com/serve/MUIFAJ9VEhzXiYtzT_ADM-cXEtOItzo2nAxTC3b0EtQUZKdUKvsznArjoSLbu1UsnysrGctK2W4fU3npYpvMRB0t6mxREIdcHDqn4bIP1L90cNG7zuz3_OcfdplT1EfYVAu0GbUfwUu6XHAU_KLk5g6TvDjZBvAVoC-FH3BsmKEx5KtIVX9wTFv2iZpAqkjJtzcKSm8hY4mheZV-';
const DEFAULT_RECAPTCHA_SITE_KEY = '6LdK1tIrAAAAANfXjia6f8yy09aExMM7RyoHzU3I';

const fieldTopPad: CSSProperties = { paddingTop: '8px' };

const errorLabelStyle: CSSProperties = {
  fontSize: '14px',
  textAlign: 'left',
  fontFamily: 'Helvetica, sans-serif',
  color: '#ff4949',
};

const successPanelStyle: CSSProperties = {
  display: 'none',
  fontSize: '14px',
  textAlign: 'left',
  fontFamily: 'Helvetica, sans-serif',
  color: '#085229',
  backgroundColor: '#e7faf0',
  borderRadius: '3px',
  borderColor: '#13ce66',
  maxWidth: '540px',
};

const errorPanelStyle: CSSProperties = {
  display: 'none',
  fontSize: '14px',
  textAlign: 'left',
  fontFamily: 'Helvetica, sans-serif',
  color: '#661d1d',
  backgroundColor: '#ffeded',
  borderRadius: '3px',
  borderColor: '#ff4949',
  maxWidth: '540px',
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function hasEnoughDigits(value: string, min = 7): boolean {
  return value.replace(/[^0-9]/g, '').length >= min;
}

function injectScriptOnce(src: string, attrs: Record<string, string> = {}) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const script = document.createElement('script');
  script.src = src;
  Object.entries(attrs).forEach(([key, value]) => script.setAttribute(key, value));
  document.body.appendChild(script);
}

export function ContactForm({
  actionUrl = DEFAULT_ACTION_URL,
  recaptchaSiteKey = DEFAULT_RECAPTCHA_SITE_KEY,
}: ContactFormProps) {
  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;
    w.REQUIRED_CODE_ERROR_MESSAGE = 'Elija un código de país';
    w.LOCALE = 'es';
    w.EMAIL_INVALID_MESSAGE = w.SMS_INVALID_MESSAGE =
      'La información que ha proporcionado no es válida. Compruebe el formato del campo e inténtelo de nuevo.';
    w.REQUIRED_ERROR_MESSAGE = 'Este campo no puede quedarse vacío. ';
    w.GENERIC_INVALID_MESSAGE =
      'La información que ha proporcionado no es válida. Compruebe el formato del campo e inténtelo de nuevo.';
    w.translation = {
      common: {
        selectedList: '{quantity} lista seleccionada',
        selectedLists: '{quantity} listas seleccionadas',
        selectedOption: '{quantity} seleccionado',
        selectedOptions: '{quantity} seleccionados',
      },
    };
    w.AUTOHIDE = Boolean(0);
    w.handleCaptchaResponse = () => {
      const event = new Event('captchaChange');
      document.getElementById('sib-captcha')?.dispatchEvent(event);
    };

    injectScriptOnce('https://sibforms.com/forms/end-form/build/main.js', { defer: 'true' });
    injectScriptOnce('https://www.google.com/recaptcha/api.js?hl=es');
  }, []);

  const nombreRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const telefonoRef = useRef<HTMLInputElement>(null);

  // Required = Nombre, Email (valid format), Teléfono (>=7 digits). Blocks
  // the native POST to Sendinblue on failure; on success the existing flow
  // (external POST + redirect to the confirmation page) is unchanged.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const invalidColor = '#ff4d4f';
    let valid = true;

    const nombre = nombreRef.current;
    if (nombre) {
      const ok = Boolean(nombre.value.trim());
      nombre.style.borderColor = ok ? '' : invalidColor;
      valid = valid && ok;
    }

    const email = emailRef.current;
    if (email) {
      const ok = Boolean(email.value.trim()) && isValidEmail(email.value);
      email.style.borderColor = ok ? '' : invalidColor;
      valid = valid && ok;
    }

    const telefono = telefonoRef.current;
    if (telefono) {
      const ok = hasEnoughDigits(telefono.value);
      telefono.style.borderColor = ok ? '' : invalidColor;
      valid = valid && ok;
    }

    if (!valid) {
      event.preventDefault();
    }
  };

  return (
    <section id="contacto" className="gradient-background">
      <div className="contacto" id="sib-form-container">
        <h2>
          Solicita una <span className="contacto-span">Cotización</span>
        </h2>
        <form
          className="formulario-contacto"
          id="sib-form"
          method="POST"
          action={actionUrl}
          data-type="subscription"
          onSubmit={handleSubmit}
        >
          <div className="formulario-label sib-input sib-form-block">
            <div className="form__entry entry_block entry-label">
              <label>Nombre y apellido</label>
              <div className="entry__field" style={fieldTopPad}>
                <input
                  ref={nombreRef}
                  className="input"
                  type="text"
                  maxLength={128}
                  id="NOMBRE"
                  name="NOMBRE"
                  autoComplete="off"
                  placeholder="Carlos Rodríguez"
                  data-required="true"
                  required
                />
              </div>
              <label className="entry__error entry__error--primary" style={errorLabelStyle}></label>
            </div>
          </div>

          <div className="formulario-input">
            <div className="formulario-label sib-input sib-form-block">
              <div className="form__entry entry_block entry-label">
                <label>Correo Electronico</label>
                <div className="entry__field" style={fieldTopPad}>
                  <input
                    ref={emailRef}
                    className="input"
                    type="text"
                    id="EMAIL"
                    name="EMAIL"
                    autoComplete="off"
                    placeholder="carlos.rodriguez@empresa.com"
                    data-required="true"
                    required
                  />
                </div>
                <label className="entry__error entry__error--primary" style={errorLabelStyle}></label>
              </div>
            </div>

            <div className="formulario-label sib-input sib-form-block">
              <div className="form__entry entry_block entry-label">
                <label>Número de telefono</label>
                <div className="entry__field" style={fieldTopPad}>
                  <input
                    ref={telefonoRef}
                    className="input"
                    type="text"
                    maxLength={64}
                    id="TELEFONO"
                    name="TELEFONO"
                    autoComplete="off"
                    placeholder="+58 424-1234567"
                    data-required="true"
                    required
                  />
                </div>
                <label className="entry__error entry__error--primary" style={errorLabelStyle}></label>
              </div>
            </div>
          </div>

          <div className="formulario-label sib-input sib-form-block">
            <div className="form__entry entry_block entry-label">
              <label>Cuéntanos sobre tu proyecto</label>
              <div className="form__label-row">
                <div className="entry__field" style={fieldTopPad}>
                  <textarea
                    className="input"
                    id="DESCRIPCION"
                    name="DESCRIPCION"
                    autoComplete="off"
                    placeholder="Ej: necesito un e-commerce para vender productos artesanales, con carrito de compras y pagos en línea."
                    rows={5}
                    data-required="true"
                    required
                  ></textarea>
                </div>
              </div>
              <label className="entry__error entry__error--primary" style={errorLabelStyle}></label>
            </div>
          </div>

          <div className="sib-captcha sib-form-block formulario-recaptcha">
            <div className="form__entry entry_block">
              <div className="form__label-row">
                <div
                  className="g-recaptcha sib-visible-recaptcha"
                  id="sib-captcha"
                  data-sitekey={recaptchaSiteKey}
                  data-callback="handleCaptchaResponse"
                  style={{ direction: 'ltr' }}
                ></div>
              </div>
              <label className="entry__error entry__error--primary" style={errorLabelStyle}></label>
            </div>
          </div>

          <Button
            variant="gradient"
            type="submit"
            form="sib-form"
            innerClassName="btn-gradient-formulario"
            icon={
              <svg
                width="1"
                height="1"
                visibility="hidden"
                className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                viewBox="0 0 512 512"
              >
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
              </svg>
            }
          >
            Cotizar
          </Button>

          <input type="hidden" name="email_address_check" value="" className="input--hidden" readOnly />
          <input type="hidden" name="locale" value="es" readOnly />
          <input type="hidden" name="html_type" value="simple" readOnly />

          <div id="success-message" className="sib-form-message-panel" style={successPanelStyle}>
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
              </svg>
              <span className="sib-form-message-panel__inner-text">Solicitud de cotización enviada exitosamente</span>
            </div>
          </div>

          <div id="error-message" className="sib-form-message-panel" style={errorPanelStyle}>
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
              </svg>
              <span className="sib-form-message-panel__inner-text">No hemos podido enviar su solicitud de cotización</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
