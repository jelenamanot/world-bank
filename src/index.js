import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Nav from './components/Nav';
import Region from './components/Region/Region';
import Country from './components/Country/Country';

// Bootstrap import 
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './css/main.scss';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<div>
			<Nav />
			<Switch>
				<Route path="/region" component={Region}/>
				<Route path="/country" component={Country}/>
			</Switch>
		</div>
	</Router>,
	document.getElementById('root'));