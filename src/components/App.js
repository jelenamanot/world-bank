import React from 'react';

import countryService  from '../services/countryService';
import regionService  from '../services/regionService';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			regions: [],
			countries: []
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
				<p>World Bank Init Project</p>
				<button type="button" className="btn btn-primary">Primary</button>
			</div>
		);
	}
}

export default App;