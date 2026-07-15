import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { ProcessSlider } from '../components/ProcessSlider/ProcessSlider';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Footer } from '../components/Footer/Footer';

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <ProcessSlider />
      <ContactForm />
      <Footer />
    </>
  );
}
