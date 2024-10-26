import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Counter from "./components/Counter/Counter";
import NavBar from "./components/NavBar/NavBar";
import SimonGame from "./components/SimonGame/SimonGame";

function App() {
	return (
		<>
			<nav>
				<Counter />
			</nav>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1 className="text-3xl font-bold underline">My games</h1>
			<SimonGame />
		</>
	);
}

export default App;
