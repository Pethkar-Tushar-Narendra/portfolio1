import './App.css';
import { useNavigate } from 'react';
import Header from './components/Headers/Header';
import Nav from './components/Nav/Nav';
import About from './components/about/About';
import Experiance from './components/experience/Experiance';
import Service from './components/services/Service';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  let count = 0;
  onclick = (count) => {
    if (count == 0) {
      // navigate('/#home');
    }
  };
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
