import React from 'react';
import './Users.css';

function Users() {
	return (
		<div className="Users">
			<h3>Users:</h3>
			<p>
				Use the following API to make a list of user names:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/users.json</code>
			</p>
			<ul>

			</ul>
		</div>
	);
}

export default Users;
