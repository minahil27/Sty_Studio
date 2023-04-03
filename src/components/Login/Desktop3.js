import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop3.module.css";

const Desktop3 = () => {
  const navigate = useNavigate();

  const onBookClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.desktop3}>
      <div className={styles.desktop3Child} />
      <b className={styles.changePassword}>Change Password</b>
      <input
        className={styles.password}
        type="password"
        placeholder="Password"
        maxLength={10}
        minLength={8}
      />
      <input
        className={styles.confirm}
        type="password"
        placeholder="Confirm Password"
        maxLength={10}
        minLength={8}
      />
      <button className={styles.book} onClick={onBookClick}>
        <b className={styles.setPassword}>Set Password</b>
      </button>
    </div>
  );
};

export default Desktop3;
