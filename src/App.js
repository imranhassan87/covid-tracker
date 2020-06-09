import React, { useEffect, useState } from 'react';
import './GlobalStyles.css';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import { fetchData } from './api';

function App() {
	const [ data, setData ] = useState({});
	useEffect(() => {
		fetchData().then(data => setData({ data })).catch(err => console.log(err));
	}, []);
	return (
		<div className="container">
			<Cards data={data} />
			<CountryPicker />
			<Chart />
		</div>
	);
}

export default App;
