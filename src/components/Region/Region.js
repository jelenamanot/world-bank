import React from 'react';
import './regions.scss';
import regionService from '../../services/regionService';
import SingleRegion from './SingleRegion';

class Region extends React.Component {
	constructor() {
		super();
		this.state = {
			regions: [],
			showRegions: 8 //how many regions to show
		};
		this.handleShowRegions = this.handleShowRegions.bind(this);
	}

	handleShowRegions () {
		this.setState({
			showRegions:
				this.state.showRegions >= this.state.regions.length ?
					this.state.showRegions : this.state.showRegions + 8
		});
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
		const { regions, showRegions } = this.state;

		const slicedRegions = regions.slice(0, showRegions).map(
			region => <SingleRegion 
				key={region.id + Math.random()}
				name={region.name}/>
		);
		return(
			<div className="regions row col-md-12">
				<div className="row">
					{
						slicedRegions
					}
				</div>
				<div className="col-md-12 aligner">
					{
						regions.length === slicedRegions.length ?
							null :
							<button 
								className="btn btn-success" 
								onClick={this.handleShowRegions}
							>
								Show More
							</button>
					}
				</div>
			</div>
		);
	}
}

export default Region;