import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import useWindowDimensions from './hooks/useWindowDimensions';
import { Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
	const { height, width } = useWindowDimensions();

	if (width < 600)
		return (
			<div className="App">
				<Routes>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Navbar>
					<Link to="/about">About page</Link>
				</Navbar>
			</div>
		);
	else
		return (
			<div>This page is designed to only load on your mobile device. </div>
		);
}

export default App;
