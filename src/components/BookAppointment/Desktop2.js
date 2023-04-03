import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop2.module.css";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onBookClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.desktop2}>
      <div className={styles.booking2}>
        <div className={styles.booking}>
          <div className={styles.image1}>
            <img
              className={styles.image1Child}
              alt=""
              src="/rectangle-1@3x.png"
            />
          </div>
          <b className={styles.bookYourAppointment}>Book your Appointment</b>
          <input
            className={styles.emailInput}
            type="email"
            placeholder="Email Address"
          />
          <input
            className={styles.name}
            type="text"
            placeholder="Full Name"
            maxLength={25}
            minLength={20}
          />
          <input
            className={styles.service}
            type="search"
            placeholder="Services you want to avail"
          />
          <input
            className={styles.salonName}
            type="search"
            placeholder="Salon Name"
            maxLength={15}
            minLength={10}
          />
          <input className={styles.date} type="text" placeholder="Date" />
          <input className={styles.phone} type="tel" placeholder="Phone No." />
          <button className={styles.book} onClick={onBookClick}>
            <b className={styles.book1}>{`Book `}</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
