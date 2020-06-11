import React, { useEffect, useState } from 'react';
import './GlobalStyles.css';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import { fetchData } from './api';

function App() {
	const [ data, setData ] = useState({});
	const [ country, setCountry ] = useState('');
	useEffect(() => {
		fetchData().then(data => setData({ data })).catch(err => console.log(err));
	}, []);
	const handleCountryChange = async country => {
		const fetchedData = await fetchData(country);
		setData({ data: fetchedData });
		setCountry({ country });
	};
	return (
		<div className="container">
			<Cards data={data} />
			<CountryPicker handleCountry={handleCountryChange} />
			<Chart data={data} country={country} />
		</div>
	);
}

export default App;
