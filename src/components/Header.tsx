import styles from "./Header.module.scss";

function Header() {
	return (
		<div className={styles.mainContainer}>
			<img className={styles.logo} src="../../public/img/shared/logo.svg" alt="Logo" />
			<div className={styles.line}></div>
			<nav className={styles.nav_container}>
				<p><span>00</span> HOME</p>
				<p><span>01</span> DESTINATION</p>
				<p><span>02</span> CREW</p>
				<p><span>03</span> TECHNOLOGY</p>
			</nav>
		</div>
	)
}

export default Header

