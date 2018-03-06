import React, {Component} from 'react';

import LoginComponent from './LoginComponent.jsx';

const LoginId = document.getElementById('login');

ReactDOM.render(
	<Router>
		<LoginComponent />
	</Router>
, LoginId);
