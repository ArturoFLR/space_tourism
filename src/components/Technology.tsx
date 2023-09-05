import { NavLink } from "react-router-dom";
import styles from "./Technology.module.scss";

type TechnologyProps = {
	technology: number,
	technologyData: {
		name: string;
		images: {
			portrait: string;
			landscape: string;
		};
    description: string;
	}[]
}

function Technology ({technology, technologyData} : TechnologyProps) {

	return (
		<>
			<section className={styles.technologyMainContainer}>
				<h1 className={styles.spaceLaunch101TabletMobile}><span>03</span> Space launch 101</h1>

				<div className={styles.technologyDataContainer}>
					<h1 className={styles.spaceLaunch101}><span>03</span> Space launch 101</h1>

					<div className={styles.navMainTextContainer}>
						<nav className={styles.navTechnology} aria-label="secondary">
							<NavLink 
							to="/space_tourism/technology/launch-vehicle" 
							className={({isActive}) => {
								if (isActive || technology === 0) {
									return styles.linkActive;
								}else return  styles.linkInactive;
							}
							}>
								1
							</NavLink>

							<NavLink
								to="/space_tourism/technology/spaceport"
								className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
							>
								2
							</NavLink>

							<NavLink 
								to="/space_tourism/technology/space-capsule"
								className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
							>
								3
							</NavLink>
						</nav>
						
						<div className={styles.terminologyParagraphContainer}>
							<h2 className={styles.terminologyH2} ><span>The terminology...</span>{technologyData[technology].name}</h2>
							<p className={styles.mainParagraph} >{technologyData[technology].description}</p>
						</div>
					</div>

				</div>

				<div className={styles.technologyImgContainer}>
					<picture className={styles.technologyImg}>
						<source media="(min-width: 1000px)" srcSet={`../../public/${technologyData[technology].images.portrait}`}></source> 
						<source media="(max-width: 999px)" srcSet={`../../public/${technologyData[technology].images.landscape}`}></source>						
						<img alt={`../../public/${technologyData[technology].name}`} src={`../../public/${technologyData[technology].images.portrait}`}></img>
					</picture>
				</div>
			</section>
		</>
	)
}

export default Technology;
