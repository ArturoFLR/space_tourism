import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from "./App.module.scss";
import Header from './components/Header';
import Home from './components/Home';
import data from "./assets/textData.json";
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';

const {destinations, crew, technology} = data;

function App() {

	return (
		<BrowserRouter>
			<Routes>
				{["*", "/", "/space_tourism/"].map((path, index) =>
					<Route path={path} key={index} element={
						<>
							<div className={styles.header}>
								<Header />
							</div>
							<main className={styles.main}>
								<Home />
							</main>
						</>
					} />
				)}

				 {/* DESTINATION ROUTES */}
				<Route path="/space_tourism/destination/moon" element={
					<>
						<div className={styles.header}>
							<Header />
						</div>
						<main className={styles.main}>
							<Destination planet={0} planetData={destinations} />
						</main>
					</>
				} />
				
				<Route path="/space_tourism/destination/mars" element={
					<>
						<div className={styles.header}>
							<Header />
						</div>
						<main className={styles.main}>
							<Destination planet={1} planetData={destinations} />
						</main>
					</>
				} />

				<Route path="/space_tourism/destination/europa" element={
					<>
						<div className={styles.header}>
							<Header />
						</div>
						<main className={styles.main}>
							<Destination planet={2} planetData={destinations} />
						</main>
					</>
				} />

				<Route path="/space_tourism/destination/titan" element={
					<>
						<div className={styles.header}>
							<Header />
						</div>
						<main className={styles.main}>
							<Destination planet={3} planetData={destinations} />
						</main>
					</>
				} />
				
				{/* CREW ROUTES */}
				<Route path="/space_tourism/crew/douglas" element={
					<>
						<div className={styles.header}>
							<Header />
						</div>
						<main className={styles.main}>
							<Crew person={0} personData={crew} />
						</main>
					</>
				} />

				<Route path="/space_tourism/crew/mark" element={
					<>
						<div className={styles.header}>
							<Header />
						</div>
						<main className={styles.main}>
							<Crew person={1} personData={crew} />
						</main>
					</>
				} />

				<Route path="/space_tourism/crew/victor" element={
					<>
						<div className={styles.header}>
							<Header />
						</div>
						<main className={styles.main}>
							<Crew person={2} personData={crew} />
						</main>
					</>
				} />

				<Route path="/space_tourism/crew/anousheh" element={
					<>
						<div className={styles.header}>
							<Header />
						</div>
						<main className={styles.main}>
							<Crew person={3} personData={crew} />
						</main>
					</>
				} />

				{/* TECHNOLOGY ROUTES */}
				<Route path="/space_tourism/technology/launch-vehicle" element={
					<>
						<div className={styles.header}>
							<Header />
						</div>
						<main className={styles.main}>
							<Technology technology={0} technologyData={technology} />
						</main>
					</>
				} />

				<Route path="/space_tourism/technology/spaceport" element={
					<>
						<div className={styles.header}>
							<Header />
						</div>
						<main className={styles.main}>
							<Technology technology={1} technologyData={technology} />
						</main>
					</>
				} />

				<Route path="/space_tourism/technology/space-capsule" element={
					<>
						<div className={styles.header}>
							<Header />
						</div>
						<main className={styles.main}>
							<Technology technology={2} technologyData={technology} />
						</main>
					</>
				} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
