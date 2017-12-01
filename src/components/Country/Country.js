import React from 'react';

import countryService from '../../services/countryService';

import './countries.scss';

import SingleCountry from './SingleCountry';

class Country extends React.Component {
	constructor() {
		super();
		this.state = {
			countries: []
		};
	}
	componentWillMount() {
		countryService.getAllData()
			.then(response => {
				this.setState({ countries: response.data[1] });
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		const { countries } = this.state;
		return(
			<div className="countries row col-md-12">
				{
					countries.map(country => <SingleCountry 
						key={country.id} 
						name={country.name} 
						capital={country.capitalCity}
						region={country.region.value}
					/>)
				}
			</div>
		);
	}
}

export default Country;