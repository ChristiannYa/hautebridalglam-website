import './App.css';

import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Home />
      <div className="relative">
        <div className="h-screen" /> {/* Spacer for first screen */}
        <div className="relative z-10">
          <Services />
          <About />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
