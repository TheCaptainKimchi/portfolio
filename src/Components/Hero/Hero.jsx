import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__title">Raul Calero</h1>
      <h1 className="hero__title-alt">Software Engineer</h1>
      <p className="hero__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iste
        quae facilis neque quod, laborum voluptas praesentium officiis eaque ut!
      </p>
      <a className="hero__button" href="/">
        <button>Check Out My Github!</button>
      </a>
    </div>
  );
};

export default Hero;
