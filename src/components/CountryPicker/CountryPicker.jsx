import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

const CountryPicker = ({handleCountry}) => {
	const [ cont, setCont ] = useState([]);
	useEffect(
		() => {
			const fetchAPI = async () => {
				setCont(await fetchCountries());
			};
			fetchAPI();
		},
		[ setCont ]
	);
	return (
		<FormControl className="formControl">
			<NativeSelect defaultValue="" onChange={e => handleCountry(e.target.value)} >
				<option value="">Global</option>
				{cont.map((country, i) => (
					<option key={i} value={country}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
