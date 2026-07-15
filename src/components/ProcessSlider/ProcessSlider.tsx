import { useState } from 'react';
import { Button, type ButtonVariant } from '../Button/Button';
import planificacionUrl from '../../assets/planificacion.png';
import uxUrl from '../../assets/UX.png';
import uiUrl from '../../assets/UI.png';
import desarrolloUrl from '../../assets/desarrollo.png';
import mantenimientoUrl from '../../assets/mantenimiento.png';

export interface ProcessStep {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaVariant?: ButtonVariant;
}

export interface ProcessSliderProps {
  steps?: ProcessStep[];
  initialIndex?: number;
}

const defaultSteps: ProcessStep[] = [
  {
    title: '1. Planificación y estrategia',
    description:
      'Exploramos el propósito del sitio web, el público objetivo y los objetivos clave. A través de sesiones de estrategia e investigación, definimos el tipo de web necesario, su rol dentro del negocio y el contenido ideal. Esta etapa concluye con un brief que servirá como guía en todo el proyecto.',
    imageSrc: planificacionUrl,
    imageAlt: 'Producto destacado 1',
    ctaLabel: 'Solicita tu cotización',
    ctaHref: '#contacto',
    ctaVariant: 'gradient',
  },
  {
    title: '2. Estructura (UX)',
    description:
      'Diseñamos la experiencia del usuario definiendo la cantidad de páginas, su contenido y la forma en que se conectan entre sí. El resultado incluye el mapa del sitio y los wireframes, bocetos que muestran la organización y navegación, sin aspectos visuales aún.',
    imageSrc: uxUrl,
    imageAlt: 'Producto destacado 2',
    ctaLabel: 'Solicita tu cotización',
    ctaHref: '#contacto',
    ctaVariant: 'primary',
  },
  {
    title: '3. Diseño (UI)',
    description:
      'Aquí damos vida al sitio visualmente. Seleccionamos la paleta de colores, tipografía, imágenes e iconografía. El diseño refleja la identidad de la marca y guía al usuario a través de una narrativa visual coherente y atractiva.',
    imageSrc: uiUrl,
    imageAlt: 'Producto destacado 3',
    ctaLabel: 'Solicita tu cotización',
    ctaHref: '#contacto',
    ctaVariant: 'primary',
  },
  {
    title: '4. Desarrollo',
    description:
      'Transformamos los diseños en un sitio funcional. Usamos tecnologías modernas para construir una web rápida, segura, adaptable a todos los dispositivos y fácil de gestionar. Integramos herramientas necesarias y optimizamos la experiencia técnica del usuario.',
    imageSrc: desarrolloUrl,
    imageAlt: 'Producto destacado 4',
    ctaLabel: 'Solicita tu cotización',
    ctaHref: '#contacto',
    ctaVariant: 'primary',
  },
  {
    title: '5. Soporte y mantenimiento',
    description:
      'Nos aseguramos de que tu web siga funcionando de forma óptima tras su lanzamiento. Incluye actualizaciones, mejoras técnicas, soporte ante fallos y acompañamiento continuo para que tu sitio crezca contigo.',
    imageSrc: mantenimientoUrl,
    imageAlt: 'Producto destacado 5',
    ctaLabel: 'Solicita tu cotización',
    ctaHref: '#contacto',
    ctaVariant: 'primary',
  },
];

export function ProcessSlider({ steps = defaultSteps, initialIndex = 0 }: ProcessSliderProps) {
  const [current, setCurrent] = useState(initialIndex);

  const showSlide = (index: number) => setCurrent(index);
  const goNext = () => setCurrent((c) => (c + 1) % steps.length);
  const goPrev = () => setCurrent((c) => (c - 1 + steps.length) % steps.length);

  return (
    <section id="proceso" className="split-slider">
      <div className="split-slider-inner">
        {steps.map((step, i) => {
          const state = i === current ? 'active' : i < current ? 'prev' : 'next';
          return (
            <div className={`split-slide ${state}`} key={step.title}>
              <div className="split-image">
                <img src={step.imageSrc} alt={step.imageAlt} />
              </div>
              <div className="split-content">
                <h2>{step.title}</h2>
                <p>{step.description}</p>
                {step.ctaLabel && step.ctaHref && (
                  <Button
                    variant={step.ctaVariant ?? 'primary'}
                    href={step.ctaHref}
                    innerClassName={step.ctaVariant === 'gradient' ? 'btn-gradient-slider' : undefined}
                  >
                    {step.ctaLabel}
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="split-slider-indicators">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`indicator${i === current ? ' active' : ''}`}
            data-slide={i}
            onClick={() => showSlide(i)}
          />
        ))}
      </div>

      <div className="split-slider-controls">
        <button className="split-slider-btn prev" aria-label="Anterior" onClick={goPrev}>
          &#8593;
        </button>
        <button className="split-slider-btn next" aria-label="Siguiente" onClick={goNext}>
          &#8595;
        </button>
      </div>
    </section>
  );
}
