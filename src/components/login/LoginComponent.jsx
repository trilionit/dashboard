 import React, {Component} from 'react';

 
require('../../scss/layout.scss');
require('../../scss/grid.scss');
require('../../scss/messages.scss');

require('../../scss/panels.scss');
require('../../scss/forms.scss');
require('../../scss/buttons.scss');

class LoginComponent extends Component{

	render(){
		return(
			<div className="grid-1">
				Login Component
			</div>
		)
	}
}

export default LoginComponent;