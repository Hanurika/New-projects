import "./east.css";

const East = () => {
  return (
    <div className="east">
      <section className="wrapper">
        <div>
          <img src="src/assets/image-east.png" alt="mountains" />
        </div>
        <div className="wrapper__content">
          <div className="sub-text subfont">
            <div className="line-text"></div>
            <span>EAST NUSA TENGGARA</span>
          </div>
          <h2 className="first-text">Have you enjoyed your holiday?</h2>
          <p className="content-text">
            You will be amazed if you take part in this sailing Komodo island
            tour package. So it is also mandatory for you, besides enjoying
            Komodo tourism on Komodo Island, you also have to taste the marine
            tourism. The beautiful waters of Komodo will make you meet many
            travelers from other countries.
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

export default East;
