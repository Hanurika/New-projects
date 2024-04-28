import "./culture.css";

const Culture = () => {
  return (
    <div className="culture">
      <section className="wrapper">
        <div>
          <img src="src/assets/image-culture.png" alt="mountains" />
        </div>
        <div className="wrapper__content">
          <div className="sub-text subfont">
            <div className="line-text"></div>
            <span>INDONESIAN CULTURE</span>
          </div>
          <h2 className="first-text">
            Our culture here is very friendly to people
          </h2>
          <p className="content-text">
            known for his politeness, manners and gentleness. This becomes a
            characteristic when they mingle with other tribes and become basic
            traits that are passed down by their ancestors.
          </p>
          <div className="wrapper__content__button">
            <button className="readBtn">read more</button>
            <img
              className="arrow-button"
              src="src/assets/arrow-right.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Culture;
