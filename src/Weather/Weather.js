import React, { useMemo, useEffect, useState } from 'react';
import './Weather.css';
import DayOfWeek from './DayOfWeek/DayOfWeek';

function Weather() {
	const [weatherData, setWeatherData] = useState([]);

	useEffect(() => {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
			.then(res => res.json())
			.then(data => setWeatherData(data));
	}, [])

	const hottestDay = useMemo(() => {
		return weatherData.reduce((hottestDay, day) => hottestDay.temperature > day.temperature ? hottestDay : day, {});
	}, [weatherData]);

	const coldestDay = useMemo(() => {
		return weatherData.reduce((coldestDay, day) => coldestDay.temperature < day.temperature ? coldestDay : day, {});
	}, [weatherData]);

	return (
		<div className="Weather">
			<p>
				Use the following API to display the hottest and coldest days:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json</code>
			</p>
			<div className="Weather__stats">
				<strong>Hottest day is: <DayOfWeek day={hottestDay.day} /></strong>
			</div>
			<div className="Weather__stats">
				<strong>Coldest day is: <DayOfWeek day={coldestDay.day} /></strong>
			</div>
		</div>
	);
}

export default Weather;
