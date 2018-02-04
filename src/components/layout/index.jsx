import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent/index.jsx';
import BodyComponent from './BodyComponent/index.jsx';

require('../../scss/layout.scss');
require('../../scss/grid.scss');
require('../../scss/header.scss');
require('../../scss/sidebar.scss');
require('../../scss/navbar.scss');
class Layout extends Component{

	render(){
		return(
			<div>
				<HeaderComponent />
				<BodyComponent />
			</div>
		)
	}
}
export default Layout;