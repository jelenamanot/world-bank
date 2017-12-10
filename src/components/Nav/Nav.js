import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.scss';

const Nav = () => {
	return(
		<nav>
			<a href="/"><h3>World <span className="bank-span">Bank</span></h3></a>
			<ul className="nav">
				<li className="nav-item"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
				<li className="nav-item"><NavLink to="/region" className="nav-link">Regions</NavLink></li>
				<li className="nav-item"><NavLink to="/country" className="nav-link">Countries</NavLink></li>
			</ul>
			<div className="clearfix"></div>
		</nav>
	);
};

export default Nav;