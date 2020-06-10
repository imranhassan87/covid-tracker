import axios from 'axios';

const url = `https://covid19.mathdro.id/api`;

export const fetchData = async () => {
	try {
		const response = await axios.get(url);
		const res = response.data;
		return res;
	} catch (error) {}
};

export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);
		const modifiedData = data.map(dailyData => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate
		}));

		return modifiedData;
	} catch (err) {
		console.log(err);
	}
};

export const countries = async () => {
	try {
		const res = await axios.get(`${url}/countries`);
		console.log(res);
	} catch (err) {
		console.log(err);
	}
};
