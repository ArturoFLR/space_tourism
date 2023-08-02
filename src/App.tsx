import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from "./App.module.scss";
import Header from './components/Header';
import Home from './components/Home';

function App() {


	return (
		<BrowserRouter>
			<Routes>
				{["*", "/", "/space_tourism"].map((path, index) =>
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
				{/* <Route element={
					<>
						<div className={styles.header}>
							<Header />
						</div>
					</>
				}>
					<Route path="/space_tourism/destination" element={
						<main className={styles.main}>

							<Home />
						</main>
					}/>
				</Route> */}
			</Routes>
		</BrowserRouter>
	)
}

export default App
