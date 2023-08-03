import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from "./App.module.scss";
import Header from './components/Header';
import Home from './components/Home';
import data from "./assets/textData.json";

const {destination, crew, technology} = data;

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

			</Routes>
		</BrowserRouter>
	)
}

export default App
