import type { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'gradient' | 'secondary' | 'ghost';

export interface ButtonProps {
  /** Visual style, matches the .btn-* classes in styles.css */
  variant: ButtonVariant;
  children: ReactNode;
  /** Renders as <a href>. Omit to render as <button>. */
  href?: string;
  /** Only used when href is omitted. */
  type?: 'button' | 'submit';
  /** Associates a <button> with a form living elsewhere in the DOM (id reference). */
  form?: string;
  /**
   * Only relevant for variant="gradient": className applied to the inner span
   * (e.g. "btn-gradient-slider", "btn-gradient-hero", "btn-gradient-formulario"),
   * matching the per-context styling in styles.css.
   */
  innerClassName?: string;
  /** Extra content rendered after the label, e.g. the hidden loader icon on the contact form submit button. */
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({
  variant,
  children,
  href,
  type = 'button',
  form,
  innerClassName,
  icon,
  onClick,
  className,
}: ButtonProps) {
  const classes = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ');

  const content =
    variant === 'gradient' ? (
      <>
        <span className={innerClassName}>{children}</span>
        {icon}
      </>
    ) : (
      children
    );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} form={form} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
