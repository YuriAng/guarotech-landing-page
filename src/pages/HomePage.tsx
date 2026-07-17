import { useEffect, useState } from 'react';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { ProcessSlider } from '../components/ProcessSlider/ProcessSlider';
import { Portfolio } from '../components/Portfolio/Portfolio';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Footer } from '../components/Footer/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton/WhatsAppButton';

// Sections tracked for the header's active-link highlight. "home" has no
// matching nav link on purpose: while it's the section in view, no link
// lights up (a nav-active reset zone before the user scrolls to Proceso).
const OBSERVED_SECTION_IDS = ['home', 'proceso', 'portafolio', 'contacto'];

export function HomePage() {
  const [activeHref, setActiveHref] = useState<string | undefined>(undefined);

  useEffect(() => {
    const sections = OBSERVED_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header activeHref={activeHref} />
      <Hero />
      <ProcessSlider />
      <Portfolio />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
