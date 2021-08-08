import React from 'react';
import './Timer.css';

function Timer() {

	return (
		<div className="Timer">
			<h3>Timer</h3>
			<ul className="Timer__explanation">
				<li><b>Play:</b> the timer should count the seconds and keep updating</li>
				<li><b>Pause:</b> the timer freeze the timer</li>
				<li><b>Reset:</b> should set the timer to 0</li>
			</ul>
			<div className="Timer__actions">
				<button>Play</button>
				<button>Pause</button>
				<button>Reset</button>
			</div>
			<div className="Timer__value">0</div>
		</div>
	);
}

export default Timer;
