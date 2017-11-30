import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return(
		<ul>
			<li><Link to="/region">Region</Link></li>
			<li><Link to="/country">Country</Link></li>
		</ul>
	);
};

export default Nav;