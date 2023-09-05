import { NavLink } from "react-router-dom";
import styles from "./Destination.module.scss";

type DestinationProps = {
	planet: number,
	planetData: {
			name: string;
			images: {
				png: string;
				webp: string;
			};
			description: string;
			distance: string;
			travel: string;
		}[]
}

function Destination ({planet, planetData} : DestinationProps) {

	return (
		<>
			<section className={styles.destinationMainContainer}>

				<div className={styles.planetImgContainer}>
					<h1 className={styles.pickDestinationH1}><span>01</span> Pick your destination</h1>

					<figure className={styles.planetImg}>
						<img alt={planetData[planet].name} src={`../../public/${planetData[planet].images.png}`} ></img>
					</figure>
				</div>

				<div className={styles.planetDataContainer}>
					<nav className={styles.navPlanets} aria-label="secondary">
						<NavLink 
						to="/space_tourism/destination/moon" 
						className={({isActive}) => {
							if (isActive || planet === 0) {
								return styles.linkActive;
							}else return  styles.linkInactive;
						}
						}>
							Moon
						</NavLink>

						<NavLink
							to="/space_tourism/destination/mars"
							className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
						>
							Mars
						</NavLink>

						<NavLink 
							to="/space_tourism/destination/europa"
							className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
						>
							Europa
						</NavLink>

						<NavLink 
							to="/space_tourism/destination/titan"
							className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
						>
							Titan
						</NavLink>
					</nav>

					<h2 className={styles.planetNameH2} >{planetData[planet].name}</h2>

					<p className={styles.mainParagraph} >{planetData[planet].description}</p>

					<div className={styles.distanceTimeContainer}>

						<div className={styles.titleCipherContainer}>
							<p className={styles.title} >Avg. Distance</p>
							<p className={styles.cipher} >{planetData[planet].distance}</p>
						</div>

						<div className={styles.titleCipherContainer}>
							<p className={styles.title} >Est. travel time</p>
							<p className={styles.cipher} >{planetData[planet].travel}</p>
						</div>
						
					</div>

				</div>

			</section>
		</>
	)
}

export default Destination
