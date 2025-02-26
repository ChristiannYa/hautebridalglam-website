import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import miscellaneous from '../assets/miscellaneous';
gsap.registerPlugin(TextPlugin);

const Home = () => {
  useGSAP(() => {
    // Original animations
    gsap.from('#text1', {
      x: '100vw',
      duration: 2,
      ease: 'power4.out',
      delay: 0.5,
    });

    // Apply the original slide-in animation first
    gsap.from('#text2', {
      x: '-100vw',
      duration: 2,
      ease: 'power4.out',
      delay: 0.5,
      onComplete: startTypewriterEffect, // Start typewriter after slide-in completes
    });

    function startTypewriterEffect() {
      const initialText = document.querySelector('#text2').textContent.trim();
      const words = [
        initialText,
        'Elegant Makeup',
        'Beautiful Makeover',
        'glowing spa facials',
      ];

      const typewriterTl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
      });

      // Add each word with typewriter effect
      words.forEach((word, index) => {
        // Don't clear the text for the first iteration (it's already there from the slide-in)
        if (index !== 0) {
          typewriterTl.to('#text2', {
            duration: 0.75,
            text: '',
            ease: 'none',
          });
        }

        // Skip typing animation for the first word if it's already displayed
        if (index !== 0 || word !== initialText) {
          typewriterTl.to('#text2', {
            duration: 1.5,
            text: word,
            ease: 'none',
          });
        }

        typewriterTl.to({}, { duration: 2 });
      });

      // Clear the last word before repeating
      typewriterTl.to('#text2', {
        duration: 0.75,
        text: '',
        ease: 'none',
      });
    }

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
          Enhancing your natural beauty on your special day
        </p>
      </div>
    </section>
  );
};

export default Home;
