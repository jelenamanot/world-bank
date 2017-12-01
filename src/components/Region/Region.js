import React from 'react';

import regionService from '../../services/regionService';

import './regions.scss';

import SingleRegion from './SingleRegion';
import Search from '../Search/Search';

class Region extends React.Component {
	constructor() {
		super();
		this.state = {
			regions: [],
			showRegions: 8, //how many regions to show
			searchValue: ''
		};
		this.handleShowRegions = this.handleShowRegions.bind(this);
		this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
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

	handleShowRegions() {
		this.setState({
			showRegions:
				this.state.showRegions >= this.state.regions.length ?
					this.state.showRegions : this.state.showRegions + 8
		});
	}

	handleUpdateSearch(e) {
		this.setState({
			searchValue: e.target.value
		});
	}

	render() {
		const { regions, showRegions, searchValue } = this.state;

		let filteredRegions = regions.filter(region => {
			return region.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
		});

		return(
			<div className="regions row col-md-12">
				<div className="search-wrap col-md-12 aligner">
					<Search 
						placeholder="Search for regions" 
						searchValue={searchValue}
						handleUpdateSearch={this.handleUpdateSearch}
					/>
				</div>
				<div className="row">
					{
						filteredRegions.length === 0 ?
							<p>No search results found</p> :
							filteredRegions.slice(0, showRegions).map(
								region => <SingleRegion 
									key={region.id + Math.random()}
									name={region.name}
								/>
							)
					}
				</div>
				<div className="col-md-12 aligner">
					{
						regions.length === showRegions ?
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