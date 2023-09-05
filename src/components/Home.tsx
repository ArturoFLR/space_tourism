import { NavLink } from "react-router-dom";
import styles from "./Home.module.scss";

function Home() {
	return (
		<div className={styles.homeMainContainer}>

			<section className={styles.textContainer}>
				<h1>So, you want to travel to <span>space</span></h1>
				<p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
			</section>

			<div className={styles.navExploreContainer}>
				<NavLink to="/space_tourism/destination" className={styles.navExplore}>EXPLORE</NavLink>
			</div>

		</div>
	)
}

export default Home
