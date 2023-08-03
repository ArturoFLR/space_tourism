import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

// type HeaderProps = {
// 	navSelected: number,
// }

function Header() {
	return (
		<div className={styles.mainContainer}>
			<img className={styles.logo} src="../../public/img/shared/logo.svg" alt="Logo" />
			<nav className={styles.nav_container} aria-label="primary">
				<div className={styles.line}></div>
				<NavLink 
					to="/space_tourism/" 
					className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
					end
				>
					<span>00</span> HOME
				</NavLink>

				<NavLink
					to="/space_tourism/destination"
					className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
				>
					<span>01</span> DESTINATION
				</NavLink>

				<NavLink 
					to="/space_tourism/crew"
					className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
				>
					<span>02</span> CREW
				</NavLink>

				<NavLink 
					to="/space_tourism/technology"
					className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
				>
					<span>03</span> TECHNOLOGY
				</NavLink>

			</nav>
		</div>
	)
}

export default Header

