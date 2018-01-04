import React, {Component} from 'react';

import FooterComponent from './FooterComponent/index.jsx';
import HeaderComponent from './HeaderComponent/index.jsx';

require('../scss/layout.scss');
require('../scss/headerComponent.scss');
require('../scss/insightsComponent.scss');
require('../scss/footerComponent.scss');
require('../scss/pagesComponent.scss');


class Layout extends Component{
	render(){
		return(
			<div>
				<HeaderComponent />
					{this.props.children}			
				<FooterComponent />
			</div>		
		)
	}
}

export default Layout;