import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { countries } from '../../api';

const CountryPicker = () => {
	const [ cont, setCont ] = useState();
	useEffect(() => {
		countries();
	}, []);
	return (
		<FormControl className="formControl">
			<NativeSelect>
				<option value="global">Global</option>
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
