import miscellaneous from '../assets/miscellaneous';

const About = () => {
  return (
    <div
      id="about"
      className="section bg-white content-overlay py-16 max-md:py-10"
    >
      <div className="screen1000">
        <h2 className="text-black text-center font-italiana text-5xl uppercase mb-8">
          About Me
        </h2>
        <div className="flexcol-center md:flex-row gap-x-12 max-md:gap-y-6">
          <div className="font-outfit text-xl text-justify font-light space-y-2">
            <p>
              I am an experienced and passionate hairstylist and makeup artist
              dedicated to enhancing your natural beauty for any occasion.
              Whether you&apos;re a bride on your special day, fashion model
              preparing for a shoot, or attending a glamorous event, my
              expertise will make you look flawles.
            </p>
            <p>
              I use high-quality, professional products to ensure your makeup
              looks stunning both in person and in photographs. My goal is to
              make you feel confident and beautiful throughout your wedding day.
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
    </div>
  );
};

export default About;
