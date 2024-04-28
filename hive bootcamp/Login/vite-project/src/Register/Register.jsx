import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <p className="login-form__title">Stax Food Admin Login</p>
      <form className="login-form" autoComplete="email">
        <span className="login-form__info">
          Please fill in your unique admin login details below
        </span>
        <div className="login-form__login">
          <span>Email address</span>
          <input className="login-form__email " type="text" name="email" />
        </div>
        <div className="login-form__password">
          <span className="login-form__password-text">Password</span>
          <input
            checked={true}
            className="login-form__password-input"
            type="password"
            name="password"
          />
          <div className="login-form__eye">
            <svg
              className="login-form__eye-svg"
              width="22.000000"
              height="19.000000"
              viewBox="0 0 22 19"
              fill="none"
            >
              <path
                id="Vector"
                d="M11 3C14.79 3 18.17 5.13 19.82 8.5C19.23 9.72 18.4 10.77 17.41 11.62L18.82 13.03C20.2 11.8 21.31 10.26 22 8.5C20.27 4.11 16 1 11 1C9.73 1 8.51 1.2 7.35 1.57L9.01 3.22C9.66 3.09 10.32 3 11 3ZM9.92 4.14L12 6.21C12.57 6.46 13.03 6.92 13.28 7.49L15.35 9.56C15.43 9.22 15.49 8.86 15.49 8.49C15.5 6.01 13.48 4 11 4C10.63 4 10.28 4.05 9.92 4.14ZM1.01 0.87L3.69 3.55C2.06 4.83 0.76 6.53 0 8.5C1.73 12.89 6 16 11 16C12.52 16 13.98 15.71 15.32 15.18L18.74 18.6L20.15 17.19L2.42 -0.55L1.01 0.87ZM8.51 8.37L11.12 10.98C11.08 10.99 11.04 11 11 11C9.62 11 8.5 9.88 8.5 8.5C8.5 8.45 8.51 8.42 8.51 8.37ZM5.1 4.97L6.85 6.72C6.63 7.27 6.5 7.87 6.5 8.5C6.5 10.98 8.51 13 11 13C11.63 13 12.23 12.87 12.77 12.64L13.75 13.62C12.87 13.86 11.95 14 11 14C7.2 14 3.82 11.87 2.17 8.5C2.88 7.07 3.89 5.89 5.1 4.97Z"
                fill="#999999"
                opacity="1.000000"
              />
            </svg>
          </div>
        </div>
        <a className="login-form__forgot" href="#">
          <span>forgot password</span>
        </a>
        <button className="login-form__button">Login</button>
      </form>
      <div className="background-img"></div>
      <div className="background-img-eclipse"></div>
      <div className="background-img-item"></div>
    </div>
  );
};

export default Register;
