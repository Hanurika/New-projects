import "./header.css";
import React, { useState } from "react";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <a className="logo" href="">
            <img src="src/images/logo.svg" alt="TealuxE" />
          </a>
          <nav className="menu">
            <button
              className="menu__btn"
              type="button"
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className={`menu__list ${isOpen && "menu__list--active"}`}>
              <li className="menu__close">
                <button
                  className="menu__close-btn"
                  onClick={() => setOpen(false)}
                >
                  <img src="./src/images/close.svg" alt="" />
                </button>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Black
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Green
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  White
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Oolong
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Pu-erh
                </a>
              </li>
              <li className="mobile-nav">
                <ul className="mobile-nav__list">
                  <li className="mobile-nav__item">
                    <a className="mobile-nav__link" href="#">
                      contact us
                    </a>
                  </li>
                  <li className="mobile-nav__item">
                    <a className="mobile-nav__link" href="#">
                      our blog
                    </a>
                  </li>
                  <li className="mobile-nav__item">
                    <a className="mobile-nav__link" href="#">
                      Shipping and Delivery
                    </a>
                  </li>
                  <ul className="mobile-actions">
                    <li className="mobile-actions__item">
                      <a href="#" className="mobile__actions-link">
                        <img src="src/images/cart.svg" alt="" />
                      </a>
                    </li>
                    <li className="mobile-actions__item">
                      <a href="#" className="mobile__actions-link">
                        <img src="src/images/user.svg" alt="" />
                      </a>
                    </li>
                    <li className="mobile-actions__item">
                      <a href="#" className="mobile-actions__link">
                        <img src="src/images/search.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </ul>
              </li>
            </ul>
          </nav>
          <ul className="user-actions">
            <li className="user-actions__item">
              <a href="#" className="user__actions-link">
                <img src="src/images/cart.svg" alt="" />
              </a>
            </li>
            <li className="user-actions__item">
              <a href="#" className="user__actions-link">
                <img src="src/images/user.svg" alt="" />
              </a>
            </li>
            <li className="user-actions__item user-actions__item-search">
              <a href="#" className="user-actions__link">
                <img src="src/images/search.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
