import React from 'react';
import './Tasks.css';

function Tasks() {
	return (
		<div className="Tasks">
			<h3>Tasks:</h3>
			<p>Make a Todo list (add only):</p>
			<input placeholder="Your task..." /> <button>Add task</button>
		</div>
	);
}

export default Tasks;
