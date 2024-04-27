import './App.css'

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import DigitalClock from './Components/DigitalClock';
import Todo from './Components/ToDo';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stopwatch from './Components/Stopwatch';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />

				<div className="h-screen flex items-center justify-center">
					<Routes>
						<Route exact path="/" element={<Home />}></Route>
						<Route exact path="/DigitalClock" element={<DigitalClock />}></Route>
						<Route exact path="/Todo" element={<Todo />}></Route>
						<Route exact path="/Stopwatch" element={<Stopwatch />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</>
	)
}

export default App
