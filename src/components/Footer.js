import Logo from "./Logo"
import styles from './Footer.module.css';
import { paths } from "../paths";

const Footer = () => {

	const { cookies, terms } = paths;

	return (
		<div className={styles.footer}>
			<Logo small/>
			<div className={styles.wrapper}>
				<a className={styles.link} href={cookies}>Terms of Usage</a>
				<span>|</span>
				<a className={styles.link} href={terms}>Privacy Policy</a>
			</div>
		</div>
	)
}

export default Footer