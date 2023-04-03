import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop1.module.css";

const Desktop1 = () => {
  const navigate = useNavigate();

  const onForgetPasswordClick = useCallback(() => {
    navigate("/ForgetPassword");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGoogleClick = useCallback(() => {
    window.open("http://www.google.com");
  }, []);

  const onFacebookClick = useCallback(() => {
    window.open("http://www.facebook.com");
  }, []);

  const onAppleClick = useCallback(() => {
    window.open("http://www.apple.com");
  }, []);

  const onTwitterClick = useCallback(() => {
    window.open("http://www.twitter.com");
  }, []);

  return (
    <div className={styles.desktop1}>
      <div className={styles.login2}>
        <div className={styles.login2Child} />
        <div className={styles.login}>
          <div className={styles.image}>
            <img
              className={styles.imageChild}
              alt=""
              src="/rectangle-1@2x.png"
            />
          </div>
          <b className={styles.login1}>Login</b>
          <div className={styles.pleaseEnterYour}>
            Please enter your login details to sign in
          </div>
          <input
            className={styles.emailInput}
            type="text"
            placeholder="Email Address"
            maxLength={50}
          />
          <input
            className={styles.passwordInput}
            type="password"
            placeholder="Password"
            maxLength={10}
            minLength={8}
            required
          />
          <button className={styles.loginButton} onClick={onLoginClick}>
            <b className={styles.login3}>Login</b>
          </button>
          <div className={styles.dontHaveAn}>{`Don’t have an account? `}</div>
          <button className={styles.signUp}>Sign Up</button>
          <div className={styles.dontFoget}>
            <div className={styles.keepMeLogged}>{`Keep me logged in `}</div>
            <button
              className={styles.forgetPassword}
              onClick={onForgetPasswordClick}
            >{`Forget Password? `}</button>
            <input className={styles.tick} type="checkbox" />
          </div>
          <div className={styles.continue}>
            <div className={styles.orContinueWith}>{`Or continue with `}</div>
            <img className={styles.continueChild} alt="" src="/line-1.svg" />
            <img className={styles.continueItem} alt="" src="/line-2.svg" />
          </div>
          <div className={styles.icons}>
            <button className={styles.google} onClick={onGoogleClick}>
              <img className={styles.googleChild} alt="" src="/group-1.svg" />
            </button>
            <button className={styles.facebook} onClick={onFacebookClick}>
              <img className={styles.facebookChild} alt="" src="/group-2.svg" />
            </button>
            <button className={styles.apple} onClick={onAppleClick}>
              <img className={styles.googleChild} alt="" src="/group-3.svg" />
            </button>
            <button className={styles.twitter} onClick={onTwitterClick}>
              <img className={styles.googleChild} alt="" src="/group-4.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
