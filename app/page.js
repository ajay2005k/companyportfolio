import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Home',
  description: 'Blackline Studios - Designing products that move business forward. Strategy, Design, and Engineering services.',
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
