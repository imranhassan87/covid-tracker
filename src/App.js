import React from 'react';
import './GlobalStyles.css';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';

function App() {
	return (
		<div className="container">
			<Cards />
			<CountryPicker />
			<Chart />
		</div>
	);
}

export default App;
