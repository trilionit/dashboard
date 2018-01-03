import React, {Component} from 'react';

import TopRightNav from './TopRightNav.jsx';
import LogoContainer from './LogoContainer.jsx';

require('../../scss/layout.scss');
require('../../scss/HeaderComponent.scss');

class HeaderComponent extends Component{
	render(){
		return(
			<header>
				<LogoContainer />
				<TopRightNav />
			</header>

		)
	}
}

export default HeaderComponent;