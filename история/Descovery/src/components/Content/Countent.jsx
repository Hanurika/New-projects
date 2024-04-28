import "./content.css";

const Countent = () => {
  return (
    <div className="content">
      <div className="sub-contact">
        <span>Follow</span>
        <a href="">
          <img src="src/assets/Facebook.png" alt="facebook" />
        </a>
        <a href="">
          <img src="src/assets/instagram.png" alt="instagram" />
        </a>
        <a href="">
          <img src="src/assets/twitter.png" alt="twitter" />
        </a>
      </div>
      <div className="content__main-text">
        <div className="content__sub-text subfont">
          <div className="line-text"></div>
          <span>explore the Nature Beauty</span>
        </div>
        <div>
          <h1 className="first-text">Discover</h1>
          <h1 className="second-text">Wonderful Indonesia</h1>
        </div>
        <div className="scroll-down">
          <span>Scroll down</span>
          <img src="src/assets/arrow-down.png" alt="" />
        </div>
      </div>
      <div className="shadow-box"></div>
    </div>
  );
};

export default Countent;
