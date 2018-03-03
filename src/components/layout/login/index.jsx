import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import LoginComponent from './LoginComponent.jsx';


require('../../scss/layout.scss');
require('../../scss/grid.scss');
require('../../scss/messages.scss');

require('../../scss/panels.scss');
require('../../scss/forms.scss');
require('../../scss/buttons.scss');
require('../../scss/footer.scss');
class Login extends Component{

	render(){
		return(
			<div className="grid-no-space main-container">
				<div className="grid-container">
				<Switch>
					<Route path="/login" component={LoginComponent} />
				</Switch>
			</div>
			</div>
		)
	}
}
export default Login;