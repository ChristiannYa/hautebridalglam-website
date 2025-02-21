import { useEffect } from 'react';
import { services } from '../constants/services';

function Services() {
  useEffect(() => {
    const updateContainerWidth = () => {
      document.querySelectorAll('.-content-wrapper').forEach((container) => {
        container.style.setProperty(
          '--container-width',
          `${container.offsetWidth}px`
        );
      });
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);

    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);

  return (
    <section className="services glass-dark">
      <h2 className="text-white text-center font-italiana text-5xl uppercase mb-8">
        Services
      </h2>
      <div className="-grid grid300">
        {services.map((service) => (
          <div key={service.id} className="-item w-full space-y-4">
            <div className="-content-wrapper full">
              <img src={service.image} alt="" className="full" />
              <div className="-description flexcol-center">
                <p className="text-white font-poiretOne">
                  {service.description}
                </p>
                <span className="text-white font-hostGrotesk font-thin mt-2">
                  {service.price}
                </span>
              </div>
            </div>
            <h3 className="text-white font-outfit font-thin text-xl text-center mb-4">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
