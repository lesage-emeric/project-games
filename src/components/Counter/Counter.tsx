import { useState } from "react";
import "./Counter.css";

function Counter() {
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount(count + 1);
	};
	return (
		<>
			<h1
				className={
					count >= 0 ? "CounterH1" : count > 4 ? "CounterH12" : "CounterH13"
				}
			>
				The perfect counter
			</h1>
			<button type="button" className="counterButton" onClick={increment}>
				Here
			</button>
			<p className="counterP">You clicked {count} times</p>
		</>
	);
}
// {/* <button type="button" onClick={() => setCount((count) => count + 1)}>
// 	count is {count}
// </button>; */}
export default Counter;
