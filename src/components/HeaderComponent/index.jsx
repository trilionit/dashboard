import React, {Component} from 'react';

import LogoContainer from './LogoContainer.jsx';
import NavComponent from './NavComponent.jsx';
import TopRightNav from './TopRightNav.jsx';


require('../../scss/layout.scss');
require('../../scss/HeaderComponent.scss');

class HeaderComponent extends Component{
	render(){
		return(
			<header>
				<LogoContainer />
				<TopRightNav />
				<NavComponent />
			</header>

		)
	}
}

export default HeaderComponent;