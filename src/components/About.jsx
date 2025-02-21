import miscellaneous from '../assets/miscellaneous';

function About() {
  return (
    <section className="py-16 bg-white content-overlay">
      <div className="screen1000">
        <h2 className="text-black text-center font-italiana text-5xl uppercase mb-8">
          About Me
        </h2>
        <div className='flexcol-center md:flex-row gap-x-12 max-md:gap-y-6'>
          <div className="font-outfit text-xl text-justify font-light space-y-2">
            <p>
              I am an experienced and passionate makeup artist dedicated to
              bringing out your beauty for any event. Whether you&apos;re a
              fashion model preparing for a shoot, a bride on your special day,
              or attending a glamorous event, my expertise ensures you&apos;ll
              look flawles.
            </p>
            <p>
              I use high-quality, professional products to ensure your makeup
              looks stunning both in person and in photographs. My goal is to
              make you feel relaxed and beautiful throughout your wedding day.
            </p>
            <p>
              From soft, elegant bridal makeup to bold, high-fashion editorial
              looks, I am ready to get you glammed. Book your session today!
            </p>
          </div>

          <div className="artist-photo rounded-xs overflow-hidden shrink-0">
            <img
              src={miscellaneous.artistPhoto}
              alt="Makeup Artist"
              className="full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
