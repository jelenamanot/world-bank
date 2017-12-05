import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Router from './components/Router';

import { HashRouter } from 'react-router-dom';

// Bootstrap import 
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './css/main.scss';

ReactDOM.render(
	<HashRouter>
		<Router />
	</HashRouter>,
	document.getElementById('root'));