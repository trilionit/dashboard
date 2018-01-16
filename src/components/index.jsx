import React, {Component} from 'react';

import FooterComponent from './FooterComponent/index.jsx';
import HeaderComponent from './HeaderComponent/index.jsx';
import MainComponents from './MainComponents/index.jsx';
require('../scss/layout.scss');
require('../scss/elements.scss');
require('../scss/headerComponent.scss');
require('../scss/pagesComponent.scss');
require('../scss/insightsComponent.scss');
require('../scss/footerComponent.scss');


class Layout extends Component{
	render(){
		return(
			<div>
				<HeaderComponent />
				<MainComponents />			
				<FooterComponent />
			</div>		
		)
	}
}

export default Layout;