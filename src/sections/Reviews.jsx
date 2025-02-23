import { useEffect, useState } from 'react';

import reviews from '../constants/reviews';

const Reviews = () => {
  const words = ['Client Love', 'Kind Words', 'Testimonials', 'Reviews'];
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);
        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }
  }, []);

  const togglePause = () => {
    setIsPaused(!isPaused);
    const scrollerInner = document.querySelector('.scroller__inner');
    if (scrollerInner) {
      scrollerInner.style.animationPlayState = isPaused ? 'running' : 'paused';
    }
  };

  return (
    <section className="min-h-screen glass-dark py-16 max-md:py-10 relative">
      <div className="scroller-container screen1600 flexcol-center text-white ">
        <div className="scroller" data-direction="left" data-speed="slow">
          <div className="tag-list scroller__inner flex items-center">
            {words.map((word, id) => (
              <div key={id} className="flex items-center">
                <h1 className="text-white text-center font-italiana text-6xl uppercase">
                  {word}
                </h1>
                <span className="ml-6 text-sm">🤍</span>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={togglePause}
          className="bg-white text-black text-xs font-outfit rounded-md mt-6 max-md:mt-2 mr-6 max-md:mr-2 px-2 py-1 absolute-top-right"
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>
      <hr className="text-white mt-16 max-md:mt-10" />
      <div className="pt-16 max-md:pt-10">
        <div className="screen1000 flexcol-center text-white gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col gap-4">
              <h2 className="font-poiretOne font-semibold text-2xl">{review.title}</h2>
              <p className="font-poiretOne text-lg">&ldquo;{review.content}&rdquo;</p>
              <span className="font-windSong text-xl">- {review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
