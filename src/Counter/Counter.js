import React from 'react';
import './Counter.css';

function Counter() {
	return (
		<div className="Counter">
			<p>Make the button increase the value:</p>
			<button>Increase</button>
			<div className="Counter__value">0</div>
		</div>
	);
}

export default Counter;
