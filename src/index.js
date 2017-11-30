import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App';

import { BrowserRouter as Router } from 'react-router-dom';

// Bootstrap import 
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './css/main.scss';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root'));