import React from 'react';
import './LastClick.css';

function LastClick() {

	return (
		<div className="LastClick">
			<p>
				There are <b>3</b> buttons.<br />
				Make the box show the number of the last clicked button.
			</p>
			<div className="LastClick__buttons">
				<button>1</button>
				<button>2</button>
				<button>3</button>
			</div>
			<div className="LastClick__box">
				1
			</div>
		</div>
	)
}

export default LastClick;
