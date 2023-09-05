import { NavLink } from "react-router-dom";
import styles from "./Crew.module.scss";

type CrewProps = {
	person: number,
	personData: {
		name: string;
		images: {
			png: string;
			webp: string;
		};
		role: string;
		bio: string;
	}[]
}

function Crew ({person, personData} : CrewProps) {

	return (
		<>
			<section className={styles.crewMainContainer}>
				<h1 className={styles.meetYourCrewH1TabletMobile}><span>02</span> Meet your crew</h1>

				<div className={styles.personDataContainer}>
					<h1 className={styles.meetYourCrewH1}><span>02</span> Meet your crew</h1>
					<div className={styles.nameParagraphContainer}>
						<h2 className={styles.personNameH2} ><span>{personData[person].role}</span>{personData[person].name}</h2>
						<p className={styles.mainParagraph} >{personData[person].bio}</p>
					</div>

					<nav className={styles.navCrew} aria-label="secondary">
						<NavLink 
						to="/space_tourism/crew/douglas" 
						className={({isActive}) => {
							if (isActive || person === 0) {
								return styles.linkActive;
							}else return  styles.linkInactive;
						}
						}>
						</NavLink>

						<NavLink
							to="/space_tourism/crew/mark"
							className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
						>
						</NavLink>

						<NavLink 
							to="/space_tourism/crew/victor"
							className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
						>
						</NavLink>

						<NavLink 
							to="/space_tourism/crew/anousheh"
							className={({isActive}) => isActive ? styles.linkActive : styles.linkInactive}
						>
						</NavLink>
					</nav>

				</div>

				<div className={styles.personImgContainer}>
					<figure className={styles.personImg}>
						<img alt={personData[person].name} src={`../${personData[person].images.png}`} ></img>
					</figure>
				</div>

			</section>
		</>
	)
}

export default Crew
