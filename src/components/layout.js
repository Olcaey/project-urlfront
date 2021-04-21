import Footer from './Footer';
import styles from './Layout.module.css';
import Logo from './Logo';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Logo large/>
      <div className={styles.app_wrapper}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
