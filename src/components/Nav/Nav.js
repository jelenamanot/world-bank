import React from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

const Nav = () => {
	return(
		<nav>
			<h3>World <span className="bank-span">Bank</span></h3>
			<ul className="nav">
				<li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
				<li className="nav-item"><Link to="/region" className="nav-link">Regions</Link></li>
				<li className="nav-item"><Link to="/country" className="nav-link">Countries</Link></li>
			</ul>
			<div className="clearfix"></div>
		</nav>
	);
};

export default Nav;