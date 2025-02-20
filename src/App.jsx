import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  return (
    <div className="bg-[#1c1c1c] wh-screen p-4">
      <div className="wh-full relative">
        <div className="absolute-middle flexcol-center gap-y-8">
          <h1 className="text-4xl text-white font-medium">React + Vite</h1>
          <div className="flexrow-center gap-x-4">
            <img
              src={reactLogo}
              className="w-16 h-16 animate-spin"
              alt="React logo"
            />
            <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
          </div>
        </div>

        <div className="absolute-top-left bg-white/20 p-4 rounded-lg">
          <p className="text-white">Top Left</p>
        </div>

        <div className="absolute-top-right bg-white/20 p-4 rounded-lg">
          <p className="text-white">Top Right</p>
        </div>

        <div className="absolute-bottom-left h-32 w-48 bg-white/10 rounded-lg overflow-auto scrollbar-hide">
          <div className="flexcol gap-y-2 p-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-white/20 text-white p-2 rounded">
                Item {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
