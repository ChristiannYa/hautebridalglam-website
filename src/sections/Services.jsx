import { useEffect, useState } from 'react';
import { services } from '../constants/services';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const updateContainerWidth = () => {
      document.querySelectorAll('.-content-wrapper').forEach((container) => {
        container.style.setProperty(
          '--container-width',
          `${container.offsetWidth}px`
        );
      });
    };

    // run when images are loaded
    window.addEventListener('load', updateContainerWidth);

    // run on resize
    window.addEventListener('resize', updateContainerWidth);

    // initial run
    updateContainerWidth();

    return () => {
      window.removeEventListener('load', updateContainerWidth);
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  return (
    <section
      id="services"
      className="services section glass-dark py-16 max-md:py-10"
    >
      <div className="screen1600">
        <h2 className="text-white text-center font-italiana text-5xl uppercase mb-8">
          Services
        </h2>
        <div className="-grid grid220">
          {services.map((service) => {
            const isActive = activeService === service.id ? 'active' : '';

            return (
              <div
                key={service.id}
                className="-item w-full flexcol-center gap-y-4 relative"
              >
                <div className="-content-wrapper fu ll">
                  <img
                    src={service.image}
                    alt=""
                    className={`full ${isActive}`}
                  />
                  <div className={`-description flexcol-center ${isActive}`}>
                    <p className="text-white font-poiretOne">
                      {service.description}
                    </p>
                    <span className="text-white font-hostGrotesk font-thin mt-2">
                      {service.price}
                    </span>
                  </div>
                </div>
                <div className="flexcol-center">
                  <h3 className="text-white font-outfit font-thin text-xl text-center">
                    {service.title}
                  </h3>
                  <button
                    className="-toggle-info-btn text-white font-outfit font-thin"
                    onClick={() =>
                      setActiveService(
                        activeService === service.id ? null : service.id
                      )
                    }
                    aria-label={`Toggle ${service.title} information`}
                  >
                    {activeService === service.id
                      ? 'Close'
                      : 'More Information'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button className="-book-btn flexrow-center relative">
          <a
            href="https://form.jotform.com/250497057223154"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </button>
      </div>
    </section>
  );
};

export default Services;
