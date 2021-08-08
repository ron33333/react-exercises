import React from 'react';
import './Hide.css';

function Hide() {
	return (
		<div className="Hide">
			<button>Hide text now!</button>
			<p>
				You can read this text,
				but if you click the button it should disappear. Forever.
			</p>
		</div>
	);
}

export default Hide;
