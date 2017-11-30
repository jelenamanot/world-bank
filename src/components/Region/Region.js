import React from 'react';

import regionService from '../../services/regionService';

import SingleRegion from './SingleRegion';

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
		const { regions } = this.state;
		return(
			<div className="row col-md-12">
				{
					regions.map(region => <SingleRegion 
						key={region.id + Math.random()}
						name={region.name}
					/>)
				}
			</div>
		);
	}
}

export default Region;