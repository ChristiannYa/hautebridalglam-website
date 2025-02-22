import weddingPackages from '../constants/weddingPackages';
import GradientBox from '../components/GradientBox';

const Packages = () => {
  return (
    <section className="py-16 max-md:py-10 bg-white content-overlay">
      <div className="screen1000">
        <div className="flexcol-center gap-8">
          <h2 className="text-black font-italiana text-5xl uppercase">
            Packages
          </h2>
          <div className="font-outfit text-xl text-justify font-light">
            <p>
              Your wedding day is one of the most memorable moments in your life
              and I will be dedicated to making you look and feel your best. The
              Luxury Wedding Makeup & Hair Packages have been specially tailored
              to create a luxurious and stress-free experience for brides and
              grooms, including Premium Skincare, Professional Makeup and
              Pristine Hair.
            </p>
          </div>
        </div>
      </div>

      <div className="screen1600 mt-16">
        <div className="grid300 gap-8">
          {weddingPackages.map((p) => (
            <div key={p.id} className="space-y-3">
              <GradientBox text={p.price} />
              <div
                className={`rounded-lg flex gap-6 overflow-hidden p-4 h-fit relative`}
                style={{
                  backgroundImage: p.bgImg ? `url(${p.bgImg})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* blur overlay div */}
                <div className="absolute inset-0 backdrop-blur-sm bg-white/10" />

                {/* wrapped content in relative div to stay above blur */}
                <div className="relative z-10 flex gap-6">
                  <div className="gap-2">
                    <h1
                      className={`bg-white/20 font-italiana font-thin text-4xl text-end sideways shadow-title tracking-[1rem] uppercase py-1 pb-5`}
                    >
                      {p.title}
                    </h1>
                  </div>

                  <ul className="text-center flexcol gap-4">
                    {p.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flexcol gap-1">
                        <p className="font-poiretOne text-2xl">
                          {service.title}
                        </p>
                        <hr />
                        {service.description && (
                          <span className="font-hostGrotesk font-light text-md text-black/60">
                            {service.description}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
