import React from 'react';

import countryService from '../../services/countryService';

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
		return(
			<div>
				<p>Country</p>
			</div>
		);
	}
}

export default Country;