import Logo from "./Logo"
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<Logo small/>
			<div className={styles.wrapper}>
				<a className={styles.link} href="">Terms of Usage</a>
				<a className={styles.link} href="">Cookie Policy</a>
			</div>
		</div>
	)
}

export default Footer