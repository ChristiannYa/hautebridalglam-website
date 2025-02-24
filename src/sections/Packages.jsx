import weddingPackages from '../constants/weddingPackages';
import GradientBox from '../components/GradientBox';

const Packages = () => {
  const VARIANT_MAP = {
    'For the Bride': 'dark',
    'For The Groom': 'dark',
    'Luxury Add-Ons': 'accent',
  };

  return (
    <section
      id="weddingPackages"
      className="section bg-white content-overlay py-16 max-md:py-10"
    >
      <div className="screen1000">
        <div className="flexcol-center gap-8">
          <h2 className="text-black font-italiana text-5xl text-center uppercase">
            Wedding Packages
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

      <div className="screen1600">
        <div className="grid300 gap-x-8 gap-y-10">
          {weddingPackages.map((p) => (
            <div key={p.id} className="space-y-3">
              <GradientBox
                text={p.title}
                variant={VARIANT_MAP[p.id] || 'dark'}
              />
              <div
                className={`rounded-lg flex gap-6 overflow-hidden p-4 h-fit relative`}
              >
                {/* wrapped content in relative div to stay above blur */}
                <div className="relative z-10 flex gap-6">
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
              <div className="flexrow-center gap-x-1">
                <p className="font-poiretOne font-bold">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
