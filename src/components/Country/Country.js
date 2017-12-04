import React from 'react';

import countryService from '../../services/countryService';

import './countries.scss';

import SingleCountry from './SingleCountry';
import Search from '../Search/Search';

class Country extends React.Component {
	constructor() {
		super();
		this.state = {
			countries: [],
			showCountries: 10,
			searchValue: ''
		};
		this.handleShowCountries = this.handleShowCountries.bind(this);
		this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
		this.resetSearch = this.resetSearch.bind(this);
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

	handleShowCountries() {
		this.setState({
			showCountries: this.state.showCountries >= this.state.countries.length ?
				this.state.showCountries : this.state.showCountries + 10
		});
	}

	handleUpdateSearch(e) {
		this.setState({
			searchValue: e.target.value
		});
	}

	resetSearch() {
		this.setState({
			searchValue: ''
		});
	}

	render() {
		const { countries, showCountries, searchValue } = this.state;
		
		let filteredCountries = countries.filter(country => {
			return country.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
		});

		return(
			<div className="countries col-md-12">
				<div className="search-wrap row aligner">
					<Search 
						placeholder="Search countries"
						searchValue={searchValue}
						handleUpdateSearch={this.handleUpdateSearch}
						resetSearch={this.resetSearch}
					/>
				</div>
				<div className="row">
					{
						filteredCountries.length === 0 ?
							<p>No search results found</p> :
							filteredCountries.slice(0, showCountries).map(
								country => <SingleCountry 
									key={country.id}
									name={country.name}
									capital={country.capitalCity}
									region={country.region.value}
								/>
							)
					}
				</div>
				<div className="col-md-12 aligner">
					{
						countries.length === showCountries ?
							null :
							<button 
								className="btn btn-success" 
								onClick={this.handleShowCountries}
							>
								Show More
							</button>
					}
				</div>
			</div>
		);
	}
}

export default Country;