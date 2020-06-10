import React from 'react';
import './Cards.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = ({ data: { data } }) => {
	if (!data) {
		return 'loading...';
	}
	return (
		<div className="card-container">
			<Grid container spacing={3} justify="center">
				<Grid xs={12} md={3} item component={Card} className="card infected">
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Infected
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={data.confirmed.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of active cases of COVID-19</Typography>
					</CardContent>
				</Grid>
				<Grid xs={12} md={3} item component={Card} className="card recovered">
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Recovered
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={data.recovered.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of recoveries of COVID-19</Typography>
					</CardContent>
				</Grid>
				<Grid xs={12} md={3} item component={Card} className="card deaths">
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Deaths
						</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={data.deaths.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(data.lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of deaths caused by COVID-19</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
