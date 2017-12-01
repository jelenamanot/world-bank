import React from 'react';

import countryService from '../../services/countryService';

import './countries.scss';

import SingleCountry from './SingleCountry';
import Search from '../Search/Search';

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
			<div className="countries col-md-12">
				<div className="search-wrap row aligner">
					<Search placeholder="Search countries" />
				</div>
				<div className="row">
					{
						countries.map(country => <SingleCountry 
							key={country.id} 
							name={country.name} 
							capital={country.capitalCity}
							region={country.region.value}
						/>)
					}
				</div>
			</div>
		);
	}
}

export default Country;