import './App.css';
import './styles/carousel.scss';
import './styles/services.scss';
import './styles/customBox.scss';

import Home from './sections/Home';
import Services from './sections/Services';
import About from './sections/About';
import Contact from './sections/Contact';
import Packages from './sections/Packages';
import Reviews from './sections/Reviews';

const App = () => {
  return (
    <>
      <Home />
      <div className="relative">
        <div className="h-screen" /> {/* Spacer for first screen */}
        <div className="relative z-10">
          <About />
          <Services />
          <Packages />
          <Reviews />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
