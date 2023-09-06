import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useState, useRef} from "react";
import logoUrl from "/public/img/shared/logo.svg";
import menuHamburgerUrl from "/public/img/shared/icon-hamburger.svg";
import menuCloseUrl from "/public/img/shared/icon-close.svg";

function Header() {

	const [mobileMenuState, setMobileMenuState] = useState(false);
	let mobileMenuFlag = useRef(0);

	function handleClickMobileMenu () {
		mobileMenuFlag.current = 1;
		setMobileMenuState(!mobileMenuState)
	}

	function assignMobileMenuClasses() {
		if (mobileMenuState === false && mobileMenuFlag.current === 1) {
			return `${styles.nav_container} ${styles.closeMobileMenu}`;
		} else if (mobileMenuState === true) {
			return `${styles.nav_container} ${styles.openMobileMenu}`;
		} else {
			return styles.nav_container;
		}
	}	

	return (
		<header className={styles.mainContainer}>
			<img className={styles.logo} src={logoUrl} alt="Logo" />
			<img 
				className={styles.menuMobile} 
				src={
					mobileMenuState === false ? menuHamburgerUrl : menuCloseUrl 
				}
				alt="Mobile Menu" 
				onClick={handleClickMobileMenu}
			/>
			<nav 
				className={assignMobileMenuClasses()}				
				aria-label="primary"
			>
				<div className={styles.line}></div>
				<NavLink 
					to="/space_tourism/" 
					className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
					onClick={handleClickMobileMenu}
					end
				>
					<span>00</span> Home
				</NavLink>

				<NavLink
					to="/space_tourism/destination/moon"
					className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
					onClick={handleClickMobileMenu}
				>
					<span>01</span> Destination
				</NavLink>

				<NavLink 
					to="/space_tourism/crew/douglas"
					className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
					onClick={handleClickMobileMenu}
				>
					<span>02</span> Crew
				</NavLink>

				<NavLink 
					to="/space_tourism/technology/launch-vehicle"
					className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
					onClick={handleClickMobileMenu}
				>
					<span>03</span> Technology
				</NavLink>
			</nav>
		</header>
	)
}

export default Header

