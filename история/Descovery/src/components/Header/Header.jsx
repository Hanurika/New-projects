import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div className="logo fontHed">
          <a href="">
            <span>Descovery</span>
          </a>
        </div>
        <ul className="header-menu fontHed">
          <a href="#east">
            <li>Information</li>
          </a>
          <a href="#bromo">
            <li>About us</li>
          </a>
          <a href="#culture">
            <li>Culture</li>
          </a>
        </ul>
        <div className="search">
          <img
            className="search-img"
            src="src/assets/search-logo.png"
            alt="search img"
          />
          <input type="search" placeholder="Search" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
