import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__header">
        <div className="footer__logo">
          <h3>Descovery</h3>
        </div>
        <div className="footer__header-getstart">
          <span className="footer__header-text">Ready to explore?</span>
          <button className="footer__header-button">Get Started</button>
        </div>
      </div>
      <hr className="footer__line" />
      <div className="footer__content">
        <div className="footer__content-wrapper">
          <div className="footer__content-text">
            <h4 className="footer__content-text-title">
              Lets go on vacation,
              <br /> Make your day
            </h4>
            <div className="footer__content-email">
              <input
                className="footer__content-input"
                type="email"
                placeholder="Email address"
              />
              <button className="footer__email-button">
                <img src="src/assets/arrow.png" alt="" />
              </button>
            </div>
          </div>
          <div className="footer__content-social">
            <div>
              <ul>
                <span className="footer__content__social-text">Services</span>
                <a href="">
                  <li className="footer__content__social-link">
                    Email Marketing
                  </li>
                </a>
                <a href="">
                  <li className="footer__content__social-link">Campaigns</li>
                </a>
                <a href="">
                  <li className="footer__content__social-link">Branding</li>
                </a>
                <a href="">
                  <li className="footer__content__social-link">Offline</li>
                </a>
              </ul>
            </div>
            <div>
              <ul>
                <span className="footer__content__social-text">About</span>
                <a href="">
                  <li className="footer__content__social-link">Our Story</li>
                </a>
                <a href="">
                  <li className="footer__content__social-link">Benefits</li>
                </a>
                <a href="">
                  <li className="footer__content__social-link">Team</li>
                </a>
                <a href="">
                  <li className="footer__content__social-link">Careers</li>
                </a>
              </ul>
            </div>
            <div>
              <ul>
                <span className="footer__content__social-text">Help</span>
                <a href="">
                  <li className="footer__content__social-link">FAQs</li>
                </a>
                <a href="">
                  <li className="footer__content__social-link">Contact us</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__content-terms">
          <div className="footer__content-terms-text">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>

          <div className="footer__content-links">
            <a href="">
              <img src="src/assets/facebook.png" alt="facebook" />
            </a>
            <a href="">
              <img src="src/assets/twitter.png" alt="twitter" />
            </a>
            <a href="">
              <img src="src/assets/instagram.png" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
      <p className="author">Timur 2021 Discovery</p>
    </div>
  );
};

export default Footer;
