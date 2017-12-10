import React from 'react';
import { MdAccountBalance, MdSearch, MdPlace } from 'react-icons/md'; 
import { Link } from 'react-router-dom';

import './home.scss';

const Home = () => {
	return(
		<div className="home row">
			<div className="home-heading col-md-12">
				<h1 className="text-center title-home">Find <span className="bank-span">banks</span> all over the world</h1>
			</div>
			<div className="icons row col-md-12 text-center">
				<div className="single-icon col-md-4">
					<MdAccountBalance size={50}  color='#ff6866' />
					<h3 className="title-home">Banks</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
				<div className="single-icon col-md-4">
					<MdSearch size={50} color='#ff6866' />
					<h3 className="title-home">Search</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
				<div className="single-icon col-md-4">
					<MdPlace size={50} color='#ff6866' />
					<h3 className="title-home">World</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</div>
			<div className="about row">
				<div className="col-md-8 offset-md-2">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
					culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
			<div className="home-wrap col-md-6">
				<div className="home-content col-md-8 offset-md-2">
					<h3 className="title-home"><Link to="region">Regions</Link></h3>
				</div>
			</div>
			<div className="home-wrap col-md-6">
				<div className="home-content col-md-8 offset-md-2">
					<h3 className="title-home"><Link to="country">Countries</Link></h3>
				</div>
			</div>
		</div>
	);
};

export default Home;