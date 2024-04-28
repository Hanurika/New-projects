import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__inner">
          <h1 className="hero__title">
            A cup of tea is a moment of calm in the chaos of life
          </h1>
          <p className="hero__text">
            Wide selection of high-quality teas from all over the world,
            carefully curated by tea experts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
