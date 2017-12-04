import React from 'react';
import PropTypes from 'prop-types';

import './countries.scss';

const SingleCountry= (props) => {
	return(
		<div className="single-country col-md-6">
			<div className="col-md-10 offset-md-1 wrap-country">
				<p className="wrap-country--name">{props.name}</p>
				<p className="wrap-country--capital">{props.capital}</p>
				<p>Region: {props.region}</p>
			</div>
		</div>
	);
};

SingleCountry.propTypes = {
	name: PropTypes.string.isRequired,
	capital: PropTypes.string.isRequired,
	region: PropTypes.string.isRequired
};

export default SingleCountry;