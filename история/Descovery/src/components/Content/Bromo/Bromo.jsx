import "./bromo.css";

const Bromo = () => {
  return (
    <div className="bromo">
      <div className="background-img"></div>
      <section className="bromo-content">
        <div className="content__sub-text subfont">
          <div className="line-text"></div>
          <span>BROMO</span>
          <div className="line-text"></div>
        </div>
        <div className="bromo__content">
          <h2 className="first-text txtcenter">
            Steady your steps, we will climb together!
          </h2>
        </div>
        <div>
          <p className="content-text txtcenter">
            You will be amazed if you take part in this sailing Komodo island
            tour package. So it is also mandatory for you, besides enjoying
            Komodo tourism on Komodo Island, you also have to taste the marine
            tourism. The beautiful waters of Komodo will make you meet many
            travelers from other countries.
          </p>
        </div>

        <div className="wrapper__content__button">
          <button className="readBtn">read more</button>
          <img
            className="arrow-button"
            src="src/assets/arrow-right.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Bromo;
