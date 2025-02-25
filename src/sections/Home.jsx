import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import miscellaneous from '../assets/miscellaneous';

const Home = () => {
  useGSAP(() => {
    gsap.from('#text1', {
      x: '100vw',
      duration: 2,
      ease: 'power4.out',
      delay: 0.5,
    });

    gsap.from('#text2', {
      x: '-100vw',
      duration: 2,
      ease: 'power4.out',
      delay: 0.5,
    });

    gsap.from('#text3', {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      delay: 1.5,
    });

    gsap.from('.divider', {
      scaleX: 0,
      duration: 2,
      ease: 'power2.out',
      delay: 1.5,
    });

    gsap.from('#logo', {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      delay: 1.5,
    });
  }, []);

  return (
    <section id="home" className="fixed screen overflow-hidden z-0">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/landing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-white text-center max-md:w-[80%] absolute-middle">
        <div id="logo" className="overflow-hidden w-fit mb-2 mx-auto">
          <img src={miscellaneous.logo} alt="Logo" className="h-14 p-1" />
        </div>
        <h1 id="text1" className="font-outfit text-lg max-md:text-md">
          Haute Bridal Glam by A.J.
        </h1>
        <h1
          id="text2"
          className="font-italiana text-5xl max-md:text-3xl uppercase mb-4"
        >
          Bridal Artistry
        </h1>
        <hr className="mb-4 divider" />
        <p id="text3" className="font-outfit font-light text-xl max-md:text-lg">
          Enhancing Your Natural Beauty on Your Special Day
        </p>
      </div>
    </section>
  );
};

export default Home;
