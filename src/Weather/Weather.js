import React from 'react';
import './Weather.css';

function Weather() {
	return (
		<div className="Weather">
			<p>
				Use the following API to display the hottest and coldest days:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json</code>
			</p>
			<div className="Weather__stats">
				<strong>Hottest day is:</strong>
			</div>
			<div className="Weather__stats">
				<strong>Coldest day is:</strong>
			</div>
		</div>
	);
}

export default Weather;
