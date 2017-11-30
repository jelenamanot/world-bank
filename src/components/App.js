import React from 'react';

import Nav from './Nav/Nav';
import Region from './Region/Region';
import Country from './Country/Country';

import { Route, Switch } from 'react-router-dom';

const App = () => {
	return(
		<div className="app container">
			<Nav />
			<Switch>
				<Route path="/region" component={Region}/>
				<Route path="/country" component={Country}/>
			</Switch>
		</div>
	);
};

export default App;