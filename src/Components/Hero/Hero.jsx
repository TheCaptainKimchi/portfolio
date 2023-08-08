import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero" id="about">
      <h1 className="hero__title">Raul Calero</h1>
      <h1 className="hero__title-alt">Software Engineer</h1>
      <p className="hero__text">
        Passionate software engineer crafting elegant solutions to real-world
        challenges. Expert in diverse technologies and committed to continuous
        learning.
      </p>
      <a className="hero__button" href="https://github.com/TheCaptainKimchi">
        <button>Check Out My Github!</button>
      </a>
    </div>
  );
};

export default Hero;
