import styles from "./CookieModal.module.css";
import { paths } from "../paths";

const CookieModal = ({ URL, setCookies, rejectCookie }) => {


  const { cookies } = paths;
  return (
    <div>

    <div className={styles.blured}></div>
    <div className={styles.modal}>
      <button className={styles.btn_close} onClick={rejectCookie}>
        X
      </button>
      <img
        src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1618921299/cookies_ukj9do.png"
        alt="cookie photo"
        width="100px"
      />
      <h3 className={styles.title}>
        You are being redirected to: <span className="link">{URL}</span>
      </h3>
      <div>
        <p className={styles.text}>
          VisitMyPost uses cookies to customize content, analyze traffic and
          provide better experience. Click "Accept" to help us improve our
          services.
        </p>
        <p className={styles.text}>
          Read our
          <a href={cookies} target="_blank" className="link">{' '}
            cookie policy
            {' '}
          </a>
          for more information on the cookies we use and how to delete or block
          them.
        </p>
      </div>

      <button className={styles.btn_accept} onClick={() => setCookies()}>
        Accept
      </button>
    </div>
    </div>
  );
};

export default CookieModal;
