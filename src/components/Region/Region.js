import React from 'react';

import regionService from '../../services/regionService';

class Region extends React.Component {
	constructor() {
		super();
		this.state = {
			regions: []
		};
	}

	componentWillMount() {
		regionService.getAllData()
			.then(response => {
				this.setState({ regions: response.data[1] });
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		console.log(this.state.regions);
		return(
			<div>
				<p>Region</p>
			</div>
		);
	}
}

export default Region;