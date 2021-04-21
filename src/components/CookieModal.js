import styles from "./CookieModal.module.css";

const CookieModal = ({ website='twitter.com', setCookies, rejectCookie }) => {

  return (
    <div className={styles.modal}>
      <button 
        className={styles.btn_close}
        onClick={rejectCookie}
        >X</button>
      <img
        src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1618921299/cookies_ukj9do.png"
        alt="cookie photo"
        width="100px"
      />
	  <h3 className={styles.title}>You are being redirected to: {website} </h3>
	  <p className={styles.text}>VisitMyPost uses cookies to customize content, analyze traffic and provide better experience. Click "Accept" to help us improve our services.</p>
	  <p className={styles.text}>Read our <a href="" className={styles.link}> cookie policy</a> for more information on the cookies we use and how to delete or block them.</p>	
	  <button 
      className={styles.btn_accept}
      onClick={() => setCookies()}
    >Accept</button>
    </div>
  );
};

export default CookieModal;