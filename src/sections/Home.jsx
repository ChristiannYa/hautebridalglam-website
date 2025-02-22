function Home() {
  return (
    <section className="fixed screen overflow-hidden z-0">
      <video autoPlay loop muted className="background-video">
        <source src="/landing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-white text-center absolute-middle">
        <h1 className="font-outfit text-lg">Haute Bridal Glam by A.J.</h1>
        <h1 className="font-italiana text-5xl uppercase mb-4">
          Bridal Artistry
        </h1>
        <hr className="mb-4" />
        <p className="font-outfit font-light text-xl">
          Enhancing Your Natural Beauty on Your Special Day
        </p>
      </div>
    </section>
  );
}

export default Home