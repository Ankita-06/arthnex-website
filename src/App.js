import { useState } from 'react';

// Styles
import './styles/global.css';

// Hooks
import useReveal from './hooks/useReveal';
import useCounter from './hooks/useCounter';

// Components
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Toast from './components/Toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Categories from './components/Categories';
import Work from './components/Work';
import Philosophy from './components/Philosophy';
import Stack from './components/Stack';
import Vision from './components/Vision';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [toast, setToast] = useState({ visible: false, message: '', success: true });

  // Activate scroll-reveal and counter animations
  useReveal();
  useCounter();

  const showToast = (message, success = true) => {
    setToast({ visible: true, message, success });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 3500);
  };

  return (
    <>
      <Loader />
      <Cursor />
      <Toast message={toast.message} visible={toast.visible} success={toast.success} />

      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Categories />
        <Work />
        <Philosophy />
        <Stack />
        <Vision />
        <Team />
        <Contact onToast={showToast} />
      </main>

      <Footer />
    </>
  );
}

export default App;
