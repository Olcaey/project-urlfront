import Footer from './Footer';
import styles from './Layout.module.css';
import PreLoader from './PreLoader';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.app_wrapper}>
        {children || <PreLoader />}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
